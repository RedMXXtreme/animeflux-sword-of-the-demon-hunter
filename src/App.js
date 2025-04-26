import './App.css';
import React, { useState, useEffect } from "react";
import { FaRandom, FaSearch } from "react-icons/fa";

const Countdown = ({ targetDateTime }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const difference = new Date(targetDateTime) - now;
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDateTime]);

  return (
    <span style={{ marginLeft: '10px' }}>
      {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
    </span>
  );
};

const AnimePage = () => {
  const videos = [
   { id: 1,  HD1:"https://2anime.xyz/embed/sword-of-the-demon-hunter-dub-episode-1", HD2:"https://megaplay.buzz/stream/s-2/135959/dub",HDSUB1:"https://newer.stream/v/F3BuqhfjILSx/",HDSUB2:"https://sstream.site/e/vospb2pc655q"},
   { id: 2,  HD1:"https://2anime.xyz/embed/sword-of-the-demon-hunter-dub-episode-2", HD2:"https://megaplay.buzz/stream/s-2/136198/dub",HDSUB1:"https://newer.stream/v/62ynSZQvau2T/",HDSUB2:"https://sstream.site/e/mwdpt1vv2cc2"},
   { id: 3,  HD1:"https://2anime.xyz/embed/sword-of-the-demon-hunter-dub-episode-3", HD2:"https://megaplay.buzz/stream/s-2/136405/dub",HDSUB1:"https://newer.stream/v/ke36JkX4fara/",HDSUB2:"https://sstream.site/e/15n4jb305omf"},
   { id: 4,  HD1:"https://2anime.xyz/embed/sword-of-the-demon-hunter-dub-episode-4", HD2:"https://megaplay.buzz/stream/s-2/136604/dub",HDSUB1:"https://2anime.xyz/embed/sword-of-the-demon-hunter-episode-1",HDSUB2:"https://megaplay.buzz/stream/s-2/136604/sub"},

    

  ];

  const ranvideo = [
    { link: "https://animeflux-deathnote.pages.dev/"},
    { link: "https://animeflux-shingeki-no-kyojin.pages.dev/"},
    { link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-arc.pages.dev/"},
    { link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-mugen-train-arc.pages.dev/"},
    { link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-entertainment-arc.pages.dev/"},
    { link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc.pages.dev/"},
    { link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-hashira-training-arc.pages.dev/"},
    { link:"https://animeflux-jujutsukaisen-s01.pages.dev/"},
    { link:"https://animeflux-jujutsukaisen-s02.pages.dev/"},
    { link:"https://animeflux-jujutsukaisen-0.pages.dev/"},
    { link:"https://animeflux-puka-puka-juju.pages.dev/"},
    { link: "https://animeflux-solo-leveling-s01.pages.dev/"}, // Example random link
    { link: "https://animeflux-sololeveling-arise-from-the-shadow-s02.pages.dev/"}, // Example random link

  // Add more random links here
    
  ];

  const searchLinks = {
    "Death Note": { link: "https://animeflux-deathnote.pages.dev/", img: "https://static1.animekai.to/7e/i/f/bf/67664a569f3a5@100.jpg", year: "2006", type: "TV", rating: "R" },
    "Shingeki no Kyojin": { link: "https://animeflux-shingeki-no-kyojin.pages.dev/", img: "https://animekai.to/assets/uploads/37585a39fe8c8d8fafaa2c7bfbf5374ecac859ea6a0886b7dc.png", year: "2013", type: "TV", rating: "R" },
    "Demon Slayer: Kimetsu no Yaiba": { link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-arc.pages.dev/", img: "https://static1.animekai.to/70/i/5/79/67664a9bdad80@300.jpg", year: "2019", type: "TV", rating: "PG-R" },
    "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-mugen-train-arc.pages.dev/", img: "https://static1.animekai.to/78/i/0/44/67664a81b5dd4@300.jpg", year: "2021", type: "Movie", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-entertainment-arc.pages.dev/", img: "https://static1.animekai.to/d3/i/e/9c/67664a00ed86e@300.jpg", year: "2021", type: "TV", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc.pages.dev/", img: "https://static1.animekai.to/28/i/d/60/67664938b51c4@300.jpg", year: "2023", type: "TV", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-hashira-training-arc.pages.dev/", img: "https://static1.animekai.to/d1/i/d/30/67664a1707993@300.jpg", year: "2024", type: "TV", rating: "PG-R"},
    "Hunter x Hunter (2011)": {link:"", img: "https://animekai.to/assets/uploads/37585a39fe8c8d8fafaa2c7bfbf5374ecac859ea6a0886b7dc.png", year: "2011", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen S1": {link:"https://animeflux-jujutsukaisen-s01.pages.dev/", img: "https://static1.animekai.to/43/i/f/d2/67664a638ddda@100.jpg", year: "2020", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen S2": {link:"https://animeflux-jujutsukaisen-s02.pages.dev/", img: "https://static1.animekai.to/44/i/9/b8/6766493099d89@100.jpg", year: "2021", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen 0": {link:"https://animeflux-jujutsukaisen-0.pages.dev/", img: "https://static1.animekai.to/8d/i/d/0f/67664a6c4ae80@100.jpg", year: "2022", type: "TV", rating: "PG-13"},
    "Puka Puka Juju": {link:"https://animeflux-puka-puka-juju.pages.dev/", img: "https://static1.animekai.to/a5/i/b/76/67664a0d0aeb9@100.jpg", year: "2023", type: "TV", rating: "PG-13"},
  };

  const [currentVideo, setCurrentVideo] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedserver, setSelectedServer] = useState([]);
  const [toggle, setToggle] = useState();
 

  
  // Set default video and server on initial render
  React.useEffect(() => {
    const defaultVideo = videos.find(video => video.id === 1);
    setCurrentVideo(defaultVideo.HDSUB1);
    setSelectedServer("HDSUB1");
    setToggle(1);
  }, []);


  
  const movies = Object.keys(searchLinks);


  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * ranvideo.length);
    window.location.href = ranvideo[randomIndex].link;
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length > 0) {
      const results = movies.filter((movie) =>
        movie.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(results);
    } else {
      setFilteredMovies([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchLinks[searchQuery]) {
      window.location.href = searchLinks[searchQuery];
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
        // Disable F12, Ctrl+Shift+I, Ctrl+U
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
        }
    };

    const handleContextMenu = (e) => {
        e.preventDefault(); // Disable right-click context menu
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

    const handleEpisodetoggle = (id) => {
    setToggle((prev) => {
      if (prev === id) {
        return id; // Prevent toggling out
      } else {
        const selectedVideo = videos.find(video => video.id === id);
        if (selectedserver === "HDSUB1") {
          setCurrentVideo(selectedVideo.HDSUB1);
        } else if (selectedserver === "HDSUB2") {
          setCurrentVideo(selectedVideo.HDSUB2);
        } else if (selectedserver === "HD1") {
          setCurrentVideo(selectedVideo.HD1);
        } else if (selectedserver === "HD2") {
          setCurrentVideo(selectedVideo.HD2);
        } 
        return id;
      }
    });
  };
  const nextEpisodeRelease = '2025-04-28T20:30:00';


  return (
    
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      
    <nav className="bg-gray-900 p-4 flex items-center justify-between sticky top-0 z-10 shadow-lg">
      <a href="/">
      <span className="text-orange-500 text-2xl font-bold">Anime Flux</span>
      </a>

      <div className="relative w-full max-w-md mx-auto">
        <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden bg-white p-2">
          <FaSearch className="text-gray-500 ml-2" />
          <input
            type="text"
            placeholder="Search for a show..."
            className="w-full px-3 py-2 outline-none text-black"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {filteredMovies.length > 0 && (
          <ul className="absolute w-full bg-gray-800 border border-gray-600 mt-1 rounded-lg shadow-lg overflow-hidden">
            {filteredMovies.map((movie, index) => (
              <li
                key={index}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-700"
                onClick={() => window.location.href = searchLinks[movie].link}
                onKeyDown={handleKeyPress}
                
              >
                <img src={searchLinks[movie].img} alt={movie} className="w-12 h-12 rounded-md mr-3" />
                <div>
                  <p className="text-white font-bold">{movie}</p>
                  <p className="text-gray-400 text-sm">{searchLinks[movie].year} • {searchLinks[movie].type} • {searchLinks[movie].rating}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        </div>
        <button onClick={handleRandom} className="text-white text-2xl p-2 rounded-full hover:bg-gray-700 transition">
          <FaRandom />
        </button>
      </nav>

     { /* Main Page Content */}
        <div className="flex flex-col lg:flex-row p-4 gap-4">
            <div className="bg-gray-800 p-4 w-full md:w-1/3 lg:w-1/4 rounded-lg shadow-md">
            <img
          src="https://th.bing.com/th/id/OIP.7n0XeHw5zjwKsj2Uvc3L0wHaKe?cb=iwc&rs=1&pid=ImgDetMain"
          alt="Anime poster"
          className="w-16 md:w-32 lg:w-48"
          style={{ height: "191px", width: "min-content", objectFit: "cover" }}
            />
            <h2 className="text-2xl font-bold mt-2 text-center" style={{ fontSize: "10px" }}></h2>

            <h2 className="text-xl font-bold mb-4">List of episodes:</h2>
            <div className="grid grid-cols-4 gap-2">
          {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => handleEpisodetoggle(video.id)}
            className={`px-4 py-2 rounded-lg text-center ${
              toggle === video.id ? "bg-purple-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
              >
            {video.id}
              </button>
          ))}
            </div>
          </div>
          <div className="flex-1 p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={currentVideo}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="autoplay" 
            allowFullScreen
            style={{ backgroundImage: "url('https://sm.ign.com/t/ign_in/screenshot/default/sword-of-the-demon-hunter_cwvt.1280.jpg')" }}
          ></iframe>
            </div>
            
        {/* Episode Selection UI */}

        {videos.map((video) => (
        toggle === video.id && (
       <div className="mt-6 w-full bg-gray-800 p-4 rounded-lg max-w-lg mx-auto text-center shadow-lg" style={{ maxWidth: "67rem" }}>
       <div className="bg-yellow-400 text-black p-3 rounded-t-lg font-bold">
        <p>You are watching</p>
        <p className="text-lg">Episode {video.id}</p>
        <p className="text-sm mt-1">If the current server doesn't work, please try other servers beside.</p>
      </div>

      <div className="bg-gray-900 p-4 rounded-b-lg text-center">
        <div className="mb-4">
          <p className="text-yellow-400 font-semibold inline-flex items-center">
            <span className="mr-2">🔠 SUB:</span>
            <button
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HDSUB1" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HDSUB1");
                setCurrentVideo(video.HDSUB1);
              }}
            >
              HD-1
            </button>
            <button
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HDSUB2" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HDSUB2");
                setCurrentVideo(video.HDSUB2);
              }}
            >
              HD-2
            </button>
          </p>
          <div className="mt-4">
          <p className="text-yellow-300 font-semibold inline-flex items-center">
            <span className="mr-2">🎤 DUB:</span>
            <button
            
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HD1" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HD1");
                setCurrentVideo(video.HD1);
              }}
            >
              HD-1
            </button>
            <button
            
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HD2" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HD2");
                setCurrentVideo(video.HD2);
              }}
            >
              HD-2
            </button>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
))}
      <div className="p-4 mt-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Seasons</h2>
        <div className="flex gap-4 overflow-x-auto">
          <a href="https://animeflux-sword-of-the-demon-hunter"><button>
          <div className="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-48"
          style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.7n0XeHw5zjwKsj2Uvc3L0wHaKe?cb=iwc&rs=1&pid=ImgDetMain')", backgroundSize: "cover" }}>
            <h3 className="font-bold">Season 1</h3>
            <span className="bg-red-600 px-2 py-1 rounded text-sm">? Eps</span>
          </div>
          </button>
          </a>          
        </div>
         {/* Dynamic Countdown UI */}
      <div style={{
        background: 'linear-gradient(to right, #1f4037, #99f2c8)',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
        fontFamily: 'sans-serif'
      }}>
        <span>
          📢 The next episode is expected to be released on <strong>{new Date(nextEpisodeRelease).toLocaleString()}</strong>
        </span>
        <Countdown targetDateTime={nextEpisodeRelease} />
      </div>     
      </div>
     </div>
     </div>
      
      {/* Footer */}
      <footer className="mt-8 p-4 bg-black text-gray-400 text-center">
        <p>Copyright ©AnimeFlux. All Rights Reserved</p>
        <p className="text-sm mt-1">
          This site does not store any files on its server. All contents are provided by non-affiliated third parties.
        </p>
        <p className="mt-2">Socials: <span className="text-white">🐦</span></p>

      </footer>
      </div>

    
  );
};

export default AnimePage;

