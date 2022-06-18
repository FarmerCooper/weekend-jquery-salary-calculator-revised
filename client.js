$(document).ready(readyWhenever);

function addEmployeeDetails() {
    let insertName = $('#nameInput').val();
    let insertLastInput = $('#lastInput').val();
    let insertIdInput = $('#idInput').val();
    let insertTitleInput = $('#titleInput').val();
    let insertSalaryInput = $('#salaryInput').val();

    $('#infoTable').append(`
    <tr>
                <td>${insertName}</td>
                <td>${insertLastInput}</td>
                <td>${insertIdInput}</td>
                <td>${insertTitleInput}</td>
                <td>${insertSalaryInput}</td>
                <td class="column-delete"><button class="delete-btn">Delete</button></td>
            </tr>
    `)

    emptyInterface();
}

function emptyInterface() {
    $('#nameInput').val('');
    $('#lastInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
}

function readyWhenever () {
    //console.log('jQuery is running');
    $('#submitButton').on('click', addEmployeeDetails);
}
