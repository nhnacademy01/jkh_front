"use strict"
const date = new Date()
const year = () => {
    const year = date.getFullYear();

    return year;
}
const month = () => {
    const month = date.getMonth() + 1;
    return month;
}
const lastDate = () => {
    const lastDate = new Date(year, month, 0);
    var temp =lastDate.getDate;
    return temp;
}
const addButton = (i) =>  {
    const addBut = document.createElement(`todo-add-${i}`);
    addBut.appendChild(`click`,()=>{
        let str = document.getElementById(`#todoinput`).value;
        document.getElementById(`#todo-list-${i}`).innerHTML = str;
    })
}
const week = () => {
    var str = "<table>";
    console.log(`${lastDate}`);
    const weekKor = (i) => {
        let otion = i % 7;
        var strW;
        switch (otion) {
            case 0:
                strW = "토"
                break;
            case 1:
                strW = "일"
                break;
            case 2:
                strW = "월"
                break;
            case 3:
                strW = "화"
                break;
            case 4:
                strW = "수"
                break;
            case 5:
                strW = "목"
                break;
            case 6:
                strW = "금"
                break;

        }
        return strW;
    }
    for (let i = 1; i <= 31; i++) {

        if (i % 7 == 1) {
            str += `<tr><td id="todo-date">${i}<br><font color=#FF0000>${weekKor(i)}</td>
            <td id="todo-color">&nbsp;</td>
            <td><input type="text" id="todoinput">
                <input type="button" id="todo-add-${i}" value="등록"><br>
                <input type="button" id="todo-delet-${i}" value="모두삭제"></td>
            <td><ul id="todo-list-${i}"></td>
        </tr>`;
        }//일요일
        else if (i % 7 == 0) {
            str += `<tr><td id="todo-date">${i}<br><font color=#0000FF>${weekKor(i)}</td>
            <td id="todo-color">&nbsp;</td>
            <td><input type="text" id="todoinput">
                <input type="button" id="todo-add-${i}" value="등록"><br>
                <input type="button" id="todo-delet-${i}" value="모두삭제"></td>
            <td><ul id="todo-list-${i}"></td>
        </tr>`;
        }//토요일
        else {
            str += `<tr><td id="todo-date">${i}<br>${weekKor(i)}</td>
            <td id="todo-color">&nbsp;</td>
            <td><input type="text" id="todoinput">
                <input type="button" id="todo-add-${i}" value="등록"><br>
                <input type="button" id="todo-delet-${i}" value="모두삭제"></td>
            <td><ul id="todo-list-${i}"></td>
        </tr>`;
        }
    }
    str += `</table>`
    console.log(str);
    return str;
}

// var tag = {
//      table: document.querySelector("#todo-list-table")
// }
//Todo.year;
//console.log("dd" + Todo.year)//
//tag.table.innerHTML = week;

//week();

var i = document.getElementById("todo-list");
i.innerHTML = week();