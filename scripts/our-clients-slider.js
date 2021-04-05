$(function(){
    $('.cases-slider').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        rows: 1,
        arrows: true,
        infinite: true,
        draggable: true,
        dots: true,
        prevArrow: $('.cases-left-arrow'),
        nextArrow: $('.cases-right-arrow'),
        responsive: [
            // {
            //     breakpoint: 1225,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 1
            //     }
            // },
            // {
            //     breakpoint: 630,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1
            //     }
            // },
            // {
            //     breakpoint: 500,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
            ]
    });
    $('.slick-dots li').text(" ");
});