import React from 'react';
import { Stack, useTheme, Typography } from '@mui/material';
import { FormSX } from './Auth.styles';

function AuthOutlet({ children, header }) {
  const theme = useTheme();
  return (
    <form>
      <Stack
        gap={3}
        sx={{
          ...FormSX,
          border: `1px solid ${theme.palette.grey.border}`,
          background: theme.palette.grey[50],
        }}
      >
        {header ? (
          <Typography textAlign="center" variant="h2">
            {header}
          </Typography>
        ) : (
          <img
            src={
              theme.palette.mode === 'dark'
                ? '/vite.svg'
                : '/vite.svg'
            }
            alt="logo"
          />
        )}
        {children}
      </Stack>
    </form>
  );
}

export default AuthOutlet;
