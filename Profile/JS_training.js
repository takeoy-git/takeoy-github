const apple = "リンゴs"
console.log(apple)

let weight = 70
console.log(weight)

// # 33
const person = {}
person.name = "Bob",
    person.age = 20


person.name = "Tom"

const getObjectName = (object) => {
    return object.name
}

console.log(person)
console.log(person.name)
console.log(getObjectName(person))

console.log(person.age)
person.age++
console.log(person.age)

person.weight = 50
console.log(person)

delete person.age
console.log(person)

const deleteProperty = (obj, property) => {
    delete obj[property]
    return obj
}

console.log("Hello")
deleteProperty(person, "name")
console.log(person)

//# 54
const array = [1, 2, 3, 4, 5]
const array2 = [1, 2, 5, 4, 5]
let total = 0
for (
    let i = 0; i < array.length; i++
) {
    total += array[i]
}
console.log(total)

const calcTotal = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    } return total
}

const result = calcTotal(array2)
console.log(result)

const array3 = [...array, 100, ...array2]
console.log(array3)

array3.pop()
console.log(array3)
array3.shift()
console.log(array3)
array3.unshift("apple")
console.log(array3)
console.log(array3.indexOf("apple"))
console.log(array3.indexOf(2))
console.log(array3.includes("apple"))
const array3Each = array3.forEach((index) => { console.log(index) })
array3.sort()
console.log(array3)
array3.reverse()
console.log(array3)

//80
console.log('No.80')

const object = [
    { id: 1, name: 'John', age: 15 },
    { id: 2, name: 'Bob', age: 20 },
    { id: 3, name: 'Michael', age: 15 },
];
console.log(object[0].name)

const found3 = object.filter((element) =>
    element.name.length == 4)
console.log(found3)

const foundElementsArray = object.filter(element =>
    element.age === 15);

console.log(foundElementsArray)

const foundNotElementsArray = object.filter(element =>
    element.id !== 1);

console.log(foundNotElementsArray)
object.map((obj) => obj.age++)
console.log(object)

// #92
console.log("#92")
const person2 = { name: "Mike", age: 23 };
const personInfo = { ...person2, ...{ country: "America", job: "software engineer" } };

console.log(personInfo);

// #100
console.log("#100")
// alert("アラートです")

const name2 = "鈴木";
// if (confirm(name2 + "さんで間違い無いですか？")) {
//     console.log("ようこそ" + name2 + "さん");
// } else {
//     console.log("正しい名前を入力してください");
// }

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        const filteredData = data.filter((obj) => obj.id === 5)
        console.log(filteredData)
    })