import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../config';

export const getExpenses = async () => {
  const { data }: AxiosResponse = await axios({
    url: `${API_URL}/expense`,
    method: 'GET',
  });

  return data;
};

export const createExpense = async (body: any) => {
  const { data }: AxiosResponse = await axios({
    url: `${API_URL}/expense`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });

  return data;
};

export const deleteExpense = async (_id: string) => {
  const { data }: AxiosResponse = await axios({
    url: `${API_URL}/expense/${_id}`,
    method: 'DELETE',
  });

  return data;
};
