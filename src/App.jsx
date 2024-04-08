import "./App.css";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveAppBar from './Navbar';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';

const divStyle = {

  color: '#003C43',

};

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${'#1976d2'};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${'#1976d2'};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
  }, inset 0 1.5px 1px ${'434D5B'}, inset 0 -2px 1px ${'434D5B'};

  &:hover {
    background-color: ${'B6FFFA'};
  }

  &.${buttonClasses.active} {
    background-color: ${'434D5B'};
    box-shadow: none;
    transform: scale(0.99);
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? '434D5B' : '434D5B'};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${theme.palette.mode === 'dark' ? '434D5B' : '434D5B'};
    color: ${theme.palette.mode === 'dark' ? '434D5B' : '434D5B'};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
  `,
);

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 600px;
  font-family: serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? '#C7D0DD': '#1C2025'};
  background: ${theme.palette.mode === "dark" ? '#1C2025' : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? '#434D5B' : '#DAE2ED'};
  box-shadow: 0px 2px 2px ${theme.palette.mode === "dark" ? '#1C2025' : '#F3F6F9'};

  &:hover {
    border-color: ${'#B6FFFA'};
  }

  &:focus {
    border-color: ${'#B0B8C4'};
    box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? '#6B7A90' : '#DAE2ED'};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

export default function App() {
  return (
  <center>
    <main>
    
    <ResponsiveAppBar></ResponsiveAppBar>
    <h2 style={divStyle}>Enter Code Snippet</h2>
      <center>
      <Textarea
        aria-label="minimum height"
        minRows={20}
        placeholder=""
      />
      <br></br>
      <br></br>
      <Button> Generate URL </Button>
      <br></br>
      </center>
    </main>
    </center>
  );
}
