const idList = [];
let users = [];

function addToTable(empData) {
	let addRow = `
                    <tr>
                        <td>${empData.id}</td>
                        <td>${empData.name}</td>
                        <td>${empData.age}</td>
                        <td>${empData.gender}</td>
                        <td>${empData.designation}</td>
                        <td>
                            <i class="fa-solid fa-pen-to-square fa-lg table-button edit-button" value = "${empData.id}"></i>
                            <i class="fa-solid fa-trash fa-lg table-button delete-button" value = "${empData.id}" onclick = "deleteData(this)"></i>
                            <i class="fa-solid fa-eye fa-lg table-button view-button" value = "${empData.id}"></i>
                    </tr>`;
	return addRow;
}

// function to clear the input fields

function clearInputFields() {
	document.getElementById("empId").value = "";
	document.getElementById("empName").value = "";
	document.getElementById("empAge").value = "";
	document.getElementById("empGender").value = "";
	document.getElementById("empDesignation").value = "";
	document.getElementById("empPhotoURL").value = "";
}

function reloadTable(users) {
	let tableData = "";
	users.forEach((employee) => {
		let addRow = addToTable(employee);
		tableData += addRow;

		let table = document.getElementById("table");
		table.innerHTML = tableData;
	});
}

// ----------------validation functions----------------------------------

function idValidation() {
	document.getElementById("id-validation").innerText = "";
	const idInput = document.getElementById("empId").value;
	const idPattern = /^\d+$/; // Regular expression for numbers only

	if (idPattern.test(idInput)) {
		document.getElementById("id-validation").innerText = "";
		return true; // The input is valid
	} else {
		document.getElementById("id-validation").innerText = "invalid ID";
		return false; // The input is not valid
	}
}

function nameValidation() {
	document.getElementById("name-validation").innerText = "";
	let nameInput = document.getElementById("empName").value;
	const namePattern = /^[A-Za-z\s]+$/; // Regular expression for letters and spaces only

	if (namePattern.test(nameInput)) {
		document.getElementById("name-validation").innerText = "";
		return true; // The input is valid
	} else {
		document.getElementById("name-validation").innerText = "Invalid Name";
		return false; // The input is not valid
	}
}

function ageValidation() {
	console.log("here");
	document.getElementById("age-validation").innerText = "";
	const ageDOM = document.getElementById("empAge");
	const ageValue = parseInt(ageDOM.value);
	console.log(ageValue);

	if (ageValue >= 18 && ageValue <= 60) {
		document.getElementById("age-validation").innerText = "";
	} else {
		document.getElementById("age-validation").innerText = "invalid age";
	}
}

function genderValidation() {
	document.getElementById("gender-validation").innerText = "";
	const genderDOM = document.getElementById("empGender");
	const genderValue = genderDOM.value;

	if (genderValue == "Select") {
		document.getElementById("gender-validation").innerText = "Select Gender";
	} else document.getElementById("gender-validation").innerText = "";
}

function designationValidation() {}

// calling the updateTable function to load existing users
reloadTable(users);

//  ---------CRUD Operatins -----------------

function deleteData(obj) {
	console.log(e);
	alert("hii");
	let tableData = "";
	const id = obj.value;
	console.log(id);

	// let updatedUsers = users.filter((employee) => {
	// 	employee.id == id;
	// });

	// updatedUsers.forEach((employee) => {
	// 	let addRow = addToTable(employee);
	// 	tableData += addRow;
	// });

	// document.getElementById("table").innerHTML = tableData;
	// users = updatedUsers;
	// reloadTable(users);
}

function editData() {
	console.log("hello");
}

// add employee on successfull entry of new data
function addEmployee() {
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
	employee.photoURL = inputPhotoURL;

	users.push(employee); // pushed the input employee details into the array;

	console.log("id", employee.id);
	console.log("name", employee.name);
	console.log("age", employee.age);
	console.log("gender", employee.gender);
	console.log("designation", employee.designation);

	// note : keep a note to update the updateString addRow if anything changes

	let addRow = addToTable(employee);
	let table = document.getElementById("table");
	table.insertAdjacentHTML("beforeend", addRow);

	clearInputFields();
}
