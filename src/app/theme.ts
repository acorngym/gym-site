// app/theme.ts
import { createTheme } from '@mui/material/styles';

export const THEME_CONSTANTS = {
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

export const theme = createTheme({
  // Add your theme customizations here
});