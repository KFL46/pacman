class PacMan {
    x;
    y;
    direction;
    constructor() {
        this.x = 5;
        this.y = 2;
        this.direction = 0;
    }
    bougePacman() {
        ////////////////// deplacement de pacman en fonction de sa direction  /////////////////////

        if (this.direction == 0) {
            this.x++;
        } else if (this.direction == 1) {
            this.y++;
        } else if (this.direction == 2) {
            this.x--;
        } else if (this.direction == 3) {
            this.y--;
        }

        this.testCollisionPacMan();
        this.sortieMur(this);
        this.mangeBonbon();

        var pacmanElem = document.createElement("div");
        pacmanElem.classList.add("pacman");
        pacmanElem.style.gridColumn = pacman.x;
        pacmanElem.style.gridRow = pacman.y;
        _grille.appendChild(pacmanElem);
    }
    testCollisionPacMan() {
        ///////////////// collision pacman  ///////////////////////

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
        }
        let dirEnLettre;
        if (pacman.direction == 0) {
            dirEnLettre = "droite";
        } else if (pacman.direction == 1) {
            dirEnLettre = "bas";
        } else if (pacman.direction == 2) {
            dirEnLettre = "gauche";
        } else if (pacman.direction == 3) {
            dirEnLettre = "haut";
        }
        if (fantomeBleu.x == this.x) {
            if (fantomeBleu.y == this.y) {
                window.alert("PERDU");

                window.alert("sens de pacman " + dirEnLettre);
            }
        }
        if (fantomeJaune.x == this.x) {
            if (fantomeJaune.y == this.y) {
                window.alert("PERDU");
                window.alert("sens de pacman " + dirEnLettre);
            }
        }
        if (fantomeVert.x == this.x) {
            if (fantomeVert.y == this.y) {
                window.alert("PERDU");
                window.alert("sens de pacman " + dirEnLettre);
            }
        }
        if (fantomeRouge.x == this.x) {
            if (fantomeRouge.y == this.y) {
                window.alert("PERDU");
                window.alert("sens de pacman " + dirEnLettre);
            }
        }
    }
    sortieMur(perso) {
        if (perso.x > grille[0].length) {
            perso.x = 1;
        }
        if (perso.x < 1) {
            perso.x = grille[0].length;
        }
    }
    mangeBonbon() {
        if (grille[this.y - 1][this.x - 1] == 2) {
            grille[this.y - 1][this.x - 1] = 1;
            nombreBonbon--;
            scorePacman += 2;
        }
    }
}

s