import { useNavigate, useParams,Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import request from 'graphql-request';

interface product {
	id:string,
	name:string,
	price:number,
	slug:string,
	image: {
	  url:string
	},
	category: {
	  slug:string
	}
}
const CategoryPage = () => {

	const { category } = useParams();
	const [products, setProducts] = useState<product[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchShoes = async () => {
			const  shoes : any = await request("https://ap-south-1.cdn.hygraph.com/content/cm5xw6y8q009m07w46jk3i0fd/master", `
	   { 
	shoes(where: {category: {slug: "${category}"}}, first: 50) {
	  id
	  name
	  price
	  slug
	  image {
		url
	  }
	  category {
		slug
	  }
	}
  }`)
  setProducts(shoes)
		}
		fetchShoes();
	}, [category])
	console.log(products)
	return (
		<div className="container">
			<button className="back-btn btn" onClick={() => navigate(-1)}>
				Back
			</button>
			<div className="page-title">
				<h2>
					{category}
					<span>.</span>
				</h2>
			</div>
		 <div className="products">
				{products.map(product => (
					<div className="product">
						<img src={product.image.url} className="product-img" alt="" />
						<div className="product-content">
							<div className="flex-row">
							 <Link to={`${product.slug}`}>
															<h3>{product.name}</h3>
															</Link>
								<p className="price">{product.price}</p>
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

export default CategoryPage;