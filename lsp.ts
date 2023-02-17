interface ITakePhoto{ //ortak olmayan bir methodu başka bir interface e aldık
    takePhoto();
}

class BasePhone{
    call(){
        console.log("arama yapıldı");
    }

}
class Iphone12 extends BasePhone implements ITakePhoto{
    takePhoto() {
        console.log("fotoğraf çekildi");
    }
   
}

class Nokia extends BasePhone{
   
}

let phone:BasePhone; //ikisinde de ortak özelliği olan sınıf basephone du. ayrıştıkları yer interface take photo. o yüzden basephone tipini verdik.
phone = new Iphone12(); //basephonedan iphone12 türettik 
phone.call();
if(phone instanceof Iphone12){
    (phone as Iphone12).takePhoto(); //sınıfına cast ettiğimizde take photo geldi
}


phone = new Nokia();
phone.call();

//liskov substituion