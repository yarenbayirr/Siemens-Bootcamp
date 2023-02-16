let setArray = new Set();
setArray.add("ahmet"); //iki tane ahmeti kabul etmez
setArray.add("mehmet");
setArray.add("hasan");

for(let name of setArray){
    console.log(name);
}

//tsc çevirirken tsc --target es6 setArray.ts