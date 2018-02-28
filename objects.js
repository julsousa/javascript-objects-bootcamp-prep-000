var playlist = { 
  pink: 'who knew'
}

function updatePlaylist(playlist, aristName, songTitle) {
  playlist[aristName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, aristName) {
  delete playlist.aristName
  return playlist
}