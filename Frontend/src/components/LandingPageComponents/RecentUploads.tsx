import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";

function RecentUploads() {
	return (
		<div>
			<div>
				<Typography variant='h3' textAlign={"center"} marginTop={7}>
					Recent Uploads
				</Typography>
			</div>

			<Grid container spacing={5} alignSelf={"center"} marginTop={2}>
				<Grid item>
					<Card>
						<CardHeader title='House' />

						<CardMedia
							component='img'
							height='200'
							image='https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_640.jpg'
							alt='Image'
						/>
						<CardContent>
							<Typography variant='body1'>Card Content goes here.</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' color='primary'>
								Action 1
							</Button>
							<Button variant='outlined' color='secondary'>
								Action 2
							</Button>
						</CardActions>
					</Card>
				</Grid>

				<Grid item>
					<Card>
						<CardHeader title='House' />

						<CardMedia
							component='img'
							height='200'
							image='https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_640.jpg'
							alt='Image'
						/>
						<CardContent>
							<Typography variant='body1'>Card Content goes here.</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' color='primary'>
								Action 1
							</Button>
							<Button variant='outlined' color='secondary'>
								Action 2
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item>
					<Card>
						<CardHeader title='House' />

						<CardMedia
							component='img'
							height='200'
							image='https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_640.jpg'
							alt='Image'
						/>
						<CardContent>
							<Typography variant='body1'>Card Content goes here.</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' color='primary'>
								Action 1
							</Button>
							<Button variant='outlined' color='secondary'>
								Action 2
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}

export default RecentUploads;
