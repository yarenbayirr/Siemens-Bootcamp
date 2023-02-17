interface IProductRepository{
   
   
}

interface IWriteRepository{
    save(data:string);
    update(data:string);
    delete(id:number);
}

interface IReadRepository{
    getAll();
    getById(id:number);
}

class ProductRepository implements IWriteRepository, IReadRepository{
    getAll() {
        throw new Error("Method not implemented.");
    }
    getById(id: number) {
        throw new Error("Method not implemented.");
    }
    save(data: string) {
        throw new Error("Method not implemented.");
    }
    update(data: string) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }
 

}