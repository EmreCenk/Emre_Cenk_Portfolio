

var canvas = document.querySelector("canvas") //selecting the canvas from the html


//Making canvas full screen:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function distance(x,y,xx,yy){
    

    return (
        Math.sqrt(((x-xx)**2) + ((y-yy)**2) )
    )
}

var mouse_is_down = false;
var mouse_x,mouse_y
const run_limit = 300;
function mouse_has_moved(event){
    mouse_x = event.x;
    mouse_y = event.y;

}
function mouse_pressed_down(){
    mouse_is_down=true;
    


}
function mouse_is_up(){
    mouse_is_down=false;
}
window.addEventListener("mousemove",mouse_has_moved)
window.addEventListener("mousedown",mouse_pressed_down);
window.addEventListener("mouseup",mouse_is_up)

//Setting a variable for the canvas 2d context object:

var c = canvas.getContext("2d");


class ball{
    constructor(x,y,radius, vx, vy, color="black"){
        this.x=x;
        this.y=y;
        this.radius = radius;
        this.vx=vx;
        this.vy = vy;
        this.color=color;
    }
    update_position(){
        if (this.x-this.radius<0 && this.vx<0){
            this.vx*=-1;

        }
        if (this.x+this.radius>window.innerWidth && this.vx>0){
            this.vx*=-1;
   
        }
        if (this.y-this.radius<0 && this.vy<0){
            this.vy*=-1;
        }
        else if (this.y+this.radius>window.innerHeight && this.vy>0){
            this.vy*=-1;
        }
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2);
        c.fillStyle = this.color;
        c.fill();

    }
}

var circ_num = 100;
var velinterval = 10;
var circles = [];

//Generating circle coordinates and velocities::
for (i = 0; i<circ_num; i++){
    let xc = Math.random()*window.innerWidth;
    let yc= Math.random()*window.innerHeight;
    let vxc = velinterval*(Math.random()-0.5);
    let vyc = velinterval*(Math.random()-0.5);
    let radius = Math.random()*5+5;
    let cur_ob = new ball(xc,yc,radius,vxc,vyc);
    circles.push(
        cur_ob
    );
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);

    for (i=0; i<circ_num; i++){
        //getting variables:
        cur = circles[i];
        cur.draw();
        //updating depending on mouse:
        if (mouse_is_down){
            let original = distance(cur.x,cur.y,mouse_x,mouse_y);

            console.log(cur.x,cur.y);
            if (original<=run_limit){
                let x_mod = distance(cur.x+cur.vx,cur.y,mouse_x,mouse_y);
                let y_mod = distance(cur.x,cur.y+cur.vy,mouse_x,mouse_y);
                if (x_mod<original){
                    cur.vx*=-1;
                }
                if(y_mod<original){

                    cur.vy*=-1;
                }
            }
        }



        //updating depending on collision and screen:
        
        if (cur.x-cur.radius<0){
            cur.vx*=-1;

        }
        if (cur.x+cur.radius>window.innerWidth && cur.vx>0){
            cur.vx*=-1;   
        }

        if (cur.y-cur.radius<0 && cur.vy<0){
            cur.vy*=-1;
        }
        else if (cur.y+cur.radius>window.innerHeight && cur.vy>0){
            cur.vy*=-1;

        }



        //updating coordinates:
        cur.x+=cur.vx;
        cur.y+=cur.vy;
        
        


    }


}
