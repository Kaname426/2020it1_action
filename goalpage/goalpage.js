    $(".yami-gamen-background-img").hide();
    $(".alret-wrap").hide();
    $(".alret-text1").hide();
    $(".alret-text2").hide();
    $(".alret-text3").hide();
    $(".alret-text4").hide();
    $(".alret-text5").hide();
    $(".alret-text6").hide();
    $(".alret-img1").hide();
    $(".alret-img2").hide();
    $(".alret-img3").hide();
    $(".alret-img4").hide();
    $(".alret-img5").hide();
    $(".alret-img6").hide();
    $(".btn-return").hide();
$('.btn-1').click(function () {
    $(".yami-gamen-background-img").show();
    $(".btn-wrap").hide();
    $(".alret-wrap").hide();
    $(".alret-text1").hide();
    $(".alret-text2").hide();
    $(".alret-text3").hide();
    $(".alret-text4").hide();
    $(".alret-text5").hide();
    $(".alret-text6").hide();
    $(".alret-img1").hide();
    $(".alret-img2").hide();
    $(".alret-img3").hide();
    $(".alret-img4").hide();
    $(".alret-img5").hide();
    $(".alret-img6").hide();
    $(".btn-return").show();
    $("#sca.btn.btn-large.btn-primary").hide();
    $("#stg.stop.btn-large.btn-warning").hide();
})
$('.btn-1-1').click(function () {
    $(".alret-wrap").show();
    $(".alret-text1").show();
    $(".alret-img1").show();
    $(".alret-btn1").click(function () {

        console.log(data.t);

        // let score = sessionStorage.getItem('data.t');
        //      score += 10000;
        //      sessionStorage.setItm('data.t', score);

        // $(window).on('load',function(){
        //     var url = location.href
        //     var path = location.pathname
        //     var param = location.search
        //     var anc = location.hash

        //     if (url =="file:///C:/Users/ryuta/Desktop/%E3%83%81%E3%83%BC%E3%83%A0%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88/2020it1_action/goalpage/goalpage.html?1&500&1"){
                
        //     }
        // })
    });
});
$('.alret-btn1').click(function () {
    $(".btn-wrap").show();
    $(".yami-gamen-background-img").hide();
    $("#sca.btn.btn-large.btn-primary").show();
    $("#stg.stop.btn-large.btn-warning").show();
});

$('.btn-1-2').click(function () {
    
    $(".alret-wrap").show();
    $(".alret-text2").show();
    $(".alret-img2").show();
    $(".alret-btn1").click(function () {
        let score = sessionStorage.getItem('data.t');
             score += 15000;
             sessionStorage.setItm('data.t', score);
    });
});
// $('.alret-btn1').click(function () {
//     $(".btn-wrap").show();
// });

$('.btn-1-3').click(function () {
    
    $(".alret-wrap").show();
    $(".alret-text3").show();
    $(".alret-img3").show();
    $(".alret-btn1").click(function () {
        let score = sessionStorage.getItem('data.t');
             score += 20000;
             sessionStorage.setItm('data.t', score);
    });
});
// $('.alret-btn1').click(function () {
//     $(".btn-wrap").show();
// });

$('.btn-1-4').click(function () {
    
    $(".alret-wrap").show();
    $(".alret-text4").show();
    $(".alret-img4").show();
    $(".alret-btn1").click(function () {
        let score = sessionStorage.getItem('data.t');
             score += 25000;
             sessionStorage.setItm('data.t', score);
    });
});
// $('.alret-btn1').click(function () {
//     $(".btn-wrap").show();
// });

$('.btn-1-5').click(function () {
    
    $(".alret-wrap").show();
    $(".alret-text5").show();
    $(".alret-img5").show();
    $(".alret-btn1").click(function () {
        let score = sessionStorage.getItem('data.t');
             score += 30000;
             sessionStorage.setItm('data.t', score);
    });
});
// $('.alret-btn1').click(function () {
//     $(".btn-wrap").show();
// });

$('.btn-1-6').click(function () {
    
    $(".alret-wrap").show();
    $(".alret-text6").show();
    $(".alret-img6").show();
    $(".alret-btn1").click(function () {
        let score = sessionStorage.getItem('data.t');
             score += 35000;
             sessionStorage.setItm('data.t', score);
    });
});

$('.btn-return').click(function () {
    $(".btn-wrap").show();
    $(".yami-gamen-background-img").hide();
    $("#sca.btn.btn-large.btn-primary").show();
    $("#stg.stop.btn-large.btn-warning").show();
});
$(".takara").hide();
$('.takara-btn-return').click(function () {
    $(".btn-wrap").show();

    $(".takara").hide();
    $(".btn btn-large btn-primary start").hide();
    $("#sca.btn.btn-large.btn-primary").show();
    $("#stg.stop.btn-large.btn-warning").show();

});
var True = sessionStorage.getItem('true'); 
if(True == null){
  sessionStorage.setItem('false', 'a');
}else{
  sessionStorage.setItem('false', True);
}
var False = sessionStorage.getItem('false');
console.log(False);
if(False == 'b'){
    $('.btn-2').click(function(){
        $(".btn-wrap").hide();
        $('.takara-btn-return').show();
        $('.takara').show();
        $("#sca.btn.btn-large.btn-primary").hide();
        $("#stg.stop.btn-large.btn-warning").hide();
    })
}


$(".btn btn-large btn-primary start").click(function () {
    $(".btn_container").hide();
    $(".takara-alret-btn1").hide();
    $(".start").hide();
    $(".takara-alret-wrap").show();
    console.log("start");

});
// ------------------------------------------shop---------------------------------//
$(".shop-wrap").hide();
$(".shop-btn-return").hide();
$(".caption1").hide();

$('.btn-shop').click(function () {
    $(".btn-wrap").hide();
    $(".shop-wrap").show();
    $(".shop-btn-return").show();
    $("#sca.btn.btn-large.btn-primary").hide();
    $("#stg.stop.btn-large.btn-warning").hide();
});
$(".shop-btn-return").click(function () {
    $(".btn-wrap").show();
    $(".shop-wrap").hide();
    $(".shop-btn-return").hide();
    $("#sca.btn.btn-large.btn-primary").show();
    $("#stg.stop.btn-large.btn-warning").show();
});

$(".suit-text").hide();
$('.car-text').hide();
$('.house-text').hide();

$(".btn-suit").mouseover(function (){
    $(".suit-text").show();
});
$(".btn-suit").mouseout(function (){
    $(".suit-text").hide();
})

$(".btn-car").mouseover(function (){
    $(".car-text").show();
});
$(".btn-car").mouseout(function (){
    $(".car-text").hide();
})

$(".btn-house").mouseover(function (){
    $(".house-text").show();
});
$(".btn-house").mouseout(function (){
    $(".house-text").hide();
})
// -------------------------RANKING-----------------------------------
$('.ranking-wrap').hide();
$('.ranking-text').hide();

$('#ranking-btn').click(function () {
    $('.ranking-wrap').show();
    $('.container_goalpage').hide();
    $('.ranking-text').show();
});

$('.ranking-btn-return').click(function () {
    $('.ranking-wrap').hide();
    $('.container_goalpage').show();
    $('.ranking-text').hide();
});