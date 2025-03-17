"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion';
import { clientData } from "@/data/clientData";

// Type definitions
type MotionBoxProps = HTMLMotionProps<"div"> & {
  children?: React.ReactNode;
};

type MotionCardProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

// Motion components
const MotionBox = motion(Box);

// Theme Constants
const THEME = {
  colors: {
    primary: '#2C3E50',
    accent: '#FF4081',
    text: '#4a4a4a',
    background: '#ffffff',
    success: '#4CAF50',
    secondary: '#757575',
  },
  transitions: {
    default: 'all 0.3s ease',
  },
};

// Styled Components with improved responsiveness
const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10, 4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 3),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2),
  },
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2rem, 5vw, 2.8rem)',
  fontWeight: 700,
  color: THEME.colors.primary,
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'clamp(40px, 5vw, 60px)',
    height: '4px',
    backgroundColor: THEME.colors.accent,
    borderRadius: '2px',
  },
}));

const ResultCard = styled(Box)(({ theme }) => ({
  backgroundColor: THEME.colors.background,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  marginBottom: theme.spacing(6),
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  transition: THEME.transitions.default,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const ImageCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
  height: '100%',
  transition: THEME.transitions.default,
  display: 'flex',
  flexDirection: 'column',
}));

const MotionImageCard = motion(ImageCard);

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  flexGrow: 1,
  height: 0,
  paddingTop: '75%', // Maintains aspect ratio at the top
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const ClientInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2, 1),
  },
}));

const ClientName = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
  fontWeight: 700,
  color: THEME.colors.primary,
  marginBottom: theme.spacing(2),
}));

const ResultStat = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
  color: THEME.colors.success,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const SuccessKey = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
  color: THEME.colors.text,
  fontStyle: 'italic',
  lineHeight: 1.6,
  marginBottom: theme.spacing(2),
}));

const Testimonial = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
  color: THEME.colors.secondary,
  fontStyle: 'italic',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  borderLeft: `4px solid ${THEME.colors.accent}`,
  backgroundColor: 'rgba(255,64,129,0.05)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));

const Duration = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
  color: THEME.colors.secondary,
  marginBottom: theme.spacing(2),
}));

const ImageLabel = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 500,
  color: THEME.colors.primary,
  padding: theme.spacing(1),
  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
  backgroundColor: 'rgba(255,255,255,0.9)',
  marginBottom: 0,
}));

const AchievementsList = styled(List)(({ theme }) => ({
  backgroundColor: 'rgba(76,175,80,0.05)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));

const AchievementTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

const AchievementItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0.5, 0),
}));

const AchievementText = styled(ListItemText)(({ theme }) => ({
  margin: 0,
  '& .MuiListItemText-primary': {
    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
  },
}));

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Results: React.FC = () => {
  return (
    <StyledContainer maxWidth="lg">
      <AnimatePresence>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <PageTitle>Transformation Stories</PageTitle>

          {clientData.map(({ 
            id, 
            name, 
            lostOrGained, 
            keyToSuccess, 
            images, 
            testimonial, 
            duration, 
            achievements 
          }) => (
            <MotionBox
              key={id}
              variants={itemVariants}
            >
              <ResultCard>
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ minHeight: { md: '400px' } }}>
                  <Grid item xs={12} md={6}>
                    <Grid container spacing={{ xs: 1, sm: 2 }} sx={{ height: '100%' }}>
                      {images.map((imgSrc, idx) => (
                        <Grid item xs={6} key={idx} sx={{ height: { xs: 'auto', md: '100%' } }}>
                          <ImageWrapper>
                            <MotionImageCard
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Box sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <StyledCardMedia
                                  image={imgSrc}
                                  title={`${name} ${idx === 0 ? 'Before' : 'After'}`}
                                  sx={{ flexGrow: 1, height: 'auto', paddingTop: { xs: '100%', md: '0' }, minHeight: { md: '85%' } }}
                                />
                                <Box sx={{ 
                                  position: { xs: 'relative', md: 'absolute' }, 
                                  bottom: 0, 
                                  width: '100%',
                                  backgroundColor: 'rgba(255,255,255,0.9)',
                                  zIndex: 2 
                                }}>
                                  <ImageLabel>
                                    {idx === 0 ? 'Before' : 'After'}
                                  </ImageLabel>
                                </Box>
                              </Box>
                            </MotionImageCard>
                          </ImageWrapper>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <ClientInfo>
                      <ClientName>{name}</ClientName>
                      <ResultStat>{lostOrGained}</ResultStat>
                      {duration && (
                        <Duration>Duration: {duration}</Duration>
                      )}
                      <SuccessKey>
                        <strong>Key to success:</strong> {keyToSuccess}
                      </SuccessKey>
                      {testimonial && (
                        <Testimonial>"{testimonial}"</Testimonial>
                      )}
                      {achievements && achievements.length > 0 && (
                        <AchievementsList>
                          <AchievementTitle>
                            Key Achievements:
                          </AchievementTitle>
                          {achievements.map((achievement, index) => (
                            <AchievementItem key={index} disablePadding dense>
                              <AchievementText primary={achievement} />
                            </AchievementItem>
                          ))}
                        </AchievementsList>
                      )}
                    </ClientInfo>
                  </Grid>
                </Grid>
              </ResultCard>
            </MotionBox>
          ))}
        </MotionBox>
      </AnimatePresence>
    </StyledContainer>
  );
};

export default Results;