import songs from './songs.json';
function SideBar({search, setSearch, filtered, selected, setSelected}){
  return (
     <div className="sidebar">
        <div className="sidebar-header">
          <div className="app-title">♪ ChordBook</div>
          <div className="song-count">Total: ({songs.songs.length})</div>
          <input
          className="search"
          placeholder="Search songs or artists..."
          value={search}
          onChange={e => setSearch(e.target.value)} 
          />
        </div>

        <div className="song-list">
          {filtered.length === 0 ? (
            <div className="no-results">No songs found  🎵</div>
          ):(
            filtered.map(song => (
              <div key={song.id}
              className={`song-item ${selected?.id ===song.id? 'active' : ''}`}
              onClick={() => setSelected(song)}>
                <div className="song-name">{song.title}</div>
                <div className="song-artist">{song.artist}</div>
                {song.key && <div className="song-key">Key: {song.key}</div>}
              </div>
            ))
          )}
        </div>
      </div>
  )
}

export default SideBar;