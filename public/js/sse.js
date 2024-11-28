
// see.js


const eventSource = new EventSource('http://localhost:3000/events');


eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const updates = document.getElementById('updates');
    const updateElement = document.createElement('div');
    updateElement.className = 'alert alert-success';
    updateElement.textContent = `${data.post} (${data.time})`;
    updates.appendChild(updateElement);
};


eventSource.onerror = () => {
    console.error('Ошибка подключения к SSE');
};