namespace srp {
//Single Responsibility
class Product{
    id:number;
    name: string; // artık yalnızca property tutuyo -- sadece prop tutanlar anemic model class. (çoğunluk)

}

class ProductRepository{
    productList: Product[] = []; 
    add(product: Product){  
        this.productList.push(product);
    }
    remove(id:number){
        // this.productList.slice()
    }
    update(product:Product){

    }
}

class ProductPresenter{
    writeToConsole(productList: Product[]){
        productList.forEach(x=>{
            console.log(x);
        })
    }
}


}

//hem prop hem method tutan classlar domain model class. Örn. repositoryler. Problem ne kadar büyükse DDD model(domain driven design) kullanılır. Single responsibility ihlal eder ama fazla domainlerde işe yarar.
