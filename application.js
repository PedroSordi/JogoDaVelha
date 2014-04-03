cont = 0;
tabuleiro = [[],[],[]];
placarX = 0;
placarO = 0;

// ▼codigo do anderson▼
marcar = function(e){
	x = parseInt(e.id[2]);
	y = parseInt(e.id[4]);
	var jogador;
	if (tabuleiro[x][y] != null){
		return;
	}	
	if (cont%2 == 0){
		e.innerHTML = "X";
		jogador = "X";
	}else{
		e.innerHTML = "O";
		jogador = "O";
	}
	tabuleiro[x][y] = jogador;
	cont++;
	verificarVencedor();
	exibirPlacar();	
};

verificarVencedor=function(e){
	
	for (i = 0; i < 3; i++) { 
        if (tabuleiro[i][0] == tabuleiro[i][1] && tabuleiro[i][0] == tabuleiro[i][2]) {
            if (tabuleiro[i][0] == 'X'){
            	alert("X ganhou na Linha");
				placarX++;
            }	
            if (tabuleiro[i][0] == 'O'){
				alert("O ganhou na Linha");
				placarO++;
            }
        }
    }

    for (i = 0; i < 3; i++) { 
        if (tabuleiro[0][i] == tabuleiro[1][i] && tabuleiro[0][i] == tabuleiro[2][i]) {
            if (tabuleiro[0][i] == 'X'){
            	alert("X ganhou na Linha");
				placarX++;
            }	
            if (tabuleiro[0][i] == 'O'){
				alert("O ganhou na Linha");
				placarO++;
            }
        }
    }
    if (tabuleiro[0][0] == tabuleiro[1][1] && tabuleiro[0][0] == tabuleiro[2][2]) {
       if (tabuleiro[0][0] == 'X'){
            	alert("X ganhou na Linha");
				placarX++;
            }	
            if (tabuleiro[0][0] == 'O'){
				alert("O ganhou na Linha");
				placarO++;
            }
    }
    //verificando se houve vencedor na Diagonal de baixo para cima:
    if (tabuleiro[0][2] == tabuleiro[1][1] && tabuleiro[0][2] == tabuleiro[2][0]) { 
        if (tabuleiro[0][2] == 'X'){
            alert("X ganhou na Linha");
			placarX++;
        }	
        if (tabuleiro[0][2] == 'O'){
			alert("O ganhou na Linha");
			placarO++;
        }
    }

    if(cont== 9){
    	alert("Empate");
    }
};

exibirPlacar=function(){
	e = document.getElementById("placarX");
	e.innerHTML = placarX;
	
	e = document.getElementById("placarO");
	e.innerHTML = placarO;
}

limparTabuleiro=function(){
	tabuleiro = [[],[],[]];
	for(i=0; i< 3; i++){
		for(j=0; j< 3; j++){
			e = document.getElementById("c_"+i+"_"+j);
			e.innerHTML = "";
		}
	}
};