const idList = [];
let users = [];

const user1 = {
	id: 1,
	name: "John Doe",
	age: 30,
	gender: "Male",
	designation: "Developer",
	photoURL:
		"https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-8-3.jpg",
};

const user2 = {
	id: 2,
	name: "Jane Smith",
	age: 28,
	gender: "Female",
	designation: "Manager",
	photoURL:
		"https://www.losingcontrol.org/wp-content/uploads/2017/05/speaker-1.jpg",
};

users.push(user1);
users.push(user2);
reloadTable(users);

function addToTable(empData) {
	let addRow = `
                    <tr>
                        <td>${empData.id}</td>
                        <td>${empData.name}</td>
                        <td>${empData.age}</td>
                        <td>${empData.gender}</td>
                        <td>${empData.designation}</td>
                        <td>
                            <i class="fa-solid fa-pen-to-square fa-lg table-button edit-button"  onclick = 'editData(${empData.id}, "edit")'></i>
                            <i class="fa-solid fa-trash fa-lg table-button delete-button delete-icon"  onclick = 'deleteData(${empData.id})'></i>
                            <i class="fa-solid fa-eye fa-lg table-button view-button" value = "${empData.id}" onclick = 'editData(${empData.id},"view")'></i>
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
	});

	console.log(tableData);

	let table = document.getElementById("table");
	table.innerHTML = tableData;
}

// ----------------validation functions----------------------------------

function idValidation(action) {
	let target, source;
	console.log(action);

	if (action == "insert") {
		source = document.getElementById("empId");
		target = document.getElementById("id-validation");
	} else {
		source.value = document.getElementById("empIdPopup").value;
		target.innerText = document.getElementById("id-valid-popup").innerText;
	}

	const idPattern = /^\d+$/; // Regular expression for numbers only

	if (idPattern.test(source.value)) {
		target.innerText = "";
		return true;
	} else {
		target.innerText = "invalid ID";
		return false;
	}
}

function nameValidation(action) {
	let source, target;

	if (action == "insert") {
		source = document.getElementById("empName");
		target = document.getElementById("name-validation");
	} else {
		source = document.getElementById("empNamePopup");
		target = document.getElementById("name-valid-popup");
	}
	target.innerText = "";
	const namePattern = /^[A-Za-z\s]+$/; // Regular expression for letters and spaces only

	if (namePattern.test(source.value)) {
		target.innerText = "";
		return true;
	} else {
		target.innerText = "Invalid Name";
		return false;
	}
}

function ageValidation(action) {
	let source, target;
	console.log(action);
	if (action == "insert") {
		target = document.getElementById("age-validation");
		source = document.getElementById("empAge");
	} else {
		target = document.getElementById("age-valid-popup");
		source = document.getElementById("empAgePopup");
	}
	console.log("here");
	target.innerText = "";

	const ageValue = parseInt(source.value);
	console.log(ageValue);

	if (ageValue >= 18 && ageValue <= 60) {
		target.innerText = "";
		return true;
	} else {
		target.innerText = "invalid age";
		return false;
	}
}

function genderValidation(action) {
	let source, target;

	if (action == "insert") {
		source = document.getElementById("empGender");
		target = document.getElementById("gender-validation");
	} else {
		source = document.getElementById("empGenderPopup");
		target = document.getElementById("gender-valid-popup");
	}
	target.innerText = "";
	const genderValue = source.value;

	if (genderValue == "Select") {
		target.innerText = "Select Gender";
		return false;
	} else {
		target.innerText = "";
		return true;
	}
}

function designationValidation(action) {
	let source, target;

	if (action == "insert") {
		source = document.getElementById("empDesignation");
		target = document.getElementById("designation-validation");
	} else {
		source = document.getElementById("empDesignationPopup");
		target = document.getElementById("designation-valid-popup");
	}

	target.innerText = "";
	const designationValue = source.value;

	if (designationValue == "Select") {
		target.innerText = "Select Designation";
		return false;
	} else {
		target.innerText = "";
		return true;
	}
}

function urlValidation(action) {
	let source, target;

	if (action == "insert") {
		source = document.getElementById("empPhotoURL");
		target = document.getElementById("url-validation");
	}
	const imageUrl = source.value;
	const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"]; // Supported image extensions

	// Check if the URL ends with a valid image extension
	const isValidImage = imageExtensions.some((extension) =>
		imageUrl.toLowerCase().endsWith(extension)
	);

	if (isValidImage) {
		target.innerText = "";
		return true;
	} else {
		target.innerText = "invalid url";
		return false;
	}
}

//  ---------CRUD Operatins -----------------

function deleteData(id) {
	console.log("omkar", id);

	users = users.filter((user) => {
		return user.id != id;
	});
	reloadTable(users);
}

function toggleInit() {
	document.getElementById("empIdPopup").readOnly = false;
	document.getElementById("empNamePopup").readOnly = false;
	document.getElementById("empAgePopup").readOnly = false;
	document.getElementById("empGenderPopup").disabled = false;
	document.getElementById("empDesignationPopup").disabled = false;
	document.getElementById("empPhotoURLPopup").readOnly = false;
	document.getElementById("popup-submit-btn").disabled = false;
}

function togglePopup() {
	const popup = document.getElementById("popupContainer");
	popup.style.display = popup.style.display === "none" ? "block" : "none";
	document.getElementById("popup-close-btn").disabled = false;
}

function editData(id, editType) {
	toggleInit();
	const index = users.findIndex((user) => {
		return user.id == id;
	});

	document.getElementById("empIdPopup").value = users[index].id;
	document.getElementById("empNamePopup").value = users[index].name;
	document.getElementById("empAgePopup").value = users[index].age;
	document.getElementById("empGenderPopup").value = users[index].gender;
	document.getElementById("empDesignationPopup").value =
		users[index].designation;
	document.getElementById("empPhotoURLPopup").value = users[index].photoURL;
	document.getElementById(
		"emp-img"
	).innerHTML = `<img class="emp-img" alt="Users Image" src = "${users[index].photoURL}">`;

	console.log("editType", editType);

	if (editType == "view") {
		console.log("view-hew");
		document.getElementById("empIdPopup").readOnly = true;
		document.getElementById("empNamePopup").readOnly = true;
		document.getElementById("empAgePopup").readOnly = true;
		document.getElementById("empGenderPopup").disabled = true;
		document.getElementById("empDesignationPopup").disabled = true;
		users[index].designation;
		document.getElementById("empPhotoURLPopup").readOnly = true;
		document.getElementById("popup-submit-btn").disabled = true;
	}

	togglePopup();
}

function editSubmit() {
	const id = document.getElementById("empIdPopup").value;
	const index = users.findIndex((user) => {
		return user.id == id;
	});

	let user = users[index];
	console.log(user);

	users[index].name = document.getElementById("empNamePopup").value;
	users[index].age = document.getElementById("empAgePopup").value;
	users[index].gender = document.getElementById("empGenderPopup").value;
	users[index].designation = document.getElementById(
		"empDesignationPopup"
	).value;
	users[index].photoURL = document.getElementById("empPhotoURLPopup").value;

	console.log(users[index]);
	reloadTable(users);
	togglePopup();
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

	// check through all validations

	if (
		!idValidation("insert") ||
		!nameValidation("insert") ||
		!ageValidation("insert") ||
		!genderValidation("insert") ||
		!designationValidation("insert") ||
		!urlValidation("insert")
	) {
		alert("Invalid Input Alert");
		return;
	} else {
		let addRow = addToTable(employee);
		let table = document.getElementById("table");
		table.insertAdjacentHTML("beforeend", addRow);
		clearInputFields();
		console.log(users);
	}

	// note : keep a note to update the updateString addRow if anything changes
}
