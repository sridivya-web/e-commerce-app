
import Categories from '../components/Categories/Categories';
import Hero from '../components/Hero/Hero';
import GraphQuery from './GraphQuery';

const Home = () => {
	return (
		<div>
			<div className="container">
				< Hero/>
			</div>
			<div className="container new-arrivals-container">
				<h2 className="title">New Arrivals</h2>
				<div className="products">
			    <GraphQuery/>
				</div>
			</div>
			<div className="container">
				<Categories />
			</div>
			<div className="contact-card-section">
				<h2>Contact Us</h2>
				<p>
					Having any difficulties? <br /> Send us a mail Now.
				</p>
				<a href="mailto:contact@educative.io" className="btn">Send Mail</a>
			</div>
		</div>
	);
};

export default Home;