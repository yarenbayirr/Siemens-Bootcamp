let nameList: string[] = ["ahmet", "mehmet"]

let tuple: [string, number] = ["ahmet", 23]

class KeyValuePair{
    key: number;
    value: string;
}

let myLis: KeyValuePair[] = []
var map = new Map();

map.set(1, "kalem");
map.set(2, "defter");
map.set(3, "silgi");

for (let key of map.keys()) {
   console.log(key);
}
for (let value of map.values()) {
    console.log(value);
}
for (let keyAndValue of map.entries()) {
    console.log(`${keyAndValue[0]} ${keyAndValue[1]}`);
}

//tsc çevirirken tsc --target es6 map_array.ts
 
