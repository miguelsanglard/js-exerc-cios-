// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaidade = 17;
var idadeparente = 24;
if (minhaidade > idadeparente) {
  console.log("É maior");
} else if (minhaidade < idadeparente) {
  console.log("É menor");
} else if (minhaidade === idadeparente) {
  console.log("É igual");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
true;
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207e6;
var china = 1340e6;
if (brasil == china) {
  console.log("É igual");
} else {
  console.log("Não é igual");
}

if ("Gato" === "gato" && 5 > 2) {
  // O que irá aparecer no console?
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
// Falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
// Cão
