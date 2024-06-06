interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "James",
    lastName: "Moyes",
    age: 35,
    location: "Los Angeles"
};

const student2: Student = {
    firstName: "Billy",
    lastName: "Butcher",
    age: 25,
    location: "San Francisco"
};

const studentsList: Array<Student> = [student1, student2];

// RENDER A TABLE FOR EACH ELEMENTS IN THE ARRAY, append a new row to the table

// create a function that would handle the table rendering, with html structure
function renderTable() {
    // create a table element and add border
    const table = document.createElement('table');

    // create table header
    const header = table.createTHead();
    // create header row
    const headerRow = header.insertRow(0);
    const firstNameHeader = document.createElement('th');
    const lastNameHeader = document.createElement('th');
    const ageHeader = document.createElement('th');
    const locationHeader = document.createElement('th');

    // set the placeholders for table
    firstNameHeader.textContent = "First Name";
    lastNameHeader.textContent = "Last Name";
    ageHeader.textContent = "Age";
    locationHeader.textContent = "Location";

    // Append the values to header row
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(lastNameHeader);
    headerRow.appendChild(ageHeader);
    headerRow.appendChild(locationHeader);

    // create the table body
    const tableBody = table.createTBody();

    // Iterate over the studentsList and create a row for each student
    studentsList.forEach((student) => {
        // create a row canvas
        const row = tableBody.insertRow();

        // create cells from row
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        // render contents from array into the cells
        cell1.textContent = student.firstName;
        cell2.textContent = student.lastName;
        cell3.textContent = `${student.age}`;
        cell4.textContent = student.location; 
    });

    // append the table to the html document body or a specific div
    document.body.appendChild(table);
}

// call the function to render the table
renderTable();