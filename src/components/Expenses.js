
export function MonthlyExpenses(price,period) {
    switch (period) {
      case 'Yearly': return (price/12);
      case 'Monthly': return price;
      case 'Twice a Month': return (price*2);
      case 'Weekly': return (price*4);
      case 'Daily': return (price*30);
      default: return 0;
    }
}
