import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Divider,
  CircularProgress,
  IconButton,
} from "@mui/material";
import {
  PictureAsPdf,
  KeyboardArrowDown,
  Accessibility,
  ChildCare,
  Healing,
  LocalHospital,
  LocalHospitalOutlined,
  LocalPharmacy,
  PregnantWoman,
  Visibility,
} from "@mui/icons-material";
import axios from "axios";

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  console.log(id, "id");
  console.log(user,"dataofuser");
  
  const fullName = `${user?.name?.first} ${user?.name?.last}`;
  const fullLocation = `${user?.location?.street?.number}, ${user?.location?.street?.name}, ${user?.location?.city}, ${user?.location?.country}`;

  const fetchUser = async (id: string) => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?uuid=${id}`);
      setUser(response.data.results[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      fetchUser(id);
    } else {
      setLoading(false);
    }
  }, [id]);


  if (loading) {
    return <CircularProgress />;
  }

  const categories = [
    { title: "Doctor Visit", icon: <Accessibility /> },
    { title: "Tests", icon: <LocalHospitalOutlined /> },
    { title: "Drugs", icon: <LocalPharmacy /> },
    { title: "Outpatient Services", icon: <LocalHospital /> },
    { title: "ER & Urgent Care", icon: <LocalHospitalOutlined /> },
    { title: "Hospital", icon: <LocalHospital /> },
    { title: "Mental/Behavioral Health", icon: <Healing /> },
    { title: "Pregnancy", icon: <PregnantWoman /> },
    { title: "Other Special Needs", icon: <Accessibility /> },
    { title: "Children's Vision", icon: <Visibility /> },
    { title: "Children's Dental", icon: <ChildCare /> },
  ];

  return (
    <Container>
      <Button variant="text" component={Link} to="/" sx={{ mb: 2 }}>
        &lt; Back to plans
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb={2}
              >
                <CardMedia
                  component="img"
                  image={user?.picture?.large}
                  alt={user?.name?.first}
                />
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {fullName}
                </Typography>
                <Box display="flex" alignItems="center">
                  {[...Array(5)].map((_, i) => (
                    <Box key={i} sx={{ color: "#fdd835" }}>
                      ★
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box>
                <Typography variant="body2">Email: {user?.email}</Typography>
                <Typography variant="body2">Gender: {user?.gender}</Typography>
                <Typography variant="body2">Phone: {user?.phone}</Typography>
                <Typography variant="body2">Age: {user?.login?.username}</Typography>
                <Typography variant="body2">Age: {user?.registered?.age}</Typography>
                <Typography variant="body2">Location: {fullLocation}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  BUY
                </Button>
                <Button
                  variant="text"
                  color="primary"
                  fullWidth
                  sx={{ mt: 1 }}
                  startIcon={<PictureAsPdf />}
                >
                  Download Plan Brochure
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                User Details
              </Typography>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="body2">IN NETWORK</Typography>
                  <Divider />
                  <Typography variant="body2">
                    Yearly Deductible: $6000 (Individual)
                  </Typography>
                  <Typography variant="body2">
                    Separate Drug Deductible: $500 (Individual)
                  </Typography>
                  <Typography variant="body2">
                    Out-of-pocket Max: $6500 (Individual)
                  </Typography>
                  <Typography variant="body2">
                    Maximum Cost per Prescription: $500
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">OUT OF NETWORK</Typography>
                  <Divider />
                  <Typography variant="body2">Not Available</Typography>
                  <Typography variant="body2">Not Available</Typography>
                  <Typography variant="body2">Not Available</Typography>
                  <Typography variant="body2">Not Available</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {categories.map((category, index) => (
            <Card key={index} sx={{ mt: 2 }}>
              <CardContent>
                <Grid container>
                  <Grid item xs={1}>
                    {category.icon}
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h6">{category.title}</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <IconButton>
                      <KeyboardArrowDown />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetail;
