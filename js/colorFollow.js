
var boxCoords = [];
var divs = null;

function updateColor(event)
{
  //mouse position coordintates
  var mPos = [event.clientX, event.clientY];

  if (divs == null){
    divs = document.getElementsByClassName('color-square');
  }

  if (boxCoords.length==0){ getBoxCoords(70); }

  for (var i = 0; i < divs.length; i++){
      var offsets = boxCoords[i];
      newCol = getColor(mPos, [offsets.left, offsets.top],6);
      divs[i].style.background="rgb("+newCol[0]+","+newCol[1]+","+newCol[2]+")";
  }
}

function getBoxCoords(size) {
  for (var i = 0; i < divs.length; i++){
    boxCoords.push(divs[i].getBoundingClientRect());
  }
}

//onmousemove="updateColor(event)
function createDivs(size) {
  var h = window.innerHeight;   // returns height of browser viewport
  var w = window.innerWidth;   // returns width of browser viewport
  for (var i = 0; i < Math.floor(w/size); i++){
    for (var j = 0; j < Math.floor(h/size); j++){
      var div = document.createElement("div");
      div.style.width = size+"px";
      div.style.height = size+"px";
      div.style.float="left";
      div.style.borderRadius="100%";
      div.className='color-square';
      document.getElementById('container').appendChild(div);
    }
  }

}

function getDist(p1, p2){
    return ((p1[0]-p2[0])**2+(p1[1]-p2[1])**2)**.5;
}

function getColor(center, point, scale){
  var d = Math.floor(getDist(center, point)/scale);
  return [255-d%255, 0, d%255];
}
