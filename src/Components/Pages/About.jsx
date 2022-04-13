import {
    Box,
    Typography,
    useMediaQuery,
    Button,
    Grid,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
  import ChevronRightIcon from "@material-ui/icons/ChevronRight";
  import SchoolIcon from "@material-ui/icons/School";
  import BookmarksIcon from "@material-ui/icons/Bookmarks";
  
  const About = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  
    return (
      <div>
        <Box py={20} textAlign="center">
          <Typography variant="h2">About Page</Typography>
        </Box>
        {isMobile ? (
          <Grid container justify="space-between">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/College"
              >
                <ChevronLeftIcon />
                <Typography variant="button">College</Typography>
                <SchoolIcon  className="mr-8" />
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/Personal"
              >
                <BookmarksIcon  className="mr-8" />
                <Typography variant="button">Personal</Typography>
                <ChevronRightIcon />
              </Button>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </div>
    );
  };
  export default About;
  