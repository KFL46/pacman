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
function initGrille(){
    /*vider la grille*/
    let _grille= document.getElementById("grille");
    _grille.innerHTML="";
    /* dimension dynamique de la grille*/
    _grille.style.gridTemplateColumns="repeat(19, 40px)";
    _grille.style.gridTemplateRows="repeat(22, 40px)";
    console.log(grille)

for(let ligne in grille){
    for(let col in grille [ligne]){
        console.log(grille[ligne][col])
        let monelement=document.createElement("div")
        if ((grille[ligne][col]) ==(0)){
            monelement.classList.add("mur");
        }
        else    if ((grille[ligne][col])==(1)){
            monelement.classList.add("sol");
        }
        else     if ((grille[ligne][col])==(2)){
            monelement.classList.add("bonbon");
        }
        _grille.appendChild(monelement);
    }

console.log(grille[ligne]);
}
}
initGrille();
