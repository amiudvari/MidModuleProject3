const companyList = [
    {company: "Company 1", since: 2024},
    {company: "Company 2", since: 2023},
    {company: "Company 3", since: 2022},
    {company: "Company 4", since: 2023},
    {company: "Company 5", since: 2024},
];

const ul = document.getElementById('company-list');

for (let company of companyList) {
    let companyName = document.createElement('li');
    companyName.textContent = company.company + " Has Been With Us Since: " + company.since + "!";
    ul.appendChild(companyName);
}

function formSubmission() {
    const addForm = document.getElementById('addForm');
    
    addForm.addEventListener('submit', () => {
        alert('Task has been added!');
    } );
}

    formSubmission();


    function loginButtonClick() {
    const loginButton = document.getElementById('loginButton');
    
    loginButton.addEventListener('click', () => {
        alert('This would be a box that would pop up where you can log in!');
    } );
}

loginButtonClick();

let myPopUp = document.getElementById('myPopUp');
let clickedSpan = document.getElementById('clicked');

document.getElementById('contactUs').addEventListener('click', () => {
    clickedSpan.innerText = 'Phone: 123-456-7890 or Email emailaddress@email.com';
    myPopUp.showModal();
});
