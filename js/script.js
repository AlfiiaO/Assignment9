
// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [ 23457890, 'Zak Ruvalcaba',2143, 'zakruvalcaba@sdccd.edu','Executive'],
    [ 56903456, 'Sally Smith',6856, 'smiths@sdccd.edu','Engineering'],
    [72134968, 'Mark Martin',6943, 'markmartin@sdccd.edu','Administrative'],
    [89019302,'Fred Walsh',8094, 'walsh@sdccd.edu','Marketing'],
    [10389205, 'John Johnson',7831, 'jjohnson@sdccd.edu','Sales']
]






// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
// if (localStorage.getItem('employees') !== null) {
//     employees = localStorage.getItem('employees'); 
// } else {localStorage.setItem = 'employees';

//  };




// GET DOM ELEMENTS
let empForm = document.querySelector('#addForm');
let empTable= document.querySelector('#employees');
let empCount= document.querySelector('#empCount');

   // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
   buildGrid(employees);





// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES
    let empID = document.querySelector('#id').value;
    let empName = document.querySelector('#name').value;
    let empExt  = document.querySelector('#extension').value;
    let empEmail = document.querySelector('#email').value;
    let empDept  = document.querySelector('#department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    //this array will be added into the main array
    let employeesArray = [empID, empName, empExt, empEmail, empDept];
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(employeesArray);
    // BUILD THE GRID
    // when the employee is added
    buildGrid(employees);

    // RESET THE FORM
    document.querySelector('#addForm').reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
});


// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {

        }
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        delR = (e.target.parentNode.parentNode.rowIndex);
        // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
        empTable.deleteRow(delR);
        // REMOVE EMPLOYEE FROM ARRAY
        // for( var i = 0; i < employee.length; i++)
        // employee.splice(i, 1);
        employees.splice(delR - 1,1);
        // BUILD THE GRID when an employee is deleted
        buildGrid(employees)
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(employees) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
   
    // empTable.splice(tbody);

    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (employee of employees) {
    tbody.innerHTML += `
    <tr>
        <td>${employee[0]}</td>
        <td>${employee[1]}</td>
        <td>${employee[2]}</td>
        <td>${employee[3]}</td>
        <td>${employee[4]}</td>
        <td><button class = "btn btn-sm btn-danger delete">X</button></td>
    </tr>
`;
    } // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);
    // UPDATE EMPLOYEE COUNT
     empCount.value = `(${employees.lenght})`;
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify('employees'));
    JSON.parse(localStorage.getItem('employees'));

};
