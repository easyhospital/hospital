import React from "react";
import Tabs from "react-bootstrap/Tabs";

const TabsController = () => {
	const [key, setKey] = useState("home");
	return (
		<Tabs
			id='controlled-tab-example'
			activeKey={key}
			onSelect={(k) => setKey(k)}
		>
			<Tab eventKey='home' title='Home'>
				<Sonnet />
			</Tab>
			<Tab eventKey='profile' title='Profile'>
				<Sonnet />
			</Tab>
			<Tab eventKey='contact' title='Contact' disabled>
				<Sonnet />
			</Tab>
		</Tabs>
	);
};

export default TabsController;
