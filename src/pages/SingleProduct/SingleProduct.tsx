import { useNavigate, useParams } from 'react-router-dom';
import './index.css';
import { useState, useEffect } from 'react';
import request from 'graphql-request';

interface product {
	id : string
	name :string
	price : number
	description : string
	image : {
	url : string
	}
}
const SingleProduct = () => {
	const  [product, setProduct]= useState<product>({ id : "",
		name :"",
		price : 0,
		description : "",
		image : {
		url : ""
		}})
	const navigate = useNavigate();

	const {slug}= useParams();

	useEffect(() => {

		 const fetchProduct = async () => {
			const shoe: any = await request("https://ap-south-1.cdn.hygraph.com/content/cm5xw6y8q009m07w46jk3i0fd/master", `
			{
				shoe(where: {slug:"${slug}"}){
				 id
				 name
				 price
				 description
				 image{
				 url
				 }
				}
			}
				`)
				setProduct(shoe);
		 }
		 fetchProduct();
	},[slug])
	return (
		<div className="container">
			<button className="back-btn btn" onClick={() => navigate(-1)}>
				Back
			</button>
			<div className="single-product-container">
				<div className="page-title">
					<h2>
						Nike
						<span>.</span>
					</h2>
					{product && 
					<div className="product-container">
						<div className="product-img">
							<img src={product.image.url} alt="" />
						</div>
						<div className="product-info">
							<h3 className="product-title">{product.name}</h3>
							<p className="product-price">{product.price}</p>
							<p className="product-description">
						     {product.description}
							</p>
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
}
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;