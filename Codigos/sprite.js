var PRESS = 69, modalobra = false;
function Sprite(img){
	//Atributos ****************
	this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false; //O THIS É O SELF DO PYTHON
	
	this.cnvWidth = 1100;
	this.cnvHeight = 800;

	this.srcX = this.srcY = 0; //Origem para captura da imagem a ser exibida (Posição inicial onde eu devo começar a recortar a img2)
	
	this.posX = this.posY = 0; //Posição no canvas onde a figura será exibida (Isso aqui vai mudando conforme eu vou alterando a posição do bonequinho)
	this.width = 48; //A largura do meu sprite de personagem (o tamanho de um bonequinho só da minha img2[que contem as animacoes do meu personagem]). Isso aq é onde, de acordo com os valores de origem (srcx e srcy), o recorte vai parar.
	this.height = 64; //A Altura do meu sprite de personagem (o tamanho de um bonequinho só da minha img2[que contem as animacoes do meu personagem]). Isso aq é onde, de acordo com os valores de origem (srcx e srcy), o recorte vai parar.
	this.speed = 3; //Velocidade de deslocamento do personagem (3 pixels por segundo)
	this.img = img;
	this.countAnim = 0; //Contador que vai servir pra ir atualizando as animações

	//Métodos ***************** Funções realizadas pelos personagens
	

	this.draw = function(ctx){ //Método para deesenhar a figura na tela
		ctx.drawImage(	//pra desenhar a imagem na tela, eu vou passar todos esses parâmetros pra essa função drawImage
						this.img,//Imagem de origem

						//Coordenadas do pedacinho de imagem que a gente quer: 
						this.srcX,	//Origem da captura no eixo X
						this.srcY,	//Origem da captura no eixo Y
						this.width,	//Largura da imagem que será capturada
						this.height,//Altura da imagem que será capturada

						//Coordenadas de onde eu quero que esse pedacinho seja exibido.
						this.posX,	//Posição no eixo X onde a imagem será exibida 
						this.posY,	//Posição no eixo Y onde a imagem será exibida 
						this.width,	//Largura da imagem a ser exibida 
						this.height	//Altura da imagem a ser exibida 
					);
		this.animation(); //Depois de desenhar o personagem, ai eu chamo a função this.animation()
	}

	//Move a figura
	this.move = function(){
		if (controle === true){
			var obra1 = document.querySelector('.coiso');
			obra1.classList.remove('coiso-active');
		}
		var controle = false;
		if(this.mvRight){ //Se a setinha da direita estiver sendo true (sendo pressionada), eu executo o seguinte código
			this.posX += this.speed;
			this.srcY = this.height * 3; 
		} else
		if(this.mvLeft){
			this.posX -= this.speed; //Vai modificar o píxel EM X que ta no meu boneco pelo valor dele menos o valor da velocidade do meu personagem (Ai fazendo com que meu boneco ande pra esquerda)
			this.srcY = this.height * 2; //Modificando a origem em y da minha imagem para que o programa pegue a captura da imagem na "linha 2" da minha img2, que é onde as animações de ir pra esquerda estão.
		} else
		if(this.mvUp){
			this.posY -= this.speed; //Nesse caso, vai modificar o píxel EM Y que ta no meu boneco pelo valor dele menos o valor da velocidade do meu personagem (Ai fazendo com que meu boneco ande pra esquerda)
			this.srcY = this.height * 1; 
		} else
		if(this.mvDown){
			this.posY += this.speed;
			this.srcY = this.height * 0; 
		}

		//Limites da tela
		this.posX = Math.max(135, Math.min((this.cnvWidth - 170) - this.width, this.posX));

		//parede da sala com o banheiro (ta aqui por causa de um  bug)
		if(this.posY >= 0 && this.posY <= 168 && this.posX >= 615 && this.posX < 620){
			this.posX = 612
			this.posY = this.posY
		}
		//parede do banheiro com a sala
		if(this.posY >= 0 && this.posY <= 168 && this.posX > 630 && this.posX < 640){
			this.posX = 642
			this.posY = this.posY
		}
		//mesinha parte de cima (ta aqui por causa de um  bug)
		if (this.posX > 0 && this.posX <= 210 && this.posY >= 330 && this.posY < 333){
			this.posY = 329
			this.posX = this.posX
		};

		this.posY = Math.max(0, Math.min((this.cnvHeight - 47) - this.height, this.posY));

		//sala 
		
		if (this.posX > 150 && this.posX < 650 && this.posY < 450 && this.posY > 10){
			//mesa parte de cima
			if (this.posX >= 280 && this.posX <= 515 && this.posY >= 50 && this.posY < 53){
				this.posY = this.posY - 3
				this.posX = this.posX
			};
			//mesa parte de baixo
			if (this.posX >= 280 && this.posX <= 515 && this.posY <= 300 && this.posY > 297){
				this.posY = this.posY + 3
				this.posX = this.posX
				//if (this.posX >= 300 && this.posX <= 500 && this.posY <= 299 && this.posY > 293){
					//var coiso = document.querySelector('.coiso');
					//coiso.classList.add('coiso-active');
					//var obra2 = document.querySelector('#obras');
					//obra2.classList.remove('obra1')
				//}
			};
			//mesa parte da esquerda
			if (this.posY >= 50 && this.posY <= 285 && this.posX >= 272 && this.posX <= 275){
				this.posX = this.posX - 3
				this.posY = this.posY

				if (this.posY >= 50 && this.posY <= 110 && this.posX >= 269 && this.posX <= 275){
					var coiso = document.querySelector('.coiso');
					coiso.classList.add('coiso-active');
					var obra1 = document.querySelector('#obras');
					obra1.classList.remove('obra2')
					obra1.classList.add('obra1')
				}
				if (this.posY >= 180 && this.posY <= 240 && this.posX >= 269 && this.posX <= 275){
					var coiso = document.querySelector('.coiso');
					coiso.classList.add('coiso-active');
					var obra2 = document.querySelector('#obras');
					obra2.classList.remove('obra1');
					obra2.classList.add('obra2')
				}
			};
			//mesa parte da direita
			if (this.posY >= 50 && this.posY <= 285 && this.posX <= 510 && this.posX >= 507){
				this.posX = this.posX + 3
				this.posY = this.posY
			};
			//mesinha da sala parte do lado
			if (this.posX > 218 && this.posX <= 223 && this.posY <= 425 && this.posY > 333){
				this.posX = 224
				this.posY = this.posY
				
			};
			//parede da sala com o escritório.
			if(this.posY >= 333 && this.posY <= 425 && this.posX >= 615 && this.posX < 620){
				this.posX = 612
				this.posY = this.posY
			}
			//Parede da mesinha ate a porta da sala do pc
			if(this.posX >= 218 && this.posX <= 326 && this.posY <= 426 && this.posY > 423){
				this.posX = this.posX
				this.posY = 420
			}
			//Parede da porta da sala do pc até a parede da direita
			if(this.posX >= 430 && this.posX <= 616 && this.posY <= 426 && this.posY > 423){
				this.posX = this.posX
				this.posY = 420
			}
			
		
		}
		//Corredor
		if (this.posX >= 621 && this.posX <= 900 && this.posY <= 333 && this.posY >= 174){
			//parte de cima
			if (this.posX >= 625 && this.posX <= 680 && this.posY >= 174 && this.posY < 180){
				this.posX = this.posX
				this.posY = 178
			};
			if (this.posX >= 730 && this.posX <= 900 && this.posY >= 174 && this.posY < 180){
				this.posX = this.posX
				this.posY = 178
			};
			//parte de baixo
			if (this.posX >= 625 && this.posX <= 900 && this.posY <= 330 && this.posY > 325){
				this.posX = this.posX
				this.posY = this.posY - 3
			};

			//if (this.posX >= 730 && this.posX <= 900 && this.posY <= 330 && this.posY > 325){
				//this.posX = this.posX
				//this.posY = 327
			//};
		}
		//banheiro
		if (this.posX > 620 && this.posX <= 900 && this.posY > 0 && this.posY <= 333){
			//colisão PIA eixo Y
			if (this.posX >= 710 && this.posX <= 780 && this.posY > 26 && this.posY < 29){
				this.posX = this.posX
				this.posY = 30
			};
			//colisão PIA eixo X
			//esquerda
			//if (this.posX >= 705 && this.posX < 710 && this.posY <= 26){
			//	this.posY = this.posY
			//	this.posX = this.posX-3
			//};
			//direita

			
			//vaso
			//Cima
			if (this.posX > 830 && this.posX < 900 && this.posY <= 80 && this.posY > 75){
				this.posY = this.posY-3
				this.posX = this.posX
			};
			//baixo
			if (this.posX > 830 && this.posX < 900 && this.posY < 120 && this.posY > 116){
				this.posY = this.posY+3
				this.posX = this.posX
			};
			//frente
			if (this.posX > 825 && this.posX < 829 && this.posY <= 119 && this.posY > 80){
				this.posY = this.posY
				this.posX = this.posX-3
			};
			//paredes voltando
			if (this.posX >= 625 && this.posX <= 680 && this.posY >= 148 && this.posY < 151){
				this.posX = this.posX
				this.posY = 147
			};
			if (this.posX >= 730 && this.posX <= 900 && this.posY >= 148 && this.posY < 151){
				this.posX = this.posX
				this.posY = 147
			};
		};
		//Escritório
		if(this.posX >= 621 && this.posX <= 900 && this.posY > 333 && this.posY < 800){
			//paredes voltando para o corredor
			if (this.posX >= 625 && this.posX <= 680 && this.posY > 348 && this.posY < 352){
				this.posX = this.posX
				this.posY = this.posY + 3
			};
			if (this.posX >= 730 && this.posX <= 900 && this.posY > 348 && this.posY < 352){
				this.posX = this.posX
				this.posY = this.posY + 3
			};
			//parede divisão com a sala do pc
			if(this.posX >= 635 && this.posX < 640 && this.posY > 348 && this.posY < 800){
				this.posX = this.posX + 3
				this.posY = this.posY
			}
			//gaveta
			if (this.posX >= 850 && this.posX <= 870 && this.posY > 352 && this.posY < 454){
				this.posX = this.posX - 3
				this.posY = this.posY
			};
			//mesinha 
			if (this.posX >= 715 && this.posX <= 870 && this.posY > 415 && this.posY < 421){
				this.posX = this.posX 
				this.posY = this.posY - 3
			};
			if (this.posX >= 715 && this.posX <= 900 && this.posY > 454 && this.posY < 457){
				this.posX = this.posX 
				this.posY = this.posY + 3
			};
			if (this.posX >= 715 && this.posX <= 870 && this.posY > 420 && this.posY < 454){
				this.posX = this.posX - 3
				this.posY = this.posY 
			};
			//mesa do chefe
			if (this.posX >= 743 && this.posX <= 815 && this.posY > 527 && this.posY < 530){
				this.posX = this.posX
				this.posY = this.posY - 3
			};
			if (this.posX >= 745 && this.posX <= 748 && this.posY > 533 && this.posY < 850){
				this.posX = this.posX - 3
				this.posY = this.posY 
			};
			if (this.posX >= 816 && this.posX <= 820 && this.posY > 530 && this.posY < 850){
				this.posX = this.posX + 3
				this.posY = this.posY 
			};
		};
		//sala do pc
		if (this.posX > 150 && this.posX < 650 && this.posY > 455 && this.posY < 850){
			//parede com sala do chefe
			if(this.posX >= 612 && this.posX < 615 && this.posY > 348 && this.posY < 800){
				this.posX = this.posX - 3 
				this.posY = this.posY
			}
			//parede com a sala
			
			//mesinha
			//eixo X
			if(this.posX >= 530 && this.posX < 533 && this.posY > 348 && this.posY < 620){
				this.posX = this.posX - 3 
				this.posY = this.posY
			}
			//eixo Y
			if(this.posX >= 536 && this.posX < 620 && this.posY > 623 && this.posY < 626){
				this.posX = this.posX  
				this.posY = this.posY + 3 
			}
			//pc
			if(this.posX >= 200 && this.posX < 235 && this.posY > 348 && this.posY < 600){
				this.posX = this.posX + 3
				this.posY = this.posY
			}
			if(this.posX >= 400 && this.posX < 405 && this.posY > 600 && this.posY < 720){
				this.posX = this.posX + 3
				this.posY = this.posY
			}
			if(this.posX >= 200 && this.posX < 405 && this.posY > 590 && this.posY < 595){
				this.posX = this.posX 
				this.posY = this.posY - 3
			}
		}
		
		
		

		

		//if (this.posX > 710 && this.posX < 711 && this.posY <= 230){
			//this.posX = 710
		//}
		// if (this.posX > 612){
		// 	if (this.posX < 672 || this.posX > 740)
		// 		if (this.posY < 180 && this.posY > 176){
		// 			this.posY = 180
		// 		}
		// 		else if (this.posY > 330 && this.posY < 334){
		// 			this.posY = 330
		// 		}
		// 	else if (this.posY >= 180 && this.posY <= 330){
		// 		if (this.posX > 672 && this.posX < 740){
		// 			this.posY = this.posY
		// 		}
		// 		else {
		// 			this.posY = this.posY
		// 		}
				
		// 	}
		// 	else {
		// 		this.posX = 612
		// 	}
		// }
		// else if(this.posX <= 612 && this.posX > 428 && this.posY < 425 && this.posY > 421){
		// 	this.posY = 421
		// }
		// else if(this.posX <= 328 && this.posX > 10 && this.posY < 425 && this.posY > 421){
		// 	this.posY = 421
		// }

		

	}


	
	//Função de animação da figura
	this.animation = function(){
		if(this.mvLeft || this.mvUp || this.mvRight || this.mvDown){
			//Caso qualquer seta seja pressionada (tenham um valor true), o contador de animação é incrementado
			this.countAnim++;
			if(this.countAnim >= 40){ //Como são 8 sprites pra cada lado, temos que colocar um limite de 40 pra zerar o countAnim e a conta lógica ai de baixo fazer sentido.
				this.countAnim = 0;
			}
			this.srcX = Math.floor(this.countAnim / 5) * this.width; //substituindo o valor de origemX com a seguinte verificação:
			//Fazendo com que a atualização da imagem aconteça a cada 5 atualizações(Pra ficar um pouco mais demoradinha, deixando mais fluido). Multiplicamos com a largura pq a cada 5 atualizações, o que vai sair do parênteses é um numero inteiro de 1 a 8 (pois declaramos o limite de 40 pro countAnim.), ai, vai pegar o valor da largura que a gente declarou la em cima (que é a largura inicial), e vai multiplicar esse valor até 8 vezes (pois são 8 sprites pra cada lado).
		} else {
			//Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida (O srcX recebe 0 e o recorte vai voltar a ser da origem 0 de x)
			this.srcX = 0 * this.width; //Vai dar 0 de qualquer jeito
			this.countAnim = 0;
		}
	}
}
