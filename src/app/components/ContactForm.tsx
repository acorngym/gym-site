"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
  CircularProgress,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Styled components
const FormContainer = styled(Paper)(({ theme }) => ({
  padding: "2.5rem",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
  position: "relative",
  overflow: "hidden",
  marginTop: "2rem",
  marginBottom: "4rem",
}));

const FormTitle = styled(Typography)({
  fontWeight: 700,
  marginBottom: "0.5rem",
  position: "relative",
  display: "inline-block",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    transition: "all 0.3s ease",
    "&:hover fieldset": {
      borderColor: "#9c27b0",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#9c27b0",
    },
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#9c27b0",
  },
});

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  padding: "12px 36px",
  fontSize: "1rem",
  fontWeight: 600,
  textTransform: "none",
  boxShadow: "0 4px 14px rgba(156, 39, 176, 0.4)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 6px 20px rgba(156, 39, 176, 0.6)",
  },
}));

const AccentBar = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  height: "6px",
  width: "100%",
  background: "linear-gradient(90deg, #9c27b0, #ff4081)",
});

const SuccessContainer = styled(Box)({
  textAlign: "center",
  padding: "4rem 2rem",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
  position: "relative",
  marginTop: "2rem",
  marginBottom: "4rem",
});

export function ExampleForm() {
  const [state, handleSubmit] = useForm("xjkykojw");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (state.succeeded) {
    return (
      <Container maxWidth="sm">
        <Fade in={true} timeout={1000}>
          <SuccessContainer>
            <AccentBar />
            <CheckCircleIcon
              color="secondary"
              sx={{ fontSize: 80, mb: 3, color: "#9c27b0" }}
            />
            <Typography variant="h4" gutterBottom fontWeight={600}>
              Thank You!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              We've received your message and will reach out to you shortly.
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => window.location.reload()}
            >
              Send Another Message
            </Button>
          </SuccessContainer>
        </Fade>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box textAlign="center" mb={4} mt={6}>
        <Typography
          variant="h3"
          component="h1"
          fontWeight={700}
          sx={{
            background: "linear-gradient(90deg, #9c27b0, #ff4081)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
          }}
        >
          DROP US A LINE
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          We'd love to hear from you. Fill out the form below to get started.
        </Typography>
      </Box>

      <FormContainer elevation={0}>
        <AccentBar />
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box height="100%" display="flex" flexDirection="column" justifyContent="center">
              <FormTitle variant="h5">Contact Information</FormTitle>
              <Typography variant="body2" color="text.secondary" paragraph>
                Please provide your details and we'll get back to you as soon as possible.
              </Typography>
              <Divider sx={{ my: 3 }} />
              <Box>
                <Typography variant="body2" fontWeight={500} sx={{ mb: 0.5 }}>
                  📞 Phone
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  +1 (510) 209-4096
                </Typography>
                <Typography variant="body2" fontWeight={500} sx={{ mb: 0.5 }}>
                  📧 Email
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                acornhealthandfitness@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Full Name"
                    id="name"
                    name="name"
                    variant="outlined"
                    required
                    placeholder="John Doe"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    variant="outlined"
                    required
                    placeholder="johndoe@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Phone Number"
                    id="number"
                    name="number"
                    variant="outlined"
                    placeholder="(555) 123-4567"
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Message"
                    id="message"
                    name="message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                    placeholder="How can we help you?"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-end" mt={2}>
                    <SubmitButton
                      type="submit"
                      variant="contained"
                      color="secondary"
                      disableElevation
                      disabled={state.submitting}
                      endIcon={
                        state.submitting ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <SendIcon />
                        )
                      }
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </SubmitButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </FormContainer>
    </Container>
  );
}

export default ExampleForm;