// console.log(global);

global.setTimeout(() => {
    console.log('### In the Time Out');
    clearInterval(int);
}, 4000);

const int = setInterval(() => {
    console.log('### In the Interval');
}, 1000);

console.log(__dirname);
console.log(__filename);