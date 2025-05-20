const calcularMedia = (...numbers) => {
  return numbers.reduce((accum, num) => accum + num, 0) / numbers.length
}

console.log(calcularMedia(2, 6, 3, 7, 4))

const calcularMediaPonderada = (...numbers) => {
  const somaPesos = numbers.reduce((acc, item) => acc + item.peso, 0);
  const somaNotasPonderadas = numbers.reduce((acc, item) => acc + item.valor * item.peso, 0);
  return somaNotasPonderadas / somaPesos;
}

console.log(calcularMediaPonderada(
  { valor: 7, peso: 2 },
  { valor: 9, peso: 5 },
  { valor: 3, peso: 1 }
))

const calcularMediana = (...valores) => {
  const ordenados = valores.sort((a, b) => a - b);
  const meio = Math.floor(ordenados.length / 2);
  const mediana = ordenados.length % 2
    ? ordenados[meio]
    : (ordenados[meio - 1] + ordenados[meio]) / 2;
  console.log(`Mediana: ${mediana}`);
};

calcularMediana(2, 4, 5, 7, 42, 99);

const calcularModa = (...valores) => {
  const contagem = {};
  valores.forEach(num => contagem[num] = (contagem[num] || 0) + 1);

  const maxFrequencia = Math.max(...Object.values(contagem));
  const modas = Object.keys(contagem)
    .filter(num => contagem[num] === maxFrequencia)
    .map(Number);

  console.log(`Moda: ${modas.join(', ')}`);
};

calcularModa(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4);
