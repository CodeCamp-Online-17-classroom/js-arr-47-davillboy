// write code here
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

console.log(sorted); 
console.log(arr); 
