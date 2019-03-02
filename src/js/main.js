$(document).ready(function() {

  /**** SET CONTENT SCROLL TOP MARGIN ****/
  var $header = $(".header-fixed");
  var $contentScroll = $(".content-scroll");
  var headerHeight = $header.height();
  $contentScroll.css({"marginTop":headerHeight});
  
})