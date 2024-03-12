function Tiempo (Comparar) {
  const fechaHoy = new Date().getTime()
  const FechaComparar = new Date(Comparar)
  const diferencia = fechaHoy - FechaComparar
  const segundos = diferencia / 1000
  console.log('han pasado', segundos, ' segundos')
  const minutos = segundos / 60
  console.log('han pasado ', minutos, ' minutos')
  const horas = minutos / 60
  console.log('han pasado', horas, ' horas')
  const dias = horas / 24
  console.log('han pasado', dias, ' dias')
  const años = dias / 365
  console.log('han pasado', años, ' años')
}

function Volado () {
  const moneda = Math.random() * 2
  if (moneda > 1) {
    console.log('Cara')
  } else {
    console.log('Cruz')
  }
}
Volado()
Volado()
Volado()
Volado()
Volado()
Volado()
Volado()
Volado()
Volado()
Volado()
Tiempo('2020-01-01')
