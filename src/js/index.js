import { elements, getSearchValue, showLoading, clearProfileResults } from './dom.js';
import { fetchGitHubUser } from './api.js';
import { renderUserProfile, renderError } from './renderer.js';

async function handleSearch() {
  const userName = getSearchValue();

  if (!userName) {
    alert('Por favor, digite um nome de usuário do GitHub');
    clearProfileResults();
    return;
  }

  showLoading();

  try {
    const userData = await fetchGitHubUser(userName);
    renderUserProfile(userData, elements.profileResults);
  } catch (error) {
    console.error('Erro ao buscar o perfil', error);
    renderError('Usuário não encontrado ou houve um problema na busca.', elements.profileResults);
  }
}

elements.btnSearch.addEventListener('click', handleSearch);
