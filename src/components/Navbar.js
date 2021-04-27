import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Menu} from "@material-ui/icons";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    navbarContainer: {
      flexGrow: 1,
      color: "white",
    },
    linkStyle: {
      textDecoration: "none",
      marginRight: theme.spacing(5),
      color: 'gray',
    },
    activeLinkStyle: {
      textDecoration: "none",
      marginRight: theme.spacing(5),
      color: 'white',
    }
  }));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.navbarContainer}>
                      <NavLink exact to="/" variant="h6" className={classes.linkStyle} activeClassName={classes.activeLinkStyle}>
                            About me
                      </NavLink>
                      <NavLink exact to="/resume" variant="h6" className={classes.linkStyle} activeClassName={classes.activeLinkStyle}>
                            Resume
                      </NavLink>
                      <NavLink exact to="/projects" variant="h6" className={classes.linkStyle} activeClassName={classes.activeLinkStyle}>
                            Projects
                      </NavLink>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}