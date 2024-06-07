let xbola=300    // VERSÃO 1
let ybola=200
let diametro=20

let velocxbola=5
let velocybola=5

let raqx=5
let raqy=150
let raql=10
let raqh=90

function setup() { createCanvas(600, 400);}
  
function draw() {
  background(0);
  mostraraq();
  
  stroke("white");
  line(200,0,200,400);
    
  fill("red");
  circle(xbola,ybola,diametro);
  
  xbola+=velocxbola
  ybola+=velocybola
  
  if (xbola>width || xbola<0){velocxbola*=-1 }
  if (ybola>height || ybola<0){velocybola*=-1 }}

function mostraraq(){rect(raqx, raqy, raql, raqh) }

A função keyPressed, em uma tradução literal do inglês, significa “tecla pressionada”. Já a função keyIsDown, em mais uma tradução literal, significa “tecla abaixada”. Ambas são bem semelhantes, mas possuem uma diferença importante no funcionamento do jogo.
keyPressed identifica quando uma tecla é pressionada, ou seja, quando o dedo encostar na tecla. J

keyIsDown identifica quando uma tecla é “solta” – é o movimento entre a tecla ser pressiona-
da e voltar para sua posição original.
No jogo Pong, é preciso uma movimentação fluida e sem pausas/paradas; portanto, a função keyIsDown é a adequada.
