const checkboxes = document.querySelectorAll('.inbox input [type="checkbox"]' );

let lastChecked;

function handleCheck(e) {
    //vérifie si touche maj enfoncer
    // et vérifie que la cle est bien vérifier
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
            }

            if(inBetween){
                checkbox.checked = true;
            }
        });


    }

    lastChecked = this
}

checkboxes.forEach(checkboxes => checkboxes.addEventListener('click', handleCheck));