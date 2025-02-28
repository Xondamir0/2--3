fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        const wrapper = document.querySelector('.wrapper');
        const table = document.createElement('table');
        table.className = 'table';


        table.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
        `;


        data.forEach(item => {
            const row = document.createElement('tr');
            const completedClass = item.completed ? 'true' : 'false';
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td class="completed ${completedClass}">${item.completed ? "✔ Выполнено" : "✖ Не выполнено"}</td>
            `;
            table.appendChild(row);
        });

        wrapper.appendChild(table);
    });
