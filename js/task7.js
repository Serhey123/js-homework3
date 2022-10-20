/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
let identify = 0;
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  balance: 0,

  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const objTransaction = {
      type: type,
      amount: amount,
      id: identify,
    };
    return objTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const depositTransaction = this.createTransaction(amount, "deposit");
    identify += 1;
    depositTransaction.id = identify;
    this.transactions.push(depositTransaction);
    return "Операция зачисления успешна!";
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return "снятие такой суммы не возможно, недостаточно средств";
    }
    this.balance -= amount;
    const withdrawTransaction = this.createTransaction(amount, "withdraw");
    identify += 100;
    withdrawTransaction.id = identify;
    this.transactions.push(withdrawTransaction);
    return "Операция снятия успешна!";
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id == id) {
        return transaction;
      }
    }
    return "такого идентификатора не существует";
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type == type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

console.log(account.deposit(100));
console.log(account.deposit(100));

console.log(account.withdraw(10));
console.log(account.withdraw(10));
console.log(account.withdraw(10));

console.log(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionTotal("withdraw"));
console.log(account.getTransactionDetails("102"));
