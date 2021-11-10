var ans = [];
var ansCount = 0;
const nAns = 20; // the max number of ansers
var color, colol;
var ansCntDiv, txtArea;

function setup() {
  createCanvas(720, 480);
  background(200);
  ansCntDiv = createDiv('0').position(10,50).style('font-size','50px');
  textSize(20);
  text("＜説明＞表示される二色に1番近いと感じる言葉を選択して下さい", 50, 20);
  text("20回選択を行い、表示されるデータをコピーし、　　から送信をお願いします", 10, 43);
  let a = createA('https://forms.gle/NhVqyEzQe6Uzv3HH6', 'ここ', self);
  a.style('font-size', '21px');
  a.position(453, 21);
  button();
  txtArea = document.getElementById('myInnerFrame');
  noLoop();
}

function draw() {
  const colors = ['#cc572e','#e19215','#debc03','#9cad00','#008f56',
    '#00827c','#006f92','#005b9b','#534c98','#7c3d84','#a33c6a','#c53f4d'];
  color = random(colors);
  colol = random(colors);
  
  noStroke();
  fill(color);
  square(125, 50, 200);
  fill(colol);
  square(395, 50, 200);

  ansCntDiv.html(ansCount);
}

function button() {
  const labels = ['大人しい','しつこい','軽率な','愉快な','謙虚な',
    'にぎやかな','わがままな','幼稚な','大胆な','親切な',
    '活発な','反抗的な','まぬけな','開放的な','従順な',
    '外交的な','自分勝手な','なまけもの','行動的な','誠実な',
    '閉鎖的な','張り合い','意志が強い','突発的な','責任感のある'];
  for (var i = 0; i < labels.length; i ++) {
    const lbl = labels[i];
    const button = createButton(lbl);
    button.position((i % 5) * 138 + 50, floor(i / 5) * 40 + 280);
    button.mousePressed(function () { change2(lbl); });
  }
}

function change2(x) {
  ++ ansCount;
  redraw();
  ans.push([color,colol,x]);
  if (ansCount >= nAns) {
    txtArea.innerHTML = ans;
    ans = []; ansCount = 0;
  }
}
