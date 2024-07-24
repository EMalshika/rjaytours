// Move all common js code here

/*----------------------------------
  Search Page Fancybox
----------------------------------*/

$(document).on('ready', function() {

if($("[data-fancybox=images]").length){
  $("[data-fancybox=images]").fancybox({
    buttons : [ 
      "slideShow",
      "share",
      "zoom",
      "fullScreen",
      "close",
      "thumbs"
    ],
    thumbs : {
      autoStart : false
    }
  });

}
if($("[data-fancybox=search-images]").length){

  $("[data-fancybox=search-images]").fancybox({
    buttons : [ 
      "slideShow",
      "share",
      "zoom",
      "fullScreen",
      "close",
      "thumbs"
    ],
    thumbs : {
      autoStart : false
    }
  });
}
});



/*----------------------------------
  Masonry
----------------------------------*/
      
if($(".blogs-masonry").length){
  $(window).on( "load", function() {
      $(".blogs-masonry").masonry({
        itemSelector: ".col.col-item",
      });
    });
}

if($(".portfolio-masonry").length){
  $(window).on( "load", function() {
  $(".portfolio-masonry").masonry({
    itemSelector: ".col",
  });
  });
}

if($(".events-masonry").length){
    $(window).on( "load", function() {
    $(".events-masonry").masonry({
      itemSelector: ".col",
    });
  });
}

if($(".prods-masonry").length){
  $(window).on( "load", function() {
  $(".prods-masonry").masonry({
    itemSelector: ".col",
  });
});
}
