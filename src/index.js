import './styles/main.scss';
import * as ScrollMagic from 'scrollMagic';
import { TimelineMax, TweenMax, TweenLite } from 'gsap';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
let progressVal = document.getElementById('progressVal')

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {

} else {
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.querySelector('.container_preloader').classList.add('fade');
                document.querySelector('.dash').classList.add('fade');
            }, 200)
            setTimeout(function() {
                console.log('loaded')
                let tl = new TimelineMax({onUpdate:showRedProgress});
                setTimeout(function(){
                    tl.to('.header__img_1', 0.8, {scaleY: 1, opacity: 1})
                    .to('.header__img_2', 1.2, {scaleX: 1, opacity: 1})
                    .set('.header__img_1', {className:"header__img_1 hide"})
                    .set('.header__img_2', {className:"header__img_2 hide"})
                    .to('.header__img_3', 0.9, {scaleY: 1, opacity: 1})
                    .to(progressVal, {display: 'none'})
                    // .to('#bg_block', {left: '4%'})
                    // .from(".white", tl.duration(), {scaleX:0, transformOrigin:"0px 0px", ease:Linear.easeNone}, 0);
                }, 2000)
                function showRedProgress() {
                    let p = tl.progress() * 100 >> 0;
                    progressVal.innerHTML = p;
                }
        
                setTimeout(function(){
                    TweenMax.to('#fg_block', 1.2, {top: '15%', right: '11%'});
                    TweenMax.to('.secondary_img_bg', 0.7, {opacity: 1});
                    TweenMax.to('.foreground .title_box', 0.7, {opacity: 1, display: 'flex'});
                    TweenMax.to('.header__big_title', 0.7, {opacity: 1, right: '25%', delay: 1});
                    TweenMax.to('.header__big_title.bottom', 1, {opacity: 1, left: '-8%', right: '-25%'});
                    TweenMax.to('.prelast_char', 1, {top: '-30px', left: '60px', rotate: '-45deg'});
                    TweenMax.to('.last_char', 1.4, {top: '-250px', rotate: '-60deg'});
                    TweenMax.to('.popup_box.suvi_header', 0.8, {opacity: 1, width: '420px', delay: 3});
                    TweenMax.to('.header__bottom.models_box', 0.8, {opacity: 1, width: '420px', delay: 3});
                }, 6500)
        
                
            //----Timelines variables-----//
            //----Timelines variables-----//
            //----Timelines variables-----//
            let tl2 = new TimelineMax();
            let tl3 = new TimelineMax();
            let tl4 = new TimelineMax();
            let tl5 = new TimelineMax();
            let tl6 = new TimelineMax();
            let tl7 = new TimelineMax();
            let tl8 = new TimelineMax();
        
            let controller = new ScrollMagic.Controller();
        
            //----Scrollmagic variables-----//
            //----Scrollmagic variables-----//
            //----Scrollmagic variables-----//
            const finnis1 = new ScrollMagic.Scene({
                triggerElement: '.section.finnis',
            })
                .setTween(tl2)
                    .addTo(controller)
        
            const finnis2 = new ScrollMagic.Scene({
                triggerElement: '.section.finnis',
                triggerHook: "onCenter",
                duration: '100%'
            })
                .setTween(tl3)
                    .addTo(controller)
                    
            const cardsSection = new ScrollMagic.Scene({
                triggerElement: '.section.cards',
            })
                .setTween(tl4)
                    .addTo(controller)
        
            const chloeSection = new ScrollMagic.Scene({
                triggerElement: '.section.chloe',
            })
                .setTween(tl5)
                    .addTo(controller)
                    
            const magazineSection = new ScrollMagic.Scene({
                triggerElement: '.section.magazine',
            })
                .setTween(tl6)
                    .addTo(controller)
                
            const suviSection = new ScrollMagic.Scene({
                triggerElement: '.section.suvi',
            })
                .setTween(tl7)
                    .addTo(controller)
        
                    
            const footerSection = new ScrollMagic.Scene({
                triggerElement: '.section.cards.usual',
            })
                .setTween(tl8)
                    .addTo(controller)
        
                tl2.to('.popup_box.big.finnis', 0.9, {left: '45%', top: '60%', opacity: 1})
                .to('#finnis_overlay', 0.9, {scaleX: 1, opacity: 1})
                .to('#finnis_small', 0.9, {left: '1%', opacity: 1})
                .to('.finnis_box__right .big_title', 0.4, {left: '-10%', opacity: 1}, '-=2')
                .to('.finnis__prelast_char', 0.7, {top: '-65px', left: '40px', rotate: '-45deg', delay: 0.3}, '-=2')
                .to('.finnis__last_char', 0.5, {top: '-200px', rotate: '-60deg', delay: 0.4}, '-=2')
        
                //------timeline finished
                //------timeline finished
                //------timeline finished
                tl3.to('.finnis_box__right', 0.9, {y: '10%'})
                .to('#finnis_small', 0.9, {bottom: '-20%'})
        
                //------timeline finished
                //------timeline finished
                //------timeline finished
        
                tl4.to('.cards_box', 0.9, {scaleX: 1, opacity: 1})
                //------timeline finished
                //------timeline finished
                //------timeline finished
        
                tl5.to('#chloe_popup', 1, {scaleY: 1, opacity: 1, left: '27%', delay: 0.3})
                .to('.chloe__second', 0.9, {x: '-3%', y: '-33%'}, 0)
                .to('.chloe__first', 0.9, {x: '-2%', y: '-5%'}, 0)
        
                //------timeline finished
                //------timeline finished
                //------timeline finished
        
                tl6.to('.magazine_box__left', 1, {scaleY: 1, opacity: 1})
                .to('.magazine_box__right', 0.7, {scaleX: 1, opacity: 1}, 0)
                .to('#magazine_popup', 0.7, {opacity: 1, left: 0}, 0)
        
        
                //------timeline finished
                //------timeline finished
                //------timeline finished
        
                tl7.to('.suvi_box__middle .img_bg', 1, {scaleX: 1, opacity: 1})
                .to('.suvi_box__right .image_block.background', 0.7, {scaleX: 1, opacity: 1}, 0)
                .to('.suvi_box__left .next', 0.3, {display: 'none'})
                .to('.suvi_box__left .next.hidden', 0.5, {display: 'block', opacity: 1})
                .to('.suvi_box__left .next.hidden', 0.1, {display: 'none', opacity: 0})
                .to('.suvi_box__left .next.main', 0.3, {display: 'block'})
                .to('.suvi_box__middle .img_fg', 0.7, {display: 'block', scaleX: 1, opacity: 1, delay: 0.7})
                .to('.suvi_box__right .image_block.foreground', 0.7, {display: 'flex', scaleX: 1, opacity: 1}, '-=0.7')
                .to('#cards_overlay', 2, {scaleX: 0})
        
                //------timeline finished
                //------timeline finished
                //------timeline finished
        
                tl8.to('.footer', 1, {filter: 'blur(0.1px)', delay: 1})
                .to('.footer__suvi', 0.8, {left: '50%', opacity: 1})
                .to('.footer__prelast_char', 0.8, {top: '-45px', left: '25px', rotate: '-30deg'}, '-=0.6')
                .to('.footer__last_char', 0.7, {top: '-140px', rotate: '-55deg', left: '20px'}, '-=0.8')
            }, 1000)
        });
}
