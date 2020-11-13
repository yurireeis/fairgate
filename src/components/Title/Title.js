import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {this.props.children}
      </Typography>
    );
  }
}

const TitlePropTypes = {
    children: PropTypes.node,
    title: PropTypes.string
};

Title.propTypes = TitlePropTypes;

export default Title;