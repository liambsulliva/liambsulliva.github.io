import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Image from './me.jpg';
import './App.css';

const currentYear = new Date().getFullYear();

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-title">Liam Sullivan</Link>
      <ul className="nav-wrapper">
        <li className="nav-element">
          <Link to="/" className="navLink">About</Link>
        </li>
        <li className="nav-element">
          <Link to="/resume" className="navLink">Resumé</Link>
        </li>
        <li className="nav-element">
          <Link to="/blog" className="navLink">Blog</Link>
        </li>
        <li className="nav-element">
          <Link to="/photography" className="navLink">Photography</Link>
        </li>
        <li className="nav-element">
          <Link to="/projects" className="navLink">Projects</Link>
        </li>
        <li className="nav-element">
          <Link to="/contact" className="navLink">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
        <p style={{ margin: '5px' }}>© {currentYear} Liam Sullivan</p>
        <a href="https://instagram.com/liamsullivanphoto" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
        <a href="https://linkedin.com/in/liambsulliva" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
        <a href="https://github.com/liambsulliva" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
    </footer>
  );
}

const WordpressFetcher = () => {
  const [wordpressData, setWordpressData] = useState([]);

  useEffect(() => {
    const fetchWordpressData = async () => {
      const site = `pittbusinesstotheworld.com`;
      const author = `651`; // My Author ID
      const url = `https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/?author=${author}`;

      const response = await fetch(url);
      const data = await response.json();
      
      setWordpressData(data.posts);
    }
    fetchWordpressData();
  }, []);

  return (
    <div className="blog">
      <div className="blog-section">
        <h3 className="blog-title">International Internship Program: Berlin 2024</h3>
        <div className="blog-line"></div>
      </div>
      {wordpressData.map((post, index) => (
        <div key={index} className="blog-post">
          {/* I am aware that innerHTML is dangerous, however posts are only parsed from MY WordPress account :) */}
          <h3 className="blog-post-title" dangerouslySetInnerHTML={{ __html: post.title }}></h3>
          <p className="blog-post-description" dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
        </div>
      ))}
    </div>
  );
}

const FlickrGallery = () => {
  const [flickrData, setFlickrData] = useState([]);

  useEffect(() => {
    const fetchFlickrData = async () => {
      const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
      const userId = process.env.REACT_APP_FLICKR_USER_ID;
      const url = `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=1`;

      const response = await fetch(url);
      const data = await response.json();

      let photos = [];
      if (data.stat === 'ok') {
        for (let i = 1; i <= data.photos.pages; i++) {
          const pageUrl = `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=1&page=${i}`;
          const pageResponse = await fetch(pageUrl);
          const pageData = await pageResponse.json();
          if (pageData.stat === 'ok') {
            for (let j = 0; j < pageData.photos.photo.length; j++) {
              const photo = pageData.photos.photo[j];
              const src = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
              photos.push({ src: src });
            }
          } else {
            console.error(`Error fetching Flickr data for page ${i}, ${pageData.message}`);
          }
        }
        setFlickrData(photos);
      } else {
        console.error(`Error fetching Flickr data ${data.message}`);
      }
    };
    fetchFlickrData();
  }, []);

  return (
    <div className="portfolio-container">
      {flickrData.map((photo, index) => (
        <div key={index} className={`portfolio-wrapper`}>
          <img src={photo.src} alt={photo.title} className="portfolio-element" />
        </div>
      ))}
    </div>
  );
};

const GitHubFetcher = () => {
  let [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async ( page = 1 ) => {
      const res = await fetch(
        `https://api.github.com/users/liambsulliva/repos?&sort=pushed&per_page=100&page=${page}`
      );
      const data = await res.json();
      //Check if there are any repos left to fetch
      if (data.length > 0) {
          repos = repos.concat(data);
          return fetchRepos(page + 1); // if yes, call function recursively to grab next
      } else {
          setRepos(repos);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="repo-list">
      {repos.map((repo, index) => (
        repo.fork || repo.name === 'personal-website' || repo.name === 'liambsulliva' ? null : (
          <div key={index} className="repo">
            <h3 className="repo-title">{repo.name}</h3>
            <span className="repo-description">{repo.description}</span>
            {repo.homepage && repo.homepage !== '' ? (
              <>
                <br /> <br />
                <a className="link-btn" href={repo.html_url} target="_blank" rel="noreferrer">View Project</a> <br /> <br />
                <a className="link-btn" href={repo.homepage} target="_blank" rel="noreferrer">Live Preview</a> <br />
              </>
            ) : (
              <>
                <br /> <br />
                <a className="link-btn" href={repo.html_url} target="_blank" rel="noreferrer">View Project</a> <br />
              </>
            )}
          </div>
        )
      ))}
    </div>
  );
}

const PDFViewer = () => {
  return (
    <div style={{ width: '100vw', height: '90vh' }}>
      <iframe src={ "/Resume.pdf" } title={ "Resumé" } style={{ width: '100%', height: '100%' }}>
        <p>Your browser does not support embedded PDF files.</p>
      </iframe>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div>
      <main>
        <div className="landing-container">
          <img src={ Image } alt="Liam Sullivan" className="profile-photo" /><br />
          <div className="text">
            <p>Hi, my name is Liam Sullivan, and I'm a Computer Science and Digital Narrative and Interactive Design Major at the University of Pittsburgh. My background is very unique. I've worked as a photographer for over 5 years, and in that time I've developed an eye for composure, framing, and negative space. Now, I study Computer Science as a full time student. My hope is to combine my design chops with my programming knowledge to be the best of both worlds in the realm of front-end web development.</p>
            <h3 className="title">Education</h3>
            <li>University of Pittsburgh, B.S. Computer Science, 2022 - 2026</li>
            <li>W.T. Woodson High School, Advanced Diploma, 2018 - 2022</li>
            <h3 className="title">Current Positions</h3>
            <li>Photographer, The Pitt News, 2023</li>
            <li>Freelance Photographer, Self-Employed, 2018</li>
          </div>
        </div>
      </main>
    </div>
  );
}

const ResumePage = () => {
  return (
    <div>
      <main>
        <PDFViewer />
      </main>
    </div>
  );
}

const BlogPage = () => {
  return (
    <div>
      <main>
        <div className="title-container">
          <h2 className="title">Blog</h2>
        </div>
        <WordpressFetcher />
      </main>
    </div>
  );
}

const PhotographyPage = () => {
  return (
    <div>
    <main>
      <div class="title-container">
        <h2 class="title">My Portfolio</h2>
      </div>
      <FlickrGallery />
    </main>
  </div>
  );
}

const ProjectPage = () => {
  return (
    <div>
    <main>
    <div class="title-container">
      <h2 class="title">Projects</h2>
    </div>
      <GitHubFetcher />
    </main>
  </div>
  );
}

const ContactPage = () => {
  return (
    <div>
    <main>
      <div class="title-container">
        <h2 class="title">Contact Me</h2>
      </div>
      <div class="contact-container">
        <form
          action="https://formspree.io/f/mzblkgdj"
          method="POST"
        >
          <label class="form">
            Email
            <input type="email" name="email" /><br />
          </label>
          <label class="form">
            Message
            <input type="message" name="message" /><br />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  </div>
  );
}

export default App;
