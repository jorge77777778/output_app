var Person = function (name) {
    this.name = name;
    this.sayHello = function () {
        console.log('Hello,' + this.name + '!');
    };
};

var tom = new Person('tom');
console.log(tom.name);
tom.sayHello();
var aaa = { name: "aaa" };
console.log(tom.valueOf());

function appendElement() {
    var divs = document.getElementsByTagName('div');

    var div = divs.item(0);

    console.log(divs);

    var p = document.createElement('p');
    p.innerHTML = "append paragraph";
    div.insertBefore(p, div.firstChild);
    div.appendChild(p);
}

window.alert("alert");
window.prompt("prompt");
window.confirm("confirm ");
window.open("");





//window.onload = function () {
//    var main = document.getElementById('main');
//    console.log(main);
//    console.log(document);
//    var p = document.getElementsByTagName('p');
//    console.log(p);
//    var firstChild = main.firstElementChild;
//    console.log(firstChild);
//    var lastChild = main.lastElementChild;
//    console.log(lastChild);
//    var childNodes = main.children;
//    console.log(childNodes);
//};

//function dragHandler(event) {

//    var pElement = document.getElementById("disp");

//    event.dataTransfer.setData("text", "COIN");

//    pElement.innerHTML = "dragged!";

//}

//function dropHandler(event) {

//    var pElement = document.getElementById("disp");

//    id = event.dataTransfer.getData('text');

//    pElement.innerHTML = id + "dropped!";

//    event.preventDefault();
//}



////var checkBMI = function (height, weight) {

////    var bmi = weight / (height * height);
////    console.log('BMIは' + bmi + 'です。');

////    if (bmi >= 25) {
////        console.log('これは太りすぎです。');
////    } else if (bmi < 18.5) {
////        console.log('これは痩せすぎです。');
////    } else {
////        console.log('これは標準体重です。');
////    }

////};

////checkBMI(1.67, 73);

////var sayHello = function (str) {
////    var name = str || 'michel'
////    console.log('Hello,' + name + '!');
////}

////sayHello('hk');
////sayHello();

////var array = ['a', 'b', 'c', 'd']

////console.log(array);

////array.push('e');

////console.log(array);

////array.splice(0, 1);

////console.log(array);

////var person = {
////    name: 'Tom',
////    sex: 'man',
////    email: 'hoge@fuga.com',
////    age: 23,
////    sayHello: function () {
////        console.log('hello,' + this.name);
////        console.log(this);
////    }
////};

////person.sayHello();