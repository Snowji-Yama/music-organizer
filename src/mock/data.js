export const GENRES = [
  {
    id: 'rock',
    name: 'Rock'
  },
  {
    id: 'pop',
    name: 'Pop'
  },
  {
    id: 'jazz',
    name: 'Jazz'
  },
  {
    id: 'soul',
    name: 'Soul'
  },
  {
    id: 'rap',
    name: 'Rap'
  },
  {
    id: 'folk',
    name: 'Folk'
  },
  {
    id: 'punk',
    name: 'Punk'
  },
  {
    id: 'metal',
    name: 'Metal'
  },
  {
    id: 'hiphop',
    name: 'Hiphop'
  },
  {
    id: 'rnb',
    name: 'RNB'
  },
  {
    id: 'blues',
    name: 'Blues'
  },
  {
    id: 'country',
    name: 'Country'
  },
  {
    id: 'funk',
    name: 'Funk'
  },
  {
    id: 'reggae',
    name: 'Reggae'
  },
  {
    id: 'electro',
    name: 'Electro'
  }
]

export const SUB_GENRES = [
  {
    id: 'rocknroll',
    name: 'Rock\'n\'roll',
    parentGenreId: 'rock'
  },
  {
    id: 'bluesrock',
    name: 'Blues Rock',
    parentGenreId: 'rock'
  },
  {
    id: 'hardrock',
    name: 'Hard Rock',
    parentGenreId: 'rock'
  },
  {
    id: 'neworleans',
    name: 'New Orleans',
    parentGenreId: 'jazz'
  },
  {
    id: 'swing',
    name: 'Swing',
    parentGenreId: 'jazz'
  },
  {
    id: 'freejazz',
    name: 'Free Jazz',
    parentGenreId: 'jazz'
  },
  {
    id: 'acidjazz',
    name: 'Acid Jazz',
    parentGenreId: 'jazz'
  },
  {
    id: 'trashmetal',
    name: 'Trash Metal',
    parentGenreId: 'metal'
  },
  {
    id: 'doommetal',
    name: 'Doom Metal',
    parentGenreId: 'metal'
  },
  {
    id: 'deathmetal',
    name: 'Death Metal',
    parentGenreId: 'metal'
  },
  {
    id: 'metalcore',
    name: 'Metal Core',
    parentGenreId: 'metal'
  }
]

export const ARTISTS = [
  {
    id: 'gojira',
    name: 'Gojira',
    genres: ['metal', 'rock'],
    subGenres: ['deathmetal']
  },
  {
    id: 'blacksabbath',
    name: 'Black Sabbath',
    genres: ['metal'],
    subGenres: ['doommetal']
  },
  {
    id: 'bobmarley',
    name: 'Bob Marley',
    genres: ['reggae'],
    subGenres: []
  },
  {
    id: 'elvispresley',
    name: 'Elvis Presley',
    genres: [],
    subGenres: ['rocknroll']
  }
]
