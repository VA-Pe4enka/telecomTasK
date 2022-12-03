
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
    data.surname = $('#surname').val();
    data.name = $('#name').val();
    data.patronymic = $('#patronymic').val();
    data.phoneNum = $('#phoneNum').val();
    data.text = $('#text').val();

    console.log(data);

    $.ajax({
        type: 'POST',
        url: "http://localhost:8080/data",
        data: data,
        success: "",
        dataType: dataType
    });


    return false;
}