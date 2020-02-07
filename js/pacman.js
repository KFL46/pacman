var grille=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//  1
[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],//  2
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],//  3
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],//  4
[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],//  5
[0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],//  6
[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],//  7
[0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],//  8
[0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],//  9
[0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],//  10
[2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],//  11
[0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],//  12
[0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],//  13
[0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],//  14
[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],//  15
[0,2,0,0,2,0,2,0,2,0,2,0,2,0,2,0,0,2,0],//  16
[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],//  17
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],//  18
[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],//  19
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//  20
];
var _grille= document.getElementById('grille');

function initGrille(){
    /*vider la grille*/
    _grille.innerHTML="";
    /* dimension dynamique de la grille*/
    _grille.style.gridTemplateColumns="repeat(19, 40px)";
    _grille.style.gridTemplateRows="repeat(22, 40px)";
  //  console.log(grille)
  //  console.log(pacman)
for(let ligne in grille){
    for(let col in grille [ligne]){
    //    console.log(grille[ligne][col])
        let monelement=document.createElement("div");
        if ((grille[ligne][col]) ==(0)){
            monelement.classList.add("mur");
        }
        else    if ((grille[ligne][col])==(1)){
            monelement.classList.add("sol");
        }
        else     if ((grille[ligne][col])==(2)){
            monelement.classList.add("bonbon");
        }
        monelement.style.gridColumn=(+col)+1;
        monelement.style.gridRow=(+ligne)+1;
        _grille.appendChild(monelement);
    }

//console.log(grille[ligne])

}
}

function boucleRefresh(){
    initGrille();
    console.log("reflesh");
    bougePacman();
    setTimeout(boucleRefresh, 1000);
}
var pacman = {
    x : 5,
    y : 2,
    direction : 0
};
function bougePacman(){

    if(pacman.direction==0){
        pacman.x ++;
    }
    else if(pacman.direction==1){
        pacman.y ++;
    }
    else if(pacman.direction==2){
        pacman.x --;
    }
    else if(pacman.direction==3){
        pacman.y --;
    }
    var pacmanElem=document.createElement("div")
    pacmanElem.classList.add("pacman");
    pacmanElem.style.gridColumn=(pacman.x);
    pacmanElem.style.gridRow=(pacman.y);
    _grille.appendChild(pacmanElem);
}
boucleRefresh();
document.onkeypress=appuieTouche;
function appuieTouche(event){
    console.log(event.key);
    switch(event.key){
        case"c":
        case"C":
        pacman.direction=1
        break;
        case"s":
        case"S":
        pacman.direction=2
        break;
        case"e":
        case"ETEST":
        pacman.direction=3
        break;
        case"f":
        case"F":
        pacman.direction=0
        break;
    }

}