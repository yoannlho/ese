import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AlignItem from './AlignItemsList.module.css';

const AlignItemsList = () => {
  return (
    <List className={AlignItem.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Jean-pierre AUBIN"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={AlignItem.inline}
                color="textPrimary"
              >
                Ingénieur de recherche en Cybersécurité
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="..."
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={AlignItem.inline}
                color="textPrimary"
              >
                Expert en test d'intrusion
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="..."
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={AlignItem.inline}
                color="textPrimary"
              >
                Expert en réponse sur incident
              </Typography>
            </React.Fragment>
          }
        />
        </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="..."
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={AlignItem.inline}
                color="textPrimary"
              >
                Consultant en sécurité informatique
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default AlignItemsList;