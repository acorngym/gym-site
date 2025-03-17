"use client";

import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
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
    lightBg: '#f8fafc',
  },
  transitions: {
    default: 'all 0.3s ease',
  },
};

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.8rem',
  fontWeight: 700,
  color: THEME.colors.primary,
  marginBottom: theme.spacing(2),
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
    fontSize: '2.2rem',
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  lineHeight: 1.8,
  color: THEME.colors.text,
  textAlign: 'center',
  maxWidth: '800px',
  margin: '2rem auto 4rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  },
}));

const ContentCard = styled(Box)(({ theme }) => ({
  backgroundColor: THEME.colors.background,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  transition: THEME.transitions.default,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 600,
  color: THEME.colors.primary,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
    textAlign: 'center',
  },
}));

const CardText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  lineHeight: 1.8,
  color: THEME.colors.text,
  marginBottom: theme.spacing(2),
  '&:last-child': {
    marginBottom: 0,
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
  transition: THEME.transitions.default,
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 12px 35px rgba(0,0,0,0.15)',
  },
}));

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
});

const Why: React.FC = () => {
  return (
    <StyledContainer maxWidth="lg">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Why should you exercise?</SectionTitle>
        <SectionSubtitle>
          It has been proven over and over again that exercise extends your longevity, 
          improves health, and increases your performance in all areas of your life. 
          It helps you look better, feel better, and be better.
        </SectionSubtitle>

        {['trainer', 'choose', 'now'].map((section, index) => (
          <MotionBox
            key={section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
          >
            <ContentCard>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <ImageWrapper>
                    <StyledImage
                      src={`./${section === 'trainer' ? 'image112' : section === 'choose' ? 'image113' : 'image2'}.png`}
                      alt={`Why ${section}?`}
                    />
                  </ImageWrapper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardTitle>
                    {section === 'trainer' && "Why do you need a trainer?"}
                    {section === 'choose' && "Why should you choose us?"}
                    {section === 'now' && "Why now?"}
                  </CardTitle>
                  
                  {section === 'trainer' && (
                    <>
                      <CardText textAlign={"justify"}>
                        If Michael Jordan needs a personal trainer, why wouldn't you? 
                        If the best of the best in their respective fields know that the only way 
                        they can improve is through a good coach and a great personal trainer, 
                        then we all could benefit from personal training.
                      </CardText>
                      <CardText textAlign={"justify"}>
                        A good trainer coaches you on things that you aren't familiar with. 
                        He/she will help you think outside the box to constantly push your limit 
                        and grow. A good trainer will be right by your side to let you know that 
                        you've fallen off track and what you need to do to get back on it.
                      </CardText>
                    </>
                  )}
                  
                  {section === 'choose' && (
                    <>
                      <CardText>-Because we're good trainers. =)</CardText>
                      <CardText>
                        -We will find out where you are on the fitness spectrum and push you 
                        toward your goal.
                      </CardText>
                      <CardText>
                        -We will listen to your wishes and goals but ignore your whines and 
                        complaints, because we know you want the results more than what's discomforting you.
                      </CardText>
                      <CardText>
                        -We will push you during our workout, provide you with a routine to do in 
                        between, and guide you on proper nutrition so you can be your best.
                      </CardText>
                    </>
                  )}
                  
                  {section === 'now' && (
                    <CardText textAlign={"justify"}>
                      That's personal to you because only you know when the right time is to 
                      take action. However, what time do we ever have other than now? 
                      Just think, a year from now, you're going to wish you had started today.
                    </CardText>
                  )}
                </Grid>
              </Grid>
            </ContentCard>
          </MotionBox>
        ))}
      </MotionBox>
    </StyledContainer>
  );
};

export default Why;