function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Получение среднего геометрического элементов массива
function geometricMeanElements(obj1, obj2){
    var list = []
    var proizv = 1;

    for (var i = 0; i < 15; i++){
        var num = getRandomInt(1, 100);
        proizv *= num;
        list.push(num);
    }

    obj1.value = list;
    obj2.value = Math.pow(proizv, list.length**-1);
}

// Часы на странице
function clock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;
    setTimeout(clock, 1000);
}

// Функция для вывода полного времени
function fullTime(){
    var date = new Date();
    var time = date.toLocaleString();
    document.getElementById("fullTime").innerHTML = time;
    setTimeout(fullTime, 1000);
}

// Функция для вывода даты c названиями месяцев
function cloclWithNameMonth(){
    var s;
    var date = new Date();
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var year = date.getFullYear();
    var month = date.getMonth();

    switch (month){
        case 0: s ="января"; break;
        case 1: s ="февраля"; break;
        case 2: s ="марта"; break;
        case 3: s ="апреля"; break;
        case 4: s ="мая"; break;
        case 5: s ="июня"; break;
        case 6: s ="июля"; break;
        case 7: s ="августа"; break;
        case 8: s ="сентября"; break;
        case 9: s ="октября"; break;
        case 10: s ="ноября"; break;
        case 11: s ="декабря"; break;
    }

    var time = year + " " + s + " " + day + " " + hours + ":" + minutes + ":" + seconds;
    document.getElementById("date").innerHTML = time;
    setTimeout(cloclWithNameMonth, 1000);
}

// таймер
var hours = 0;
var minutes = 0;
var seconds = 0;
function timer(){
    
    seconds++;

    if (seconds > 59){
        seconds = 0;
        minutes++;
    }

    if (minutes > 59){
        minutes = 0;
        hours++;
    }

    var time = "На моей страничке Вы уже находитесь: "+hours + "ч " + minutes + "м " + seconds+"с";
    document.getElementById("timer").innerHTML = time;
    setTimeout(timer, 1000);
}

function determineNumberOfWeeksBeforeSeptember_1(){
    var currentDate = new Date();
    // сентябрь - 8 месяц, так как нумерация начинается с 0
    var september = 8;
    var year = currentDate.getFullYear();

    if (currentDate.getMonth() < september){
        var targetDate = new Date(year, september, 1);
    }else{
        var targetDate = new Date(year + 1, september, 1);
    }

    var weeks = Math.ceil((targetDate - currentDate) / (1000 * 60 * 60 * 24 * 7));

    document.getElementById("weeks").innerHTML = weeks + " недель";
}

function MouseMove_task3(){
    document.getElementById("1").innerHTML = "Симпатичная штучка";
}

function MouseOut_task4(){
    var text = document.getElementById("text");
    var field = document.getElementById("field");
    var x = event.x;
    var y = event.y;
    var width = field.offsetWidth;
    var height = field.clientHeight;
    if (x > width){
        x = width;
    }
    if(y > height){
        y = height;
    }
    
    text.style.left = x + "px";
    text.style.top = y + "px"; 
}