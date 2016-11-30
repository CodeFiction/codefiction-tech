/**
 * Created by ugur on 2016-11-30.
 */
var CFWidget = function() {
    this.init();
}

$.extend(CFWidget.prototype, {
    widget: null,

    init: function() {

    },
    seekTo: function (itemId, ms) {
        var url = "https://api.soundcloud.com/tracks/"
            +itemId
            +"&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false";

        var widgetIframe = document.getElementById('sc-widget');
        var w = SC.Widget(widgetIframe);
        this.widget = w;
        w.load(url);
        w.bind(SC.Widget.Events.READY,
            function ready() {
                $('#embedded-player').css("z-index", 0);
                w['play']();
            }
        );

        w.bind(SC.Widget.Events.PLAY,
            function play() {
                    w['seekTo'](ms);
            }
        );


    }
});

var widget = new CFWidget();


