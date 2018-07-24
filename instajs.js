var pictures = document.querySelectorAll("img");
console.log(pictures);

// pictures.forEach(function(pic){
//     pic.addEventListener('click', function(event){
//         var bigImg = document.querySelectorAll(".bigImage");
//         bigImg[0].src = event.target.src
//     })
// })

pictures.forEach(function(pic){
    pic.addEventListener('mouseover', function(event){
        var bigImg = document.querySelectorAll(".bigImage");
        bigImg[0].src = event.target.src
    })
})


