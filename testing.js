/*//alert('12345')
var name = 'march'
const nameto = 'utBash'
let age = 26
age = 100
console.log(nameto)
console.log(age)
const bool = true
let botle = false
botle = true//comm
console.log(botle)
const _ere45_ = 'check'
//prompt('enter age')
//const agedoble = prompt('enter age')
//alert ('Human age '+ agedoble + ' name '+ nameto)
const age1 = 35
const age2 = 45
const age3 = age2-age1
//alert(age3)
let sim = 4
sim++
++sim
sim += age1
sim *= age2
//lert (sim)
//data type
//alert (typeof sim)
//null
//Boolean
//String
//Number
//undefined
//operation priority
//isAge - Boolean

const ageNow = 25
const ageBirth = 1995
const ageYear = 2021

const isageCheck = ageYear - ageBirth > ageNow
console.log (isageCheck)
// 
const statusCheck = 'failed'
if (statusCheck === 'ready')
{alert ('ready')}
else if(statusCheck === 'fail')
{alert ('fail')}
//else 
//{alert ('check')}*
//const age = true
age ? console.log('work') : console.log ('dont work')

//true && true
function calculate(year)
{
    return 2020 - year
}
//const meage
console.log(calculate(1993))
function human(name, year) 
{
    const age = calculate(year)
    if (age > 0){
    console.log('man named ' + name + 'have age' + age)}
    else console.log ('not born');
}
human('more', 2021)
//massive
const cars = ['one','two','free','35']

//const cars = new Array ('one','two','free','35')
console.log (cars [3])
cars[2] = 'maz'
console.log (cars [2])
const cars = ['one','two','three','35']
for (let i = 0; i < cars.length; i++){
   const car = cars [2]
  console.log (car)
}
for(let car of cars[1]){
    console.log (car)
}
const person = {
    firstname: 'one',
    lastmame: 'two',
    year: 1995,
    wife: true,
    lang: ['1','2','3','4'],
    greet: function(){
        console.log ('greet 1')
    }
}
person.greet()
const key = 'lang'
console.log (person [key])
person.wife = false
console.log (person)
person.greet()
//
const integer = 10

console.log (Number.MAX_SAFE_INTEGER)
console.log (Number.MAX_VALUE)
console.log (Number.MIN_VALUE)
console.log (Number.POSITIVE_INFINITY)
console.log (Number.NaN)//not number but tupe is number
const noway = 1/undefined
console.log (isNaN(noway))
const stingInt = 42
const stringFloat = 42.42
console.log (stingInt + 2)
console.log (Number.parseInt(stingInt)+2)
console.log (+stringFloat+2)
console.log (+(0.4+0.5).toFixed(1))
const bigint = 0
console.log (99999999999999999999999999999999n)//only bigint
console.log (10n-4)//error
console.log (parseInt(10n) -4)
//math
console.log (Math.PI)
console.log (Math.max(1,4,66,71))
console.log (Math.ceil(5.6))
console.log (Math.random())
function getRandom(min, msx)
{
    return Math.floor (Math.random() * (max - min+1) +min)
}
console.log (getRandom (1, 10))
//string
const nameto = 'string'
const age = 22
const output = 'hi, i am ' + nameto + age
const out10b = `hi i am ${nameto} and i ${age < 20 ? 'b' : 'a'} age.`
console.log ()
const out =`
<div> zw </div>
e 
r
t
t
        334
        `
        const nameby = 'basher'
console.log (nameby.toLowerCase)
console.log (nameby.charAt (2))
console.log (nameby.indexOf(she))// or -1
console.log (nameby.startsWith(ba))
console.log (nameby.repeat(2))
const string = '   basher    '
console.log (nameby.trim) //no space
function logPerson (a,b,c,di){
    return `${s[0]}${morr}${age}${s[1]}${s[2]}`
}
const pers = morrr
const age = 27
const out = logPerson ` name: ${pers}, age ${age}!`
let counter = 0
//declaration and ecspressio
//anonime function
const interval = setInterval(function(){
    if (counter === 5){
        clearInterval(interval)}
        else {    
    console.log(++counter)}
}, 100
)
//arrow function

const arrow = (name) => {
    array ('Hello', name)
}
const num2 = num => {
    return num ** 2
}
const num2 = num => num ** 2
//default parametr
const sum = (a = 2,b = 1) => a + b
function sumAll (...all) {
    console.log (all)
    const result = 0
    for (let num of all){
        result +=num
    }
    return result
}
const res = sumAll (1,3,4,7,8,9,4,2,)
console.log (res)
//замыкания
function qwe (name){
    return function(lastname){
        console.log(name+lastname)
    }
    
}
const zxc = qwe ('andrei')
console.log(zxc('novik'))
console.log(zxc('covid'))
const  cars = ['mazda', 'ford', 'bmw','mersedes']
const   fib = [1, 1, 2, 3 ,5, 8, 13]
//console.log (fib)
cars.push('reno')
cars.unshift('volga')
cars.shift()
//function addMs (){}
//console.log (cars)
const firstitem = cars.shift()
const lastitem = cars.pop()
console.log (cars.reverse())
//const text = 'qwertyuiop'
//const reversetext = text.split ('').reverse().join('')
//console.log (reversetext)//reverse
//const  cars = ['mazda', 'ford', 'bmw','mersedes']
const people = [
    {name: 'boris', age: 75},
    {name: 'sergey', age: 55},
    {name: 'banton', age: 23}
]
//console.log(cars.indexOf('ford'))
//const indexoff = people.find(function (people){
//    return people.age === 23
//})
//console.log (indexoff)
//const index = cars.indexOf('bmw')
//cars[index] = 'volvo'
//console.log(cars)
//let findedperson
//for (const person of people){
    //console.log(person)
  //  if (person.age=== 23)
    //findedperson = person
//}
//console.log (findedperson)
const person = people.find(person => person.age ===23)
console.log(person)
const  cars = ['mazda', 'ford', 'bmw','mersedes']
console.log (cars.includes('bmw'))
const uppercars = cars.map (car => {return car.toUpperCase()})//always new massive
console.log (uppercars)
//каменногорская 3 простор тц 14.00
//4.20 за час
const   fib = [1, 1, 2, 3 ,5, 8, 13]
const pow2 = num => num**2
const pow23 = fib.map(pow2)
console.log (pow23)
const fnum = pow23.filter (num=> num > 20)
console.log (fnum)
const people = [
    {name: 'boris', age: 75},
    {name: 'sergey', age: 55},
    {name: 'banton', age: 23}
]
const allage = people.filter(people => people.age > 30).reduce((acc, person) => {
    
    acc+=person.age
    return acc}, 0)
console.log(allage)*/
const person = {
    name: 'andrei',
    age: 25,
    isProg: true,
    language: ['ru','en','by'],
    'mo mo space': 2576+4,
    ['key _'+(1+3)]: 'key',
    greet(params) {
        console.log('greet person function')
    }
        
    }
console.log(person["mo mo space"])
person['key _4'] = 23
console.log(person['key _4'])
for (let key in person){
    if (person.hasOwnProperty(key))
    {
        console.log ('key:', key)
    }
}
const baser = Object.language(person)
language.key