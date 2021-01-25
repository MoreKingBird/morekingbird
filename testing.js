//alert('12345')
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