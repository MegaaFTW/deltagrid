document.querySelector(".clickus a").addEventListener("click",function(){
    document.querySelector(".content-container").classList.add("left");
    document.querySelector(".content-container-register").classList.add("left");
    document.querySelector(".content-container").classList.add("show-display");
    document.querySelector(".content-container-register").classList.remove("show-display");

})

document.querySelector(".clickme a").addEventListener("click",function(){
    document.querySelector(".content-container").classList.remove("left");
    document.querySelector(".content-container-register").classList.remove("left");
    document.querySelector(".content-container").classList.remove("show-display");
    document.querySelector(".content-container-register").classList.add("show-display");

})

document.querySelector(".icon").addEventListener("click",function(){
    document.querySelector(".content-container").classList.add("show-display");
    document.querySelector(".content-container-register").classList.add("show-display");

})
Array.from(document.querySelectorAll(".firstlogin")).forEach(ele=>ele.addEventListener("click",function(){
    document.querySelector(".content-container").classList.remove("show-display");
    document.querySelector(".content-container-register").classList.add("show-display");
    document.querySelector(".content-container").classList.remove("left");
    document.querySelector(".content-container-register").classList.remove("left");

}))

document.querySelector(".barlogo").addEventListener("click",function(){
    if (!document.querySelector(".scrollblock").classList.contains("leftheh")){
    document.querySelector(".scrollblock").classList.add("leftheh");}
    else{
        document.querySelector(".scrollblock").classList.remove("leftheh");
    }
    // document.querySelector(".scrollblock").style.height = "0";


})






