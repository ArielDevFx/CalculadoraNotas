function calcularNotaFinal() {
  let notaDeGrado = parseFloat(document.getElementById("notaDeGrado").value);
  let notaDeExamen = parseFloat(document.getElementById("notaDeExamen").value);

  notaDeGrado = notaDeGrado * 100 * 0.75;
  notaDeExamen = notaDeExamen * 0.25;

  let notaFinal = notaDeGrado + notaDeExamen;

  document.getElementById("resultado").innerHTML =
    "La nota final es: " + notaFinal.toFixed(2);
}
