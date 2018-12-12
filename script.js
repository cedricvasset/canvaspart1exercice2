var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
/*
ctx.save();
ctx.translate(200,30);
ctx.rotate(45 * Math.PI / 180);
ctx.fillStyle = "#d08536";
ctx.fillRect(0,0,210,210);
ctx.translate(200,30)
ctx.clearRect(200, 30,150,150);
ctx.restore();
*/
ctx.save();
ctx.translate(200,30);
ctx.rotate(45 * Math.PI / 180);
ctx.fillStyle = "#d08536";
ctx.fillRect(0,0,200,200);
ctx.clearRect(140,0, 60, 60);
ctx.clearRect(0,140,60,60)
ctx.restore();

ctx.fillStyle = "#a7d7e7";
ctx.fillRect(100,130,200,200);

ctx.fillStyle = "#c9c9c9";
ctx.fillRect(170,260,60,70);

ctx.fillStyle = "#c9c9c9";
ctx.fillRect(120,160,40,40);

ctx.fillStyle = "#c9c9c9";
ctx.fillRect(240,160,40,40);
