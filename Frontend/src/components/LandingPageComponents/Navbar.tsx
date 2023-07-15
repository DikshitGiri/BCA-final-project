import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import React from "react";

function Navbar() {
	return (
		<div>
			<AppBar>
				<Toolbar sx={{justifyContent:'flex-end'}}>
					<Button variant='text' color='inherit'>
						Login
					</Button>
					<Button variant='text' color='inherit'>
						Register
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
