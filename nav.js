gsap.registerPlugin(ScrollTrigger);



const tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.lala',
        markers:true,
        start:'top 40% ',
       end:'top 30%',
       scrub:3
    }
});


tl.from('.card' , {y:50,duration:0.4})

