import paper from 'paper'
import { setup } from 'paper/dist/paper-core';

export default new class {

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomColor() {
    return this.colors[this.getRandomInt(0, this.colors.length-1)];
  }

  init() {
    this.canvas = document.getElementById('paperCanvas');
    
    this.canvas.style.height = this.canvas.clientWidth+"px";
    
    this.colors = ['#FB9300', '#F54748', '#F5E6CA', '#343F56'];

    paper.setup(this.canvas);
    this.canvasWidth = paper.view.size.width;
    this.canvasHeight = paper.view.size.height;
    this.setup();
    paper.view.draw();

    this.draw();
  }

  setup() {
    var pos = [this.canvasWidth/2, this.canvasHeight/2];
    var radius = this.canvasWidth/5;
    var myCircle = new paper.Path.Circle(pos, radius);
    myCircle.fillColor = this.getRandomColor();
  }

  draw() {
    paper.view.onFrame = (event) => {
      var time = event.time;
      var count = event.count;
    };   
  }

  cleanCanvas() {    
    paper.project.activeLayer.removeChildren();
  }

  downloadImage() {
    var image = this.canvas.toDataURL();
    var aDownloadLink = document.createElement('a');

    aDownloadLink.download = 'download-paper-'+Date.now()+'.png';
    aDownloadLink.href = image;

    aDownloadLink.click();
  }


}