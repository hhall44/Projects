const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // If value is empty, delete the prop
  if (value === "") {
    delete records[id][prop];
  }
  // If prop isn't tracks and value isn't empty, update/set the prop
  else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  }
  // If prop is tracks and value isn't empty
  else if (prop === "tracks" && value !== "") {
    // If tracks doesn't exist, create empty array
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }
    // Add value to tracks array
    records[id].tracks.push(value);
  }
  
  // Always return the entire records object
  return records;
}
