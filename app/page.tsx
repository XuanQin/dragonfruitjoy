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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // other typography settings
  },
}
)

export default function Home(): React.ReactElement {
  return <ThemeProvider theme={theme}>
    <AppBar
      elevation={0}
      position='fixed'
      color='transparent'
    >
      <Toolbar>
        <Image src='icon.png' alt='Dragonfruit Joy' width={48} height={48} />
        <Typography variant='h3'>DragonFruitJoy</Typography>
        <Button variant='contained' color='secondary'>What</Button>
      </Toolbar>
    </AppBar>
    <Stack spacing={4}>
      <Box sx={{
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(cover.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}>
        <Typography>Welcome sdfdfdfsdf</Typography>

      </Box>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
      <Typography>sdlfjsdlflsdkjflsdkjfsdljfdlsfjkl</Typography>
    </Stack>
  </ThemeProvider>
}
