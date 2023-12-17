// src/App.js
import React from 'react';
import { AppBar, Container, CssBaseline, Grid, Toolbar, Typography, Button, Link } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Santosh Ghimire</Typography>
          <nav className='menu-item'>
            <Link href="#about" style={{ marginRight: '10px' }} color="inherit" underline="none" variant="button">About</Link>
            <Link href="#projects" style={{ marginRight: '10px' }}color="inherit" underline="none" variant="button">Projects</Link>
            <Link href="#research" style={{ marginRight: '10px' }}color="inherit" underline="none" variant="button">Research</Link>
            <Link href="#contact" style={{ marginRight: '10px' }}color="inherit" underline="none" variant="button">Contact</Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <section id="about">
              <Typography variant="h2">About Me</Typography>
              <Typography variant="body1">
                Hello! I am Santosh Ghimire, a passionate software engineer with expertise in research and development.
                This is my personal website where I share my thoughts, projects, and experiences in the world of technology.
              </Typography>
            </section>
          </Grid>

          <Grid item xs={12} md={6}>
            <section id="projects">
              <Typography variant="h2">Projects</Typography>
              <ul>
                <li>
                  <Typography variant="h3">Facial Attendance System</Typography>
                  <Typography variant="body1">I have successfully developed a sophisticated Facial Attendance System as part of my comprehensive project.
              Leveraging the Local Binary Pattern Histogram (LBPH) algorithm, I meticulously curated a dataset to train the system,
              ensuring accurate facial recognition for seamless attendance tracking.</Typography>
                </li>
                <Typography variant="h3">ICAN Nepal ERP</Typography>
                <Typography variant="body1">
                  We are proud to showcase the ICAN Nepal ERP, a comprehensive Enterprise Resource Planning system specifically tailored for the Institute of Chartered Accountancy Nepal (ICAN).
                  This cutting-edge ERP revolutionizes chartered accountancy education by streamlining student management, financial operations, human resources, examinations, library management, communication, collaboration, and inventory and asset management.
                  With a user-friendly interface, customizable dashboards, and real-time analytics, the ICAN Nepal ERP stands as a groundbreaking initiative, enhancing efficiency, transparency, and decision-making within the institute.
                </Typography>
                {/* Add more projects as needed */}
              </ul>
            </section>
          </Grid>

        

          <Grid item xs={12}>
            <section id="contact">
              <Typography variant="h2">Contact</Typography>
              <Typography variant="body1">
                Feel free to reach out to me via email at <Link href="mailto:santoshghi650@gmail.com">santoshghi650@gmail.com</Link>.
              </Typography>
            </section>
          </Grid>
        </Grid>
      </Container>
      <footer>
        <Typography variant="body2">&copy; 2023 Santosh Ghimire - Software Engineer</Typography>
      </footer>
    </div>
  );
}

export default App;
