const formulaA = document.getElementById('a')
const formulaB = document.getElementById('b')
const formulaC = document.getElementById('c')
const a = document.getElementById('value-a')
const b = document.getElementById('value-b')
const c = document.getElementById('value-c')
const submitBtn = document.getElementById('btn')
const x1 = document.getElementById('x-1')
const x2 = document.getElementById('x-2')

submitBtn.addEventListener('click', calculate)

function calculate(e) {
  e.preventDefault()

  const A = Number(a.value)
  const B = Number(b.value)
  const C = Number(c.value)

  formulaA.innerHTML = A
  formulaB.innerHTML = B == "" ? 0 : B
  formulaC.innerHTML = C == "" ? 0 : C

  if (A == 0) {
    alert('O valor de X não pode ser 0')
    return
  }
  else if (B == 0) {
    x1.innerHTML = +(Math.sqrt(-C / A))
    x2.innerHTML = -(Math.sqrt(-C / A))
    return
  }
  else if (C == 0) {
    x1.innerHTML = 0
    x2.innerHTML = -B / A
    return
  }

  const delta = B * B - 4 * A * C
  const result = bhaskara(A, B, delta)

  x1.innerHTML = result.x1
  x2.innerHTML = result.x2
}

function bhaskara(a, b, delta) {
  return {
    x1: (-b + Math.sqrt(delta)) / (2 * a),
    x2: (-b - Math.sqrt(delta)) / (2 * a),
  }
}
