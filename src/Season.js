import './Season.css';
import React from 'react';

const SeasonConfig = {
	Summer: {
		text : "its hot" ,
		iconName : 'sun'
	},
	Winter: {
		text : "its cold" ,
		iconName : 'snowflake'
	}
}

const calcSeas = (lat, month) => {
	if(month > 2 && month < 9)
		return lat > 0 ? 'Summer' : 'Winter';
	else
		return lat < 0 ? 'Winter' : 'Summer';
};

const Season = props => {

	const season = calcSeas(props.lat, new Date().getMonth());
	const {text, iconName} = SeasonConfig[season];
	return (
		<div className = {`season-disp ${season}`}>
			<i className = {`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className = {`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default Season;