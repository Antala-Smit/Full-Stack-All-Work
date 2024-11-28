let record = [];

const viewUser = () => {
    const all = JSON.parse(localStorage.getItem('user')) || [];
    const tbl = all.map((user, index) => (
        `<tr>
            <td>${user.title}</td>
            <td>${user.note}</td>
            <td>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        </tr>`
    )).join('');
    document.getElementById('record').innerHTML = tbl;
}

const saveUser = () => {
    const title = document.getElementById('title').value;
    const note = document.getElementById('note').value;
    const all = JSON.parse(localStorage.getItem('user')) || [];
    const id = all.length; // Generate unique id
    const obj = { id, title, note };

    all.push(obj);
    localStorage.setItem("user", JSON.stringify(all));
    alert("User registered successfully...");

    document.getElementById('title').value = "";
    document.getElementById('note').value = "";
    viewUser();
}

const deleteUser = (index) => {
    const all = JSON.parse(localStorage.getItem('user')) || [];
    const filteredAll = all.filter((user, i) => i !== index);
    localStorage.setItem("user", JSON.stringify(filteredAll));
    alert("User deleted successfully...");
    viewUser();
}


viewUser();