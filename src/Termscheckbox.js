import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: '500px',
    },
  }));
  

export default function Termscheckbox(props) {
    const classes = useStyles();
  const [state, setState] = React.useState({
    checkedG: false,
  });

  const handleChange = name => event => {
      props.handleChangeCheckbox();
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    // <div className={classes.root}>
        <FormControl component="fieldset" className={classes.root}>
        <FormGroup >
        <FormControlLabel
            control={
            <GreenCheckbox
                checked={state.checkedG}
                onChange={handleChange('checkedG')}
                value="checkedG"
            />
            }
            labelPlacement="bottom"
            label={props.text}
        />
        </FormGroup>
        </FormControl>
    // </div>
  );
}
