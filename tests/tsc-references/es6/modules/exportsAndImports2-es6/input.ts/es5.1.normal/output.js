// @target: es6
// @module: commonjs
// @filename: t1.ts
export var x = "x";
export var y = "y";
// @filename: t2.ts
export { x as y, y as x } from "./t1";
export { x as y, y as x };