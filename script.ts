async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

interface Curso {
  nome : string;
  horas: number;
  aulas: number;
  tags : string[];
  idAulas: number[];
  nivel : 'iniciante' | 'avançado';
  gratuito: boolean;
}
function mostrarCursos(cursos: Curso[]) {
  cursos.forEach(curso => {
    const cursoElement = document.createElement('div');
    cursoElement.innerHTML = `
      <h2 style="color: ${curso.nivel === 'iniciante' ? 'blue' : 'red'}">${curso.nome}</h2>
      <p>"${curso.aulas}" <p/>
      <p>${curso.horas} horas</p>
      <p>${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
      <p>${curso.tags.join(', ')}</p>
      <p>${curso.idAulas.join(', ')}</p>
      <p style="color: ${curso.nivel === 'iniciante' ? 'red' : 'blue'}">${curso.nivel}</p>
    `;
    document.body.appendChild(cursoElement);
  });
}
fetchCursos();
