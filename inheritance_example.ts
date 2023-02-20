class Employee{
    id: number;
    name: string;
    surname: string;
    identityNo: string;
    dateOfBirth : Date;
    startDate: Date;
    showDetails(){
        console.log(`Name Surname: ${this.name} ${this.surname} - TC: ${this.identityNo}`);
    }
}

class Doctor extends Employee{
    Specialty: string;
}

var myDoctor = new Doctor();
myDoctor.name = "Mustafa";
myDoctor.surname = "Yıldırım";
myDoctor.identityNo = "123456789";
myDoctor.showDetails();