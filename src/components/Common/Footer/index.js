import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark bg"
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="white" align="justify">
            CRYPTOVERSE-where artistic magnificence melds with technological brilliance, and financial discovery becomes an exquisite voyage into the unknown.The sublime choreography of price fluctuations, trading volumes, market capitalizations, and other vital metrics dances in perfect harmony, enchanting your gaze and revealing the cosmic dance of market dynamics masterfully crafted with charts, intricate graphs all meticulously designed to bestow profound enlightenment and insights upon the inquisitive minds that seek financial ascendance.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="whte" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="white">
            7th floor,Sparkz Complex, 2nd Street, Indira Nagar, Bangalore 560038
            </Typography>
            <Typography variant="body2" color="white">
              Email: nandajanair21@gmail.com
            </Typography>
            <Typography variant="body2" color="white">
              Phone: 9831283612
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://github.com/NANDAJANAIR" color="inherit">
              <GitHub />
            </Link>
            <Link href="https://www.linkedin.com/in/nandaja-nair21" color="inherit">
              <LinkedIn />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Nandaja Nair
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
