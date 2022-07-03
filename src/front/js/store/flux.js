const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			salesOrders: [
				{
					id: 1,
					client: "FIRST",
					sales_order_number: "SO number",
					WO: "WO number",
					product_code: 2022,
					product_description: "my product 1 60ct",
					order_quantity: 20000,
					order_placement_date: "05 / 05 / 2022",
					order_acceptance_date: "05 / 07 / 2022",
					order_request_date: "07 / 07 / 2022",
					order_ETA: "08 / 07 / 2022",
					order_completion_date: "08 / 07 / 2022",
					order_process_code: 5,
					order_status: "in process",
					comments: "materials were pending to begin the order",
					blending: "completed",
					compression: "in progress",
					encapsulation: "",
					blistering: "",
					bottling: "",
					packaging: "",
					powder: "",
				},
				{
					id: 2,
					client: "FIRST",
					sales_order_number: "SO number",
					WO: "WO number",
					product_code: 2022,
					product_description: "my product 1 60ct",
					order_quantity: 20000,
					order_placement_date: "05 / 05 / 2022",
					order_acceptance_date: "05 / 07 / 2022",
					order_request_date: "07 / 07 / 2022",
					order_ETA: "08 / 07 / 2022",
					order_completion_date: "08 / 07 / 2022",
					order_process_code: 5,
					order_status: "in process",
					comments: "materials were pending to begin the order",
					blending: "completed",
					compression: "in progress",
					encapsulation: "",
					blistering: "",
					bottling: "",
					packaging: "",
					powder: "",
				},
				{
					id: 3,
					client: "FIRST",
					sales_order_number: "SO number",
					WO: "WO number",
					product_code: 2022,
					product_description: "my product 1 60ct",
					order_quantity: 20000,
					order_placement_date: "05 / 05 / 2022",
					order_acceptance_date: "05 / 07 / 2022",
					order_request_date: "07 / 07 / 2022",
					order_ETA: "08 / 07 / 2022",
					order_completion_date: "08 / 07 / 2022",
					order_process_code: 5,
					order_status: "in process",
					comments: "materials were pending to begin the order",
					blending: "completed",
					compression: "in progress",
					encapsulation: "",
					blistering: "",
					bottling: "",
					packaging: "",
					powder: "",
				},


			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
