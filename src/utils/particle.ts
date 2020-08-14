class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  dead: boolean;
  alpha: number;
  rotate: number;
  color: string;
  constructor(opt: any) {
    this.x = opt.x || 0;
    this.y = opt.y || 0;
    this.vx = opt.vx || Math.random() - 0.5;
    this.vy = opt.vy || Math.random() - 0.5;
    this.size = opt.size || Math.random() * 3;
    this.life = opt.life || Math.random() * 5;

    this.dead = false;

    this.alpha = 1;
    this.rotate = 0;
    this.color = opt.color || "rgba(244,244,244,.9)";
  }
  update(ctx: any) {
    this.x += this.vx;
    this.y += this.vy;

    this.life -= 0.01;
    this.alpha -= 0.003;
    this.rotate += Math.random() * 0.02 - 0.01;
    if (this.life < 0) {
      this.dead = true;
      this.alpha = 0;
      return;
    }
    this.render(ctx);
  }
  render(ctx: any) {
    let dot = this,
      gA;
    ctx.fillStyle = dot.color;
    ctx.beginPath();
    gA = ctx.globalAlpha;
    ctx.globalAlpha = dot.alpha;
    ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = gA;
  }
}

export default Particle;
