import fetch from 'node-fetch';

export async function fetchQuotation() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = response.json();
  return data;
}

export async function fetchQuotationCode(cod: string) {
  const response = await fetch(`https://economia.awesomeapi.com.br/json/${cod}`);
  const data = response.json();
  return data;
}
