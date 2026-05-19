const DEFAULT_NAME = 'Nome não disponível';
const DEFAULT_BIO = 'não possui bio cadastrada 😒.';

export function renderUserProfile(userData, userRepos, targetElement) {

  const profileName = userData.name || DEFAULT_NAME;
  const profileBio = userData.bio || DEFAULT_BIO;
  const repositoriesHTML = userRepos.length > 0 ? userRepos.map(repo => `
    <a href="${repo.html_url}" target="_blank">
    <div class="repository-card">
        <h3>${repo.name}</h3>
        <div class="repository-stats">
              <span> ⭐Starts: ${repo.stargazers_count}</span>
              <span> 🧤Forks: ${repo.forks_count}</span>
              <span> 👀Watchers: ${repo.watchers_count}</span>
              <span> 💻 Language: ${repo.language || "N/A"}</span>
        </div>
    </div>
    `).join('') : `<p>Este usuário não possui repositórios públicos.</p>`

  targetElement.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${profileName}" class="profile-avatar">
      <div class="profile-info">
        <h2 class="profile-name">${profileName}</h2>
        <p>${profileBio}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers">
        <h4> 👥 Seguidores</h4>
        <span>${userData.followers}</span>
       </div>

      <div class="following">
        <h4> 👥 Seguindo</h4>
        <span>${userData.following}</span>
      </div>
    </div>

    <div class="profile-repository">
        <h2>Repositórios</h2>
        <div class="repositories">
         ${repositoriesHTML}
        </div>
    </div>
    </a>
   
  `;
}

export function renderError(message, targetElement) {
  targetElement.innerHTML = `<p class="error">${message}</p>`;
}


