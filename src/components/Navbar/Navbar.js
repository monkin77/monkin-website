import { useState } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Menu} from "@material-ui/icons";
import {Link, NavLink} from "react-router-dom";

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

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <NavLink to="/" className="navbar-logo">
              TRLV <i className="fab fa-typo3"></i>
            </NavLink>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className="nav-links" onClick={closeMobileMenu}>
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-links-mobile" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>



        /*
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
        */
    )
}