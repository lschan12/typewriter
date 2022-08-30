const sentence = "hello there from lighthouse labs";

let x = 50;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, x);
  x += 50
};
setTimeout(() => {
  console.log("")
}, x);