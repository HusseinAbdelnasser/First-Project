$(document).ready(function()
 {
$('.carousel').carousel(
{
    interval:6000
});
    $(".cog-check").click(function() {
        
    $(".color-option").toggle();
  });

});

// nice scroll






var colorli = $(".color-option ul li");

colorli
.eq(0).css("backgroundColor", "#E41B17").end()
.eq(1).css("backgroundColor", "#11e0bd").end()
.eq(2).css("backgroundColor", "#D35400").end()
.eq(3).css("backgroundColor", "#C00940")

$(document).ready(function()
 {
colorli.click(function()
 {
    $("link[href*='theme']").attr("href" , $(this).attr("data-value") );
  });

});

//scroll top
var scrollButton = $("#scroll-top");

$(window).scroll(function()
 {
   // console.log($(this).scrollTop())
    
   if  ($(this).srollTop() >=700)
        {
          scrollButton.show() ;
        }
    else
     {
        scrollButton.hide();
      } 
});

//click button to scroll top

scrollButton.click(function()
{
    $("html,body").animate({scrollTop :0}, 600);
});

// loading screen

$(window).on('load',function()
 {
    
    $(".loading-overlay .spinner").fadeOut(2000,
      function()  
       {
        
            $("body").css("overflow","auto");
        
          $(this).parent().fadeOut(2000,
          function()  
            {  
              
              
               $(this).remove();
          });
                                   
    });
    
    
});

