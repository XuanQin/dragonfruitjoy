"use client"
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

const theme = createTheme({
  palette: {
    background: {
      default: '#FFFBFA',
      paper: '#fff',
    },
    primary: {
      main: '#EEC49A',
    },
    secondary: {
      main: '#BFC9A8',
    },
    info: {
      main: '#FAE8E5',
    },
  },
  typography: {
    fontFamily: '"Lora", serif',
    //fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderWidth: '2px', // Set border thickness here
          borderRadius: '30px', // Set border radius here
          fontWeight: 'bold',
        },
      },
    },
  },
}
)

function Hero(props: {
  url: string,
  isBackground?: boolean,
  backgroundShadeColor?: string,
}): React.ReactElement {
  const theme = useTheme();

  // Utility function to convert hex code to RGB
  const colorToRgb = (hex: string) => {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };

  const backgroundShadeColor = props.backgroundShadeColor || theme.palette.background.default;
  const backgroundShadeHex = backgroundShadeColor;

  return props.isBackground
    ? <>
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundImage: `url(${props.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: `rgba(${colorToRgb(backgroundShadeHex)}, 0.5)`,
        backgroundBlendMode: 'multiply',
      }} />
    </>
    : <Box
      component='img'
      src={props.url}
      sx={{ width: '100%' }}
    />;
}


function HomeUI(): React.ReactElement {
  const theme = useTheme()
  return <>
    <AppBar
      elevation={0}
      position='fixed'
      color='transparent'
    >
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Stack direction='row' spacing={1} display='flex' alignItems='center'>
          <Image src='icon.png' alt='Dragonfruit Joy' width={48} height={48} />
          <Typography variant='h4' color={theme.palette.secondary.light}>
            <b>Dragonfruit Joy</b>
          </Typography>
        </Stack>
        <Button variant='outlined' color='secondary' size='large'>Contact Us</Button>
      </Toolbar>
    </AppBar>
    <Stack spacing={4}>
      <Stack
        spacing={2}
        height='100vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
        color={theme.palette.info.light}
      >
        <Hero url="cover.jpg" isBackground backgroundShadeColor={theme.palette.primary.dark} />
        <Typography variant='h2'>Food, Mind, Body</Typography>
        <Typography variant='h3'>Holistic Wellbeing</Typography>
      </Stack>

      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
    </Stack>
  </>
}


export default function Home(): React.ReactElement {
  return <ThemeProvider theme={theme}>
    <HomeUI />
  </ThemeProvider >
}
