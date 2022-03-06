let user= {
    name: "john",
    age: 30,
    inAdmin: true,
};

for (let key in user){
    console.log(key);
    console.log(user[key]);
}