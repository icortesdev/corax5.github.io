const backendUrl = "https://portfolioapi-production-b41f.up.railway.app";

var projectIndex = 0;
function getCurrentProjects() {
  return db.projects.slice(projectIndex, projectIndex + 3);
}



async function load() {
  const url = `${backendUrl}/projects`;

  try {
    const response = await fetch(url);
    const midb = await response.json();
    db.projects = await midb;
  } catch (e) {
    console.log("ERROR!");
  }

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  load();
  render();
  setInterval(nextProject, 3000);
});
