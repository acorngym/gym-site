"use client";

import React from 'react';
import { Box, Typography, Grid, Container, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

// Theme Constants
const THEME = {
  colors: {
    primary: '#2C3E50',
    accent: '#FF4081',
    text: '#4a4a4a',
    background: '#ffffff',
    lightBg: '#f9f9f9',
  },
  transitions: {
    default: 'all 0.3s ease',
  },
};

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundColor: THEME.colors.lightBg,
  borderRadius: theme.spacing(2),
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2),
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

const ContentCard = styled(Box)(({ theme }) => ({
  backgroundColor: THEME.colors.background,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
  transition: THEME.transitions.default,
  '&:hover': {
    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
    transform: 'translateY(-5px)',
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  lineHeight: 1.8,
  color: THEME.colors.text,
  marginBottom: theme.spacing(3),
  '& strong': {
    color: THEME.colors.primary,
    display: 'block',
    fontSize: '1.3rem',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  height: '300px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  transition: THEME.transitions.default,
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
  },
}));

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const PriceCard = styled(Box)(({ theme }) => ({
  backgroundColor: THEME.colors.primary,
  color: '#fff',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  textAlign: 'center',
  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
  transition: THEME.transitions.default,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
  },
}));

const Services: React.FC = () => {
  return (
    <StyledContainer maxWidth="lg">
      <Fade in timeout={1000}>
        <Box>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle variant="h2">Our Services</SectionTitle>

            <ContentCard>
              <StyledText>
                Before we get to what services we provide and pricing, let's go over a few other things.
              </StyledText>

              <StyledText textAlign={"justify"}>
                <strong>What can you expect?</strong>
                We are your personal trainers, so you can expect to train your body through physical 
                exercises and your mind through having discipline to stay on your diet and overcoming 
                obstacles. You will be provided with a workout based on your goals and condition. You 
                will be guided on nutrition and depending on body type, goals, and preference, we will 
                figure out the right diet for you. Your health and safety will be our first priority, 
                but you will be pushed beyond your comfort level. You will reach your goal.
              </StyledText>

              <StyledText textAlign={"justify"}>
                <strong>What do we expect from you?</strong>
                Your best. We are not asking you to be a super athlete, but we do require your best. 
                This means that you need to show up and give it all you got. Maybe you have a headache 
                or a cold that day, we won't expect you to be breaking records, but you still need to 
                do your best for that day. Be on time. There are 24 hours in a day, and if we only get 
                to train with you for one hour, we want to be able to use every second available. Show up. 
                Yes, we expect you to do your best and be on time, but most importantly, you need to show up.
              </StyledText>
            </ContentCard>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContentCard>
              <StyledText>
                <strong>What do we do?</strong>
                Here are some pictures to see what our clients do during our workout.
              </StyledText>

              <Grid container spacing={3}>
                {['21.png', '22.png', '23.png'].map((image, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ImageWrapper>
                      <StyledImage src={`./${image}`} alt={`Training ${index + 1}`} />
                    </ImageWrapper>
                  </Grid>
                ))}
              </Grid>
            </ContentCard>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <PriceCard>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                Training Sessions
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Private Training (1-on-1) and Semi Private Training (2 People)
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                $80 per 1hr session
              </Typography>
            </PriceCard>
          </MotionBox>
        </Box>
      </Fade>
    </StyledContainer>
  );
};

export default Services;