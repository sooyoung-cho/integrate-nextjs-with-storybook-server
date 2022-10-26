
import { styled } from '@stitches/react';
import React from 'react';

export const Button2 = styled('button', {
  padding: '10px 20px',
  variants: {
    colors: {
      primary: {
        backgroudnColor: 'blue',
      },
      secondary: {
        backgroundColor: 'green',
      }
    }
  },
  defaultVariants: {
    colors: 'primary',
  }
});



