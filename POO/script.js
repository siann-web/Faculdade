//variavel do tipo array
let people = {
    name: "Ruan Bruno",
    phone: "88988242424",
    age: 20,
    apelido: "Ruanzito",
    atirar: function(){
    console.log("pew pew pew")
  }
}
//console.log(people.phone)
if (people.age >= 18){
  console.log('de maior');
  document.getElementById("function").innerHTML = people.atirar
}
else {
  console.log('de menor')
}
people.atirar()

