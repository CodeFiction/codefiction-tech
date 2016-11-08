(function ($) {
  "use strict";
  $(function () {

    var createItem = function (obj) {
      var template = '<a href="' + obj.url + '" class="list-group-item list-group-item-action">'
        + '<h5 class="list-group-item-heading text-left"> <i class="fa fa-fw fa-play"></i> ' + obj.title + ' &nbsp; (' + obj.duration + ') </h5>'
        + '<p class="list-group-item-text"></p>'
        + '</a>'

      return $(template);
    };

    $.get('/api/feed.php', function (result) {
      var $list = $('#podcast-list');
      result.forEach(function (item, idx) {
        var $item = createItem(item);
        $list.append($item);
      });
    });
  });
})(jQuery);

(function ($) {
  "use strict";

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
