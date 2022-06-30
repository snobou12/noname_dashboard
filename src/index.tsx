
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./app/App";
import "./index.scss";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
		mutations: {},
	},
});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	// <QueryClientProvider client={queryClient}>
		<BrowserRouter basename={window.location.pathname || ''}>
			<App />
		</BrowserRouter>
	// </QueryClientProvider>
);
