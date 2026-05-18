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
