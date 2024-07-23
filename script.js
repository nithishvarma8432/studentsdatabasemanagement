document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addStudent();
});

document.getElementById('searchInput').addEventListener('keyup', function() {
    const query = this.value.toLowerCase();
    filterStudents(query);
});

function addStudent() {
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const studentClass = document.getElementById('class').value;
    const age = document.getElementById('age').value;

    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${rollNo}</td>
        <td>${studentClass}</td>
        <td>${age}</td>
        <td>
            <button onclick="editStudent(this)">Edit</button>
            <button onclick="deleteStudent(this)">Delete</button>
        </td>
    `;

    document.getElementById('studentForm').reset();
}

function editStudent(button) {
    const row = button.parentElement.parentElement;
    document.getElementById('name').value = row.cells[0].innerText;
    document.getElementById('rollNo').value = row.cells[1].innerText;
    document.getElementById('class').value = row.cells[2].innerText;
    document.getElementById('age').value = row.cells[3].innerText;
    row.remove();
}

function deleteStudent(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function filterStudents(query) {
    const rows = document.querySelectorAll('#studentTable tbody tr');
    rows.forEach(row => {
        const name = row.cells[0].innerText.toLowerCase();
        if (name.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
