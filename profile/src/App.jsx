import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/icon.svg'
import Intro from './Intro/Intro.jsx'
import Footer from './Footer/Footer.jsx'
import ProjectBlock from './ProjectBlock/ProjectBlock.jsx'
import me from './assets/me.png'
import paintVid from './assets/paintdrops_vid.mp4'
import chessVid from './assets/chess_vid.mov'
import compErd from './assets/compmanager_erd.png'
import dash from './assets/dash.png'
import geominerVid from './assets/geominer_vid.mov'
import './App.css'

function App() {

  return (
    <>
      <Intro
        imageSrc={me}
        altText="Sample Image"
        name="Christina Chiappini,"
        text="a computer Science graduate with a strong foundation in programming and web development. Proficient in databases, Linux, Android Studio, and working with both backend and frontend technologies."
        greeting="Hi there 👋,"
      />
      {/* <TechnicalSkills
      
      /> */}
      <ProjectBlock
        title="GeoMiner Web App"
        summary="Developed a full-stack data visualization platform to display U.S. mineral deposit sites, featuring an interactive React front end with map-based navigation and dynamic pie charts. The platform was powered by a Node/Express.js API, serving data from a MongoDB Atlas database, with secure environment variable management for deployment. I deployed the application to AWS Lightsail, ensuring continuous uptime with Apache as a reverse proxy, and adhered to best practices for code organization and thorough documentation."
        techIcons="MongoDB | Express.js | React.js | Node.js (MERN) | AWS Lightsail"
        videoFile={geominerVid}
      />
      <ProjectBlock
        title="Distributed Wildlife & Weather Camera System"
        summary="Designed and deployed a multi-container Docker environment simulating a distributed network of cameras, servers, and sensors, with a real-time RPC-based remote camera control feature. The system included MQTT-based sensor data publishing, with security enhancements through encryption and a Dash app for interactive data visualization and real-time control. I followed Git best practices for team collaboration and code maintainability, documenting key design and security decisions."
        techIcons="Docker, Python, RPC, Dash, MQTT"
        imageFile={dash}
      />
      <ProjectBlock
        title="PaintDrops MonoGame"
        summary="This is a brief summary of the project, highlighting its main objectives and achievements."
        techIcons="C# | MonoGame | JUnit Testing"
        videoFile={paintVid}
      />
      <ProjectBlock
        title="Competency Manager"
        summary="I designed and managed the SQL database schema to ensure efficient data storage, integrity, and optimized queries for large datasets. I developed RESTful APIs for CRUD operations, implemented query optimizations, and utilized Docker for consistent deployment environments. Additionally, I maintained high code quality through GitLab collaboration, added robust error handling and validation, and documented the entire process for future contributors."
        techIcons="Python | SQL (e.g., MySQL/PostgreSQL/SQLite) | Flask/FastAPI/Django | Docker | GitLab"
        imageFile={compErd}
      />
      <ProjectBlock
        title="Book Reading Android App"
        summary="This is a brief summary of the project, highlighting its main objectives and achievements."
        // techIcons={techIcons}
        videoFile={chessVid}
      />
      <Footer/>
    </>
  )
}

export default App
