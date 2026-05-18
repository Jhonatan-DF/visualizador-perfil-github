const DEFAULT_NAME = 'Nome não disponível';
const DEFAULT_BIO = 'não possui bio cadastrada 😒.';

export function renderUserProfile(userData, targetElement) {
    const profileName = userData.name || DEFAULT_NAME;
    const profileBio = userData.bio || DEFAULT_BIO;

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
  `;
}

export function renderError(message, targetElement) {
    targetElement.innerHTML = `<p class="error">${message}</p>`;
}
