const numeros = [1, 2, 3, 4, 5, 6]
let index = 1
const tarea = numeros.reduce((acc) => {
  const prueba = Array(index).fill(index)
  acc.push(prueba)
  index++
  return acc
}, [])

console.log(tarea)

function filter (buscar, Criterio) {
  const resultado = Criterio.filter((element) => element.includes(buscar))
  console.log(resultado)
}

filter('ma', ['manzana', 'perro', 'manuel'])

const alumnos = [
  {
    name: 'Pedrito',
    grades: [9, 9, 8, 7]
  },
  {
    name: 'Pedrito',
    grades: [9, 9, 8, 7]
  },
  {
    name: 'Pedrito',
    grades: [9, 9, 8, 7]
  },
  {
    name: 'Pedrito',
    grades: [9, 9, 8, 7]
  },
  {
    name: 'Pedrito',
    grades: [9, 9, 8, 7]
  }
]
const promedio = alumnos.map((alumno) => {
  const final =
    alumno.grades.reduce((acc, curr) => acc + curr, 0) / alumno.grades.length
  return {
    name: alumno.name,
    average: final
  }
})
console.log(promedio)
