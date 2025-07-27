const team = {
  _players: [
    {firstName: 'Christian', lastName: 'Pulisic', age: 26},
    {firstName: 'Matthew', lastName: 'Turner', age: 31},
    {firstName: 'Weston', lastName: 'McKennie', age: 26},
  ],
  _games: [
    {opponent: 'Mexico', teamPoints: 1, opponentPoints: 2},
    {opponent: 'Costa Rica', teamPoints: 4, opponentPoints: 3},
    {opponent: 'Saudi Arabia', teamPoints: 1, opponentPoints: 0},
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    // let player allows for creation of new item within the object that can be later added with push or another method to the array.
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player) //adds player to end of ._players
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
}

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Titans', 100, 89);
console.log(team.games);