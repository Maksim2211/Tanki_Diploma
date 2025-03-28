export function drawBorder(ctx, spriteImage, frames, canvasWidth, canvasHeight) {
    console.log("🟦 drawBorder працює!");
  
    // Захист від помилок
    if (!frames || !frames["border-top"] || !frames["border-left"] || !frames["border-corner"]) return;
  
    const top = frames["border-top"];
    const left = frames["border-left"];
    const corner = frames["border-corner"];
  
    // ==== TOP & BOTTOM ====
    for (let x = 0; x < canvasWidth; x += top.w) {
      // Top
      ctx.drawImage(spriteImage, top.x, top.y, top.w, top.h, x, 0, top.w, top.h);
      // Bottom
      ctx.drawImage(spriteImage, top.x, top.y, top.w, top.h, x, canvasHeight - top.h, top.w, top.h);
    }
  
    // ==== LEFT & RIGHT ====
    for (let y = 0; y < canvasHeight; y += left.h) {
      // Left
      ctx.drawImage(spriteImage, left.x, left.y, left.w, left.h, 0, y, left.w, left.h);
      // Right
      ctx.drawImage(spriteImage, left.x, left.y, left.w, left.h, canvasWidth - left.w, y, left.w, left.h);
    }
  
    // ==== CORNERS ====
    ctx.drawImage(spriteImage, corner.x, corner.y, corner.w, corner.h, 0, 0, corner.w, corner.h); // top-left
    ctx.drawImage(spriteImage, corner.x, corner.y, corner.w, corner.h, canvasWidth - corner.w, 0, corner.w, corner.h); // top-right
    ctx.drawImage(spriteImage, corner.x, corner.y, corner.w, corner.h, 0, canvasHeight - corner.h, corner.w, corner.h); // bottom-left
    ctx.drawImage(spriteImage, corner.x, corner.y, corner.w, corner.h, canvasWidth - corner.w, canvasHeight - corner.h, corner.w, corner.h); // bottom-right
  }
  