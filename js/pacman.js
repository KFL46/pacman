var maGrilleDef = new Grille();
var grille = maGrilleDef.getGrilleDef();
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var _grille = document.getElementById("grille");
var btn = document.getElementById("bouton");
var nombreBonbon = 0;
var scorePacman = 0;
var directionPacman = 0;
var finDeJeu = true;

for (let ligne in grille) {
    for (let col in grille[ligne]) {
        if (grille[ligne][col] == 2) {
            nombreBonbon++;
        }
    }
}

function initGrille() {
    //////////////////////// vider la grille ///////////////////////////////////
    _grille.innerHTML = "";

    ///////////////////////////// dimension dynamique de la grille ///////////////////////////////////
    _grille.style.gridTemplateColumns = "repeat(19, 40px)";
    _grille.style.gridTemplateRows = "repeat(22, 40px)";

    /////////////////////////////////  construction de la grille ///////////////////////////////////////
    for (let ligne in grille) {
        //console.log(grille[ligne][col])
        for (let col in grille[ligne]) {
            let monElement = document.createElement("div");
            if (grille[ligne][col] == 0) {
                monElement.classList.add("mur");
            } else if (grille[ligne][col] == 1) {
                monElement.classList.add("sol");
            } else if (grille[ligne][col] == 2) {
                monElement.classList.add("bonbon");
            }
            monElement.style.gridColumn = +col + 1;
            monElement.style.gridRow = +ligne + 1;
            _grille.appendChild(monElement);
        }
        //cosonsole.log(grille[ligne])
    }
}
function boucleRefresh() {
    initGrille();
    //console.log("reflesh");
    pacman.bougePacman();
    fantomeRouge.bougeFantome();
    fantomeJaune.bougeFantome();
    fantomeBleu.bougeFantome();
    fantomeVert.bougeFantome();
    console.log(scorePacman);
    var scoreElem = document.getElementById("score");
    scoreElem.innerHTML = scorePacman;
    var directionElem = document.getElementById("direction");
    if (pacman.direction == 0) {
        directionElem.innerHTML = "droite";
    } else if (pacman.direction == 1) {
        directionElem.innerHTML = "bas";
    } else if (pacman.direction == 2) {
        directionElem.innerHTML = "gauche";
    } else if (pacman.direction == 3) {
        directionElem.innerHTML = "haut";
    }
    if (!finDeJeu) {
        setTimeout(boucleRefresh, 1000);
    }
}
////////////////////////////////// declaration des variables ////////////////////////////////////////////
var pacman = new PacMan();
/*{
    x : 5,
    y : 2,
    direction : 0
};*/
var fantomeRouge = new fanTome("Rouge");
/*{
    x : 11,
    y : 11,
    direction : 0,
    classe : "fantomeRouge"
};*/
var fantomeBleu = new fanTome("Bleu");
/*{
    x : 11,
    y : 11,
    direction : 0,
    classe : "fantomeBleu"
};*/
var fantomeJaune = new fanTome("Jaune");
/*{
    x : 11,
    y : 11,
    direction : 0,
    classe : "fantomeJaune"
};*/
var fantomeVert = new fanTome("Vert");
/*{
    x : 11,
    y : 11,
    direction : 0,
    classe : "fantomeVert"
};*/

//////////////  appel fonction  ////////////

///////////////  affichage pacman  ////////////////////

/////////////////////// affichage fantome /////////////////////////////////

if (nombreBonbon <= 0) {
    console.log();
    window.alert("vous avez gagné");
    window.alert("votre score " + scorePacman);

    //     window.alert("sens de pacman" + pacman.direction);
    finDeJeu = true;
}
///////////////////////////////////// mise en place de la fonction refresh ////////////////////////////

boucleRefresh();
document.onkeypress = appuieTouche;
btn.addEventListener("click", reset);
function reset() {
    //remise &a zero
    pacman.direction = 0;
    scorePacman = 0;
    pacman.x = 5;
    pacman.y = 2;
    fantomeBleu.x = 11;
    fantomeBleu.y = 11;
    fantomeJaune.x = 11;
    fantomeJaune.y = 11;
    fantomeRouge.x = 11;
    fantomeRouge.y = 11;
    fantomeVert.x = 11;
    fantomeVert.y = 11;
    maGrilleDef = new Grille();
    grille = maGrilleDef.getGrilleDef();
    if (finDeJeu) {
        finDeJeu = false;
        boucleRefresh();
    }
}
//    console.log("on a clické sur le bouton");

function appuieTouche(event) {
    console.log(event.key);
    switch (event.key) {
        case "c":
        case "C":
            pacman.direction = 1;
            break;
        case "s":
        case "S":
            pacman.direction = 2;
            break;
        case "e":
        case "E":
            pacman.direction = 3;
            break;
        case "f":
        case "F":
            pacman.direction = 0;
            break;
    }
}

//////////////////////// affichage du pacman  ////////////////////

/////////////////////////////fonction pacman sort de la grille/////////////////////////

//console.log("sortie")

///////////////////////////////// function pacman mange bonbon ///////////////

function sortieMur(perso) {
    if (perso.x > grille[0].length) {
        perso.x = 1;
    }
    if (perso.x < 1) {
        perso.x = grille[0].length;
    }
}
//////////////////////////// deplacement fantome ////////////////////

/////////////////collision fantome sur mur ///////////////////////
/*  function testCollisionFantome(monFantome)
{   
    if(monFantome.direction==0){
        if (grille[monFantome.y-1][monFantome.x-1]==0)
        {
        monFantome.x --;
        }
    }
    if(monFantome.direction==1){
        if (grille[monFantome.y-1][monFantome.x-1]==0)
        {
        monFantome.y --;
        }
    }
    if(monFantome.direction==2){
        if (grille[monFantome.y-1][monFantome.x-1]==0)
        {
        monFantome.x ++;
        }
    }
    else if(monFantome.direction==3)
        {
        if (grille[monFantome.y-1][monFantome.x-1]==0)
        {
            monFantome.y ++;
        } 
        //////////////////// collision fantome contre pacman //////////////////////
        }
        if(monFantome.x==pacman.x)
        {
            if(monFantome.y==pacman.y)
            {
                window.alert("PERDU"); 
                window.alert("votre score "+ scorePacman);
                finDeJeu=true;
            }    
        }
}
 ////////////////////////////////  reset page pacMan  ////////////////////////////////
*/
