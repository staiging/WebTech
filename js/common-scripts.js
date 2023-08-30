(function ($) {
    $(function () {


        $('#phone-nav').click(function () {
            $('body').toggleClass('navShown')
        })

        if ($('.contact-overall').length) {
            $('body').addClass('contact-main')
        }

        if ($('.testimonials-slider-content').length) {
            $('.testimonials-slider-content').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
            })
        }
        $(window).on('resize', function () {
            $('.testimonials-slider-content').slick('resize');
        });
        
        
        $(".faqs-accordion").each(function(){
            var $this = $(this);
            $this.find("> h3").on("click touch", function(){
                console.log(20)
                $(".faqs-accordion").removeClass("faqs-active")
                $(".faqs-accordion-content").slideUp();
                if($this.find(".faqs-accordion-content:visible").length){
                    $(".faqs-accordion").removeClass("faqs-active")
                    $(".faqs-accordion-content").slideUp();
                }
                else{
                    $this.addClass("faqs-active")
                    $(".faqs-accordion-content").slideUp();
                    $this.find(".faqs-accordion-content").slideDown();
                }
            })
        })

        if ($('.our-service-item-wrap').length) {
            $('.our-service-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1000,
                loop: false,
                arrows: true,
                dots: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            controlNav: false,
                            directionNav: false,
                            loop: false,

                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('.our-service-item-wrap').slick('resize');
        });
        

        if ($('.step-process-item-wrap').length) {
            $('.step-process-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1000,
                loop: false,
                arrows: true,
                dots: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            controlNav: false,
                            directionNav: false,
                            loop: false,

                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('.step-process-item-wrap').slick('resize');
        });
        
        if ($('.rellax').length) {
            var rellax = new Rellax('.rellax', {
                speed: 12,
                center: false,
                wrapper: null,
                round: true,
                vertical: true,
                horizontal: true,
            });

        }

        
        
        $(".skills-accordion-content").css({
            'display': "none"
        });
        
        
        $(".skills-accordion").each(function(){
            var $this = $(this);
            $this.find("h3").on("click touch", function(){
                $(".skills-accordion").removeClass("active")
                $(".skills-accordion-content").slideUp();
                if($this.find(".skills-accordion-content:visible").length){
                    $(".skills-accordion").removeClass("active")
                    $(".skills-accordion-content").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".skills-accordion-content").slideUp();
                    $this.find(".skills-accordion-content").slideDown();
                }
            })
        })	


        if ($("select.styled-select").length) {	
            $("select.styled-select").selectric({	

            });	
        }

        if ($(".email-referral").length) {	
            document.getElementById("uploadBtn").onchange = function () {
                document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
            };
        }

        
    
        gsap.registerPlugin(ScrollTrigger);

        // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".smooth-scroll"),
            smooth: true
        });
        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);

        // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy(".smooth-scroll", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
        });

        if($(window).width() > 991){

            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hero-inner",
                    scroller: ".smooth-scroll",
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: "+=45%",
                    pinSpacing: false,
                }
            });

            tl.from(".hero-content", { autoAlpha: 1, ease: "power2"})
                .to(".hero-content", {autoAlpha: 0, ease: "power2"});

        }

        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();

        

        
    }) // End ready function.


})(jQuery)








