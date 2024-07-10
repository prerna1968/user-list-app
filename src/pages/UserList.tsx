// src/pages/UserList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';
import { Container, Typography, CircularProgress, Box, Grid, Divider, Card } from '@mui/material';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(users,"users");
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setUsers(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      <Card>
      <Grid container spacing={1} sx={{ marginBottom: 1 }}>
          <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="caption" color="textSecondary">Name</Typography>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="caption" color="textSecondary">Email</Typography>
          </Grid>
          <Grid item xs={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="caption" color="textSecondary">Gender</Typography>
          </Grid>
          <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="caption" color="textSecondary">Phone</Typography>
          </Grid>
          <Grid item xs={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="caption" color="textSecondary">Age</Typography>
          </Grid>
        </Grid>
        </Card>
        <Divider />
      <Box>
        {users.map(user => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </Box>
    </Container>
  );
}

export default UserList;
