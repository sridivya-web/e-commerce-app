import { useEffect, useState } from 'react';
import './index.css';
import request from 'graphql-request';
import { Link } from 'react-router-dom';

// import nikeCategory from './../../assets/images/nike-category.png';
// import yeezyCategory from './../../assets/images/yeezy-category.png';
// import jordanCategory from './../../assets/images/jordan-category.png';

interface categories {
	id : String,
	slug:string,
	image: {
	url:string
	}
}
const Categories = () => {
	const [categories, setCategories] = useState<categories[]>([]);

	useEffect(() => {

		const fetchCategories = async () => {
			const category : any = await request("https://ap-south-1.cdn.hygraph.com/content/cm5xw6y8q009m07w46jk3i0fd/master",`
			{

			categories {
			id
			slug
			image {
			url
			}
			}
			}`)
			setCategories(category);
		}
		fetchCategories();
	},[])

	return (
		<div className="categories-container">
			<h2 className="title">Categories</h2>
			
			<div className="categories">
			{categories.map((category) => (
				<Link to={`/shop/${category.slug}`}>
				<div className="category">
				<img src={category.image.url} className="category-img" alt="" loading="lazy" />
			</div>
			</Link>
			))}
			</div>
		</div>
	);
};

export default Categories;
