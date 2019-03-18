import React, {Fragment, Component} from "react";
import {Button} from '@material-ui/core';

class JSONButton extends Component{
	render(){
		let obj = this.props.profile,
		    str = `text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(obj))}`;

		return(
			<Button href={'data: ' + str} download color="primary" variant="contained">
				{this.props.text}
			</Button>
		);
	}
}

export default JSONButton;