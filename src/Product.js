import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Product() {
	return (
		<div className="product">
			<div className="product__info">
				<p>The lean startup</p>
				<p className="product__price">
					<small>$</small>
					<strong>19.99</strong>
				</p>
				<div className="product__rating">
					<p>
						<StarIcon />
					</p>
					<p>
						<StarIcon />
					</p>
					<p>
						<StarIcon />
					</p>
					<p>
						<StarHalfIcon />
					</p>
					<p>
						<StarBorderIcon />
					</p>
				</div>
			</div>
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
				alt="Product Photograpy"
			/>
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
