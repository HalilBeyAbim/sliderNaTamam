var slidere =[
        "assets/Photos/Tir1.jpg",
        "assets/Photos/Tir2.jpg",
        "assets/Photos/Tir3.jpg",
        "assets/Photos/Tir4.jpg"
]
let slide =0
let img = document.querySelector(".slider img");
img.src = slidere[slide]
let back = document.querySelector(".forward")
let forward = document.querySelector(".back")
forward.addEventListener("click",function(){
        slide++;
        if(slide>slidere.length-1){
                slide=0
        }
        img.src = slidere[slide];
})
back.addEventListener("click",function(){
        slide--;
        if(slide===-1){
                slide=slidere.length-1;
        }
        img.src=slidere[slide]
})
function autoplay(){
                slide++;
                if(slide>slidere.length-1){
                        slide=0
                }
                img.src = slidere[slide];
}
setInterval(()=>{
        autoplay();
},5000);
var dots =document.querySelectorAll(".dot: 0")
if(dots=slidere.length){
        
}