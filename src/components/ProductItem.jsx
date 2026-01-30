import React from "react";

function ProductItem({ product }){
    console.log("render", product.title);
    return(
        <div>
            <img src={product.thumbnail} alt={product.title} className="h-32 object-cover w-full" />
            <h3>
                {product.title}
            </h3>
            <p>
                ${product.price}
            </p>
        </div>
    )
}

export default React.memo(ProductItem)

