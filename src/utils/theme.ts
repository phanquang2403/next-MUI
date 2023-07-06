import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "680px",
          "@media (min-width:600px)": {
            maxWidth: "680px",
          },
        },
        maxWidthMd: {
          maxWidth: "860px",
          "@media (min-width:900px)": {
            maxWidth: "860px",
          },
        },
      },
      defaultProps: {
        maxWidth: "md",
      },
      variants: [],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "red",
          "&:hover, &.active": {
            color: "blue",
          },
        },
      },
      defaultProps: {
        underline: "hover",
      },
      variants: [],
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#333",
          "&.active": {
            color: "blue",
          },
        },
      },
      defaultProps: {},
      variants: [],
    },

    MuiButton: {
      styleOverrides: {
        root: {
          color: "red",
        },
      },
      defaultProps: {
        color: "secondary",
      },
      variants: [
        {
          props: {},
          style: {
            background: "green !important",
            color: "white",
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 2,
          color: "white",
          fontWeight: "bold",
          fontSize: 16,
          backgroundColor: "#142850",
        },
      },
      variants: [
        {
          props: {
            color: "secondary",
          },
          style: {
            // color: "white",
            // fontWeight: "bold",
            // fontSize: 16,
            // backgroundColor: "#142850",
          },
        },
      ],
    },
  },
});
