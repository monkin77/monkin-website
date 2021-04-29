import { Avatar, Card, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridCard: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: theme.spacing(3), 
    height: "50vh",
  },
  spaceLeft: {
    marginLeft: theme.spacing(2),
  },
  containerPadding: {
    display: "flex",
    flex: 1,
    height: "90%",
    padding: theme.spacing(2),
  },
  logoContainer: {
    display: "flex",
    flex: 1,
    height: "100%",
    borderRightStyle: "solid",
    borderRightWidth: 2,
    borderRightColor: "purple",
    paddingRight: theme.spacing(5),
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  contentContainer: {
    display: "flex",
    flex: 3,
    height: "100%",
  }
}));

const SectionBox = ({logo}) => {
  const classes = useStyles();

  return (
        <Grid item xs={12} md={6} container>
          <Card className={classes.gridCard}>
            <div className={classes.containerPadding}>
              {logo && 
              <div className={classes.logoContainer}>
                  <Avatar alt="João Gil" src={logo} className={classes.logo} />
              </div>
              }
              <div className={classes.contentContainer}>
                <Typography className={classes.spaceLeft}>Hello</Typography>
              </div>
            </div>
 
          </Card>
        </Grid>
  );
}

export default SectionBox;
