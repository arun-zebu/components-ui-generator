import './App.css';
import Grid from '@mui/material/Grid';
import TextField from './components/TextField';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Switch from './components/Switch';

function App() {

const selectedComponents = [
    <TextField />,
    <Button/>,
    <Checkbox/>,
    <Switch/>
];

const flexAlignmentOptions = [
  "flex-start",
  "flex-end",
  "center"
]

  return (
    <Grid container spacing={5}>
        {selectedComponents&&Array(Math.floor(Math.random() * (50 - 5 + 1)) + 5).fill().map((_,i)=>{
            return <Grid item xs={Math.ceil(Math.random()*2)} key={i} sx={{ border:"1px solid", display:"flex", alignItems:`${flexAlignmentOptions[Math.floor(Math.random()*3)]}`, justifyContent:`${flexAlignmentOptions[Math.floor(Math.random()*3)]}`}}>
              {selectedComponents[Math.floor(Math.random()*(selectedComponents.length))]}
            </Grid>
        })}
    </Grid>
  );
}

export default App;
