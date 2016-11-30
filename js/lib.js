(function ($) {
  "use strict";
  $(function () {

    var createItem = function (obj) {
      var template = '<a href="' + obj.url + '" class="list-group-item list-group-item-action">'
        + '<h5 class="list-group-item-heading text-left"> <i class="fa fa-fw fa-play"></i> ' + obj.title + ' &nbsp; (' + obj.duration + ') </h5>'
        + '<p class="list-group-item-text"></p>'
        + '</a>';

      return $(template);
    };

    var createShortClipItem = function (obj) {
      var template = '<a href="javascript:void(0);" class="list-group-item list-group-item-action">'
          + '<h5 class="list-group-item-heading text-left"> <i class="fa fa-fw fa-play"></i> ' + obj.title + '</h5>'
          + '<p class="list-group-item-text"></p>'
          + '</a>';

      return $(template);
    };

    $.get('/api/feed.php', function (result) {
      var $list = $('#podcast-list');
      result.forEach(function (item, idx) {
        var $item = createItem(item);
        $list.append($item);
      });
    });

    $.get('/js/clips.json', function (result) {
      var $list = $('#clips-list');
      result.items.forEach(function (item, idx) {
        var $item = createShortClipItem(item);
        $item.click(function () {
          widget.seekTo(item.track, item.position);
        });
        $list.append($item);
      });
    });

  });
})(jQuery);

(function ($) {
  "use strict";


  var url = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290404729&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false";
  var iFrame = $('<iframe>', {
    src: url,
    id:  'sc-widget',
    width: '100%',
    height: '100',
    frameborder: 0,
    scrolling: 'no'
  });

  $('#embedded-player').html(iFrame);

  $('.page-scroll a').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });

  $('#mainNav').affix({
    offset: {
      top: 100
    }
  })
})(jQuery);
