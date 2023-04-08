const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'https://stackblitz.com/files/web-platform-6guvtw/github/RareFonder/Parallax-Backgrounds/main/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'https://stackblitz.com/files/web-platform-6guvtw/github/RareFonder/Parallax-Backgrounds/main/layer-2.png'
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'https://stackblitz.com/files/web-platform-6guvtw/github/RareFonder/Parallax-Backgrounds/main/layer-3.png'
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'https://stackblitz.com/files/web-platform-6guvtw/github/RareFonder/Parallax-Backgrounds/main/layer-4.png'
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'https://stackblitz.com/files/web-platform-6guvtw/github/RareFonder/Parallax-Backgrounds/main/layer-5.png'



