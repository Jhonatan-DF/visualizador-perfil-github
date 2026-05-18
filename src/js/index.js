const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results')


const BASE_URL = 'https://api.github.com'

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;



    if (userName) {
        profileResults.innerHTML = `<p class="loading">Carregando...</p>`

        try {
            //aqui voce pode aicionar a logica para usar o valor do input
            const response = await fetch(`${BASE_URL}/users/${userName}`)

            if (!response.ok) {
                alert('Usuario não entrado')
                profileResults.innerHTML = "";
                return;
            }

            const userData = await response.json();
            console.log(userData)

            profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}"class="profile-avatar">
            <div class="profile-info">
            <h2 class="profile-name">${userData.name || 'Nome não disponivél'}</h2>
            <p>${userData.bio || 'não possui bio cadastrada 😒.'}</p>
            </div>
        </div>`

        }
        catch (error) {
            console.error('erro ao buscar o perfil', error);
            profileResults.innerHTML = "";
        }

    } else {
        alert('por favor, digite um nome de usuário do GitHub')
        profileResults.innerHTML = "";
    }

});