class Box
  {
    constructor(x, y, w, h, vx, vy)
    {
    this.x = x
    this.y = y ;
    this.w = w
    this.h = h
    this.vx = vx
    this.vy = vy
    }
    show(){
      rect (this.x, this.y, this.w, this.h)
    
    }
    move (){
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
    }
    bounce(){
      if(this.x>=width||this.x<=0){
        this.vx=-this.vx;
      
      }
      if(this.y>=height||this.y<=0){
        this.vy=-this.vy;
      }
    }
  }

  
