let angle = 0; // 记录旋转角度的变量

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // 使用角度制
  colorMode(HSB, 360, 100, 100); // 使用 HSB 模式方便实现彩虹色
}

function draw() {
  background(10); // 深色背景
  translate(width / 2, height / 2); // 移动到画布中心
  
  rotate(angle); // 应用随时间变化的旋转角度
  
  // 绘制 8 片花瓣
  for (let i = 0; i < 8; i++) {
    push(); // 开启独立的变换状态
    rotate(i * 45); // 每一片旋转 $360^\circ / 8 = 45^\circ$
    
    // 颜色随时间变化：frameCount 是 p5.js 自带的帧计数器
    fill((frameCount + i * 20) % 360, 80, 100, 0.8); 
    noStroke();
    
    // 花瓣大小随鼠标位置改变
    let petalSize = map(mouseX, 0, width, 20, 100);
    ellipse(0, 50, 30, petalSize); 
    pop(); // 恢复变换状态，确保 rotate 不会累加影响后续计算
  }
  
  angle += 2; // 每一帧增加 2 度，产生旋转动画
}