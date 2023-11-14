var fs = require('fs');

export function read() {
  let contents = fs.readFileSync("aoc/2022/1/a/example1.data",'utf8');
  // console.log(contents);
  return contents;
}

export function groupCount() {
  let contents = read();
  let data = contents.split("\n\n");
  return data;
}
