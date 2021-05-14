

export function deleteProduct(id){
    fetch(`http:/localhost:3001/product/${id}`, {
        method: "DELETE"});
};