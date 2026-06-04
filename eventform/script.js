const form = document.querySelector("#eventForm");
const userType = document.querySelector("#userType");
const eventCodeStudent = document.querySelector("#eventCodeStudent");
const eventCodeGuest = document.querySelector("#eventCodeGuest");
const output = document.querySelector("#output");

function updateEventCode() {
    const value = userType.value;

    // Shows student ID if user is a student
    // and acces code if user is a guest
    if(value === "student") {
        eventCodeStudent.hidden = false;
        eventCodeStudent.required = true;
    } else if(value ==="guest") {
        eventCodeStudent.hidden = true;
        eventCodeStudent.required = false;
        eventCodeGuest.hidden = false;
        eventCodeGuest.required = true;
    } else {
        eventCodeStudent.hidden = true;
        eventCodeStudent.required = false;
        eventCodeGuest.hidden = true;
        eventCodeGuest.required = false;
    }
}

userType.addEventListener("change", updateEventCode);
updateEventCode();


// Requires the user to choose a date later than the current date
function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";
    
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.userType.value;
    const date = form.date.value;
    const studentID = form.studentID.value.trim();
    const accessCode = form.accessCode.value.trim();

    // Input Validation
    if(type === "") {
        output.textContent = "Please select a type.";
        return;
    }

    if(type === "student" && studentID.length != 9) {
        output.textContent = "Student I# must be 9 digits long";
        return;
    }

    if(type === "guest" && accessCode !== "EVENT131") {
        output.textContent = "Please enter a valid access code.";
        return;
    }

    if(isPastDate(date)) {
        output.textContent = "Please choose a date that has not passed.";
        return;
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Event Date: ${date}</p>
    <p>Type: ${type}</p>
    `;

    form.reset();
    updateEventCode();
});