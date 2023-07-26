
async function getUsers() {

    let url = 'https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817';
    try {
        let res = await fetch(url);
        let resJSON = await res.json();
        var htmlTable = '<tr> <th>Name</th> <th>Office</th> <th>Position</th> <th>Salary</th> </tr>';

        const resData = resJSON.data;
        console.log("resData", resData)
        resData.forEach((data) => {
            htmlTable = htmlTable + `<tr> <td> ${data.name} </td>  <td> ${data.office} </td>  <td> ${data.position} </td> <td> ${data.salary} </td></tr>`
        })

        console.log(htmlTable)
        const dataTable = document.getElementById("data-table");
        dataTable.innerHTML = htmlTable;

    } catch (error) {
        console.log(error);
    }
}

getUsers();
