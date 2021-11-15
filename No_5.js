var ans = [];
var ansCount = 0;
const nAns = 20; // the max number of ansers
var color, colol;
var ansCntDiv, txtArea;

function setup() {
  createCanvas(720, 600);
  background(200);
  ansCntDiv = createDiv('0').position(10,80).style('font-size','70px');
  textSize(20);
  text("表示される二色の組み合わせを見て直感的に1番近いと感じる言葉を1つ選択",10, 20);
  text("して下さい。言葉は25個あります。また選択を一度行うと色のみ変化します。", 10, 40);
  text("20回選択を行うと、下記に#から始まるデータが表示されます。", 10, 60);
  text("コピーして頂き　 　　　　　　　から送信をお願いします。", 10, 80);
  let a = createA('https://forms.gle/vgmD9LUadb85s1p27', 'こちらのフォーム', self);
  a.style('font-size', '21px');
  a.position(150, 58);
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
  square(125, 150, 200);
  fill(colol);
  square(375, 150, 200);

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
    button.position((i % 5) * 138 + 50, floor(i / 5) * 40 + 400);
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
