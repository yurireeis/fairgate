import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title/Title';

const createData = (time, amount) => {
	return { time, amount };
};


const data = [
	createData('00:00', 0),
	createData('01:00', 0),
	createData('02:00', 0),
	createData('03:00', 0),
	createData('04:00', 0),
	createData('05:00', 0),
	createData('06:00', 0),
	createData('07:00', 0),
	createData('08:00', 0),
	createData('09:00', 200),
	createData('10:00', 300),
	createData('11:00', 500),
	createData('12:00', 200),
	createData('13:00', 0),
	createData('14:00', 1500),
	createData('15:00', 350),
	createData('16:00', 400),
	createData('17:00', 600),
	createData('18:00', 700),
	createData('19:00', 0),
	createData('20:00', 0),
	createData('21:00', 0),
	createData('22:00', 0),
	createData('23:00', 0)
];

const Chart = props => {
	const theme = useTheme();
	return (
		<React.Fragment>
			<Title>Hora x Hora</Title>
			<ResponsiveContainer>
			<LineChart
				data={data}
				margin={{
				top: 16,
				right: 16,
				bottom: 0,
				left: 24,
				}}
			>
				<XAxis dataKey="time" stroke={theme.palette.text.secondary} />
				<YAxis stroke={theme.palette.text.secondary}>
				<Label
					angle={270}
					position="left"
					style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
				>
					Orçamentos ($)
				</Label>
				</YAxis>
				<Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
			</LineChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
};

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Chart extends React.Component {
//   render() {
//     return <div>This is a component called Chart.</div>;
//   }
// }

const ChartPropTypes = {
	// always use prop types!
};

Chart.propTypes = ChartPropTypes;

export default Chart;
