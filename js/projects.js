document.addEventListener('DOMContentLoaded', function() {
    const blacklist = ['tegaidogun.github.io'];
    const username = 'tegaidogun';
    const projectsList = document.getElementById('projects-list');

    fetch(`https://api.github.com/users/${username}/repos?sort=created&direction=desc`)
        .then(response => response.json())
        .then(repos => {
            repos = repos.filter(repo => !blacklist.includes(repo.name));
            repos.forEach((repo, index) => {
                const col = document.createElement('div');
                col.className = 'col-md-3 mb-4';
                col.innerHTML = `
                    <a href="${repo.html_url}" class="card bg-secondary text-light project-card" target="_blank">
                        <div class="card-body">
                            <h5 class="card-title project-title">${repo.name}</h5>
                            <p class="card-text project-description">${repo.description ? repo.description.slice(0, 100) + '...' : 'No description available'}</p>
                            <div class="project-footer">
                                <div class="project-icons" id="project-icons-${index}">
                                    <!-- Icons will be inserted here -->
                                </div>
                                <i class="fab fa-github github-link"></i>
                            </div>
                        </div>
                    </a>
                `;
                projectsList.appendChild(col);
                fetchLanguages(repo.languages_url, `project-icons-${index}`);
            });
        })
        .catch(error => console.error('Error fetching repos:', error));

    function fetchLanguages(url, elementId) {
        fetch(url)
            .then(response => response.json())
            .then(languages => {
                const langArray = Object.keys(languages).slice(0, 3);
                const iconsContainer = document.getElementById(elementId);
                iconsContainer.innerHTML = langArray.map(lang => getLanguageIcon(lang)).join('');
            })
            .catch(error => console.error('Error fetching languages:', error));
    }

    function getLanguageIcon(language) {
        const icons = {
            'JavaScript': 'fab fa-js-square',
            'Python': 'fab fa-python',
            'Java': 'fab fa-java',
            'HTML': 'fab fa-html5',
            'CSS': 'fab fa-css3-alt',
            'C++': 'fab fa-cuttlefish',
            'C#': 'fab fa-microsoft',
            'Ruby': 'fas fa-gem',
            // Add more language icons as needed
        };
        return `<i class="${icons[language] || 'fas fa-code'}"></i>`;
    }
});
