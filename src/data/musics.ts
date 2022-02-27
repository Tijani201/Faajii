export type MusicType = {
  id: number
  title: string
  country: string
  genre: string
  artist: string
}

export const musics: MusicType[] = [
  {
    id: 1,
    title: 'Zazu zeh',
    country: 'Naija',
    genre: 'Hip-hop',
    artist: 'Portable'
  },
  {
    id: 2,
    title: 'Reality',
    country: 'Nigeria',
    genre: 'Fuji',
    artist: 'Ayinde Barrister'
  },
  {
    id: 3,
    title: 'Go easy on me',
    country: 'British',
    genre: 'RnB',
    artist: 'Adele'
  },
  {
    id: 4,
    title: 'Confession',
    country: 'American',
    genre: 'Blues',
    artist: 'Usher Raymond'
  },
  {
    id: 5,
    title: 'Despasito',
    country: 'Mexican',
    genre: 'Spanish Hiphop',
    artist: 'Daddy Yankee'
  }
]
