import '../Card/styles.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const OutlinedCard = ({ character }) => {
  return (
    <div style={{
      padding: "5px",
    }}>
    <Box sx={{ minWidth: 300 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2">
            Height: {character.height} cm
            <br />
            Mass: {character.mass}
            <br />
            Hair Color: {character.hair_color}
            <br />
            Birth Year: {character.birth_year}
            <br />
            Gender: {character.gender}
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </div>
  );
}
