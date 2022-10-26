import { styled } from '@stitches/react';
import React from 'react';

export const Button333 = styled('button', {
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





export default function ButtonView(props, res) {
  console.log(props);

//   NextCors(props, res, {
//     // Options
//     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//     origin: '*',
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//  });

  return (
    <div>
      <h1>ButtonView</h1>
      <Button333>default</Button333>
    </div>
  )
}


