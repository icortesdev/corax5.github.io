document.getElementById("pdf-btn").addEventListener('click', function() {
    // URL del PDF que deseas abrir
    var pdfCv = 'assets/funciones.pdf';
  
    // Abre una nueva pestaña con el PDF
    window.open(pdfCv, '_blank');
  });

  document.getElementById("pdf-btn2").addEventListener('click', function() {
    var pdfCv = 'assets/funciones.pdf';
    window.open(pdfCv, '_blank');
  });

  document.getElementById("mail-btn").addEventListener('click',function(){
    var mail ='mailto:tuemail@gmail.com'; 
    window.open(mail, '_blank');
  })

// eventos al clicar logos de RRSS.

  var githubElements = document.getElementsByClassName("fa-brands fa-github");

for (var i = 0; i < githubElements.length; i++) {
  githubElements[i].addEventListener('click', function() {
    var github = 'https://github.com/corax5';
    window.open(github, '_blank');
  });
}

//al clickar en el boton de Linkedin se abre Linkedin en otra ventana

var linkedinElements = document.getElementsByClassName("fa-brands fa-linkedin-in");

for (var i = 0; i < linkedinElements.length; i++) {
  linkedinElements[i].addEventListener('click', function() {
    var linkedin = 'https://www.linkedin.com/in/irian-cortes-dev/';
    window.open(linkedin, '_blank');
  });
}

//al clickar en el boton de Twitter se abre Twitter en otra ventana
var twitterElements = document.getElementsByClassName("fa-brands fa-twitter");

for (var i = 0; i < twitterElements.length; i++) {
  twitterElements[i].addEventListener('click', function() {
    var twitter = 'https://twitter.com/Corax5_';
    window.open(twitter, '_blank');
  });
}