import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
					alt="Holiday Deals"
				/>
			</div>

			<div className="home__row">
				<Product
					id="12345678"
					title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
					price={14.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
				/>
				<Product
					id="89376211"
					title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
					price={239.0}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/61T2aBakggL._AC_SL1001_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="19564829"
					title="All-new Echo Dot (4th Gen) - Charcoal - bundle with Sengled Bluetooth bulb"
					price={29.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/61tniQTsePL._AC_SL1000_.jpg"
				/>
				<Product
					id="44799931"
					title="SAMSUNG LC27F398FWNXZA SAMSUNG C27F398 27 Inch Curved LED Monitor"
					price={199.99}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/91SZVWfPjdL._AC_SL1500_.jpg"
				/>
				<Product
					id="65478374"
					title="DualSense Wireless Controller."
					price={69.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="73849362"
					title="Magic: The Gathering Zendikar Rising Gift Bundle | 10 Draft Booster Packs | 1 Collector Booster | Accessories"
					price={44.15}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/91n3LxN%2BfZL._AC_SL1500_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
