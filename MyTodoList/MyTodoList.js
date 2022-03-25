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
    var temp = lastDate.getDate;
    return temp;
}
const localSave = (str,key) => {
    localStorage.setItem(key, str);
}//localsave에서 저장하는 방법
const localLoad = (key) => {
    let str = localStorage.getItem(key);
    if(str == null)
        str = "";
    return str;
}
const localRemove = (key) =>{
    localStorage.removeItem(key);
}
const addButton = () => {
var str = "";``
    for (let i = 1; i < 31; i++) {
        const addBut = document.getElementById(`todo-add-${i}`);
        str = localLoad(i);
        console.log(str);
        addBut.addEventListener(`click`, () => {
            let value = document.getElementById(`todoinput-${i}`).value;
            str +=`<li> ${value} </li>`;
            localSave(str,i);
            let k = document.getElementById(`todo-list-${i}`);           
            k.innerHTML = str;
        }); 
    }

}
const dleButton = () => {
        for (let i = 1; i < 31; i++) {
            const delBut = document.getElementById(`todo-delet-${i}`);          
            delBut.addEventListener(`click`, () => {
              localRemove(i);
              let k = document.querySelector(`li`);        
               k.parentNode.innerHTML = "";
            }); 
        }
    
    }

const week = () => {
    var str = "<table>";
    console.log(`${lastDate}`);
    const weekKor = (i) => {
        let otion = i % 7;
        var strW;
        switch (otion) {
            case 5:
                strW = "토"
                break;
            case 6:
                strW = "일"
                break;
            case 0:
                strW = "월"
                break;
            case 1:
                strW = "화"
                break;
            case 2:
                strW = "수"
                break;
            case 3:
                strW = "목"
                break;
            case 4:
                strW = "금"
                break;

        }
        return strW;
    }
    for (let i = 1; i <= 31; i++) {
        //addButton(i);
        if (i % 7 == 6) {
            str += `<tr><td id="todo-date">${i}<br><font color=#FF0000>${weekKor(i)}</td>
            <td id="todo-color">&nbsp;</td>
            <td><input type="text" id="todoinput-${i}">
                <input type="button" id="todo-add-${i}" value="등록"><br>
                <input type="button" id="todo-delet-${i}" value="모두삭제"></td>
                <td><div id="todo-list-${i}">${localLoad(i)}</div></td>
        </tr>`;
        }//일요일
        else if (i % 7 == 5) {
            str += `<tr><td id="todo-date">${i}<br><font color=#0000FF>${weekKor(i)}</td>
            <td id="todo-color">&nbsp;</td>
            <td><input type="text" id="todoinput-${i}">
                <input type="button" id="todo-add-${i}" value="등록"><br>
                <input type="button" id="todo-delet-${i}" value="모두삭제"></td>
            <td><div id="todo-list-${i}">${localLoad(i)}</div></td>
        </tr>`;
        }//토요일
        else {
            str += `<tr><td id="todo-date">${i}<br>${weekKor(i)}</td>
            <td id="todo-color">&nbsp;</td>
            <td><input type="text" id="todoinput-${i}">
                <input type="button" id="todo-add-${i}" value="등록"><br>
                <input type="button" id="todo-delet-${i}" value="모두삭제"></td>
                <td><div id="todo-list-${i}">${localLoad(i)}</div></td>
        </tr>`;
        }
    }
    str += `</table>`
    console.log(str);
    return str;
}
const titleMonth = () => {
    var temp = year() + "-" + month();
    return temp;
}
// var tag = {
//      table: document.querySelector("#todo-list-table")
// }
//Todo.year;
//console.log("dd" + Todo.year)//
//tag.table.innerHTML = week;

//week();

var i = document.getElementById("todo-list");
var j = document.getElementById("todo-year-month")
i.innerHTML = week();
j.innerHTML = titleMonth();
addButton();