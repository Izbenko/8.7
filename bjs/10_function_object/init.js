
document.getElementById('generator').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('bornOutput').innerText = initPerson.born;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
})

document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = '-';
    document.getElementById('surnameOutput').innerText = '-';
    document.getElementById('genderOutput').innerText = '-';
    document.getElementById('bornOutput').innerText = '-';
    document.getElementById('professionOutput').innerText = '-';
    document.getElementById('patronymicOutput').innerText = '-';
})

