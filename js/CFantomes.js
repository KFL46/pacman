class fanTome {
    x;
    y;
    direction;
    constructor(couleur) {
        this.x = 11;
        this.y = 11;
        this.direction = 0;
        this.classe = "fantome" + couleur;
    }
    bougeFantome() {
        //// console.log(monFantome);
        this.direction = getRandomIntInclusive(0, 3);
        if (this.direction == 0) {
            this.x++;
        } else if (this.direction == 1) {
            this.y++;
        } else if (this.direction == 2) {
            this.x--;
        } else if (this.direction == 3) {
            this.y--;
        }
        this.testCollisionFantome();
        sortieMur(this);
        var fantomeElem = document.createElement("div");
        fantomeElem.classList.add(this.classe);
        fantomeElem.style.gridColumn = this.x;
        fantomeElem.style.gridRow = this.y;
        _grille.appendChild(fantomeElem);
    }
    testCollisionFantome() {
        if (this.direction == 0) {
            if (grille[this.y - 1][this.x - 1] == 0) {
                this.x--;
            }
        }
        if (this.direction == 1) {
            if (grille[this.y - 1][this.x - 1] == 0) {
                this.y--;
            }
        }
        if (this.direction == 2) {
            if (grille[this.y - 1][this.x - 1] == 0) {
                this.x++;
            }
        } else if (this.direction == 3) {
            if (grille[this.y - 1][this.x - 1] == 0) {
                this.y++;
            }
            //////////////////// collision fantome contre pacman //////////////////////
        }
        if (this.x == pacman.x) {
            if (this.y == pacman.y) {
                window.alert("PERDU");
                window.alert("votre score " + scorePacman);
                finDeJeu = true;
            }
        }
    }
}
