let farine = 20;
let sucre = 0.25;
let huile = 0.25;
let beurre = 3.5;
let lait = 4;
let rhum = 0.3;
let oeuf = 0.25;

function crepeParty() {
    let nbCrepe = parseInt(document.getElementById("nbCrepe").value)

    const farineM = farine * nbCrepe
    const sucreM = sucre * nbCrepe
    const huileM = huile * nbCrepe
    const beurreM = beurre * nbCrepe
    const laitM = lait * nbCrepe
    const rhumM = rhum * nbCrepe
    const oeufM = oeuf * nbCrepe
    

    document.getElementById("farine").innerHTML = farineM + " g de farine";
    document.getElementById("sucre").innerHTML = sucreM + " c à café de sucre";
    document.getElementById("huile").innerHTML = huileM + " c à café d'huile";
    document.getElementById("beurre").innerHTML = beurreM + " g de beurre";
    document.getElementById("lait").innerHTML = laitM + " cl de lait";
    document.getElementById("rhum").innerHTML = rhumM.toFixed(1) + " cl de rhum";
    document.getElementById("oeuf").innerHTML = oeufM + " oeuf(s)";
}    

function up() {
    document.getElementById("recipe").style.display = "none";
    console.log("sheeeeesh")
}