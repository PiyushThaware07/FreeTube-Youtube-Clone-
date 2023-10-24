import React, { useState } from 'react';
// React Router DOM
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// Pages
import Login from './pages/Login';
import Home from './pages/Home/Home';
import Watch from './pages/watch/Watch';
import Search from './pages/Search/Search';
// Channels Handling
import ChannelHome from './pages/Channel/ChannelHome';
import ChannelVideos from './pages/Channel/ChannelVideos';
import ChannelPlaylist from './pages/Channel/ChannelPlaylist';

import Temp from './pages/Temp';


export default function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Sidebar />
        <Outlet />
      </>
    );
  };

  return (
    <div className="h-screen w-screen absolute top-0 left-0">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home/*" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='watch/:video_id' element={<Watch />} />
            <Route path='temp' element={<Temp />} />

            {/* Channels */}
            <Route path='channel/:channel_id' element={<ChannelHome />} />
            <Route path='channel/:channel_id/videos' element={<ChannelVideos />} />
            <Route path='channel/:channel_id/playlist' element={<ChannelPlaylist />} />

            {/* Search */}
            <Route path='search/:search_id' element={<Search/>} />


            <Route path='*' element={<h1>404 page not found</h1>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
