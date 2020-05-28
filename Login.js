
//グローバルElementオブジェクト
var userId = document.getElementById('userName');
var password = document.getElementById('passWord');
var errlbl = document.getElementById('errlbl');
var serverErrlbl = document.getElementById('serverErrlbl');
var submit_btn = document.getElementById('submit');
var cancel_btn = document.getElementById('cancel');

function valCheck() {

    serverErrlbl.hidden = 'hidden';

    //ユーザIDテキストボックスの必須チェック
    if (userId.value === null || userId.value === "") {
        userId.style.backgroundColor = 'red';
    }
    else {
        userId.style.backgroundColor = "";
    }

    //パスワードテキストボックスの必須チェック
    if (password.value === null || password.value === "") {
        password.style.backgroundColor = 'red';
    }
    else {
        password.style.backgroundColor = "";
    }

    if (userId.style.backgroundColor === 'red' ||
        password.style.backgroundColor === 'red') {

        errlbl.hidden = '';
        errlbl.innerText = 'ユーザID、またはパスワードが正しくありません';
        errlbl.style.color = 'red';

        event.preventDefault();
    }
    else {
        errlbl.hidden = 'hidden';
    }

    //画面遷移
    if (userId.style.backgroundColor === "" && password.style.backgroundColor === "") {

        location.href = 'menu';
        //window.open('../html/description.html');
    }
};

function clear() {
    userId.value = '';
    userId.style.backgroundColor = '';
    password.value = '';
    password.style.backgroundColor = '';

    errlbl.hidden = 'hidden';
    serverErrlbl.hidden = 'hidden';
};

//イベント登録
submit_btn.addEventListener("click", valCheck);
cancel_btn.addEventListener("click", clear);




