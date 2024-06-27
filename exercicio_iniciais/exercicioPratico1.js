console.log("Diga uma frase qualquer.");
process.stdin.on("data", function (data) {
  let frase = data.toString().trim();
  console.log("A frase contém " + frase.length + " caracteres.");
  if (frase.length % 2 == 0) {
    console.log("O número de caracteres é par.");
  } else {
    console.log("O número de caracteres é impar.");
  }

  process.exit();
});
