"use strict";
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function isCurso(value) {
    if (value && typeof value === 'object' && 'nome' in value && "horas" in value && "aulas" in value && "gratuito" in value && "idAulas" in value && "nivel" in value && "tags" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach(item => {
            document.body.innerHTML += `
      <div>
      <h2>${item.nome}</h2>
      <p>${item.aulas}</p>
      <p>${item.horas}</p>
      <p>${item.nivel}</p>
      <p>${item.tags.join(", ")}</p>
      </div>
      `;
        });
    }
}
