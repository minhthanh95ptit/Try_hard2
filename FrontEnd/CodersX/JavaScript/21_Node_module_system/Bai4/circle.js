 function Circle(x,y,r){
      this.x = x;
      this.y = y;
      this.r = r;
      
  };

  Circle.prototype.isOverlapped = function(obj){
    
    var kc = Math.sqrt(Math.pow((this.x + obj.x), 2) + Math.pow((this.y + obj.y), 2));

    if(kc == this.r + obj.r){
      return 0;
    }
    else if(kc > this.r + obj.r){
      return -1;
    }
    else{
      return 1;
    }
  };

module.exports = Circle;