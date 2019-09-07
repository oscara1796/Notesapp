import React from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from "react-router-dom";

const NoteList = ({notes}) =>{
  return notes.length ?(
    <List>
      {
        notes.map((note) => {
          return(
            <ListItem button key={note.id} component={Link} to={`/view/${note.id}`}>
              <ListItemText primary= {note.title} secondary={moment(note.id).format("MMM Do YY")}/>
              <ListItemSecondaryAction>
              <IconButton >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
            </ListItem>
          )
        })
      }

    </List>
  ) : (
    <Typography align="center" variant="h6">
      No notes yet...
    </Typography>
  )
}

export default NoteList;
