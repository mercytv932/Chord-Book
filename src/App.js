import {useState} from 'react';

import songs from './songs.json';
import './App.css';

function App(){
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(songs.songs[0]);

  const filtered = songs.songs.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase())||
    s.artist.toLowerCase().includes(search.toLowerCase()) 
  );

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="app-title">♪ ChordBook</div>
          <input
          className="search"
          placeholder="Search songs or artists..."
          value={search}
          onChange={e => setSearch(e.target.value)} 
          />
        </div>

        <div className="song-list">
          {filtered.map(song =>(
            <div key={song.id}
            className={`song-item ${selected?.id ===song.id ? 'active' : ''}`}
            onClick={() => setSelected(song)}
            >
              <div className="song-name">{song.title}</div>
              <div className="song-artist">{song.artist}</div>
              {song.key && <div className="song-key">key: {song.key} </div>}
            </div>
          ))}
        </div>
      </div>

      <div className="main">
        {selected ? (
          <>
          <div className = "main-header">
            <div className="song-title">{selected.title}</div>
            <div className="song-meta">
              <span className="artist-badge">{selected.artist}</span>
              {selected.key && <span className="key-badge">key:{selected.key}</span>}
            </div>
          </div>

          <div className="main-body">
            {selected.sections.map((section, i) =>(
              <div key={i} className="chord-row">
                <div className="section-name">{section.name}</div>
                <div className="chord-text">{section.chords}</div>
              </div>
            ))}
          </div>
          </>
          ): (

          <div className="empty">Select a song</div>
        )}
      </div>
    </div>
  );
}

export default App;