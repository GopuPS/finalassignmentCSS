$(document).ready(function(){
    //lets star by calling in our index
    $(function(){
        $("#index").load("index.html")
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });
    //change color of the header
    $(function(){
        $(window).on("scroll", function(){
            if($(window).scrollTop() > 75){
                $(".menu-row").addClass("scrolled-menu");
            }else{
                $(".menu-row").removeClass("scrolled-menu");
            }
        })
    });
    // slider that is in the  page
    $(".masthead-slider > div:gt(0)").hide();
    setInterval(function(){
      $(".masthead-slider > div:first-child")
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo(".masthead-slider"); 
    },3000);
    //for tabs in the  page
    $(".tab-list").on("click", ".tab", function(e){
        e.preventDefault();
        $(".tab").removeClass("active");
        $(".tab-content").removeClass("show");
        $(this).addClass("active");
        $($(this).attr("href")).addClass("show");
    });
});    