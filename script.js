class sacFruits {
    constructor(typeFruit = "", prixParSac = 0, nbSacs = 0) {
        this.TypeFruit = typeFruit;
        this.PrixParSac = prixParSac;
        this.NbSacs = nbSacs;
        this.PrixTotal = nbSacs * prixParSac
    }
}

sacPeche = new sacFruits("peche", 10, document.querySelector("#nbPeche").value)
document.querySelector('#nbPeche').onchange
(sacPeche.NbSacs=document.querySelector("#nbPeche").value)
console.log(sacPeche.PrixTotal);




