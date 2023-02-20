interface IBank{
    Validation();
    WithDraw();
    Transfer();
}

class Bank1 implements IBank{
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
class Bank2 implements IBank{
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

class BankFactory{
    _bank : IBank
    constructor(bank: IBank){
        this._bank = bank;
    }
    Info(){
        console.log(`${this._bank.Transfer()} has been performed`);
    }
}

let bankFactory = new BankFactory(new Bank1());
bankFactory.Info();