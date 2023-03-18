import React, { useEffect, useState } from "react";
import {
	Page,
	Navbar,
	NavLeft,
	NavTitle,
	NavTitleLarge,
	Link,
	List,
	Card,
	CardHeader,
	CardContent,
	CardFooter,
} from "framework7-react";

const HomePage = () => {
	const [data, setData] = useState([]);
	const fetchData = () => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data.products);
			});
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Page name="home">
			{/* Top Navbar */}
			<Navbar large sliding={false}>
				<NavLeft>
					<Link
						iconIos="f7:menu"
						iconAurora="f7:menu"
						iconMd="material:menu"
						panelOpen="left"
					/>
				</NavLeft>
				<NavTitle sliding>Products</NavTitle>
				<NavTitleLarge>Products</NavTitleLarge>
			</Navbar>
			<List simpleList>
				{data &&
					data.map((product) => {
						return (
							<Link key={product.id} href={`product/${product.id}`}>
								<Card className="demo-card-header-pic">
									<CardHeader
										className="no-border"
										style={{
											backgroundImage: `url(${product.thumbnail})`,
										}}
									></CardHeader>
									<CardContent>
										<h3 className="title">{product.title}</h3>
										<p>{product.description}</p>
									</CardContent>
									<CardFooter>
										<h6 className="price">{product.price}$</h6>
									</CardFooter>
								</Card>
							</Link>
						);
					})}
			</List>
		</Page>
	);
};
export default HomePage;
