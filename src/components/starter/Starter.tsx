import { IconButton } from '@mui/material';
import StartIcon from '@mui/icons-material/Start';
import React from 'react';

const Starter: React.FC = () => {
  return (
    <>
      Mui + Mui icons installed!
      <IconButton aria-label="start">
        <StartIcon />
      </IconButton>
    </>
  );
};

export default Starter;
