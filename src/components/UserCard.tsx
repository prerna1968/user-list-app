import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface UserCardProps {
  user: any;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const fullName = `${user.name.first} ${user.name.last}`;

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', padding: 2, marginBottom: 2 }}>
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia
              component="img"
              sx={{ width: 60, height: 60, borderRadius: '50%' }}
              image={user.picture.thumbnail}
              alt={user.name.first}
            />
          </Grid>
          <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>
              {fullName}
            </Typography>
            <Box display="flex" alignItems="center">
              {[...Array(5)].map((_, i) => (
                <Box key={i} sx={{ color: '#fdd835' }}>
                  ★
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              {user.gender}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              {user.phone}
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              {user.registered.age}
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button variant='outlined' size="small" component={Link} color="primary" to={`/user/${user.login.uuid}`}>
              Overview
            </Button>
          </Grid>
          <Grid item xs={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button variant="contained" size="small" color="primary">
              Buy
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default UserCard;
