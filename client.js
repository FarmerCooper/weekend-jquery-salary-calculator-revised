$(document).ready(readyWhenever);

let totalPerYear = 0;
let totalPerMonth = 0

function addEmployeeDetails() {
    // get inputs from the 'add employee' interface
    let insertName = $('#nameInput').val();
    let insertLastInput = $('#lastInput').val();
    let insertIdInput = $('#idInput').val();
    let insertTitleInput = $('#titleInput').val();
    let insertSalaryInput = $('#salaryInput').val();

    // add inputs to the table in formatted style
    $('#infoTable').append(`
            <tr class = "row">
                <td>${insertName}</td>
                <td>${insertLastInput}</td>
                <td>${insertIdInput}</td>
                <td>${insertTitleInput}</td>
                <td><span class= "person-salary">${insertSalaryInput}</span></td>
                <td class="column-delete"><button class="delete-btn">Delete</button></td>
            </tr>
    `)

    // clear the interface inputs by the user
    // call function

    $('#infoTable').on('click', '#delete-btn', handleDelete);

    // add salaries to the monthly total
    totalPerYear += Number(insertSalaryInput);

    totalPerMonth = parseInt(totalPerYear/12);

    // console.log(totalPerYear);


    $('.total-yearly').html(totalPerYear);
    $('.total-monthly').html(totalPerMonth);

    emptyInterface();
    totalMonthlyBackground();
};

function emptyInterface() {
    // clear the interface inputs by the user
    $('#nameInput').val('');
    $('#lastInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
};

function totalMonthlyBackground() {
    if(totalPerMonth > 20000) {
        $('#yearly').addClass('red-background');
        $('#monthly').addClass('red-background');
    }
}

function handleDelete() {
    console.log('works');
    $(this).parent().parent().remove();
}

function readyWhenever () {
    // console.log('jQuery is running');

    $('.total-monthly').text(0);
    $('.total-yearly').text(0);

    // once document is ready add click listener for button function
    $('#submitButton').on('click', addEmployeeDetails);
    // $('#delete-btn').on('click', '#row', handleDelete);
    
};
