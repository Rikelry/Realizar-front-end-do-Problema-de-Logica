type Breakdown = {
    notas: Record<number, number>;
    moedas: Record<number, number>;
}

export function calcular_valor(valor: number): Breakdown {
    let centavos = Math.round(valor * 100);
    const valor_notas = [10000, 5000, 2000, 1000, 500, 200];
    const valor_moedas = [100, 50, 25, 10, 5, 1];
    const notas: Record<number, number> = {};
    const moedas: Record<number, number> = {};

    for (const nota of valor_notas) {
        notas[nota] = Math.floor(centavos / nota);
        centavos %= nota;
    }

    for (const moeda of valor_moedas) {
        moedas[moeda] = Math.floor(centavos / moeda);
        centavos %= moeda;
    }

    return { notas, moedas };
}
