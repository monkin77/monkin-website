import { Avatar, Card, Grid, makeStyles, Typography } from "@material-ui/core";

const avatarSrc = "../media/photo1.jpeg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    marginTop: theme.spacing(5),
  },
  gridCard: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: theme.spacing(3),
  },
  spaceLeft: {
    marginLeft: theme.spacing(2),
  }
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
        <Grid item xs={12} md={6}>
          <Card className={classes.gridCard}>
            <Avatar alt="João Gil" src={avatarSrc} />
            <Typography className={classes.spaceLeft}>Hello</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Hello</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
