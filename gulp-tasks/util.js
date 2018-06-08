export function extractParameter(paramName) {
  const idx = process.argv.indexOf(`--${paramName}`);
  if(~idx) {
    return process.argv[idx+1];
  }
}