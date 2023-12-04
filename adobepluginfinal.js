videojs.registerPlugin('adobeplugin', function() {
var aa_aaa_aaaaaaaaasdf = this;//videojs.getPlayer("#vjs_video_3_html5_api");
    aa_aaa_aaaaaaaaasdf.on("play", function(){
    media_id = this['mediainfo']['id'];
    message = "brcove_" + media_id;
     parent.postMessage(message, "*");
      console.log(message);
      console.log(media_id);
    });
});
