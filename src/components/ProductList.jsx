import { useEffect, useState, useCallback, useMemo } from "react";
import ProductItem from "./ProductItem";

function ProductList(){
    const [products, setProducts] = useState([]);
    const[search, setSearch] = useState("")

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => setProducts(data.products));
    }, []);

    const handleSearch = useCallback((e)=> {
        setSearch(e.target.value);
    }, []);

    const filteredProducts = useMemo(() => {
        console.log("search", search);
        return products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    },[products, search]);
    return(
        <div>
            <input type="text" className="border p-2 mb-4 w-full" onChange={handleSearch}/>

            <div className="grid grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )

}

export default ProductList;