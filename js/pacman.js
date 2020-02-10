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
var _grille= document.getElementById('grille');
var nombreBonbon=0;
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
    /*vider la grille*/
    _grille.innerHTML="";
    /* dimension dynamique de la grille*/
    _grille.style.gridTemplateColumns="repeat(19, 40px)";
    _grille.style.gridTemplateRows="repeat(22, 40px)";
  //  console.log(grille)
  //  console.log(pacman)
for(let ligne in grille)
    {
        for(let col in grille [ligne])
        {
            //    console.log(grille[ligne][col])
            let monelement=document.createElement("div");
            if ((grille[ligne][col])==(0))
            {
                monelement.classList.add("mur");
            }
            else    if ((grille[ligne][col])==(1))
            {
                monelement.classList.add("sol");
            }
            else     if ((grille[ligne][col])==(2))
            {
                monelement.classList.add("bonbon");
            }
            monelement.style.gridColumn=(+col)+1;
            monelement.style.gridRow=(+ligne)+1;
            _grille.appendChild(monelement);
        }

            //console.log(grille[ligne])

    }
}

function boucleRefresh()
{
    initGrille();
    console.log("reflesh");
    bougePacman();
    bougeFantome(fantomeRouge);
    bougeFantome(fantomeJaune);
    bougeFantome(fantomeBleu);
    bougeFantome(fantomeVert);
    setTimeout(boucleRefresh, 1000);
}
var pacman = 
{
    x : 5,
    y : 2,
    direction : 0
};
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
function bougePacman()
{

    /// deplacement de pacman en fonction de sa direction

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
    //////////////appel fonction////////////
    testCollisionPacMan();
   
    sortieMur();
    mangeBonbon();
    
   ///////////////affichage pacman////////////////////
    var pacmanElem=document.createElement("div")
    pacmanElem.classList.add("pacman");
    pacmanElem.style.gridColumn=(pacman.x);
    pacmanElem.style.gridRow=(pacman.y);
    _grille.appendChild(pacmanElem);
    ///////////////////////affichage fantome/////////////////////////////////

    if( nombreBonbon<=0)
    {
        window.alert("vous avez gagné");
    }
        
}
boucleRefresh();
document.onkeypress=appuieTouche;
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

 //////////////////////// affichage du pacman////////////////////
function testCollisionPacMan()

{   /////////////////collision mur///////////////////////
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
}

/////////////////////////////fonction pacman sort de la grille/////////////////////////

function sortieMur()
{   
    if(pacman.x> grille[0].length)
    {
        pacman.x=1;
    }
    if(pacman.x < 1)
    {
        pacman.x= grille[0].length
    }
}
console.log("sortie")

///////////////////////////////// function pacman mange bonbon ///////////////

function mangeBonbon()
{
    if (grille[pacman.y-1][pacman.x-1]==2)
    {
        grille[pacman.y-1][pacman.x-1]=1
        nombreBonbon --;
    }
    
}
//////////////////////////// deplacement fantome ////////////////////

function bougeFantome(monFantome)
{
    console.log(monFantome);
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
    else if(monFantome.direction==3){
        if (grille[monFantome.y-1][monFantome.x-1]==0)
        {
            monFantome.y ++;
        } 
        //////////////////// collision fantome contre pacman //////////////////////
    }
        if(monFantome.x==pacman.x){
            if(monFantome.y==pacman.y)
            {
                window.alert("PERDU"); 
            }    
        }
        ///////////////////////// collision pacman contre fantome /////////////////////
        if(pacman.x==monFantome.x){
            if(pacman.y==monFantome.y)
            {
                window.alert("PERDU");
            }
        }
}