function ordenInverso (arrayOrden = []) {
  let stop = arrayOrden.length - 1
  const arrayInverso = []
  while (stop > -1) {
    arrayInverso.push(arrayOrden[stop])
    stop--
  }
  console.log(arrayInverso)
}
function mayorArray (arrayMayor = []) {
  let i = 0
  let mayor = arrayMayor[i]
  while (arrayMayor.length > i) {
    if (mayor < arrayMayor[i]) {
      mayor = arrayMayor[i]
    }
    i++
  }
  console.log(mayor)
}
function buscar (busqueda) {
  const listaNombres = [
    'luis',
    'Mario',
    'Pepe',
    'Carlos',
    'God Charly',
    'Manuela'
  ]
  let i = 0
  while (listaNombres.length > i) {
    if (listaNombres[i] === busqueda) {
      console.log(true)
      return
    } else {
      i++
    }
  }
  console.log(false)
}
function dado (Elemntor, maxSteel) {
  let contador = 0
  let i = 0
  while (maxSteel.length > i) {
    if (maxSteel[i] === Elemntor) {
      contador++
    }
    i++
  }
  console.log(contador)
}
function suma (a, b) {
  a = parseInt(a)
  b = parseInt(b)
  const c = a + b
  console.log(c)
}
dado('Elementor', [
  'Elementor',
  'Elementor',
  'barbie',
  'Max Steel',
  'Hot Wheels'
])
ordenInverso([1, 2, 3, 4, 5, 6, 7, 8])
mayorArray([5, 4, 6, 8, 10, 60, 20, 31])
buscar('God Charly')
buscar('Tu mama')
suma(8, 5)
