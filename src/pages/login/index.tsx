import React, { FC } from "react";
import LogoNiSchedule from "assets/images/LogoNiSchedule.jpg";
import LogoGoogle from "assets/images/LogoGoogle.png";
import { TextField, Button } from "@mui/material";
import Divider from "@mui/material/Divider";

export const LoginPage: FC = () => {
	return (
		<div className="login">
			<h2>Ni Schedule</h2>
			<img src={LogoNiSchedule} style={{ width: "80vw" }} />

			<h4>Enter Your Email</h4>
			<TextField
				size="small"
				placeholder="Enter Email"
				className="email"
			/>
			<Button variant="contained" color="error">Login</Button>

			<div className="alternative">
				<Divider />Or Login with<Divider />
			</div>
			<Button variant="text"
				startIcon={<img src={LogoGoogle} style={{ height: "20px" }} />} size="large"
			>
				Google
			</Button>

			<div style={{ marginTop: "20px" }}>
				You don't have an account? <br />
				<span style={{ fontWeight: "bold" }}>Sign up</span>
			</div>
		</div >
	)
}