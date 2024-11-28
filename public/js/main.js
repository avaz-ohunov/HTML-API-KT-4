
// main.js


async function fetchData(endpoint) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
        if (!response.ok) throw new Error('Ошибка при загрузке данных');
        const data = await response.json();
        renderData(endpoint, data);
    } catch (error) {
        console.error('Ошибка:', error);
        showError('Ошибка при загрузке данных');
    }
}


function renderData(endpoint, data) {
    const container = document.getElementById('data-container');
    container.innerHTML = `<h2>${endpoint}</h2>`;
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card text-dark bg-light mb-3';
        card.innerHTML = `<div class="card-body">${JSON.stringify(item)}</div>`;
        container.appendChild(card);
    });
}


function showError(message) {
    const container = document.getElementById('data-container');
    container.innerHTML = `<div class="alert alert-danger">${message}</div>`;
}


document.getElementById('load-users').addEventListener('click', () => fetchData('users'));
document.getElementById('load-posts').addEventListener('click', () => fetchData('posts'));