import React from "react";
import Navbar from "../components/LandingPageComponents/Navbar";
import Header from "../components/LandingPageComponents/Header";
import Search from "../components/LandingPageComponents/Search";
import SearchResult from "../components/LandingPageComponents/SearchResult";
import RecentUploads from "../components/LandingPageComponents/RecentUploads";
import Footer from "../components/LandingPageComponents/Footer";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";



function landing() {
	return (
		<div>
			<Navbar />
			<Container sx={{ backgroundColor: "inherit" }}>
				<Stack spacing={2} marginTop={6}>
					<Header />
					<Search />
					<SearchResult />
					<RecentUploads />
					<Footer />
				</Stack>
			</Container>
		</div>
	);
}

export default landing;
