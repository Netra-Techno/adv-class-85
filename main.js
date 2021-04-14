canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
background_Image = "mars.jpg";
console.log("background_Img");
rover_Image = "rover.png";
rover_X = 10;
rover_Y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_Image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_Image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    console.log(uploadBackground);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, 0, 0, rover_width, rover_height);
    console.log(uploadRover);
}
 window.addEventListener("keydown", my_keydown);
 function my_keydown(e){
     keyPressed = e.keyCode;
     console.log(keyPressed);
      if (keyPressed == "38") 
      {
          up();
          console.log("up");
      }
      if (keyPressed == "40")
      {
          down();
          console.log("down");
      }
      if (keyPressed == "37")
      {
          left();
          console.log("left")
      }
      if (keyPressed == "39")
      {
          right();
          console.log("right");
      }
     }

     function up(){
         if (rover_Y >=0)
        {
             rover_Y = rover_Y - 10;
             console.log("When Up Arrow Key Is Pressed = " + rover_X + " - " + rover_Y);
             uploadBackground();
             uploadRover();
         }
     }

     function down(){
         if (rover_Y <=500 ){
             rover_Y = rover_Y + 10;
             console.log("When Down Arrow Key Is Pressed , x =" + rover_X + "| y" + rover_Y  );
             uploadBackground();
             uploadRover();
         }
     }

     function left(){
         if (rover_X >= 0) {
          ( rover_X = rover_X - 10)
          console.log("When Left Arrow Key Is Pressed , x =" + rover_X + "| y" + rover_Y  );
          uploadBackground();
          uploadRover();
         }
     }

     function right(){
         if (rover_x <=700){
             (rover_X = rover_X + 10)
             console.log("When Down Arrow Key Is Pressed , x =" + rover_X + "| y" + rover_Y  );
             uploadBackground();
             uploadRover();
         }
     }