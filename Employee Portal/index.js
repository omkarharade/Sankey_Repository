const idList = [];
let users = [];

function updateTable(users){

    users.forEach(employee => {
        let addRow = `
                    <tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.designation}</td>
                        <td>
                            <button onclick = 'editData()' class="table-button">Edit</button>       
                            <button class="table-button">Delete</button>
                            <button class="table-button">View</button>
                        </td>
                    </tr>
        `
        let table = document.getElementById("table");
        table.insertAdjacentHTML('beforeend', addRow);
    });
}

updateTable(users); // calling the updateTable function to load existing users

function deleteData(id){
    let tableData = "";
    let updatedUsers = users.filter((employee) => {
        employee.id == id;
    });

    updatedUsers.forEach(employee => {
        let addRow = `
                    <tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.designation}</td>
                        <td>
                            <td>
                            <button onclick = 'editData()' class="table-button">Edit</button>       
                            <button class="table-button">Delete</button>
                            <button class="table-button">View</button>
                        </td>
                        </td>
                    </tr>
        `
        tableData += addRow;
    });

    document.getElementById('table').innerHTML = tableData;
    users = updatedUsers;

}

function editData(){
    console.log("hello");
}

function addEmployee(){
    let inputId = document.getElementById("empId").value;
    let inputName = document.getElementById("empName").value;
    let inputAge = document.getElementById("empAge").value;
    let inputGender = document.getElementById("empGender").value;
    let inputDesignation = document.getElementById("empDesignation").value;
    let inputPhotoURL = document.getElementById("empPhotoURL").value;

    const employee = {};
    employee.id = inputId;
    employee.name = inputName;
    employee.age = inputAge;
    employee.gender = inputGender;
    employee.designation = inputDesignation;
    employee.photoURL = inputPhotoURL 

    users.push(employee); // pushed the input employee details into the array;


    console.log("id", employee.id);
    console.log("name", employee.name);
    console.log("age", employee.age);
    console.log("gender", employee.gender);
    console.log("designation", employee.designation);

    // note : keep a note to update the updateString addRow if anything changes

    let addRow = `
    <tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.designation}</td>
                        <td>
                        <td>
                        <button onclick = 'editData()' class="table-button">Edit</button>       
                        <button class="table-button">Delete</button>
                        <button class="table-button">View</button>
                    </td>
                        </td>
                    </tr>
    `
    let table = document.getElementById("table");
    table.innerHTML = addRow;

    document.getElementById("empId").value = "";
    document.getElementById("empName").value = "";
    document.getElementById("empAge").value = "";
    document.getElementById("empGender").value = "";
    document.getElementById("empDesignation").value = "";
    document.getElementById("empPhotoURL").value = "";
}

