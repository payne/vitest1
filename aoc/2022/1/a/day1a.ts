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

export function calorieArray() {
  let groups = groupCount();
  let ca = groups.map(g => {
    let lines = g.split("\n");
    console.log(`lines="${lines}"`);
    let r =  lines.reduce((sum, line) => { 
      console.log(` line is ${line}`); 
      return sum + (1*line); 
    }, 0);
    console.log(`r is ${r}`)
    return r;
  });
  return ca;
}

