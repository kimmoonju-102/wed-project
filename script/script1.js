$(function () {
    //contents_wrap  slide
    $('.slide').slick({
        infinite: true,
        speed: 400,
        autoplay: true, //자동 슬라이드 true/false (기본값:false)
        autoplaySpeed: 3000, //자동 슬라이드 속도 (밀리초 1000 = 1초)
        pauseOnHover: true, //마우스 올렸을 때 슬라이드 정지 여부 
    });
    
    
    //new_slide
    //slideshow view 반응형 슬라이드 제작하기
    //slideshow view 개수보다 슬라이드 (div) 형제 태그 개수가 더 많아야 prev,next버튼이 활성화 됩니다.
    $('.new_slide').slick({
        infinite: true, //무한 반복 설정(true/false)
        slidesToShow: 4, //한번에 보이는 슬라이드 쇼 개수
        slidesToScroll: 4, //이전 다음 버튼 클릭 시 넘어가는 슬라이드 개수
        speed: 1000, //버튼 클릭 시 (또는 자동일 경우) 이동하는 슬라이드 속도(밀리초 1000=1초)
        responsive: [ //responsive start
            { //1024 breakpoint start
                breakpoint: 1024, //반응형 웹 해상도 설정 1024px
                settings: {
                    slidesToShow: 4, //1024px일 경우 슬라이드 쇼 개수
                    slidesToScroll: 4, //1024px일 경우 슬라이드 쇼 이동 개수
                    infinite: true //1024px일 경우 한번에 보이는 슬라이드 쇼 개수
                } //1024 settings end
                    }, //1024 breakpoint end
            { //800 breakpoint start
                breakpoint: 800, //반응형 웹 해상도 설정 800px
                settings: {
                    slidesToShow: 2, //800px일 경우 슬라이드 쇼 개수
                    slidesToScroll: 2 //1024px일 경우 슬라이드 쇼 이동 개수
                } //800 settings end
                    } //800 breakpoint end
                  ] //responsive end 
    });
    //main_nav
    $('.main_nav li a').mouseover(function(){
        $(this).css('color','#ead2c6');
    })
    $('.main_nav li a').mouseout(function(){
        $(this).css('color','black');
    })
    
    //new_a
    var $a = $('.new_slide div a');
    var $box = $('.box');
    
    $box.hide();
    
    $a.mouseenter(function(){ //마우스 올렸을 경우
        $(this).find('.box').stop(true).fadeIn();
    })

    $a.mouseleave(function(){ //내렸을 경우
        $(this).find('.box').stop(true).fadeOut();
    })

    //img에 마우스를 올렸을 경우 (이미지 바뀜)
    /*box1*/
    $('.box1 div img').mouseover(function(){
        $(this).attr('src','images/new1.png')
    })
    $('.box1 div img').mouseleave(function(){
        $(this).attr('src','images/new9.jpg')
    })
    /*box2*/
    $('.box2 div img').mouseover(function(){
        $(this).attr('src','images/new10.png')
    })
    $('.box2 div img').mouseleave(function(){
        $(this).attr('src','images/new2.jpg')
    })
    /*box3*/
    $('.box3 div img').mouseover(function(){
        $(this).attr('src','images/new11.png')
    })
    $('.box3 div img').mouseleave(function(){
        $(this).attr('src','images/new3.jpg')
    })
    /*box4*/
    $('.box4 div img').mouseover(function(){
        $(this).attr('src','images/new12.png')
    })
    $('.box4 div img').mouseleave(function(){
        $(this).attr('src','images/new4.jpg')
    })
    /*box5*/
    $('.box5 div img').mouseover(function(){
        $(this).attr('src','images/new13.png')
    })
    $('.box5 div img').mouseleave(function(){
        $(this).attr('src','images/new5.jpg')
    })
    /*box6*/
    $('.box6 div img').mouseover(function(){
        $(this).attr('src','images/new14.png')
    })
    $('.box6 div img').mouseleave(function(){
        $(this).attr('src','images/new6.jpg')
    })
    /*box7*/
    $('.box7 div img').mouseover(function(){
        $(this).attr('src','images/new15.png')
    })
    $('.box7 div img').mouseleave(function(){
        $(this).attr('src','images/new7.jpg')
    })
    /*box8*/
    $('.box8 div img').mouseover(function(){
        $(this).attr('src','images/new16.png')
    })
    $('.box8 div img').mouseleave(function(){
        $(this).attr('src','images/new8.jpg')
    })



}) //ready end
