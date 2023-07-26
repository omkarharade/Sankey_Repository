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
                            <i class="fa-solid fa-eye fa-lg table-button view-button" value = "${empData.id}" onclick = 'viewData(${empData.id},"view")'></i>
                    </tr>`;
	return addRow;
}

// function to clear the input fields

function clearInputFields() {
	document.getElementById("empId").value = "";
	document.getElementById("empName").value = "";
	document.getElementById("empAge").value = "";
	document.getElementById("empGender").value = "Select";
	document.getElementById("empDesignation").value = "Select";
	document.getElementById("empPhotoURL").value = "";
}

function reloadTable(users) {
	let tableData = "";
	users.forEach((employee) => {
		let addRow = addToTable(employee);

		tableData += addRow;
	});

	let table = document.getElementById("table");
	table.innerHTML = tableData;
}

// ----------------validation functions----------------------------------

function idValidation(action) {
	let target, source;

	if (action == "insert") {
		source = document.getElementById("empId");
		target = document.getElementById("id-validation");
	} else {
		source.value = document.getElementById("empIdPopup").value;
		target.innerText = document.getElementById("id-valid-popup").innerText;
	}

	const idPattern = /^\d+$/; // Regular expression for numbers only

	if (idPattern.test(source.value)) {
		let idExists = false;

		users.forEach(user => {
			if (user.id == source.value) {
				idExists = true;
			}
		});

		if (idExists) {
			target.innerText = "ID already exists";
			return false;
		}
		else {
			target.innerText = "";
			return true;
		}
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
	if (action == "insert") {
		target = document.getElementById("age-validation");
		source = document.getElementById("empAge");
	} else {
		target = document.getElementById("age-valid-popup");
		source = document.getElementById("empAgePopup");
	}
	target.innerText = "";

	const ageValue = parseInt(source.value);

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

	if (genderValue == "Select" || genderValue == "") {
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

	if (designationValue == "Select" || designationValue == "") {
		target.innerText = "Select Designation";
		return false;
	} else {
		target.innerText = "";
		return true;
	}
}

function processImg(src) {

	const img = new Image();
	img.src = src;

	return new Promise((resolve) => {
		img.onerror = () => {
			return resolve(false);
		}
		img.onload = () => {
			return resolve(true);
		}
	});

}

async function urlValidation(action) {
	let source, target;

	console.log(1)
	if (action == "insert") {
		source = document.getElementById("empPhotoURL");
		target = document.getElementById("url-validation");
	}
	else {
		source = document.getElementById("empPhotoURLPopup");
		target = document.getElementById("url-valid-popup");
	}

	console.log(2)


	if (source.value == "") return false;

	console.log(3)


	const imageUrl = source.value;

	console.log(4)


	// const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"]; // Supported image extensions

	// // Check if the URL ends with a valid image extension
	// const isValidImage = imageExtensions.some((extension) =>
	// 	imageUrl.toLowerCase().endsWith(extension)
	// );

	const img = new Image();
	img.src = imageUrl;

	console.log(5)


	let isValid = await processImg(imageUrl);
	console.log(isValid)

	console.log(6)


	console.log("this is isValid", isValid)

	if (isValid) {
		console.log(7)

		target.innerText = "";
		return true;

	} else {
		console.log(8)

		target.innerText = "invalid url";
		return false;
	}
}

//  ---------CRUD Operatins -----------------

function deleteData(id) {

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

	if (editType == "view") {
		document.getElementById("empIdPopup").readOnly = true;
		document.getElementById("empNamePopup").readOnly = true;
		document.getElementById("empAgePopup").readOnly = true;
		document.getElementById("empGenderPopup").disabled = true;
		document.getElementById("empDesignationPopup").disabled = true;
		users[index].designation;
		document.getElementById("empPhotoURLPopup").readOnly = true;
		$("#popup-submit-btn").prop("disabled", true)
	}

	togglePopup();
}

function viewData(id) {
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


	document.getElementById("empIdPopup").readOnly = true;
	document.getElementById("empNamePopup").readOnly = true;
	document.getElementById("empAgePopup").readOnly = true;
	document.getElementById("empGenderPopup").disabled = true;
	document.getElementById("empDesignationPopup").disabled = true;
	users[index].designation;
	document.getElementById("empPhotoURLPopup").readOnly = true;
	$( "#popup-submit-btn" ).css('background-color', 'grey')
	$( "#popup-submit-btn" ).disabled = true;

	togglePopup()

}

function editSubmit() {
	const id = document.getElementById("empIdPopup").value;
	const index = users.findIndex((user) => {
		return user.id == id;
	});

	let user = users[index];

	users[index].name = document.getElementById("empNamePopup").value;
	users[index].age = document.getElementById("empAgePopup").value;
	users[index].gender = document.getElementById("empGenderPopup").value;
	users[index].designation = document.getElementById(
		"empDesignationPopup"
	).value;
	users[index].photoURL = document.getElementById("empPhotoURLPopup").value;

	reloadTable(users);
	togglePopup();
}

// add employee on successfull entry of new data
async function addEmployee() {
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
	const urlValid = await urlValidation("insert");

	if (
		!idValidation("insert") ||
		!nameValidation("insert") ||
		!ageValidation("insert") ||
		!genderValidation("insert") ||
		!designationValidation("insert") ||
		!urlValid
	) {
		alert("Invalid Input Alert");
		console.log("here-2")

	} else {
		console.log("huihui")
		users.push(employee);
		let addRow = addToTable(employee);
		let table = document.getElementById("table");
		table.insertAdjacentHTML("beforeend", addRow);
		clearInputFields();
		console.log(users);
		console.log("here-2")

	}

	// note : keep a note to update the updateString addRow if anything changes
}

function searchQuery() {
	const query = document.getElementById("search-query").value;
	console.log(query);

	let searchResults = users.filter((user) => {
		if (
			user.name.startsWith(query) ||
			user.gender.startsWith(query) ||
			user.designation.startsWith(query) ||
			(user.id == query) ||
			(user.age == query)
		) {
			return true;
		}
		else return false;
	});

	console.log(searchResults);
	reloadTable(searchResults)
}
