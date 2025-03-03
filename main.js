// this is one way to do it but for single image

// var elem1 = document.querySelector("#elem1")
// var elemImage = document.querySelector("#elem1 img")


// elem1.addEventListener("mousemove", function(dets){
//     elemImage.style.left = dets.x + "px"
//     elemImage.style.top = dets.y + "px"
// })


// elem1.addEventListener("mouseenter", function(dets){
//     elemImage.style.opacity = 1;
// })


// elem1.addEventListener("mouseleave", function(dets){
//     elemImage.style.opacity = 0;
// })



// this is another way to do it for multiple images at once


var elem = document.querySelectorAll(".elem")

elem.forEach(function(elem){

    elem.addEventListener("mouseenter", function(){
        elem.childNodes[3].style.opacity = 1;
    });

    elem.addEventListener("mouseleave", function(){
        elem.childNodes[3].style.opacity = 0;
    });

    elem.addEventListener("mousemove", function(dets){
        elem.childNodes[3].style.left = dets.x + "px";
        // elem.childNodes[3].style.top = dets.y + "px";
    });
})
