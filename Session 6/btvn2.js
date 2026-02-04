let balance=[100,200,300,400];
let total=0;
for(let element of balance){
    console.log(element)
}
for(let index in balance){
    console.log(index)
}
for(let i=0;i<balance;i++){
    if(i%2==0){
        total+=balance[i];
    }
}
console.log(`${total}`);

