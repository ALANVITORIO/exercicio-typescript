
interface Curso {
  nome: string;
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel : "iniciante "| "avançado";
  tags: string[];
}



async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}

fetchCursos();

function isCurso (value : unknown): value is Curso{
      if(value&& typeof value ==='object'&& 'nome' in value && "horas" in value && "aulas" in value && "gratuito" in value && "idAulas" in value && "nivel" in value && "tags" in value){
        return true;
      }else{
        return false;
      }
}

function handleCursos(data : unknown){
  if (Array.isArray(data)) {
    data.filter(isCurso).forEach(item => {
      document.body.innerHTML += `
      <div>
      <h2>${item.nome}</h2>
      <p>${item.aulas}</p>
      <p>${item.horas}</p>
      <p>${item.nivel}</p>
      <p>${item.tags.join (", ")}</p>
      </div>
      `;
    });
  }
}