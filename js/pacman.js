var grille=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
[0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
[0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
[0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
[0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
[2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
[0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
[0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
[0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
[0,2,0,0,2,0,2,0,2,0,2,0,2,0,2,0,0,2,0],
[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
function getRandomIntInclusive(min, max)
	{
        min=Math.ceil(min);
        max=Math.floor(max);
        return Math.floor(Math.random()*(max-min+1))+min;
	}
var _grille = document.getElementById('grille');
var btn = document.getElementById('bouton');
var nombreBonbon=0;
var scorePacman=0; 
var directionPacman=0;
var finDeJeu=false;

for(let ligne in grille)
    {
        for(let col in grille [ligne])
        {
            if(grille[ligne][col]==2)
            {
                nombreBonbon ++;
            }
        }
    }

function initGrille()
{
    //////////////////////// vider la grille ///////////////////////////////////
    _grille.innerHTML="";

    ///////////////////////////// dimension dynamique de la grille ///////////////////////////////////
    _grille.style.gridTemplateColumns="repeat(19, 40px)";
    _grille.style.gridTemplateRows="repeat(22, 40px)";

    /////////////////////////////////  construction de la grille ///////////////////////////////////////
for(let ligne in grille)
    {
        for(let col in grille [ligne])  
//console.log(grille[ligne][col])
        {
            let monElement=document.createElement("div");
                    if ((grille[ligne][col])==(0))
            {
                monElement.classList.add("mur");
            }
            else    if ((grille[ligne][col])==(1))
            {
                monElement.classList.add("sol");
            }
            else     if ((grille[ligne][col])==(2))
            {
                monElement.classList.add("bonbon");
            }
            monElement.style.gridColumn=(+col)+1;
            monElement.style.gridRow=(+ligne)+1;
            _grille.appendChild(monElement);
        }
            //cosonsole.log(grille[ligne])
    }
    
}
function boucleRefresh()
{
    initGrille();
    //console.log("reflesh");
    pacman.bougePacman();
    bougeFantome(fantomeRouge);
    bougeFantome(fantomeJaune);
    bougeFantome(fantomeBleu);
    bougeFantome(fantomeVert);
    console.log(scorePacman);
    var scoreElem = document.getElementById('score');
    scoreElem.innerHTML = scorePacman
    var directionElem = document.getElementById('direction');
    if(pacman.direction==0){
        directionElem.innerHTML = "droite"    
    }
    else if(pacman.direction==1){
        directionElem.innerHTML  = "bas"
        }
    else if (pacman.direction==2){
        directionElem.innerHTML = "gauche"
    }
    else if(pacman.direction==3){
        directionElem.innerHTML = "haut"
    }
    if (!finDeJeu){ 
    setTimeout(boucleRefresh, 1000);
    }
}
    ////////////////////////////////// declaration des variables ////////////////////////////////////////////
var pacman=new PacMan();
/*{
    x : 5,
    y : 2,
    direction : 0
};*/
var fantomeRouge =
{
    x : 11,
    y : 11,
    direction : 0,
    classe : "fantomeRouge"
};
var fantomeBleu =
{
    x : 11,
    y : 11,
    direction : 0,
    classe : "fantomeBleu"
};
var fantomeJaune =
{
    x : 11,
    y : 11,
    direction : 0,
    classe : "fantomeJaune"
};
var fantomeVert =
{
    x : 11,
    y : 11,
    direction : 0,
    classe : "fantomeVert"
};

    //////////////  appel fonction  ////////////

   
 
   ///////////////  affichage pacman  ////////////////////

   
    /////////////////////// affichage fantome /////////////////////////////////

    if( nombreBonbon<=0)
    {
        window.alert("vous avez gagné");
        window.alert("votre score "+ scorePacman);
        window.alert("sens de pacman" + pacman.direction);
        finDeJeu=true;
    }
    ///////////////////////////////////// mise en place de la fonction refresh ////////////////////////////    

boucleRefresh();
document.onkeypress=appuieTouche;
btn.addEventListener('click', reset);
function reset()
{
    //remise &a zero
    pacman.direction=0
    scorePacman=0
    pacman.x=5;
    pacman.y=2;
    fantomeBleu.x=11;
    fantomeBleu.y=11;
    fantomeJaune.x=11;
    fantomeJaune.y=11;
    fantomeRouge.x=11;
    fantomeRouge.y=11;
    fantomeVert.x=11;
    fantomeVert.y=11;
    if(finDeJeu){
        finDeJeu=false;
        boucleRefresh();
    }
}
//    console.log("on a clické sur le bouton");

function appuieTouche(event)
{
    console.log(event.key);
    switch(event.key)
    {
        case"c":
        case"C":
        pacman.direction=1
        break;
        case"s":
        case"S":
        pacman.direction=2
        break;
        case"e":
        case"E":
        pacman.direction=3
        break;
        case"f":
        case"F":
        pacman.direction=0
        break;
    }

}

 //////////////////////// affichage du pacman  ////////////////////

function testCollisionPacMan()

{   ///////////////// collision mur  ///////////////////////
    if(pacman.direction==0){
        if (grille[pacman.y-1][pacman.x-1]==0)
        {
        pacman.x --;
        }
    }
    if(pacman.direction==1){
        if (grille[pacman.y-1][pacman.x-1]==0)
        {
        pacman.y --;
        }
    }
    if(pacman.direction==2){
        if (grille[pacman.y-1][pacman.x-1]==0){
        pacman.x ++;
        }
    }
    else if(pacman.direction==3){
        if (grille[pacman.y-1][pacman.x-1]==0){
        pacman.y ++;
        } 
    }
    if(fantomeBleu.x==pacman.x)
        {
            if(fantomeBleu.y==pacman.y)
            {
                window.alert("PERDU"); 
                window.alert("sens de pacman" + pacman.direction);
            }    
        }
        if(fantomeJaune.x==pacman.x)
        {
            if(fantomeJaune.y==pacman.y)
            {
                window.alert("PERDU"); 
                window.alert("sens de pacman" + pacman.direction);
            }    
        }
        if(fantomeVert.x==pacman.x)
        {
            if(fantomeVert.y==pacman.y)
            {
                window.alert("PERDU"); 
                window.alert("sens de pacman" + pacman.direction);
            }    
        }
        if(fantomeRouge.x==pacman.x)
        {
            if(fantomeRouge.y==pacman.y)
            {
                window.alert("PERDU"); 
                window.alert("sens de pacman" + pacman.direction);
            }    
        }
}

/////////////////////////////fonction pacman sort de la grille/////////////////////////

function sortieMur(perso)
{   
    if(perso.x> grille[0].length)
    {
        perso.x=1;
    }
    if(perso.x < 1)
    {
        perso.x= grille[0].length
    }
    
}
//console.log("sortie")

///////////////////////////////// function pacman mange bonbon ///////////////

function mangeBonbon()
{
    if (grille[pacman.y-1][pacman.x-1]==2)
    {
        grille[pacman.y-1][pacman.x-1]=1
        nombreBonbon --;
        scorePacman += 2;
    }
}
//////////////////////////// deplacement fantome ////////////////////

function bougeFantome(monFantome)
{
 //// console.log(monFantome);
    monFantome.direction = getRandomIntInclusive(0, 3);
    if(monFantome.direction==0){
        monFantome.x ++;
    }
    else if(monFantome.direction==1){
        monFantome.y ++;
    }
    else if(monFantome.direction==2){
        monFantome.x --;
    }
    else if(monFantome.direction==3){
        monFantome.y --;
    }  
    testCollisionFantome(monFantome);
    sortieMur(monFantome);
    var fantomeElem=document.createElement("div")
    fantomeElem.classList.add(monFantome.classe);
    fantomeElem.style.gridColumn=(monFantome.x);
    fantomeElem.style.gridRow=(monFantome.y);
    _grille.appendChild(fantomeElem);
}
    /////////////////collision fantome sur mur ///////////////////////
function testCollisionFantome(monFantome)
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

