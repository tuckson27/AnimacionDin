function Navegod () {
  this.x = 0;
  this.y = 0;
  //this.width = 25;
  //this.height = 20;
  this.rotation = 0;
  this.showFlame = false;
}

Navegod.prototype.draw = function (context) {
    var nave = new Image()
    nave.src = "navecita.png"
    var flama = new Image()
    flama.src = "flamita.png"
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);

context.drawImage(nave, -nave.width/18, -nave.height/18, nave.width/9, nave.height/9);
  
  if (this.showFlame) {
context.drawImage(flama, -flama.width/18, -flama.height/18, flama.width/9, flama.height/9);
  }
  context.restore();
};
