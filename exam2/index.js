function onclick1(){
  var number = $("#number");
  number.css("color", "red");
  number.css("font-family", "Arial");
};
function onclick2(){
  var image = $("#image");
  image.css("border-radius", "0.5");
  image.css("border-style", "solid");
  image.css("border-width", "7px");
  image.css("border-color", "red");
  image.css("clip-path", "circle()");
};
function onclick3(){
  $("#image").attr("src","https://raw.githubusercontent.com/csu41118164/csu41118164.github.io/main/exam1/P_20231225_150354.jpg");
};
function onclick4(){
  $("#image").fadeOut();
  setTimeout(function(){
    $("#image").fadeIn();
  });
}
