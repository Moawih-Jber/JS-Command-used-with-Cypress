let myarray = ["moawih", "wael", "jber", "lena", "farah", "sarah"]

// console.log(myarray)
// myarray.push(std1) اضافة عنصر على الاراي
// console.log(myarray)
// myarray.pop(std1) حذف عصر من الاراي 
// console.log(myarray)
// length = اخر اندكس+ 1
// pop حذف اخر اندكس
// push اضافة عنصر
// console.log(myarray.push("moawih"))

let smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let myRandom = Math.floor(Math.random() * smallLetters.length)
let genaratedLetter = smallLetters[myRandom]
console.log(genaratedLetter)

function sss() {
    for (let i = 0; i < myarray.length; i++) {

        if (myarray[i][0] == genaratedLetter) {

            console.log(`${i} this name ${myarray[i]} is starting with ${genaratedLetter} `)
        }
        else {
            console.log(`${i} this name ${myarray[i]} is not starting ${genaratedLetter}`)
        }
    }
}

sss()

for (let i = 0; i < myarray.length; i += 2) {

    console.log(myarray[i])
    //  جملة طباعة
}
