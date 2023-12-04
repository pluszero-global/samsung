videojs.registerPlugin('adobeplugin', function() {
var aa_aaa_aaaaaaaaasdf = this;//videojs.getPlayer("#vjs_video_3_html5_api");

    media_id = this['mediainfo']['id'];
    message = "brcove_" + media_id;
    aa_aaa_aaaaaaaaasdf.on("play", function(){
     parent.postMessage(message, "*");
        console.log("media_id");
    });
});
