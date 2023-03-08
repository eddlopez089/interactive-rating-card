document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByClassName('button-option');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(evt) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('selected');
            }
            this.classList.add('selected');
            console.log(this);
        }, false);
    }
    document.getElementById('btn__submit').addEventListener('click', function(evt) {
        let buttonSelected = document.querySelectorAll('.button-option.selected');
        if(!buttonSelected.length){
            alert('Select an option');
            return false;
        }
        let value = buttonSelected[0].dataset.value; 
        document.querySelectorAll('#rating')[0].innerText = value;
        document.getElementById('component__main').style.display = 'none';
        document.getElementById('component__thank_you').style.display = 'inline-block';
    })
});

