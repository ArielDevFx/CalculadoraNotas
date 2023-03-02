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

function redirectToInstagram(event) {
  event.preventDefault();
  const instagramUrl = "instagram://user?username=arieldevfx";
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /iphone|ipod|ipad|android/.test(userAgent);
  if (isMobile && instagramUrl) {
    window.location.href = instagramUrl;
  } else {
    window.location.href = event.target.href;
  }
}
