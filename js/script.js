if ($("header").length ){
    let slideIndex = 1;
    showSlides(slideIndex);
  
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
  
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
  
    function showSlides(n) {
      let i;
      let slides = $(".mySlides");
      let dots = $(".dot");
      if (n > slides.length) {slideIndex = 1}
      console.log(slides.length);
      console.log(slides);
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
  
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
  }
function showIngred(i){
    let num = i.toString();
    console.log("#i-"+num);
    $("#i-"+num).slideToggle("slow");
}
function copyit(){
  navigator.clipboard.writeText("FEB14LOVE");
  alert("Copied code: FEB14LOVE");
}

function showDescription(descript){
  $("#descript").html(descript);
}

function hideDescription(){
  $("#descript").html("");
}


// $("p")[0].slideToggle("high");



// console.log($(".ingredients")[0]);
// $(".ingredients")[0].hide(); 
