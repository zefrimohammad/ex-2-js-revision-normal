// coded by Mohammad Zefri
// contact me on mdzefri@gmail.com




let objectsTable = [
    {nom: "Produit 01", prix: 13.5},
    {nom: "Produit 02", prix: 17.3},
    {nom: "Produit 03", prix: 24.70},
    {nom: "Produit 04", prix: 15.5},
    {nom: "Produit 05", prix: 20.9},
    {nom: "Produit 06", prix: 30.2},
];

document.getElementById("prix-ht").value = objectsTable[0].prix;

objectsTable.forEach(function(o) {
    let option = document.createElement("option");
    option.appendChild(document.createTextNode(`${o.nom}`));
    option.setAttribute("value", `${o.prix}`);
    document.getElementById("prd-select").appendChild(option);
});

document.getElementById("prd-select").addEventListener("change", function() {
    document.getElementById("prix-ht").value = document.getElementById("prd-select").options[document.getElementById("prd-select").selectedIndex].value;
});

function cFn() {
    if (document.getElementById("nine").checked
    || document.getElementById("eleven").checked
    || document.getElementById("nineteen").checked
    && ( document.getElementById("qte") !== "")) {


        let montantHT = document.getElementById("qte").value * document.getElementById("prix-ht").value;
        document.getElementById("montant").value = montantHT.toFixed(2);
        let totalTTC = 0;
        if (document.getElementById("nine").checked) {
            totalTTC = montantHT * 1.09;
        } else if (document.getElementById("eleven").checked) {
            totalTTC = montantHT * 1.11;
        } else if (document.getElementById("nineteen").checked) {
            totalTTC = montantHT * 1.9;
        };
        document.getElementById("total-ttc").value = totalTTC.toFixed(2);

    };
};

function eFn() {
    document.getElementById("qte").value = ``;
    document.getElementById("montant").value = ``;
    document.getElementById("total-ttc").value = ``;

    document.getElementById("prd-select").selectedIndex = 0;
    document.getElementById("prix-ht").value = 13.5;
    document.getElementById("nine").checked = false;
    document.getElementById("eleven").checked = false;
    document.getElementById("nineteen").checked = false;
};

document.getElementById("c-btn").addEventListener("click", cFn);
document.getElementById("e-btn").addEventListener("click", eFn);

