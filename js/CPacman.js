class PacMan {
x;
y;
direction;
constructor() 
{
this.x=5;
this.y=2;
this.direction=0;
}
bougePacman()
{

    ////////////////// deplacement de pacman en fonction de sa direction  /////////////////////

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

    testCollisionPacMan();
    sortieMur(pacman);
    mangeBonbon();

    var pacmanElem=document.createElement("div")
    pacmanElem.classList.add("pacman");
    pacmanElem.style.gridColumn=(pacman.x);
    pacmanElem.style.gridRow=(pacman.y);
    _grille.appendChild(pacmanElem);
c}

}