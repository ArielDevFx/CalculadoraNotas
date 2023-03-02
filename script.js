function calcularNotaFinal() {
  let notaDeGrado = parseFloat(
    document.getElementById("notaDeGrado").value.replace(",", ".")
  );
  let notaDeExamen = parseFloat(
    document.getElementById("notaDeExamen").value.replace(",", ".")
  );

  notaDeGrado = notaDeGrado * 100;
  notaDeGrado = notaDeGrado * 0.75;
  notaDeExamen = notaDeExamen * 0.25;

  let notaFinal = notaDeGrado + notaDeExamen;

  document.getElementById("resultado").innerHTML =
    "La nota final es: " + notaFinal.toFixed(2).replace(".", ",");
}
