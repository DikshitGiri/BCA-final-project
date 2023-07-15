import { FormControl, Grid, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function Search() {
	return (
		<div>
			
			<Grid
				container
				spacing={2}
				alignSelf={"center"}
				sx={{ width: "100%" }}
				marginTop={10}
				xs={12}>
				
				<Grid item xs={4}>
					<Paper elevation={3}>
					<FormControl fullWidth>
						<InputLabel id='dropdown-label'>
							<div style={{ display: "flex", alignItems: "center" }}>
								<LocationOnIcon style={{ marginRight: "8px" }} />
								Location
							</div>
						</InputLabel>

						<Select
							labelId='dropdown-label'
							id='dropdown'
							// value={selectedOption}
							// onChange={handleChange}
						>
							<MenuItem value='option1'>Option 1</MenuItem>
							<MenuItem value='option2'>Option 2</MenuItem>
							<MenuItem value='option3'>Option 3</MenuItem>
						</Select>
					</FormControl>
					</Paper>
				</Grid>
				
				<Grid item xs={4}>
					<Paper elevation={3}>
					<FormControl fullWidth>
						<InputLabel id='dropdown-label'>
							<div style={{ display: "flex", alignItems: "center" }}>
								<HomeWorkIcon style={{ marginRight: "8px" }} />
								Property
							</div>
						</InputLabel>
						<Select
							labelId='dropdown-label'
							id='dropdown'
							// value={selectedOption}
							// onChange={handleChange}
						>
							<MenuItem value='option1'>Option 1</MenuItem>
							<MenuItem value='option2'>Option 2</MenuItem>
							<MenuItem value='option3'>Option 3</MenuItem>
						</Select>
					</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper elevation={3}>
					<FormControl fullWidth>
						<InputLabel id='dropdown-label'>
							<div style={{ display: "flex", alignItems: "center" }}>
								<CurrencyExchangeIcon style={{ marginRight: 10 }} />
								Price range
							</div>
						</InputLabel>
						<Select
							labelId='dropdown-label'
							id='dropdown'
							// value={selectedOption}
							// onChange={handleChange}
						>
							<MenuItem value='option1'>Option 1</MenuItem>
							<MenuItem value='option2'>Option 2</MenuItem>
							<MenuItem value='option3'>Option 3</MenuItem>
						</Select>
					</FormControl>
					</Paper>
				</Grid>
			
			</Grid>
		</div>
	);
}

export default Search;
