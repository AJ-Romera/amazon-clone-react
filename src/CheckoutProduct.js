import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";

function CheckoutProduct({ id, image, title, price, rating }) {
	return (
		<div className="checkoutProduct">
			<img
				className="checkoutProduct__image"
				src={image}
				alt="Checkout Product"
			/>

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<p className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>
								<StarIcon />
							</p>
						))}
				</p>
				<button>Remove from Cart</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
