
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let xRaquete1 = 5;
let yRaquete1 = 153;

let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeyRaquete2;

let colidiu = false;

let pontoR1 = 0;
let pontoR2 = 0;
let iniciar = false;
//let quantosJogadores = 0;
 
let somRaquetada;
let somPonto;
let somTrilha;

let chanceDeErrar = 0;


function setup() {
  
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
 
  background(0); 
  mostraBolinha();   
  movimentaBolinha(); 
  verificaColisaoBorda(); 
  mostraRaquetes(xRaquete1,yRaquete1);
  mostraRaquetes(xRaquete2,yRaquete2);
  movimentaRaquete1(); 
  verificaColisaoRaquete1(); 
  movimentaRaquete2();
  verificaColisaoRaquete2();
  mostraPlacar();
  calculaChanceDeErrar();
  bolinhaNaoFicaPresa();
 // play1Ou2();
  fimJogo();
  recomecarJogo();
   
}



function preload() {
    somTrilha = loadSound("trilha.mp3");
    somPonto = loadSound("ponto.mp3");
    somRaquetada = loadSound("raquetada.mp3");
}

function mostraPlacar(){ 
  stroke(255);
  textAlign(CENTER);
  textSize(16);  
  fill(color(255,140,0));
  rect(180,14,40,20);
  fill(255);
  text(pontoR1, 200, 30);
  fill(color(255,140,0));
  rect(330,14,40,20);
  fill(255);
  text(pontoR2, 350, 30); 
  
}

 
function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
   
}


function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}


function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
      xBolinha - raio< 0){
      velocidadexBolinha *= -1;
  }
  if (yBolinha + raio> height ||
      yBolinha - raio < 0){
      velocidadeyBolinha *= -1;
  }

  if (xBolinha + raio > 600 ){
      pontoR1 += 1;
      somPonto.play();
    //596
   } 
  
  if (xBolinha - raio < 0){
      pontoR2 += 1;
      somPonto.play();
  }
}

function mostraRaquetes(x,y){
    rect(x, y, raqueteComprimento, 
      raqueteAltura);    
}


function movimentaRaquete1(){
  if (keyIsDown(UP_ARROW)){
      yRaquete1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
      yRaquete1 += 10;
  }
}

function movimentaRaquete2(){

  if (quantosJogadores = 1){
    velocidadeyRaquete2 = yBolinha - yRaquete2 -                raqueteComprimento / 2 -30;  
  yRaquete2 += velocidadeyRaquete2 + chanceDeErrar;
  }  
  else{
    if (keyIsDown(68)){
      yRaquete2 -= 10;
  }
  if (keyIsDown(65)){
      yRaquete2 += 10;
    
  }  
   
}
   
  
  calculaChanceDeErrar();
  
}

function verificaColisaoRaquete1(){
  if (xBolinha - raio < xRaquete1 + raqueteComprimento && 
      yBolinha - raio < yRaquete1 + raqueteAltura && 
      yBolinha + raio > yRaquete1){
   
       velocidadexBolinha *= -1;
       somRaquetada.play();
  }    
}

function verificaColisaoRaquete2(){
 if (xBolinha - raio > xRaquete2 - raqueteComprimento && 
     yBolinha - raio < yRaquete2 + raqueteAltura && 
     yBolinha + raio > yRaquete2){
    
      velocidadexBolinha *= -1;
      somRaquetada.play();      
  } 

}

function calculaChanceDeErrar() {
  if(pontoR2 >= pontoR1){
    chanceDeErrar += 1;
   
      if(chanceDeErrar >= 3){
        chanceDeErrar = 4;
        }
      }   
      else{
        chanceDeErrar -= 1;
        if (chanceDeErrar <=3){
          chabceDeErrar = 3
        }
      }
}
  
function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 30
    }
}

  
function fimJogo(){  
  if (pontoR1 > int(3) ||
      pontoR2 > int(3)){
    
      text('Fim do Jogo', 280, 100);      
      text('Aperte enter para recomeçar', 280, 350); 
      iniciar = true;
      noLoop();    
    
  }
}
 
function recomecarJogo(){
  if(iniciar = true){
     if (keyIsDown(ENTER)){
         iniciar = false;
         return;    
    }    
 }
}

/*
jogo Ping Pong
Versão simples
Lorene Garcia
*/

