const persona = {
  age: 13,
  height: 1.8,
  gender: 'male',
  isAlive: true,
  foodType: ['frutas', 'verduras', 'semillas', 'etc'],
  eyes: { color: 'brown', shape: 'big' },
  dormir: function () {
    console.log('estoy durmiendo')
  },
  comer: function () {
    console.log('estoy comiendo...')
  },
  propiedadInventada: 'todo bien',
  '45_propiedad-Inventrada-$ftfgt': 'todo MAL!!!!'
}
const proto = new Object({
  age: 15,
  sex: 'allways'
})

const charly = Object.create(proto)

console.log(charly.age)
console.log(persona.eyes.color)
