import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const Deposit = props => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Title>Venda total do dia</Title>
			<Typography component="p" variant="h4">
			R$ 3.024,00
			</Typography>
			<Typography color="textSecondary" className={classes.depositContext}>
			em 15 de novembro de 2020
			</Typography>
		</React.Fragment>
	);
};

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Deposit extends React.Component {
//   render() {
//     return <div>This is a component called Deposit.</div>;
//   }
// }

const DepositPropTypes = {
	// always use prop types!
};

Deposit.propTypes = DepositPropTypes;

export default Deposit;
