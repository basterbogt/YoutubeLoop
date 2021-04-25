var playerId = 'player';
document.getElementById(playerId).src = `https://www.youtube.com/embed/${videoId}?start=${start}&end=${end}&version=3&autoplay=1&loop=1&enablejsapi=1&modestBranding=1&rel=0&showinfo=0`;

var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player(playerId, {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) 
{
    if(event.data == YT.PlayerState.ENDED)
    {
        event.target.seekTo(start);
    }
}