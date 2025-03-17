import React from 'react';
import { Box, Typography, styled, TextField, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(4),
  backgroundColor: '#ffffff',
  borderTop: '2px solid #f0f0f0',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  flex: 1,
  margin: theme.spacing(1),
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#D5006D', // Pink color for section titles
  fontSize: '1.5rem',
  marginBottom: theme.spacing(1),
}));

const SubscribeButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#A8D600', // Bright green for the subscribe button
  color: '#000',
  '&:hover': {
    backgroundColor: '#8BC34A', // Darker green on hover
  },
  marginTop: theme.spacing(1),
}));

const Footer1: React.FC = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <SectionTitle>OPENING HOURS</SectionTitle>
        <Typography variant="body2">MONDAY-FRIDAY: 6:00am-9:00pm</Typography>
        <Typography variant="body2">SATURDAY-SUNDAY: 6:00am-1:00pm</Typography>
      </FooterSection>
      <FooterSection>
        <SectionTitle>CONTACT US</SectionTitle>
        <Typography variant="body2">
          <LocationOnIcon style={{ marginRight: '5px' }} />
          25794 Calaroga Ave, Hayward, CA 94545
        </Typography>
        <Typography variant="body2">
          <EmailIcon style={{ marginRight: '5px' }} />
          acornhealthandfitness@gmail.com
        </Typography>
        <Typography variant="body2">
          <PhoneIcon style={{ marginRight: '5px' }} />
          1-510-209-4096
        </Typography>
      </FooterSection>
      <FooterSection>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer1;