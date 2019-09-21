import React from 'react';
import axios from "axios";
import './index.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// Notes components
import NotesForm from './NotesForm.js';
import NotesList from './NotesList.js';
import Home from './Home.js'
import Note from './Note.js'
// React router
/* Tenemos que agregar lo que vayamos usar en router aqui */
import {Link, Route, Redirect} from "react-router-dom";

// Comentario

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: "",
      descirption:"",
      notes: []
    };
  }

  componentDidMount(){
      axios
      .get("./notess.json").then(response=> {
        if (response.status === 200 && response.data) {
          this.setState({notes: response.data})
        }
      })
      .catch( err => console.log(err))
  }

updateField = field =>(e)=>{
  this.setState({
    [field]: e.target.value
  })
}

saveNote = () => {
  if(this.state.title.trim() && this.state.descirption.trim()){
    this.setState({
      notes:[...this.state.notes,{id:Date.now(),title: this.state.title, descirption: this.state.descirption}],
      title: "",
      descirption: "",
    })
  }
}



deleteNote = (id) =>{
  this.setState({notes: this.state.notes.filter(note => note.id !== id)})

}



  render(){
    console.log(this.state);
    return (
      <React.Fragment>
        <Typography align="center" variant="h2" gutterBottom>
          React notes
        </Typography>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={4}>
              <NotesList notes={this.state.notes} deleteNote={this.deleteNote}/>
            </Grid>
            <Grid item xs={8}>
              <Route exact path="/" component={Home}/>
              {/* <NotesForm updateField={this.updateField} descirption={this.state.descirption} title={this.state.title} saveNote={this.saveNote}/>*/}
              <Route path='/add' render={() =>
                  <NotesForm updateField={this.updateField} descirption={this.state.descirption} title={this.state.title} saveNote={this.saveNote}/>
                }/>
              <Route path='/view/:id' render={props =>{
                  {/* Redirect nos sirve para regresar al host 3000 pagina inicio u otra pagina */}
                  {/* props son las properties de route */}
                const note= this.state.notes.filter(
                  note => note.id === parseInt(props.match.params.id)
                )[0];
                if (note){
                  return <Note  note={note} />
                }else{
                  return <Redirect to="/" />
                }
                }}
              />

            </Grid>
        </Grid>
        <Link to="/add">
          <Fab color="primary" className="addIcon">
            <AddIcon/>
          </Fab>
        </Link>

      </React.Fragment>
    );
  }

}

export default App;
