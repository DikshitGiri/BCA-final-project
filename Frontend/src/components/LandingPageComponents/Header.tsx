import { Grid, Typography } from "@mui/material";


function Header() {
	return ( 
        <Grid container xs={12} >        
			<Grid item xs={6}>
				
				<Typography
					marginTop={14}
					variant='h3'
					component='h2'
					fontWeight={"bold"}
					alignContent={"center"}>
					<p>
						<span style={{ color: "Blue" }}>Choose Your </span>
						<span style={{ color: "Black" }}>Perfect Property </span>
						<span style={{ color: "Black" }}>With Us</span>
					</p>
				</Typography>
				<Typography variant='body1' component='p' align='left'>
					At our service, we offer a wide selection of beautifull Properties and
					seamless acquisition tailored to meet your needs.
				</Typography>
			
			</Grid>
			<Grid item xs={6} marginTop={7}>
				<img
					src='https://i.pinimg.com/originals/9f/7f/e0/9f7fe008a54e7b538cfc0ca9768ea493.jpg'
					alt='house image'
					style={{
						height: "400px",
						borderTopLeftRadius: "100px",
						width: "100%",
					}}></img>
			</Grid>  
        </Grid>   
		
	);
}

export default Header;
