// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);

    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);

    this.type = "expense";
    this.paid = paid;
  }

  getFormattedAmount() {
    // return `-${this.amount} €`;
    return "-" + super.getFormattedAmount();
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }

  addEntry(entry) {
    this.entries.push(entry);
  }

  getCurrentBalance() {
    let currentBalance = 0;

    for (const entry of this.entries) {
      if (entry.type === "expense") {
        currentBalance -= entry.amount;
      } else {
        currentBalance += entry.amount;
      }
    }

    return currentBalance;
  }
}
