const colors = '#488f31 #679f51 #83af70 #9fc08f #bad0af #d5e0cf #f1f1f1 #f1d4d4 #f0b8b8 #ec9c9d #e67f83 #de6069 #d43d51'.split(' ');

export const formatExpenses = (expenses: any[]): any[] =>
  expenses
    .sort((a: any, b: any) => b.price - a.price)
    .map((c, i) => ({ ...c, color: colors[i] }));
