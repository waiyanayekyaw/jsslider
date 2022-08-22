var slides = document.getElementsByClassName('carousel-item');
var dots = document.querySelectorAll('.dot');

var currslide = 1;

// Prev btn
document.getElementById('prev').addEventListener('click',function(){
    carousel(currslide -= 1);
});

// Next btn
document.getElementById('next').addEventListener('click',function(){
    carousel(currslide += 1);
});


for(var q = 0; q < dots.length; q++){
    dots[q].addEventListener('click',function(){
        currslide = this.getAttribute('data-bs-slide-to');
        carousel(currslide);
    })
}

carousel(currslide);

function carousel(slidenum){

    // hide all slide
    for(var x = 0; x < slides.length; x++){
        slides[x].style.display = 'none';
    }

    // remove dots active
    for(var y = 0; y < dots.length; y++){
        dots[y].classList.remove('active');
        // dots[y].className = dots[y].className.replace('active','');
    }


    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = slides.length;
    }

    // console.log(currslide);

    slides[currslide-1].style.display = 'block';
    dots[currslide-1].className = 'dot active';
}