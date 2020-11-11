import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.scss';

const Main = props => (
	<div>This is a component called Main.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Main extends React.Component {
//   render() {
//     return <div>This is a component called Main.</div>;
//   }
// }

const MainPropTypes = {
	// always use prop types!
};

Main.propTypes = MainPropTypes;

export default Main;
