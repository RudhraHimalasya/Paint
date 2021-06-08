
var last_position_x   , last_position_y  ,  start_position_x  , start_position_y;

 var canvas = document.getElementById('myCanvas');  
  var ctx = canvas.getContext("2d");
    
   var color = "black";
var width_of_line = 2;

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
       start_position_x=e.touches[0].clientX-canvas.offsetLeft;
       start_position_y=e.touches[0].clientY-canvas.offsetTop; 
        // color = document.getElementById("color").value;
        // width_of_line = document.getElementById("width_of_line").value;
  
    }

    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

        last_position_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_y=e.touches[0].clientY-canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;


        console.log("Start position of x and y coordinates = ");
        console.log("x = " + start_position_x + "y = " + start_position_y);

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_x + "y = " + last_position_y);
        ctx.moveTo(start_position_x , start_position_y);

      
        ctx.lineTo(last_position_x , last_position_y);
        ctx.stroke();
        
       start_position_x= last_position_x;
       start_position_y=last_position_y;
    }

    var screen_width =screen.width;
    var screen_height=screen.height;

    var canvas_width_new = screen.width- 100;
    var canvas_height_new = screen.height- 200;

    if(screen_width<992){
        canvas.width=canvas_width_new;
        canvas.height=canvas_height_new;

        document.body.style.overflow="hidden";
    }
