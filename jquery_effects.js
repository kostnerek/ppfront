$(document).ready(function(){
    $('#btn1').click(function(){
        $('.circle').fadeToggle();
    });

    $('#btn2').click(function(){
        $(".square").fadeToggle('slow');
    });

    $('#btn3').click(function(){
        $(".triangle-up").fadeToggle(800);
    });

    $('#btn11').click(function(){
        $(".text").slideDown('slow');
    });

    $('#btn12').click(function(){
        $('.text').slideUp();
    });

    $('#btn13').click(function(){
        $(".text").slideToggle(800);
    });

    
    $('#btn21').click(function(){
        let sq = $(".big-sq");
        let delay=250;
        let size = sq.height();
        let font_size = 0.01;
        let c = 88;
        let changeVals = () =>{
            size+=5;
            font_size+=0.4;
            delay-=25;
            c-=12;
        }
        for(let i=0;i<20;i++){
            sq.animate({height: size, width: size, fontSize:font_size+"rem", backgroundColor:`#0${c}`}, delay);
            changeVals();
        }
    });
    $('#btn22').click(function(){
        $(".big-sq").stop();
    })
    $('#btn23').click(function(){
        let grc = () =>{
            c = Math.floor(Math.random() * (255 - 0));
            return c
        }
        console.log(grc());
        $(".big-sq").css("backgroundColor", `rgb(${grc()},${grc()},${grc()})`).slideToggle(800);

    })
});