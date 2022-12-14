function generateTree(elem) {
    var child = elem.firstElementChild;
    var ul = document.createElement('ul');
    while(child) {
        var li = document.createElement('li');
        li.innerText = '<'+child.tagName+'>';
        var list = generateTree(child);
        li.appendChild(list);
        ul.appendChild(li);
        child = child.nextElementSibling;
    }

    var place = document.getElementById('tree');
    place.appendChild(ul);
    return ul;
}

function generateElements(el){
    var div_1 = document.createElement('div');
    var div_2 = document.createElement('div');
    var div_3 = document.createElement('div');
    var div_4 = document.createElement('div');
    var form = document.createElement('form');
    var button = document.createElement('input');
    var span_1 = document.createElement('span');
    var span_2 = document.createElement('span');
    var span_3 = document.createElement('span');

    span_1.innerText = 'div_1';
    span_2.innerText = 'div_2';
    span_3.innerText = 'div_3';

    form.appendChild(button);
    form.style.height = '5%';
    form.style.alignContent = 'center';

    button.type = 'button';
    button.value = 'Переход на форму';
    button.style.marginLeft = '50%';

    // Стрелочная функция
    button.onclick = () => {open("../pages/forms.html", '_self')};

    div_4.id = 'tree';
    div_4.style.height = '45%';
    div_4.style.fontSize = '13px';
    div_4.className = 'creating_div';


    el.appendChild(div_4);
    el.appendChild(form);
    el.appendChild(div_1);

    div_3.appendChild(span_3);
    
    div_2.appendChild(div_3);
    div_2.appendChild(span_2);

    div_1.appendChild(div_2);
    div_1.appendChild(span_1);
    
    div_1.id='div_1';
    div_1.style.height = '50%';
    div_1.style.border = '1px solid black';
    div_1.style.margintop = '50%';
    div_1.style.backgroundColor = 'red'
    div_1.className = 'creating_div';

    div_2.id='div_2';
    div_2.style.height = '66%'
    div_2.style.backgroundColor = 'blue';
    div_2.className = 'creating_div';

    div_3.id='div_3';
    div_3.style.backgroundColor = 'white';
    div_3.style.height = '50%';
    div_3.className = 'creating_div';
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
