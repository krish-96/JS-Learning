export function checkName(){
        console.log("1");
        let givenName = document.getElementById('name');
        console.log("2");
        let givenNameValue = givenName;
        console.log("3", givenNameValue);
        if (givenNameValue.value){
            console.log("4", givenNameValue.value);
            let elem = document.getElementById("displayName");
            elem.innerHTML = "Welcome " + givenNameValue.value.toUpperCase();
            let subName = document.getElementById("submitName");
            if (subName.style.display === 'none') {subName.style.display = 'block';}
            else {subName.style.display = 'none';}
            return elem;
        }

    }