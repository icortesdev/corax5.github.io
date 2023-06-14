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