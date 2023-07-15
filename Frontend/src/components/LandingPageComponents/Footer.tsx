import { Box, Grid, Typography } from "@mui/material";


function Footer() {
    return (
        <div>
          
      <Box bgcolor="#f5f5f5" py={4}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: info@example.com
              <br />
              Phone: +1 123-456-7890
              <br />
              Address: 123 Main Street, City, Country
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              scelerisque justo et facilisis viverra.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Stay connected on social media:
              <br />
              Facebook | Twitter | Instagram
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box bgcolor="#e0e0e0" py={2} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          &copy; 2023 Your Company. All rights reserved.
        </Typography>
      </Box>
 
            
        </div>
    );
}

export default Footer;