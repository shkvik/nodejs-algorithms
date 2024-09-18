class ATM {
  private banknotes: number[];
  private readonly denominations: number[] = [20, 50, 100, 200, 500];

  constructor() {
    this.banknotes = new Array(5).fill(0);
  }

  deposit(banknotesCount: number[]): void {
    for (let i = 0; i < 5; i++) {
      this.banknotes[i] += banknotesCount[i];
    }
  }

  withdraw(amount: number): number[] {
    const usedBanknotes = new Array(5).fill(0);
    let remainingAmount = amount;

    for (let i = 4; i >= 0; i--) {
      const banknoteValue = this.denominations[i];
      const maxBanknotes = Math.min(
        Math.floor(remainingAmount / banknoteValue), this.banknotes[i]
      );
      usedBanknotes[i] = maxBanknotes;
      remainingAmount -= maxBanknotes * banknoteValue;
    }

    if (remainingAmount > 0) {
      return [-1];
    }

    for (let i = 0; i < 5; i++) {
      this.banknotes[i] -= usedBanknotes[i];
    }

    return usedBanknotes;
  }
}


export function AtmTEST() {
  const atm = new ATM();
  atm.deposit([0, 0, 1, 2, 1]); // Добавляем 0 банкнот по 20, 0 банкнот по 50, 1 банкноту по 100, 2 банкноты по 200, и 1 банкноту по 500
  console.log(atm.withdraw(600)); // Ожидаемый результат: [0, 0, 1, 0, 1] (1 банкнота по 100, 1 банкнота по 500)
  atm.deposit([0, 1, 0, 1, 1]);
  console.log(atm.withdraw(600)); // Ожидаемый результат: [0, 0, 1, 2, 0] (1 банкнота по 100, 2 банкноты по 200)
  console.log(atm.withdraw(550)); // Ожидаемый результат: [-1] (невозможно выдать сумму)
}