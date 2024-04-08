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
import Button from '@mui/material/Button';

const divStyle = {

  color: '#003C43',

};


const btnStyle = {
  
  color: '#003C43',
  fontFamily: 'monospace',
  fontSize: '1rem',
  fontWeight: '400'

};


const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 600px;
  fontFamily: 'monospace',
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
    <br></br>
    <h2 style={btnStyle}>Enter Code Snippet</h2>
    <br></br>
      <center>
      <Textarea
        aria-label="minimum height"
        minRows={20}
        placeholder=""
      />
      <br></br>
      <br></br>
      <Button variant="text" style={btnStyle}>Generate Shareable Link</Button>
      <br></br>
      </center>
    </main>
    </center>
  );
}
