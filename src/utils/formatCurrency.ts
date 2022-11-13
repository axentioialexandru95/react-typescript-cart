const CURRENCY_FORMATTER = new Intl
    .NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });

export const formatCurrency = (amount: number) => CURRENCY_FORMATTER.format(amount);
