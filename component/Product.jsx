import React from "react"

const product = [
    {id : 1, name : "Hp Laptop", price : "$799", stock : "Available"},
    {id : 2, name : "Dell Laptop", price : "$577", stock : "Available"},
    {id : 3, name : "Lenovo Laptop", price : "$600", stock : "Not Available"}
];

function Product(){
    return (
        <>
        {product.map((e) => (
            <div key={e.id}>
                <h2>Product : {e.name} </h2>
                <p>Price : {e.price} </p>
                <p>Stock : {e.stock} </p>
                <hr />
            </div>
        ))}
        </>
    );
}

export default Product;