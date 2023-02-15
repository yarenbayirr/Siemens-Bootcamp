var price = 20;
var price2 = 20.44;
var name2 = "ahmet";
var isShow = true;
var products = null;
var product = undefined;
var price3 = 24; //tipi çalışırken belli olacak (runtime)
price3.toFixed(); //çalışırken sayı atanırsa patlamaz. aksi halde hata fırlatır.Direkt yazabiliriz.
var price4 = 30; //tipi belli değil
// price4.toFixed // hata verir şu an
price4.toFixed(); //hatayı bu şekilde kaldırabiliriz. Tipini belli etmek zorundayız. Biraz daha tip güvenli
var numbers = [1, 2, 3, 4, 5];
var names = ["ahmet", "mehmet", "hasan"];
var productList = ["kalem", "defter", "silgi"];
var productList2 = ["kalem", "defter", "silgi", 23];
var value1 = true;
for (var index = 0; index < names.length; index++) {
    var element = names[index];
    console.log(element);
}
