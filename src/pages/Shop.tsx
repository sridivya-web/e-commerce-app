import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { request } from 'graphql-request';

	

type products = {

        id:string,
        image: { url:string},
		slug:string,
        name:string,
        price:number,
		category:{ slug: string }
 }

const Shop = () => {

	const [products, setProducts] = useState<products[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchSneakers = async () => {
			const  shoes : any = await request(
				"https://ap-south-1.cdn.hygraph.com/content/cm5xw6y8q009m07w46jk3i0fd/master",
				`
         { 
            shoes(first: 50) {
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
         }
       `
			);

			setProducts(shoes);
		};
		fetchSneakers();
	},[])

	return (
		<div className="container">
			<button className="back-btn btn" onClick={() => navigate(-1)}>Back</button>
			<div className="page-title">
				<h2>
					Shop<span>.</span>
				</h2>
			</div>

			<div className="products">
				 {products.map((product) => (
					<div key={product.id} className="product">
					
					<img src={product.image?.url} className="product-img" alt="" />
						<div className="product-content">
							<div className="flex-row">
							  <Link to={`${product.category.slug}/${product.slug}`}>
								<h3>{product.name}</h3>
								</Link>
								<p className="price">${product.price}</p>
							</div>
							<button className="snipcart-add-item btn"
							        data-item-id={product.id}
									data-item-price={product.price}
									data-item-image={product.image.url}
									data-item-name={product.name}
                              >
								Add to Cart
							</button>
						</div>
					</div>
				))} 
			</div>
		</div>
	);
};

export default Shop;