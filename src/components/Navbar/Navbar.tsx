import { useState, useRef, useEffect } from 'react';


import './index.css';
import { Link, NavLink } from 'react-router-dom';

 const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);

	const linksRef = useRef<HTMLDivElement>(null);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	useEffect(() => {
		if (window.innerWidth < 1000) {
			if (showLinks) {
				
					if(linksRef.current) { linksRef.current.style.display = 'block' }
			} else {
				if(linksRef.current) { linksRef.current.style.display = 'none'; }
			}
		}
	}, [showLinks]);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-header">
					<div className="navbar-logo">
						<Link to="/">
						SNEAKER STORE
						</Link>
					</div>
					<div className="flex-icons">
						<i className="fa-solid fa-cart-shopping cart-mobile"></i>
						<div className="hamburger-menu" onClick={toggleLinks}>
							<i className="fa-solid fa-bars"></i>
						</div>
					</div>
				</div>
				<div className="navbar-links-container" ref={linksRef}>
					<ul className="navbar-links">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/shop">Shop</NavLink>
						</li>
						<li className="cart-desktop  snipcart-checkout">
							<i className="fa-solid fa-cart-shopping"></i>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
