async function loadProjects(){
  const el = document.getElementById('projects-list');
  try{
    const res = await fetch('./projects.json');
    const data = await res.json();
    el.innerHTML = data.map(p => `
      <div class="project">
        <h4>${p.title}</h4>
        <div style="opacity:.8">${p.period} • ${p.role}</div>
        <p style="margin:.4rem 0 0.6rem">${p.summary}</p>
        <ul style="margin:.3rem 0 0.6rem;padding-left:1.1rem">
          ${p.highlights.map(h=>`<li>${h}</li>`).join('')}
        </ul>
        <div class="badges">${p.tags.map(t=>`<span class="badge">${t}</span>`).join('')}</div>
      </div>
    `).join('');
  }catch(e){
    el.innerHTML = '<p>Could not load projects.</p>';
  }
}
document.addEventListener('DOMContentLoaded', loadProjects);
