$(function(){
    $("#fullpage").fullpage({
        scrollingSpeed: 1000,
        slidesNavigation: true,
        navigation: false,
        // responsiveWidth: 800
        
        afterLoad : function(anchorLink, index){
            var x = index.index
            var y = $("body").width()
            console.log(x)
            console.log(y)
            if( x != 0 && y <= 768){
                $("#menu").fadeOut()
            }else{
                $("#menu").fadeIn()
            }
            if( y <= 768 && x == 0){
                $(".ham").fadeIn()
            }else{
                $(".ham").fadeOut()
            }
            if(x == 2 && y <= 768){
                $("#sub1 h2 span").each(function(i){
                    $(this).delay(i*200).addClass("on",300)
                })
            }else{
                $("#sub1 span").removeClass("on")
            }
        }

    })
    $(".slide img, .f").hover(function(){
        $(".f").css("transform","translate(-50%, -50%) rotateY(180deg)")
        $(".mouse").stop().fadeOut()
        $(".slide img").css("opacity",.5)
    },function(){
        $(".f").css("transform","translate(-50%, -50%)")
        $(".mouse").stop().fadeIn()
        $(".slide img").css("opacity",1)
    })
    $("#sc4 .right li a img").click(function(){
        var x = $(this).parent().parent().index()
        console.log(x)
        $(".img_b").fadeIn()
        $(".img_b img").eq(x).siblings().hide()
        $(".img_b img").eq(x).fadeIn()
        $("#menu").stop().animate({"opacity":0},700)
    })
    $(".img_b").click(function(){
        $(".img_b").fadeOut()
        $("#menu").stop().animate({"opacity":1},700)
    })
    $(".sl").slick({
        autoplay: false,
        dots: true,
        arrows: true,
        speed: 700
    })
    $(".sl .slick-arrow.slick-prev").hide()
    $(".sl .slick-arrow.slick-prev, .sl .slick-arrow.slick-next").click(function(){
        var b = $(".sl .slick-dots li.slick-active").index()
        console.log(b)
        if( b == 0){
            $(".sl .slick-arrow.slick-prev").hide()
        }else if( b == 2){
            $(".sl .slick-arrow.slick-next").hide()
        }else{
            $(".sl .slick-arrow.slick-prev, .sl .slick-arrow.slick-next").show()
        }

    })
    $(".ham").click(function(){
        $(".m_nav").toggleClass("on")
        $(".ham").toggleClass("on")
    })
})
