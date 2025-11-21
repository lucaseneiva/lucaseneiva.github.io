const grid = document.getElementById('appGrid');

if (typeof projetos !== 'undefined' && Array.isArray(projetos)) {
    
    projetos.forEach(app => {
        const card = document.createElement('a');
        card.className = 'app-card';
        card.href = app.link;
        card.target = "_blank"; 

        card.innerHTML = `
            <div class="app-header">
                <img src="${app.imagem}" alt="${app.nome}" class="app-icon" loading="lazy">
                <div class="app-info">
                    <h2>${app.nome}</h2>
                    <span class="app-category">${app.categoria}</span>
                    <span class="app-tech">${app.tech}</span>
                </div>
            </div>
            <div class="app-desc">${app.descricao}</div>
            <div class="action-row">
                <div class="install-btn">Ver Projeto</div>
            </div>
        `;

        grid.appendChild(card);
    });

} else {
    console.error("Erro ao carregar projetos.");
    grid.innerHTML = "<p style='text-align:center; width:100%'>Erro ao carregar projetos.</p>";
}