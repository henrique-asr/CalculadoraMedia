function calcularMedia() {
  const np1 = parseFloat(document.getElementById("np1").value)
  const np2 = parseFloat(document.getElementById("np2").value)
  const pim = parseFloat(document.getElementById("pim").value)

  if (isNaN(np1) || isNaN(np2) || isNaN(pim)) {
    document.getElementById("resultado").innerHTML =
      "Por favor, preencha todas as notas."
    return
  }

  const media = (np1 * 4 + np2 * 4 + pim * 2) / 10
  let mensagem = `Sua média é: <strong>${media.toFixed(2)}</strong><br>`

  if (media < 6.75) {
    const notaMinimaExame = 4.75 * 2 - media
    mensagem += `Você ficou de exame.<br>`
    mensagem += `Para não pegar DP, precisa tirar pelo menos: <strong>${notaMinimaExame.toFixed(
      2
    )}</strong> no exame.<br>`
    if (notaMinimaExame > 10) {
      mensagem += `<strong>Infelizmente, não é possível evitar a DP mesmo com nota máxima.</strong>`
    }
  } else {
    mensagem += `<strong>Parabéns!</strong> Você passou direto e não precisa fazer exame.`
  }

  document.getElementById("resultado").innerHTML = mensagem
}

function alternarModo() {
  document.body.classList.toggle("dark")
}
