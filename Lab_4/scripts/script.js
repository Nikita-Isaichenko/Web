var addSpace = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
function generateTree(elem) {
    var tree = findChild(elem, "", "");
    document.getElementById("tree").innerHTML += tree;
}

function findChild(element, space, text)
{
    var count = element.childNodes.length;

    if (element.nodeName == "#text")
    {

        if (element.data.trim().replace("\n") != "") 
        {
            text = text + "<br>" + space + element.data;
        }
    }
    else
    {
        text = text + "<br>" + space + element.nodeName;
    }

    if (count == 0)
    {
        return text;
    }
    else if (count > 0)
    {
        for (var i = 0; i < count; i++)
        {
            text = findChild(element.childNodes[i], space+addSpace, text);
        }

        return text;
    }
}

function changeSex(obj){
    var sex = obj.value;
    var married = document.getElementById("Married");
    var notMarried = document.getElementById("NotMarried");

    if (sex == "Men"){
        married.innerText = "Женат";
        notMarried.innerText = "Не женат";
    }
    if (sex == "Woman"){
        married.innerText = "Замужем";
        notMarried.innerText = "Не замужем";
    }
}

function setMarginforText(){
    var texts = document.getElementsByClassName("text");
    var labels = document.getElementsByClassName("label_text");
    
    var max = 0;

    for (var i = 0; i < labels.length; i++){

        if (max < labels[i].offsetWidth){
            max = labels[i].offsetWidth;
        }    
    }

    for (var i = 0; i < texts.length; i++){
        if(texts[i].type == "radio") continue;
        texts[i].style.marginLeft = (max - labels[i].offsetWidth) + 10 + 'px';
    }
}

function Validation(obj){
    var text = obj.value;

    if (obj.id == "phoneNumber"){
        var reg = /^\8\d{10}$/;
        
    }
    else if (obj.id == "email"){
        var reg = /^[\w\.]+@[\w-]+\.[a-z]{2,3}$/i;
    }
    else{
        var reg = /^[а-яА-Я]+$/;
    }

    var result = reg.test(text);

    if (result == false){
        obj.style.backgroundColor = 'red';
    }
    else{
        obj.style.backgroundColor = 'green';
    }
}

function openForm(){
    open("../pages/forms.html", "_self");
}
