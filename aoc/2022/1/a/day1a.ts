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
    let r =  lines.reduce((sum, line) => { 
      return sum + (1*line); 
    }, 0);
    return r;
  });
  return ca;
}

export function maxCalories() {
  let ca = calorieArray()
  return Math.max(...ca)
}


