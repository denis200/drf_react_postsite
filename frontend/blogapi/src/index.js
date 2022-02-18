import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Routes,
	Link,
	Redirect,
	Navigate,
} from "react-router-dom";

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<Header />
			<Routes>
				<Route path="/" element={<App />}></Route>
			</Routes>
			<Footer />
		</React.StrictMode>
	</Router>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
