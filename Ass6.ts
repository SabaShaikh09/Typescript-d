let set = new Set<string>();


set.add("Java");
set.add("C");
set.add("Python");
set.add("C++");
set.add("Typescript");
set.add("Corejava");

let map = new Map<number,string>();  
  
map.set(1, 'Saba');     
map.set(2, 'sabar');       
map.set(3, 'sana');   
map.set(4, 'abas');  

console.log(set);
console.log( "Key is Present= " +set.has("Saba") );   
console.log( "Size= " +set.size );   
//console.log( "Delete value= " +set.delete("Python") );   
console.log( "New Size= " +set.size );  

console.log("-----------------------------------")
  console.log(map);
console.log( "Value1= " +map.get(1)   );   
console.log("Value2= " + map.get(2) );   
console.log( "Key is Present= " +map.has(3) );   
console.log( "Size= " +map.size );   
//console.log( "Delete value= " +map.delete(1) );   
console.log( "New Size= " +map.size );