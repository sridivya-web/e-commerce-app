import request from "graphql-request";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type products = {

    id: string,
    image: { url: string },
    slug: string,
    name: string,
    price: number,
    category:{ slug: string }
}

 const GraphQuery = () => {

    const [products, setProducts] = useState<products[]>([]);

    const query = `{
          
            shoes(last:3){
            	id
				name
				price
				slug
				image {
					url
				}
                category{
				     slug
				}
            }
        
        
            }`

    useEffect(() => {

        const fetchSneakers = async () => {

            const { shoes }: any = await request("https://ap-south-1.cdn.hygraph.com/content/cm5xw6y8q009m07w46jk3i0fd/master", query)
            setProducts(shoes);
        }
        fetchSneakers();
    }, [query])

    return (
        <>
            {
                products.map(product => (
                    <div className="product">
                        <img src={product.image.url} className="product-img" alt="" />
                        <div className="product-content">
                            <div className="flex-row">
                                <Link to={`shop/${product.category.slug}/${product.slug}`}>
                                <h3>{product.name}</h3>
                                </Link>
                                <p className="price">{product.price}</p>
                            </div>
                            <button className="snipcart-add-item btn"
                                data-item-id={product.id}
                                data-item-price={product.price}
                                data-item-image={product.image.url}
                                data-item-name={product.name} >Add to Cart</button>
                        </div>
                    </div>
                ))
            }

        </>
    );
}

export default GraphQuery;