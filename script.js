
const parts = {
  head: ["6头.jpeg","7头.jpeg","8头.jpeg"],
  eyes: ["6眼.jpeg","7眼.jpeg","8眼.jpeg"],
  nose: ["6鼻.jpeg","7鼻.jpeg","8鼻.jpeg"],
  mouth: ["6嘴.jpeg","7嘴.jpeg","8嘴.jpeg"]
};

const currentIndex = { head: 0, eyes: 0, nose: 0, mouth: 0 };

function changePart(part) {
  currentIndex[part] = (currentIndex[part] + 1) % parts[part].length;
  document.getElementById(part).src = "assets/" + parts[part][currentIndex[part]];
}
