class Voiture
{
    Marque;
    Modele;
    Couleur;

    constructor(marque, modele, couleur){
        this.Marque=marque;
        this.Modele=modele;
        this.Couleur=couleur;
    }
        roule(){
            return "Vroum vroum";
        }
        get Toto() {
            return "Voiture de marque "+this.Marque;
	}
        set Toto(laMarque) {
            this.Marque=laMarque.toUpperCase();
        }
        get Modele() {
            return "Voiture de modele "+this.Modele;
	}
        set Modele(leModele) {
             this.Modele = leModele
        }

    }
var maVoit= new Voiture("HYUNDAI", "TUCSON", "vert")
console.log(maVoit.roule());
console.log(maVoit.Toto);
maVoit.Toto="FORD";
console.log(maVoit.Toto);
maVoit.couleur="jaune";
console.log(maVoit.couleur);
