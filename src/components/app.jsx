import React from "react";

import {
	App,
	Panel,
	View,
	Popup,
	Page,
	Navbar,
	Block,
	Link,
	NavLeft,
} from "framework7-react";

import routes from "../js/routes";
import store from "../js/store";

const MyApp = () => {
	// Framework7 Parameters
	const f7params = {
		name: "My App", // App name
		theme: "auto", // Automatic theme detection

		// App store
		store: store,
		// App routes
		routes: routes,
	};

	return (
		<App {...f7params}>
			{/* Left panel with cover effect*/}
			<Panel left cover dark>
				<View>
					<Page>
						<Navbar title="Left Panel"></Navbar>
					</Page>
				</View>
			</Panel>
			{/* Your main view, should have "view-main" class */}
			<View main className="safe-areas" url="/" />
		</App>
	);
};
export default MyApp;
