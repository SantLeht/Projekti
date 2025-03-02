function togglemenu(){
    const links = document.querySelector('.navbar');
    links.classList.toggle('active');

}

function tarkista(){
    const oikeat = {
        q1: "Mustavalkoinen",
        q2: "Kilpi",
        q3: "1"

    };

    let pisteet = 0;

    for(let kysymys in oikeat){
        const valittu = document.querySelector(`input[name="${kysymys}"]:checked`);
        if(valittu && valittu.value == oikeat[kysymys]){
            pisteet++;
        }
            

    }
    document.getElementById("tulos").innerText = `Sait ${pisteet} / 3 oikein!`;

}