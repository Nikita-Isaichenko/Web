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


    form.appendChild(button);
    form.style.height = '5%';
    button.type = 'button';
    button.value = 'Переход на форму';

    // Стрелочная функция
    button.onclick = () => {open("../pages/forms.html", '_self')};

    div_4.id = 'tree';
    div_4.style.height = '45%';
    div_4.style.fontSize = '13px';
    el.appendChild(div_4);
    el.appendChild(form);
    el.appendChild(div_1);
    
    div_2.appendChild(div_3);
    div_1.appendChild(div_2);
    
    div_1.id='flag_rus';
    div_1.style.height = '50%';
    div_1.style.border = '1px solid black';
    div_1.style.margintop = '50%';
    div_1.style.backgroundColor = 'red'

    div_2.style.height = '66%'
    div_2.style.backgroundColor = 'blue';

    div_3.style.backgroundColor = 'white';
    div_3.style.height = '50%';
}
