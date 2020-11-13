import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Link from '../../Link';

const useStyles = makeStyles((theme) => ({
  root: {
	height: '100%',
	display: 'flex',
    flexDirection: 'column',
	alignItems: 'center',
	textAlign: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  textGroup: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  }
}));

const Login = props => {
	const classes = useStyles();
	return (
		<div style={{ backgroundImage: 'url(https://i.pinimg.com/originals/7f/88/d0/7f88d023bb1fb699650319a14dff0641.png)' }} className={classes.root}>
			<Grid style={{ height: '100%', width: '100%' }} container justify="center" direction="row" alignItems="center">
				<Grid style={{ background: 'white', padding: '16px 30px 16px 14px', borderRadius: '25px 0 25px 0' }} item direction="row" xs={8} sm={6} md={4}>
					<Typography component="h1" variant="h6">
						<span style={{ color: 'darkgreen' }}>Fair</span>Gate
					</Typography>
					<form className={classes.textGroup} noValidate autoComplete="off">
						<TextField id="outlined-basic" label="usuário" variant="outlined" />
						<TextField id="outlined-basic" label="senha" variant="outlined" type="password" />
						<Link href="/main">
							<Button variant="contained" color="primary">Entrar</Button>
						</Link>
					</form>
				</Grid>
			</Grid>
		</div>
	);
};
const LoginPropTypes = {
	// always use prop types!
};

Login.propTypes = LoginPropTypes;

export default Login;
