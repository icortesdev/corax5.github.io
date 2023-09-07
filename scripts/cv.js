document.getElementById("pdf-btn").addEventListener('click', function() {
    // URL del PDF que deseas abrir
    var pdfCv = 'https://drive.google.com/file/d/1qloGEiXkA94puUq0YivjWo2V2PB9iUNS/view?usp=sharing';
  
    // Abre una nueva pestaña con el PDF
    window.open(pdfCv, '_blank');
  });

  document.getElementById("pdf-btn2").addEventListener('click', function() {
    var pdfCv = 'https://drive.google.com/file/d/1qloGEiXkA94puUq0YivjWo2V2PB9iUNS/view?usp=sharing';
    window.open(pdfCv, '_blank');
  });

  document.getElementById("mail-btn").addEventListener('click',function(){
    var mail ='mailto:icortesdev@proton.me'; 
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

//al clickar en el boton de Instagram se abre Instagram en otra ventana
var instagramElements = document.getElementsByClassName("fa-brands fa-instagram");

for (var i = 0; i < instagramElements.length; i++) {
  instagramElements[i].addEventListener('click', function() {
    var instagram = 'https://www.instagram.com/icortes94/';
    window.open(instagram, '_blank');
  });
}

const imagen = document.getElementById('miImagen');

imagen.addEventListener('mouseover', function() {
  imagen.src = 'assets/images/foto2.png';
});

imagen.addEventListener('mouseout', function() {
  imagen.src = 'assets/images/foto1.png';
});






