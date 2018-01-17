$(".container").on("click", ".box", function(){
  if($(this).css("background-color") === "rgb(155, 188, 15)")
  {
    $(this).css("background-color", "rgb(139, 172, 15)");
  }
  else if($(this).css("background-color") === "rgb(139, 172, 15)")
  {
    $(this).css("background-color", "rgb(48, 98, 48)");
  }
  else if($(this).css("background-color") === "rgb(48, 98, 48)")
  {
    $(this).css("background-color", "rgb(15, 56, 15)");
  }
  else if($(this).css("background-color") === "rgb(15, 56, 15)")
  {
    $(this).css("background-color", "rgb(155, 188, 15)");
  }
  else
  {
    console.log("Something is wrong with the color picking function!");
  }
});

var sound = new Howl({
  src: ["sounds/gb.mp3"]
});

function gbBeep() {
  sound.play();
}

setTimeout(gbBeep, 3500);
