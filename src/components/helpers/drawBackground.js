/**
 * Company: Redpoints.
 * Website: www.redpoints.com
 * Date: 11/11/2017
 * Project: super-mario-js
 * Description: The description here
 */

export const drawBackground = (background, context, sprites) => {
  background.ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; ++x) {
      for(let y = y1; y < y2; ++y) {
        sprites.drawTile(background.title, context, x, y);
      }
    }
  });
};
