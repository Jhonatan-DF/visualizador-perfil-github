const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

export const elements = {
    inputSearch,
    btnSearch,
    profileResults,
};

export function getSearchValue() {
    return inputSearch.value.trim();
}

export function showLoading() {
    profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
}

export function clearProfileResults() {
    profileResults.innerHTML = '';
}
