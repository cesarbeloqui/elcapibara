import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
        },
        primary: {
          100: '#e7e5e4',
          200: '#d6d3d1',
          300: '#a8a29e',
          400: '#292524',
          500: '#44403c',
          600: '#44403c',
          700: '#292524',
          800: '#1c1917',
          900: '#0c0a09',
        },
        greenAccent: {
          100: '#dbf5ee',
          200: '#b7ebde',
          300: '#94e2cd',
          400: '#70d8bd',
          500: '#4cceac',
          600: '#3da58a',
          700: '#2e7c67',
          800: '#1e5245',
          900: '#0f2922',
        },
        redAccent: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          300: '#e99592',
          400: '#e2726e',
          500: '#db4f4a',
          600: '#af3f3b',
          700: '#832f2c',
          800: '#58201e',
          900: '#2c100f',
        },
        blueAccent: {
          100: '#e1e2fe',
          200: '#c3c6fd',
          300: '#a4a9fc',
          400: '#868dfb',
          500: '#6870fa',
          600: '#535ac8',
          700: '#3e4396',
          800: '#2a2d64',
          900: '#151632',
        },
        green: {
          100: '#39A935',
          200: '#39A935',
          300: '#39A935',
          400: '#39A935',
          500: '#39A935',
          600: '#39A935',
          700: '#39A935',
          800: '#39A935',
          900: '#39A935',
        },
        button: {
          background: 'black',
          color: 'white',
          hover: {
            background: '#39A935',
            color: 'white',
          },
        },
      }
    : {
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0',
        },
        primary: {
          100: '#040509',
          200: '#080b12',
          300: '#0c101b',
          400: '#f2f0f0', // manually changed
          500: '#141b2d',
          600: '#1F2A40',
          700: '#727681',
          800: '#a1a4ab',
          900: '#d0d1d5',
        },
        greenAccent: {
          100: '#0f2922',
          200: '#1e5245',
          300: '#2e7c67',
          400: '#3da58a',
          500: '#4cceac',
          600: '#70d8bd',
          700: '#94e2cd',
          800: '#b7ebde',
          900: '#dbf5ee',
        },
        redAccent: {
          100: '#2c100f',
          200: '#58201e',
          300: '#832f2c',
          400: '#af3f3b',
          500: '#db4f4a',
          600: '#e2726e',
          700: '#e99592',
          800: '#f1b9b7',
          900: '#f8dcdb',
        },
        blueAccent: {
          100: '#151632',
          200: '#2a2d64',
          300: '#3e4396',
          400: '#535ac8',
          500: '#6870fa',
          600: '#868dfb',
          700: '#a4a9fc',
          800: '#c3c6fd',
          900: '#e1e2fe',
        },
        green: {
          100: '#39A935',
          200: '#39A935',
          300: '#39A935',
          400: '#39A935',
          500: '#39A935',
          600: '#39A935',
          700: '#39A935',
          800: '#39A935',
          900: '#39A935',
        },
        button: {
          background: '#3d3d3d',
          color: 'white',
          hover: {
            background: '#39A935',
            color: 'white',
          },
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // valores de la paleta para el modo oscuro
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.green[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
            red: {
              dark: colors.grey[700],
              main: colors.redAccent[500],
              light: colors.grey[100],
            },
            white: {
              main: 'white',
            },
          }
        : {
            // valores de la paleta para el modo claro
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.green[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#fcfcfc',
            },
            red: {
              dark: colors.grey[700],
              main: colors.redAccent[600],
              light: colors.grey[100],
            },
            white: {
              main: 'black',
            },
          }),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          /* 
                  button: {
          background: "black",
          color: "white",
          hover: {
            background: "#39A935",
            color: "white",
          },
        },
          */
          root: {
            textTransform: 'none',
            backgroundColor: colors.button.background,
            color: colors.button.color,
            '&:hover': {
              backgroundColor: colors.button.hover.background,
              color: colors.button.hover.color,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label.Mui-focused': {
              color: colors.grey[100],
            },
          },
        },
      },
    },
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 16,
      h1: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: '2.5rem',
      },
      h2: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: '2rem',
      },
      h3: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: '1.5rem',
      },
      h4: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: '1.25rem',
      },
      h5: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: '1rem',
      },
      h6: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: '0.875rem',
      },
      h1Bold: {
        fontFamily: ['Montserrat', 'sans-serif', 'bold'].join(','),
        fontSize: '2.5rem',
        fontWeight: 'bold',
      },
      h2Bold: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: '2rem',
        fontWeight: 'bold',
      },
      h3Bold: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
      h4Bold: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: '1.25rem',
        fontWeight: 'bold',
      },
      h5Bold: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: '1rem',
        fontWeight: 'bold',
      },
      h6Bold: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: '0.875rem',
        fontWeight: 'bold',
      },
    },
  };
};

// context for color mode
/* export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
}; */

export const useMode = () => {
  const mode = useSelector((state) => state.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme };
};
