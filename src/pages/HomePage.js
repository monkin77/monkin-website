import { Grid, makeStyles } from "@material-ui/core";
import logo from "../media/photo1.jpeg";
import SectionBox from "../components/HomePage/SectionBox";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: theme.spacing(5),
    backgroundColor: "ghostWhite",
  },
  gridCard: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: theme.spacing(3), 
    height: "50vh",
  },
  spaceLeft: {
    marginLeft: theme.spacing(2),
  },
  logo: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  }
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container direction="row" justify="center" alignItems="flex-start" spacing={10}>
        <SectionBox logo={logo} title="Hey! My name is João Mesquita and this is my website." />

        <SectionBox title="Hobbies" bulletPoints={["Anime", "Games", "Programming", "Learning new things"]}/>

        <SectionBox />

        <SectionBox />

      </Grid>
    </div>
  );
}

export default HomePage;
