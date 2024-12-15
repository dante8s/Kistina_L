let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
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
//hhhhh
function myFunction(x){
  x.classList.toggle("change")
}
document.querySelector(".nav-button").addEventListener
("click", function() {
  document.querySelector(".nav-items").classList.toggle("hide-show")
})
///s
function copyEmailToClipboard() {
  const email = 'example@example.com';
  navigator.clipboard.writeText(email).then(() => {
      alert('Email скопійовано в буфер обміну: ' + email);
  }).catch(err => {
      console.error('Не вдалося скопіювати: ', err);
  });
}

function copyPhoneToClipboard() {
  const phone = '+1234567890';
  navigator.clipboard.writeText(phone).then(() => {
      alert('Телефон скопійовано в буфер обміну: ' + phone);
  }).catch(err => {
      console.error('Не вдалося скопіювати: ', err);
  });
}
