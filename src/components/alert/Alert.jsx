import * as React from 'react';
import { Alert  } from '@mui/material'; // Rename the imported Alert component
import CheckIcon from '@mui/icons-material/Check';

export default function Alert() { // Rename your custom component
  return (
    <MuiAlert icon={<CheckIcon fontSize="inherit" />} severity="success"> {/* Use MuiAlert instead of Alert */}
      Here is a gentle confirmation that your action was successful.
    </MuiAlert>
  );
}
