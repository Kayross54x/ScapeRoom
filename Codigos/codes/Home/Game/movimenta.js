function jogo(espaco){ //Quando carregar a página, o js vai carregar uma função
	//Constantes que armazenam o código de cada seta do teclado
	
	var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40; // Variáveis que vão conter o valor que o computador entendo como as setinhas do teclado.
	
	var cnv = document.querySelector("canvas"); //Carregando o canvas do html
	var	ctx = cnv.getContext("2d"); //declarando que o contexto (ctx) vai receber um canvas 2d
	var spriteSheet = new Image(); //Falando que essa variável vai receber uma imagem
	spriteSheet.src = "../../img/img2.png";
	var robertin = new Sprite(spriteSheet); //Fazendo o objeto robertin receber as informações do sprite spriteSheet(que é a nossa img2) (Robertin é um objeto da classe sprite)
	var scene = new Image();
	scene.src = "../../img/EscapeRoom.png";

	var blocos = [];

	//var block1 = new SpriteBlocos(760, 0, 200, 97, "#f0f"); //Criando o primeiro bloco colidível
	//blocos.push(block1);

	//var block2 = new SpriteBlocos(650, 615, 310, 170, "#f0f");
	//blocos.push(block2);
	

	//Eventos de movimentação:


	window.addEventListener("keydown",keydownHandler,false); //(Keydown == Tecla sendo pressionada)Procure pelo evento de tecla pressionada e se achado, dispare a função keydownHandler com false como parâmetro 
	window.addEventListener("keyup",keyupHandler,false); //(KeyUp == quando a tecla não está mais pressionada) Garantindo que o personagem não fique a vida toda andando. 
	
	function keydownHandler(e){ //Recebe um evento como parâmetro
		switch(e.keyCode){ //switch é usado para pegar o código da tecla pressionada
			case RIGHT: //Caso for a tecla da direita: ...
				robertin.mvRight = true;
				robertin.mvLeft = false;
				robertin.mvUp = false;
				robertin.mvDown = false;
				break;
			case LEFT:
				robertin.mvRight = false;
				robertin.mvLeft = true;
				robertin.mvUp = false;
				robertin.mvDown = false;
				break;
			case UP:
				robertin.mvRight = false;
				robertin.mvLeft = false;
				robertin.mvUp = true;
				robertin.mvDown = false;
				break;
			case DOWN:
				robertin.mvRight = false;
				robertin.mvLeft = false;
				robertin.mvUp = false;
				robertin.mvDown = true;
				break;
		}
	}
	
	function keyupHandler(e){
		switch(e.keyCode){
			case RIGHT:
				robertin.mvRight = false; // A tecla que antes tava true (por conta da função keydownHandler, agora, devido ao usuário ter soltado ela, recebe o valor false).
				break;
			case LEFT:
				robertin.mvLeft = false;
				break;
			case UP:
				robertin.mvUp = false;
				break;
			case DOWN:
				robertin.mvDown = false;
				break;
		}
	}
	
	//Quando a imagem é carregada, o programa dispara a seguinte função q faz o programa ser iniciado através da função init() que vai chamar a função loop() que faz o programa rodar em loop
	spriteSheet.onload = function(){
		init();
		robertin.posX = robertin.posY = 30; //Local no canvas em px onde o bonequinho vai começar na tela
	}

	function init(){ 
		loop();
	}

	function update(){ //Função de atualização da movimentação do objeto robertin que vai chamar a função move do programa do sprite
		robertin.move();
	}

	function draw(){ //Função que vai chamar a função draw do robertin que vai desenhar o personagem Robertin na tela conforme as modificações dos sprites da img2
		ctx.clearRect(0,0,cnv.width,cnv.height); //Limpar a tela a cada renderização, a limpando do eixo 0,0, até a largura do canvas.
		for(var i in blocos){ //Fazendo eu rodar o meu array sprites e ir att as imagens na tela.
            var spr = blocos[i];
            if (spr.visible){ //Se o sprite da vez for visível (variável de cada sprite), desenhe ele na tela nas posições dele
                ctx.fillStyle = spr.color;
                ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
            }

        }
		ctx.drawImage(scene,0,0,scene.width,scene.height,130,0,scene.width,scene.height); //Desenhando o cenário (Pegando a imagem inteira e desenhando ela no canvas inteiro)
		robertin.draw(ctx);
	}

	function loop(){ //Função principal que vai fazer o programa rodar em loop
		window,requestAnimationFrame(loop,cnv);
		update();
		draw();
	}
}