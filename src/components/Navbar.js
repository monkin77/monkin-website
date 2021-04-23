import { AppBar, Button, IconButton, Toolbar, Typography, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Menu} from "@material-ui/icons";

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
                      <Link to="/" variant="h6" color="inherit" className={classes.linkStyle}>
                            About me
                      </Link>
                      <Link to="/" variant="h6" color="inherit" className={classes.linkStyle}>
                            Activities
                      </Link>
                      <Link to="/" variant="h6" color="inherit" className={classes.linkStyle}>
                            Projects
                      </Link>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}