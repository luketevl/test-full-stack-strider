const tolerant_around = v =>  5 * (Math.round(v / 5));

const componentToHex = c => {
  let hexam = c.toString(16);
  return hexam.length == 1 ? "0" + hexam : hexam;
}

const rgbToHex = (r, g, b) =>  `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

let img = new Image();
img.src = './img/img.png';
img.onload = function() {
  window.onload = init();

  function init(){
    document.body.appendChild(img);

    let canvas = document.createElement('canvas');
    canvas.height = img.height;
    canvas.width = img.width;
    let context = canvas.getContext('2d');

    context.drawImage(img, 0, 0);

    let map = context.getImageData(0, 0, img.width, img.height).data;
    let hexam;
    let r;
    let g;
    let b;
    let histogram = {};
    for (let i = 0, len = map.length; i < len; i += 4) {
        r = tolerant_around(map[i]);
        g = tolerant_around(map[i+1]);
        b = tolerant_around(map[i+2]);

        hexam = rgbToHex(r, g, b);

        if (histogram[hexam] === undefined) {
            histogram[hexam] = 1;
        } else {
            histogram[hexam]++;
        }
    }

    //recupera cor mais comum
    let colorComun = null;
    let frequencyColorMoreComun = 0;
    for (let cor in histogram) {
      let div = document.createElement('div');
      div.style.backgroundColor = cor;
      div.style.width = "200px";
      div.style.height = "200px";
    }

    let pixel = document.querySelector('.pixel');
    pixel.innerHTML = histogram['#ff0000'];
    pixel.style.color = "#ff0000";

    document.body.appendChild(canvas);
  };
}
