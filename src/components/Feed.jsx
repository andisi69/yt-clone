import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"} }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2} }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white'}}>
          {selectedCategory} <span style={{ color: '#FC1503'}}>videos</span>
        </Typography>
        <Videos videos={videos} />
        <Typography className='copyright' variant='body2' sx={{ mt: 3.5, color: 'gray' }}>
          Copyright 2024 AG
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed