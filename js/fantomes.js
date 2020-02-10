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
    var _grille= document.getElementById('grille');
    var nombreBonbon=0;
    var fantomes=4
    for(let ligne in grille)
        {
            for(let col in grille [ligne])
            {
                if(grille[ligne][col]==2){
                    nombreBonbon ++;
                }
            }}
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
    