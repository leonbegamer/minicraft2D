var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("jogador.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
}

function newimage(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

}

window.addEventListener("keydown",mykeydown)
function mykeydown(e)
{
  var keypressed=e.keyCode;
  console.log(keypressed);
   if(e.shiftKey==true && keypressed=="80"){
	console.log("shift+p pressionado");
	block_image_width=block_image_width+10;
	block_image_height=block_image_height+10;
	document.getElementById("currentWidth").innerHTML=block_image_width
	document.getElementById("currentHeigth").innerHTML=block_image_height
   }
   
   if(e.shiftKey==true && keypressed=="77"){
	console.log("shift+m pressionado");
	block_image_width=block_image_width-10;
	block_image_height=block_image_height-10;
	document.getElementById("currentWidth").innerHTML=block_image_width
	document.getElementById("currentHeigth").innerHTML=block_image_height
   }
   if(keypressed=="38" )
   {
	up()
	console.log("cima")
   }
   
   if(keypressed=="40" )
   {
	down()
	console.log("baixo")
   }
   
   if(keypressed=="37" )
   {
	left()
	console.log("esquerda")
   }
   
   if(keypressed=="39" )
   {
	right()
	console.log("direita")
   }

   if(keypressed=="87" )
   {
	newimage("parede.jpg")
	console.log("w")
   }

   if(keypressed=="71" )
   {
	newimage("grama.png")
	console.log("g")
   }

   if(keypressed=="76" )
   {
	newimage("verde_claro.png")
	console.log("l")
   }

   if(keypressed=="84" )
   {
	newimage("madeira_tronco.jpg")
	console.log("t")
   }

   if(keypressed=="82" )
   {
	newimage("telhado.jpg")
	console.log("r")
   }

   if(keypressed=="112")
   {
	newimage("parede_amarela.png")
	console.log("p")
   }

   if(keypressed=="68" )
   {
	newimage("verde_escuro.png")
	console.log("d")
   }

   if(keypressed=="85" )
   {
	newimage("unico.png")
	console.log("u")
   }

   if(keypressed=="110" )
   {
	newimage("nuvem.jpg")
	console.log("n")
   }
}

 function up()
 {
	if(player_y>=0)
	{
		player_y=player_y-block_image_height;
		console.log("altura da imagem_do bloco= "+ block_image_height);
		console.log("seta cima x="+player_x+",y="+player_y);

		canvas.remove(player_object);
		player_update();

	}
 }

 function down()
 {
	if(player_y<=500)
	{

		player_y=player_y+block_image_height;
		console.log("altura da imagem_do bloco= "+ block_image_height);
		console.log("seta baixo x="+player_x+",y="+player_y);

		canvas.remove(player_object);
		player_update();
		
	}
 }

 

 function right()
 {
	if(player_x<=850)
	{
		player_x=player_x+block_image_width;
		console.log("largura da imagem_do bloco= "+ block_image_width);
		console.log("seta direita x="+player_x+",y="+player_y);

		canvas.remove(player_object);
		player_update();
		
	}
 }
 
 function left()
 {
	if(player_x>0)
	{
		player_x=player_x-block_image_width;
		console.log("largura da imagem_do bloco= "+ block_image_width);
		console.log("seta esquerda x="+player_x+",y="+player_y);

		canvas.remove(player_object);
		player_update();
		
	}
 }