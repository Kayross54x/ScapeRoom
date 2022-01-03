const GABARITO = [
    {
       frag: "verdadeiro"
    },
    {
        frag: "verdadeiro"
    },
    {
        frag: "verdadeiro"
    },
    {
        frag: "verdadeiro"
    },
    {
        frag: "falso"
    },
    {
        frag: "falso"
    },
    {
        frag: "falso"
    },
    {
        frag: "falso"
    }
];



function checkboxes(){
    const check= document.querySelector('input[type="radio"]:checked').value;
    
    var fechar = document.querySelector(".modalFrag");
    fechar.classList.remove('modalFrag-active');
    if (whatfrag === "frag1") {
        if (check == "verdadeiro"){
            acerto = acerto + 1
            
        }
    }
    else if (whatfrag === "frag2") {
        if (check == "verdadeiro"){
            acerto = acerto + 1
        }
    }
    else if (whatfrag === "frag3") {
        if (check == "verdadeiro"){
            acerto = acerto + 1
        }
    }
    else if (whatfrag === "frag4") {
        if (check == "verdadeiro"){
            acerto = acerto + 1
        }
    }
    console.log(acerto)
    if (acerto >= 4){
        ms3passed = true;
        console.log(ms3passed)
        

    };

};


