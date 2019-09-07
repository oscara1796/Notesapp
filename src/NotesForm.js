import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';


const NotesForm = ({title, descirption,saveNote,updateField}) =>{
  return(
    <React.Fragment>
      <Grid item xs={12}>
        <TextField type='text' label='Title' margin="normal" fullWidth onChange={updateField("title")}value={title}/>
      </Grid >
      <Grid item xs={12}>
        <TextField multiline rows="4" margin="normal" fullWidth placeholder="start taking some notes from your heart" onChange={updateField("descirption")} value={descirption}/>
      </Grid >
      <Fab color="secondary" className="editIcon" onClick={saveNote}>
        <Icon>edit_icon</Icon>
      </Fab>
    </React.Fragment>
  )
}

export default NotesForm
