import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(0),
      minWidth: 182,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function Simpleselect(props, ref) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      label: '',
    });
  
  
    function handleChange(event) {
        props.handlePosition(event.target.value);
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
    }

  
    return (
      <form  autoComplete="off">
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-helper">Position</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={<Input name="age" id="age-helper" />}
        >
          <MenuItem value="">
            <em>Select Position</em>
          </MenuItem>
          <MenuItem value={"Researcher"}>Researcher</MenuItem>
          <MenuItem value={"Student"}>Student</MenuItem>
          <MenuItem value={"Doctor"}>Doctor</MenuItem>
        </Select>
        {/* <FormHelperText>Some important helper text</FormHelperText> */}
      </FormControl>
        </form>
    );
  }