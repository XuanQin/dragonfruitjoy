import {
  AppBar,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';


export default function Home(): React.ReactElement {
  return <Container>
    <AppBar>
      <Toolbar>
        <Typography variant='h3'>DragonFruitJoy</Typography>
      </Toolbar>
    </AppBar>
    <Stack spacing={4}>
      <Typography>Welcome</Typography>
    </Stack>
  </Container>
}
