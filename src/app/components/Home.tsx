"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  useTheme,
  Fade,
  ButtonGroup,
} from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import About from "./Who";
import Services from "./Services";
import Footer1 from "./Footer";
import Why from "./Why";
import Results from "./Results";
import { ExampleForm } from "./ContactForm";

// Theme Constants
const THEME = {
  colors: {
    primary: "#2C3E50",
    secondary: "#FF4081",
    text: "#fff",
    background: "rgba(44, 62, 80, 0.95)",
  },
  transitions: {
    default: "all 0.3s ease",
  },
};

// Create the styled components without dynamic theme props
const StyledAppBar = styled(AppBar)({
  background: THEME.colors.background,
  backdropFilter: "blur(10px)",
  boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
});

const NavButton = styled(Button)({
  color: THEME.colors.text,
  margin: "0 8px",
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
    transition: THEME.transitions.default,
  },
});

const HeroSection = styled(Box)({
  position: "relative",
  width: "100%",
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("./background1.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  color: THEME.colors.text,
});

const StyledButton = styled(Button)({
  backgroundColor: THEME.colors.secondary,
  color: THEME.colors.text,
  padding: "12px 32px",
  fontWeight: 600,
  borderRadius: "25px",
  textTransform: "none",
  '&:hover': {
    backgroundColor: "#e91e63",
    transform: 'scale(1.05)',
    transition: THEME.transitions.default,
  },
});

const InfoCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: THEME.transitions.default,
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 20px rgba(0,0,0,0.2)',
  },
});

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedTab, setSelectedTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'Home', tab: 0 },
    { label: 'Who', tab: 1 },
    { label: 'What', tab: 2 },
    { label: 'Why', tab: 3 },
    { label: 'Results', tab: 4 },
    { label: 'Contact', tab: 5 },
  ];

  const transformationCards = [
    { title: "Amazing Change", id: 1 },
    { title: "Healthier & Happier", id: 2 },
    { title: "Strong & Confident", id: 3 },
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 0:
        return (
          <>
            <HeroSection>
              <Container maxWidth="md">
                <Box textAlign="center">
                  <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 700, mb: 3 }}>
                    Acorn Health & Fitness
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 4, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                    Health, Fitness, Strength & Balance
                  </Typography>
                  <StyledButton variant="contained" href="tel:15102094096" startIcon={<FitnessCenterIcon />}>
                    Call Us: 1-510-209-4096
                  </StyledButton>
                </Box>
              </Container>
            </HeroSection>

            <Container maxWidth="lg" sx={{ py: 8 }}>
              <Typography variant="h2" align="center" sx={{ mb: 6, fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700 }}>
                Who We Are
              </Typography>
              <Typography variant="h6" align="center" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
                We are dedicated to helping you achieve your health and fitness goals. We believe in nurturing every individual—no matter your age or skill level—to grow healthier and stronger, like an acorn growing into a mighty oak.
              </Typography>
              <Box textAlign="center">
                <StyledButton onClick={() => setSelectedTab(1)}>
                  Learn More About Us
                </StyledButton>
              </Box>
            </Container>

            <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
              <Container maxWidth="lg">
                <Typography variant="h2" align="center" sx={{ mb: 6, fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700 }}>
                  Client Transformations
                </Typography>
                <Grid container spacing={4}>
                  {transformationCards.map(({ title, id }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                      <InfoCard>
                        <CardMedia
                          component="img"
                          height="240"
                          image={`./image${id}.png`}
                          alt={title}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {title}
                          </Typography>
                          <Typography>
                            Real results from real clients. Our proven methods and dedicated support help you achieve your fitness goals.
                          </Typography>
                        </CardContent>
                      </InfoCard>
                    </Grid>
                  ))}
                </Grid>
                <Box textAlign="center" mt={6}>
                  <StyledButton onClick={() => setSelectedTab(2)}>
                    View Our Services
                  </StyledButton>
                </Box>
              </Container>
            </Box>
          </>
        );
      case 1:
        return <About />;
      case 2:
        return <Services />;
      case 3:
        return <Why />;
      case 5:
        return <ExampleForm />;
      case 4:
        return <Results />;
      default:
        return <Services />;
    }
  };

  return (
    <>
      <StyledAppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 1,
              }}
            >
              Acorn Health & Fitness
            </Typography>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item) => (
                  <NavButton key={item.label} onClick={() => setSelectedTab(item.tab)}>
                    {item.label}
                  </NavButton>
                ))}
              </Box>
            )}

            {isMobile && (
              <>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                  Acorn H&F
                </Typography>
                <IconButton color="inherit" onClick={handleMenuOpen} edge="end">
                  <MenuIcon />
                </IconButton>
              </>
            )}

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              TransitionComponent={Fade}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => {
                    setSelectedTab(item.tab);
                    handleMenuClose();
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {renderContent()}
      <Footer1 />
    </>
  );
};

export default Home;