/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
}

/*
Враховуючи відсутність контексту в прикладі вищенаведеної функції припускаємо що message це рядок, 
адже в заданих умовах більш доцільнішим здається тип any, 
але враховуючи що це поганий тон було прийнято рішення застрсувати певні умовності
*/

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

export {};