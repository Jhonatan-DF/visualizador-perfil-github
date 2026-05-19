const BASE_URL = 'https://api.github.com';

export async function fetchGitHubUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(userName)}`);

    if (!response.ok) {
        const error = new Error('Usuário não encontrado');
        error.status = response.status;
        throw error;
    }

    return response.json();
}

export async function fetchGitHubUserRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(userName)}/repos?per_page=10`);
    if (!response.ok) {
        throw new Error('Repositórios não encontrados.')
    }
    return await response.json();
}

