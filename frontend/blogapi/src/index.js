import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./components/header";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import Logout from "./components/logout";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<Header />
			<Routes>
				<Route path="/" element={<App />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/logout" element={<Logout />}></Route>
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
