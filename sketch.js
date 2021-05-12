var ball;
var database,ballposition;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    ballposition = database.ref("ball/position");
    ballposition.on("value",readPosition,showError);
}

function readPosition(data){
   var position = data.val();
   hypnoticBall.x = position.x;
   hypnoticBall.y = position.y;
}

function draw(){

    background("white");
    if(position != undefined){
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}

function changePosition(x,y){
    database.ref("ball/position").set({
        'x' : position.x + x ,
        'y' : position.x + y
    })
}
