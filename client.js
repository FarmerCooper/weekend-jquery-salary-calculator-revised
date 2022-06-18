$(document).ready(readyWhenever);

function addEmployeeDetails() {
    // get inputs from the 'add employee' interface
    let insertName = $('#nameInput').val();
    let insertLastInput = $('#lastInput').val();
    let insertIdInput = $('#idInput').val();
    let insertTitleInput = $('#titleInput').val();
    let insertSalaryInput = $('#salaryInput').val();

    // add inputs to the table in formatted style
    $('#infoTable').append(`
    <tr>
                <td class = "person">${insertName}</td>
                <td class = "last-name>${insertLastInput}</td>
                <td class = "id">${insertIdInput}</td>
                <td class = "title">${insertTitleInput}</td>
                <td class = "salary">${insertSalaryInput}</td>
                <td class="column-delete"><button class="delete-btn">Delete</button></td>
            </tr>
    `)

    // clear the interface inputs by the user
    // call function
    emptyInterface();
}

function emptyInterface() {
    // clear the interface inputs by the user
    $('#nameInput').val('');
    $('#lastInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
}

function readyWhenever () {
    // console.log('jQuery is running');

    // once document is ready add click listener for button function
    $('#submitButton').on('click', addEmployeeDetails);
}

