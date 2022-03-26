export interface Expense {
  _id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  price: number;
  color?: string;
}

export interface NewExpense {
  name: string;
  price: string;
}