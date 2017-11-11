/**
 * Company: Redpoints.
 * Website: www.redpoints.com
 * Date: 11/11/2017
 * Project: super-mario-js
 * Description: The description here
 */

export const loadLevel = name => fetch(`/levels/${name}.json`).then(r => r.json());
