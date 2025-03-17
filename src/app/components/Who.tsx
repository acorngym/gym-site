"use client";

import React from 'react';
import { Box, Typography, Grid, Container, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Create motion components
const MotionBox = motion(Box);

// Theme Constants
const THEME = {
  colors: {
    primary: '#2C3E50',
    accent: '#FF4081',
    text: '#4a4a4a',
    background: '#ffffff',
  },
  transitions: {
    default: 'all 0.3s ease',
  },
};

// Styled Components
const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2),
  },
}));

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: THEME.colors.background,
  borderRadius: theme.spacing(2),
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  padding: theme.spacing(6),
  marginBottom: theme.spacing(4),
  transition: THEME.transitions.default,
  '&:hover': {
    boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: THEME.colors.primary,
  marginBottom: theme.spacing(4),
  position: 'relative',
  textAlign: 'center',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '4px',
    backgroundColor: THEME.colors.accent,
    borderRadius: '2px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const ContentText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  lineHeight: 1.8,
  color: THEME.colors.text,
  marginBottom: theme.spacing(3),
  '& strong': {
    color: THEME.colors.primary,
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  transition: THEME.transitions.default,
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '300px',
  },
}));

const About: React.FC = () => {
  return (
    <StyledContainer maxWidth="lg">
      <Fade in timeout={1000}>
        <Box>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionWrapper>
              <SectionTitle variant="h2">Who am I?</SectionTitle>
              <Grid container spacing={6} alignItems="center" textAlign={"justify"}>
                <Grid item xs={12} md={6}>
                  <ContentText>
                    My name is <strong>Trung Nguyen</strong>. I am an NCSF certified personal trainer 
                    and ENW certified fitness nutrition specialist. I am a 32-year-old male who loves 
                    working out and helping people. I struggled earlier in my teens to gain weight, 
                    but fitness helped me. I noticed how my attitude about life changed once I was in 
                    better shape—people were even nicer to me than before. Most importantly, I became 
                    more confident and said "yes" to more things in life.
                  </ContentText>
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledImage src="./image11.png" alt="Trung Nguyen" />
                </Grid>
              </Grid>
            </SectionWrapper>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionWrapper>
              <SectionTitle variant="h2">Who is Acorn Health & Fitness?</SectionTitle>
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                  <StyledImage src="./1image.png" alt="Acorn Health and Fitness" />
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} textAlign={"justify"}>
                  <ContentText>
                    <strong>Acorn Health & Fitness</strong> is a personal training studio run by me 
                    (Trung Nguyen). We are currently just one trainer and about 15 one-on-one clients. 
                    Why Acorns? Acorns may be small, but they hold the potential of growing into tall 
                    and strong oak trees. All they need is the right environment. Acorns are symbolic 
                    for everyone, as each of us carries deep inside the vast potential for greatness. 
                    We want to help bring that out of you.
                  </ContentText>
                </Grid>
              </Grid>
            </SectionWrapper>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SectionWrapper>
              <SectionTitle variant="h2">Who are our Clients?</SectionTitle>
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6} textAlign={"justify"}>
                  <ContentText>
                    Our clients range from complete beginners to advanced fitness enthusiasts. We can 
                    take you from wherever you may be in your fitness journey to the next level. 
                    However, most of our clients are beginners. With a background in psychology, we 
                    help overcome the obstacles people face when starting a fitness habit. If you are 
                    someone who might be shy about going to the gym, or you want to start a healthy 
                    habit but keep falling off, or you feel unhealthy (or just want to be healthier) 
                    and are overwhelmed by conflicting information, we can help.
                  </ContentText>
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledImage src="./image122.png" alt="Clients in Action" />
                </Grid>
              </Grid>
            </SectionWrapper>
          </MotionBox>
        </Box>
      </Fade>
    </StyledContainer>
  );
};

export default About;