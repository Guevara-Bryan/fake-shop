import React from 'react';

import '../styles/BlockingScreen.css';

const BlockingScreen = ({ addClass = '', children }) => {
	return <div className={`blocking-screen ${addClass}`}>{children}</div>;
};

export default BlockingScreen;
