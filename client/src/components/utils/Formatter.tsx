var intlNumberFormatValues = {
  Germany: ["de-DE", "currency", "EUR"],
  Tunisia: ["ar-TN", "currency", "TND"],
};

export var formatter = new Intl.NumberFormat(
  intlNumberFormatValues.Germany[0],
  {
    style: intlNumberFormatValues.Germany[1],
    currency: intlNumberFormatValues.Germany[2],
  }
);

export let formatPrice = function (price: number): string {
  return formatter.format(price / 100);
};
