const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
//Caso queira colocar um tamanho maximo de display
// const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
//   currency: 'BRL',
//   style: 'decimal',
// })

// export function formatCurrency(number: number): string {
//   return number > 100000
//     ? CURRENCY_FORMATTER.format(number).substring(0, 5) + '...'
//     : CURRENCY_FORMATTER.format(number)
// }

