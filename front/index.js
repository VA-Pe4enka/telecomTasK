function makeStruct(names) {
    names = names.split(' ');
    var count = names.length;

    function constructor() {
        for (var i = 0; i < count; i++) {
            this[names[i]] = arguments[i];
        }
    }

    return constructor;
}

tip = new makeStruct("surname", "name", "patronymic", "phoneNum", "text");

function onClickButton() {

    let data = new tip;
    data.surname = document.getElementById('surname').value;
    data.name = document.getElementById('name').value;
    data.patronymic = document.getElementById('patronymic').value;
    data.phoneNum = document.getElementById('phoneNum').value;
    data.text = document.getElementById('text').value;

    console.log(data);

    return false;
}