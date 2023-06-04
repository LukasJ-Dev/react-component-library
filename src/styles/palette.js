import { colors } from "./colors"

export const getPalette = () => {
    const p = [];
    Object.keys(colors).forEach(function(key, index) {
        
        p.push(colors[key]["400"]);
        p.push(colors[key]["600"]);
        p.push(colors[key]["800"]);
      });
      p.splice(p.length-9, p.length);
      return p;
}

export const getRandomColorFromPalette = () => {
    const p = getPalette();
    return p[Math.floor(Math.random()*p.length)];
}