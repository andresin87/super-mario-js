/**
 * Company: Redpoints.
 * Website: www.redpoints.com
 * Date: 11/11/2017
 * Project: super-mario-js
 * Description: The description here
 */

export const loadImage = (url) => new Promise((resolve) => {
  const image = new Image();
  image.addEventListener('load', () => {
    resolve(image);
  });
  image.src = url;
});
