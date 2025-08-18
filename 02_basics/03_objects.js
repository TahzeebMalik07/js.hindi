// singleton

//object literals


const mySym = Symbol("Key1")
// const mySym = Symbol("key1")

const JsUser = {
    name: "malik",
    "full name": "tahzeeb malik",
    mySym : "mykey1",
    age: 20,
    location: "mbd",
    email: "tah@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}


console.log(JsUser.email);
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])


JsUser.email = "malik@gmail.com"
Object.freeze(JsUser)
JsUser.email = "malik234@gmail.com"
//console.log(JsUser)


JsUser.greting = function(){
    console.log("hello js user");

}
JsUser.gretingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greting());
console.log(JsUser.gretingTwo());
