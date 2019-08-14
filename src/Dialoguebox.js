import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Dialoguebox extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dialog
                open={this.props.isOpen}
                onClose={()=>this.props.handleClose()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
                { (this.props.content != '') && 
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.props.content}
                        </DialogContentText>
                    </DialogContent>
                }
                <DialogActions>
                    <Button color="primary" onClick = {()=>this.props.handleClose()}>
                        {this.props.buttonLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

}

Dialoguebox.defaultProps = {
    isOpen : false,
    content : '',
    buttonLabel : 'OK',
    title : "All Fields are Required!"
}

export default Dialoguebox;