const skillsDiv = document.getElementById("skills-container");
const gallery = document.getElementById("gallery");
const skillsinfoDiv = document.getElementById("skill-info");

function render() {
  skillsDiv.innerHTML = "";
  if(db?.skills?.length){
    db.skills.forEach((skill) => {
    skillsDiv.innerHTML += `<button class="btn-common" id="btn-skills-info">${skill.name}</button> `;
  });
  }
  

  const botones = document.querySelectorAll("#btn-skills-info" );
  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      const skillname = db.skills.find((skill) => skill.name === boton.textContent);
      if (skillname) {
        skillsinfoDiv.innerHTML = `${skillname.description}`;
      }
    });
  });

  botones.forEach((boton) => {
    boton.addEventListener('mouseover', () => {
      boton.style.backgroundColor = '#33E459'; // Cambiar el color de fondo al pasar el ratón por encima
    });

    boton.addEventListener('mouseout', () => {
      boton.style.backgroundColor = ''; // Restaurar el color de fondo original al alejar el ratón
    });
  })


  const projects = getCurrentProjects();
  const firstProject = projects[0];
  if (!firstProject) {
    return;
  }

  gallery.innerHTML = `
      <div class="img-one d-flex-p-b" style="background-image: url(${firstProject.img});">
          <a class="btona">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <div class="section-project">
            <h3 style="-webkit-text-stroke: 2px black">${firstProject.name}</h3>
            
          </div>
      </div>
      <div class="half-width" id="projects-container"></div>
  `;

  const projectsDiv = document.getElementById("projects-container");
  const secondZone = projects.slice(1, 5);
  secondZone.forEach((project) => {
    projectsDiv.innerHTML += `
      <div class="full-height d-flex-p-b" style="background-image: url(${project.img});">
        <a class="btona">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <div class="section-project">
          <h3 style="-webkit-text-stroke: 2px black">${project.name}</h3>
         
        </div>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  var typed = new Typed("#dev-text", {
    strings: ["Developer.", "Creator.", "Designer."],
    typeSpeed: 50,
    loop: true
  });
});
