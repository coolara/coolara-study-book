export class DragValue {
  private startX : number = 0;
  private startY : number = 0;
  private diffX : number = 0;
  private diffY : number = 0;

  start(){  
    this.startX = 0
    this.startY = 0
  }

  update(e: DragEvent){
    this.diffX = e.clientX - this.startX
    this.diffY = e.clientY - this.startY
  }
} 
