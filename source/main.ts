import { calcular_valor } from "./calcular_valor";

const input = document.getElementById("valor_input") as HTMLInputElement;
const botao = document.getElementById("calcular_btn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLPreElement;

function formatar_moeda(valor_em_centavos: number): string {
  return (valor_em_centavos / 100).toFixed(2);
}

botao.addEventListener("click", () => {
  const valor = parseFloat(input.value);

  if (isNaN(valor) || valor < 0) {
    output.textContent = "Valor inválido.";
    return;
  }

  const resultado = calcular_valor(valor);

  let texto = "NOTAS:\n";

  const ordem_das_notas = [10000, 5000, 2000, 1000, 500, 200];
  for (const n of ordem_das_notas) {
    texto += `${resultado.notas[n]} nota(s) de R$ ${formatar_moeda(n)}\n`;
  }

  texto += "\nMOEDAS:\n";

  const ordem_das_moedas = [100, 50, 25, 10, 5, 1];
  for (const m of ordem_das_moedas) {
    texto += `${resultado.moedas[m]} moeda(s) de R$ ${formatar_moeda(m)}\n`;
  }

  output.textContent = texto;
});
