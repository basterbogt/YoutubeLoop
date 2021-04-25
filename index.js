document.getElementById('start').value = start;
document.getElementById('end').value = end;
document.getElementById('v').value = videoId;

(function(d){
    var init = function(){
        var form = document.getElementsByTagName("form")[0];
        form.onsubmit = function(event) {
            updateVideo();
            event.preventDefault();
            return false;
        }
        updateVideo();
    };
    
    function updateVideo(){
        var v = parseVideoId(document.getElementById("v").value);
        if(v){
            var start = document.getElementById("start").value;
            var end = document.getElementById("end").value;
            var iframe = document.getElementById("player");
            iframe.src = `video.html?start=${start}&end=${end}&v=${v}`;
            copyToClipboard(iframe.src);
        }
    }

    function parseVideoId(value){
        var parse = youtubeParser(value);
        return (parse === false) ? value : parse;
    }
    
    function youtubeParser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    function copyToClipboard(str) {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    d.addEventListener("DOMContentLoaded", init, false);
})(document);
