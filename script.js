function scrollToTop() {
window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.onscroll = function() {
const button = document.getElementById('backToTop');
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = 'block';
} else {
    button.style.display = 'none';
}
};

function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("indexcompra.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;
   
   if (estrela == 5){ 
    if (s5 == url + "midia/star0.png") {
    document.getElementById("s1").src = "midia/star1.png";
    document.getElementById("s2").src = "midia/star1.png";
    document.getElementById("s3").src = "midia/star1.png";
    document.getElementById("s4").src = "midia/star1.png";
    document.getElementById("s5").src = "midia/star1.png";
    avaliacao = 5;
        } else {
        document.getElementById("s1").src = "midia/star1.png";
        document.getElementById("s2").src = "midia/star1.png";
        document.getElementById("s3").src = "midia/star1.png";
        document.getElementById("s4").src = "midia/star1.png";
        document.getElementById("s5").src = "midia/star0.png";
        avaliacao = 4;
    }}
    
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4 == url + "midia/star0.png") {
    document.getElementById("s1").src = "midia/star1.png";
    document.getElementById("s2").src = "midia/star1.png";
    document.getElementById("s3").src = "midia/star1.png";
    document.getElementById("s4").src = "midia/star1.png";
    document.getElementById("s5").src = "midia/star0.png";
    avaliacao = 4;
        } else {
        document.getElementById("s1").src = "midia/star1.png";
        document.getElementById("s2").src = "midia/star1.png";
        document.getElementById("s3").src = "midia/star1.png";
        document.getElementById("s4").src = "midia/star0.png";
        document.getElementById("s5").src = "midia/star0.png";
        avaliacao = 3;
    }}
   
   //ESTRELA 3
   if (estrela == 3){ 
    if (s3 == url + "midia/star0.png") {
    document.getElementById("s1").src = "midia/star1.png";
    document.getElementById("s2").src = "midia/star1.png";
    document.getElementById("s3").src = "midia/star1.png";
    document.getElementById("s4").src = "midia/star0.png";
    document.getElementById("s5").src = "midia/star0.png";
    avaliacao = 3;
        } else {
        document.getElementById("s1").src = "midia/star1.png";
        document.getElementById("s2").src = "midia/star1.png";
        document.getElementById("s3").src = "midia/star0.png";
        document.getElementById("s4").src = "midia/star0.png";
        document.getElementById("s5").src = "midia/star0.png";
        avaliacao = 2;
    }}
    
   //ESTRELA 2
   if (estrela == 2){ 
    if (s2 == url + "midia/star0.png") {
    document.getElementById("s1").src = "midia/star1.png";
    document.getElementById("s2").src = "midia/star1.png";
    document.getElementById("s3").src = "midia/star0.png";
    document.getElementById("s4").src = "midia/star0.png";
    document.getElementById("s5").src = "midia/star0.png";
    avaliacao = 2;
        } else {
        document.getElementById("s1").src = "midia/star1.png";
        document.getElementById("s2").src = "midia/star0.png";
        document.getElementById("s3").src = "midia/star0.png";
        document.getElementById("s4").src = "midia/star0.png";
        document.getElementById("s5").src = "midia/star0.png";
        avaliacao = 1;
    }}
    
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1 == url + "midia/star0.png") {
    document.getElementById("s1").src = "midia/star1.png";
    document.getElementById("s2").src = "midia/star0.png";
    document.getElementById("s3").src = "midia/star0.png";
    document.getElementById("s4").src = "midia/star0.png";
    document.getElementById("s5").src = "midia/star0.png";
    avaliacao = 1;
        } else {
        document.getElementById("s1").src = "midia/star0.png";
        document.getElementById("s2").src = "midia/star0.png";
        document.getElementById("s3").src = "midia/star0.png";
        document.getElementById("s4").src = "midia/star0.png";
        document.getElementById("s5").src = "midia/star0.png";
        avaliacao = 0;
    }}
    
    document.getElementById('rating').innerHTML = avaliacao;
    
   }


   let images = [
  "midia/leandrolo2.webp",
  "midia/leandrolo1.webp" // replace with the second image URL
];

let currentIndex = 0;

document.getElementById("next-button").addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("image").src = images[currentIndex];
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    
    window.onscroll = function() {
    const button = document.getElementById('backToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
    };