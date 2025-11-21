$(document).ready(function () {
    $('.slick-slider').each(function () {
        let slider = $(this);
        let options = {
            prevArrow: slider.parent().find('.slider-prev'),
            nextArrow: slider.parent().find('.slider-next'),
            infinite: true,
            autoplay: false,
        }
        let extraOptions = {}
        if (slider.hasClass('production')) {
            extraOptions = {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
                arrows: false,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2.5,
                            slidesToScroll: 1,
                            dots: true,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1.7,
                            slidesToScroll: 1,
                            dots: true,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1.3,
                            slidesToScroll: 1,
                            dots: true,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                        }
                    },
                ]
            }
        } else if (slider.hasClass('cards')) {
            extraOptions = {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                autoPlay: true,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 1.8,
                            slidesToScroll: 1,
                            dots: true,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                            adaptiveHeight: true,
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1.5,
                            slidesToScroll: 1,
                            dots: true,
                            adaptiveHeight: true,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            adaptiveHeight: true,
                        }
                    },
                ]
            }
        } else if (slider.hasClass('team')) {
            extraOptions = {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                autoPlay: true,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2.5,
                            slidesToScroll: 1,
                            dots: true,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                            adaptiveHeight: true,
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            adaptiveHeight: true,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            adaptiveHeight: true,
                        }
                    },
                ]
            }
        }
        slider.slick($.extend({}, extraOptions, options));
    })
    AOS.init({
        duration: 700,
    }
    );
})