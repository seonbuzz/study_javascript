// object : 여러가지 정보들을 Key, value로 담을 수 있음
//변수 선언 = {Key:"value", 여러 개 넣을 수 있음, key : value, key: value}
let animal = { name: "juju", species: "cat" };

// key 를 기준으로 value를 불러오는게 통상적인 방법임
console.log(animal.name); //방법 1

let animal_keys = Object.keys(animal);
for (let key of animal_keys) {
  console.log(`${key} : ${animal[key]}`); //= 다르게 이야기하자면 animal['name'], animal['species]
}

console.log(); //방법2 animal['species']   -->결과 'cat'
// key가 스트링으로 읽히기 때문에 찾을 때 ['']싱글 쿼테이션을 넣어야함

const animals_obj = [
  //==>object에 속한 array
  animal,
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

/*Object.keys(animal)
(2) ['name', 'species']
Object.values(animal)
(2) ['juju', 'cat']*/
