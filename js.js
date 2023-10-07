function changeColor() {
    var element = document.getElementsByTagName('button')[0];
    var newColor;

    if (element.textContent === 'Mints') {
        element.textContent = 'Mince';
        newColor = '#ff97a3'; // red
    } else {
        element.textContent = 'Mints'
        newColor = '#73ffd6'; // green
    }

    var cardBackground = document.getElementsByClassName('card')[0];
    cardBackground.style.backgroundColor = newColor;

    var imageSource = document.getElementsByTagName('img')[0];
    imageSource.src = window.location.href + element.textContent.toLowerCase()  + '.jpg'
    
    var buttonElement = document.getElementsByTagName('button')[0];
    buttonElement.style.backgroundColor = newColor
    buttonElement.style.border = '1px solid ' + newColor;

}

document.getElementsByTagName('button')[0].addEventListener('click', function(){
    changeColor();
})