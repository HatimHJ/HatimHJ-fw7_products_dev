import React, { useEffect, useState } from "react";
import {
	Page,
	Navbar,
	Swiper,
	SwiperSlide,
	Row,
	Col,
	Block,
	Badge,
	Icon,
} from "framework7-react";

const Product = ({ id }) => {
	const [product, setProduct] = useState(null);
	const fetchData = () => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProduct(data);
			});
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Page name="product">
			<Navbar title="product" backLink="Back" />
			{product && (
				<Block>
					<Swiper navigation>
						{product.images.map((image, key) => {
							return (
								<SwiperSlide key={key}>
									<img src={image} alt="" />
								</SwiperSlide>
							);
						})}
					</Swiper>
					<Row>
						<Col>
							<h3>
								<Icon f7="money_dollar_circle"></Icon>
								{product.price}$
							</h3>
						</Col>
						<Col>
							<h3>
								<Icon f7="star"></Icon>
								{product.rating}
							</h3>
						</Col>
						<Col>
							<h3>
								<Icon f7="house"></Icon>
								{product.stock}
							</h3>
						</Col>
					</Row>
					<Row>
						<Col>
							<h2>{product.title}</h2>
							<Badge color="green">{product.category}</Badge>
						</Col>
					</Row>
					<Row>
						<Col>
							<p>{product.description}</p>
						</Col>
					</Row>
				</Block>
			)}
		</Page>
	);
};

export default Product;
