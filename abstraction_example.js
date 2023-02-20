class Bank1 {
    Validation() {
        return "Bank 1 validation";
    }
    WithDraw() {
        return "Bank 1 withdraw";
    }
    Transfer() {
        return "Bank 1 transfer";
    }
}
class Bank2 {
    Validation() {
        return "Bank 2 validation";
    }
    WithDraw() {
        return "Bank 2 withdraw";
    }
    Transfer() {
        return "Bank 2 transfer";
    }
}
class BankFactory {
    constructor(bank) {
        this._bank = bank;
    }
    Info() {
        console.log(`${this._bank.Transfer()} has been performed`);
    }
}
let bankFactory = new BankFactory(new Bank1());
bankFactory.Info();
