var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;


var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100);
c.fillRect(400, 100, 100, 100);
c.fillRect(200, 100, 100, 100);
console.log(canvas);

for (var i = 0; i < 100; i++) {
    var x = Mat.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.addColorStop(0,"red");
    c.addColorStop(0.3,"yellow");
    c.addColorStop(0.6,"green");
    c.addColorStop(1,"blue");
    c.stroke();
}
