
import * as path from 'path';

const EVENT:any = process.env.npm_lifecycle_event || '';

/**
 * Helper functions.
 */
const ROOT = path.resolve(__dirname, '..');

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function hasNpmFlag(flag) {
  return EVENT.includes(flag);
}

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

const root = path.join.bind(path, ROOT);

export { hasProcessFlag }
export { hasNpmFlag }
export { isWebpackDevServer }
export { root }
