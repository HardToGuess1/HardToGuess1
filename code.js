var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



var squareX = 10;
var squareY = window.innerHeight/2;
var squareWidth = 100;
var squareHeight = 100;

var isMouseDown = false;

var backGroundHeight = 50;
var backGroundWidth = 50;

var textY = [window.innerHeight, window.innerHeight,window.innerHeight,window.innerHeight, window.innerHeight];

var active = true;
var img = new Image();
img.src = 'bild.png';

var imgX = window.innerWidth;



var timesJumped = 0;

function update(){

    if(active==true){
c.clearRect(0, 0, canvas.width, canvas.height);
    }
    
c.fillStyle='black';
c.fillRect(0,0, backGroundWidth, backGroundHeight);

c.fillStyle = 'red';
c.fillRect(squareX, squareY, squareWidth, squareHeight);

loadText();

if(backGroundHeight<window.innerHeight){
    backGroundHeight=backGroundHeight+5;
}

if(backGroundWidth<window.innerWidth){
    backGroundWidth=backGroundWidth+10;
}


    if(timesJumped==1){
        squareX=backGroundWidth/4;
        squareY=backGroundHeight/2;
    }

    if(timesJumped==2){
        squareX=backGroundWidth/4*2;
        squareY=backGroundHeight/2;
    }

    if(timesJumped==3){
        squareX=backGroundWidth/4*3;
        squareY=backGroundHeight/2;
    }
    if(timesJumped==4){
        squareX=backGroundWidth/4*4;
        squareY=backGroundHeight/2;
    }

    if(timesJumped==1&&textY[1]>window.innerHeight/2){
textY[1]=textY[1]-5
    }
    if(timesJumped==2&&textY[2]>window.innerHeight/2){
        textY[2]=textY[2]-5
    }
    if(timesJumped==3&&textY[3]>window.innerHeight/2){
        textY[3]=textY[3]-5
    }
    

    if(timesJumped==4){
        finale();
        
    }


requestAnimationFrame(update);
}
canvas.addEventListener('click', function(event) {
var mouseX = event.clientX - canvas.getBoundingClientRect().left;
        var mouseY = event.clientY - canvas.getBoundingClientRect().top;

        // Check if the click occurred within the red square
        if (mouseX >= squareX && mouseX <= squareX + squareWidth &&
            mouseY >= squareY && mouseY <= squareY + squareHeight) {
            beenClicked();
            
        }
        
    });

    canvas.addEventListener('mouseup', function(event) {
        
    });

    function beenClicked(){
        timesJumped=timesJumped+1;
    }

    function loadText(){

        c.fillStyle='white'
        c.font='40px ariel'
        if (active==true){
        c.fillText('Hade tråkigt idag..', window.innerWidth/20, textY[1])
        c.fillText('Så skapade detta..', window.innerWidth/8*2, textY[2])
        c.fillText('Tog mig typ en timme....', window.innerWidth/4.5*2, textY[3])
        
        }

    }

    function finale(){

        active=false;
        c.drawImage(img, imgX, 0, 500, 500)

        imgX=imgX-5;

        
    }

    update();