// var crsr = document.querySelector("#cursor")
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x+"px"
//     crsr.style.right = dets.y+"px" 

// })



gsap.to("#nav",{
    backgroundColor :"#111",
    height:"88px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers : true,
        start:"top -10%",
        end : "top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers : true
        start:"top -25%",
        end:"top -70%",
        scrub: 2
    }
})