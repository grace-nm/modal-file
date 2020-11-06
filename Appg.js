import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Grace from "./Grace.js"
import Scamper from './Scamper.js'

///mui code
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    //border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
  },
}));


function getModalStyle() {
  const top = 30;  //+ rand();
  const left = 40; //+ rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>

      <div className="T">
        <h1> TEACHERS</h1>
        <p>LOG IN   SIGN UP</p>
        <input type="email"></input> <br /> <br />
        <input type="email"></input> <br /><br />
        <input type="email"></input><br /><br />
        <input type="email"></input><br /><br />
      </div>

      <div className="S">
        <h1>STUDENTS</h1>
        <p>LOG IN  SIGN UP</p>
        <input type="email"></input> <br /> <br />
        <input type="email"></input> <br /><br />
        <input type="email"></input><br /><br />
        <input type="email"></input><br /><br />
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        sign in/up
      </button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}


//my code below:
function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/cat">
            <Scamper />
          </Route>

          <Route path="/grace">
            <Grace />
          </Route>

          <Route path="/">
            <Mcloughlin />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

//your guys code youve been writting
function Mcloughlin() {
  return (
    <div>
      <div className="firstPage">
        <div className="header">

          <div className="g">

            <SimpleModal />
          </div>

        </div>
        <div className="stuff">
        </div>
        <div className="greystuff">

        </div>

        <div className="footer">
        </div>
      </div>
    </div>
  );
}

export default App;


