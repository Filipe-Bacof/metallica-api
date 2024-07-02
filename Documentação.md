# Documentação Metallica API

## URL Base

```
https://metallica-api.onrender.com
```

## Endpoints

- Verifique o arquivo `Metallica API.postman_collection.json`, ele está com todas as chamadas para a API 🔥

### Band Members

#### Get All Members:

- Retorna todos os membros sem paginação.
- Endpoint: `/member`

```json
[
  {
    "id": 1,
    "name": "James Alan Hetfield",
    "artisticName": "James Hetfield",
    "birthDate": "1963-08-03T03:00:00.000Z",
    "deathDate": null,
    "memberSince": "1982-03-14T03:00:00.000Z",
    "bandDepartureDate": null,
    "instagram": "https://www.instagram.com/papa.het_/"
  }
  // OTHER MEMBERS
]
```

#### Get Member By Id:

- Retorna um membro apenas.
- Endpoint: `/member/id/6`

```json
{
  "id": 6,
  "name": "Clifford Lee Burton",
  "artisticName": "Cliff Burton",
  "birthDate": "1962-02-10T03:00:00.000Z",
  "deathDate": "1986-09-27T03:00:00.000Z",
  "memberSince": "1984-12-14T03:00:00.000Z",
  "bandDepartureDate": "1986-09-26T03:00:00.000Z",
  "instagram": "https://www.instagram.com/explore/locations/257546413/cliff-burton-memorial/",
  "albums": [
    {
      "album": {
        "id": 1,
        "title": "Kill 'Em All",
        "albumCover": "https://i.scdn.co/image/ab67616d0000b27320292e6cce666a69ba5a86fb",
        "spotifyURL": "https://open.spotify.com/intl-pt/album/1aGapZGHBovnmhwqVNI6JZ",
        "releaseDate": "1983-07-25T03:00:00.000Z",
        "tracks": [
          {
            "id": 1,
            "discTrack": "Track 1",
            "title": "Hit the Lights",
            "duration": 255,
            "spotifyURL": "https://open.spotify.com/intl-pt/track/4hh0IO5OHTigfnPTpDleL7",
            "officialMusicVideo": "https://www.youtube.com/watch?v=uFSN39nS9qA"
          }
          // OTHER TRACKS
        ]
      }
    }
    // OTHER ALBUNS
  ]
}
```

#### Get Members By Name:

- Retorna os membros que possuirem o nome pesquisado.
- Endpoint: `/member/name/lars`

```json
{
  "id": 2,
  "name": "Sir Lars Ulrich",
  "artisticName": "Lars Ulrich",
  "birthDate": "1963-12-26T02:00:00.000Z",
  "deathDate": null,
  "memberSince": "1982-03-14T03:00:00.000Z",
  "bandDepartureDate": null,
  "instagram": "https://www.instagram.com/larsulrich/",
  "albums": [
    {
      "album": {
        "id": 1,
        "title": "Kill 'Em All",
        "albumCover": "https://i.scdn.co/image/ab67616d0000b27320292e6cce666a69ba5a86fb",
        "spotifyURL": "https://open.spotify.com/intl-pt/album/1aGapZGHBovnmhwqVNI6JZ",
        "releaseDate": "1983-07-25T03:00:00.000Z",
        "tracks": [
          {
            "id": 1,
            "discTrack": "Track 1",
            "title": "Hit the Lights",
            "duration": 255,
            "spotifyURL": "https://open.spotify.com/intl-pt/track/4hh0IO5OHTigfnPTpDleL7",
            "officialMusicVideo": "https://www.youtube.com/watch?v=uFSN39nS9qA"
          }
          // OTHER TRACKS
        ]
      }
    }
    // OTHER ALBUNS
  ]
}
```

### Albuns

#### Get All Albuns:

- Possui paginação, caso não informada a página, por padrão retorna a primeira.
- Retorna todos os albuns.
- Endpoint: `/album`

```json
{
  "navigation": {
    "prev": null,
    "next": "baseurl/album?page=2"
  },
  "data": [
    {
      "id": 1,
      "title": "Kill 'Em All",
      "albumCover": "https://i.scdn.co/image/ab67616d0000b27320292e6cce666a69ba5a86fb",
      "spotifyURL": "https://open.spotify.com/intl-pt/album/1aGapZGHBovnmhwqVNI6JZ",
      "releaseDate": "1983-07-25T03:00:00.000Z",
      "tracks": [
        {
          "id": 1,
          "discTrack": "Track 1",
          "title": "Hit the Lights"
        }
        // OTHER TRACKS
      ],
      "composers": [
        {
          "bandMemberId": 1,
          "albumId": 1,
          "bandMember": {
            "id": 1,
            "name": "James Alan Hetfield"
          }
        }
        // OTHER COMPOSERS
      ]
    }
    // OTHER ALBUNS
  ]
}
```

#### Get Album by ID:

- Retorna um album apenas.
- Endpoint: `/album/id/5`

```json
{
  "id": 5,
  "title": "Metallica Black Album",
  "albumCover": "https://i.scdn.co/image/ab67616d0000b2731f9edf15e43f4c2f4938b869",
  "spotifyURL": "https://open.spotify.com/intl-pt/album/3dck2tBxGfxj9m3CguDgjb",
  "releaseDate": "1991-08-12T03:00:00.000Z",
  "tracks": [
    {
      "id": 36,
      "albumId": 5,
      "discTrack": "Track 1",
      "title": "Enter Sandman",
      "duration": 331,
      "lyrics": "Say your prayers, little one, don't forget, my son...", // COMPLETE LYRICS 👍
      "spotifyURL": "https://open.spotify.com/intl-pt/track/2T5q7qhJVN4m2hMSIAsOlC",
      "officialMusicVideo": "https://www.youtube.com/watch?v=CD-E-LDc384"
    }
    // OTHER TRACKS
  ],
  "composers": [
    {
      "bandMemberId": 1,
      "albumId": 5,
      "bandMember": {
        "id": 1,
        "name": "James Alan Hetfield",
        "artisticName": "James Hetfield",
        "birthDate": "1963-08-03T03:00:00.000Z",
        "deathDate": null,
        "memberSince": "1982-03-14T03:00:00.000Z",
        "bandDepartureDate": null,
        "instagram": "https://www.instagram.com/papa.het_/"
      }
    }
    // OTHER COMPOSERS
  ]
}
```

#### Get Albuns by Name:

- Retorna os albuns que possuirem o nome pesquisado.
- Endpoint: `/album/title/puppets`

```json
[
  {
    "id": 3,
    "title": "Master of Puppets",
    "albumCover": "https://i.scdn.co/image/ab67616d0000b273668e3aca3167e6e569a9aa20",
    "spotifyURL": "https://open.spotify.com/intl-pt/album/2Lq2qX3hYhiuPckC8Flj21",
    "releaseDate": "1986-03-03T02:00:00.000Z",
    "tracks": [
      {
        "id": 19,
        "discTrack": "Track 1",
        "title": "Battery"
      }
      // OTHER TRACKS
    ],
    "composers": [
      {
        "bandMemberId": 1,
        "albumId": 3,
        "bandMember": {
          "id": 1,
          "name": "James Alan Hetfield"
        }
      }
      // OTHER COMPOSERS
    ]
  }
  // OTHER ALBUNS (search for "Load" and "Reload" will come along with it, for example)
]
```

### Songs

#### Get All Songs:

- Possui paginação, caso não informada a página, por padrão retorna a primeira.
- Retorna todas as músicas.
- Endpoint: `/song`

```json
{
  "navigation": {
    "prev": null,
    "next": "baseurl/song?page=2"
  },
  "data": [
    {
      "id": 1,
      "title": "Hit the Lights",
      "discTrack": "Track 1",
      "duration": 255,
      "spotifyURL": "https://open.spotify.com/intl-pt/track/4hh0IO5OHTigfnPTpDleL7",
      "officialMusicVideo": "https://www.youtube.com/watch?v=uFSN39nS9qA",
      "album": {
        "title": "Kill 'Em All"
      }
    }
    // OTHER SONGS
    // ALL THE SONGS, FROM KILL EM ALL TO 72 SEASONS
  ]
}
```

#### Get Song by ID:

- Retorna uma música apenas.
- Endpoint: `/song/id/39`

```json
{
  "id": 39,
  "albumId": 5,
  "discTrack": "Track 4",
  "title": "The Unforgiven",
  "duration": 387,
  "lyrics": "New blood joins this Earth...", // COMPLETE LYRICS 👍
  "spotifyURL": "https://open.spotify.com/intl-pt/track/5lqyqPU3JkpCbUbLmTVQPW",
  "officialMusicVideo": "https://www.youtube.com/watch?v=Q6dGQ_FmjxE",
  "album": {
    "id": 5,
    "title": "Metallica Black Album",
    "albumCover": "https://i.scdn.co/image/ab67616d0000b2731f9edf15e43f4c2f4938b869",
    "spotifyURL": "https://open.spotify.com/intl-pt/album/3dck2tBxGfxj9m3CguDgjb",
    "releaseDate": "1991-08-12T03:00:00.000Z"
  },
  "composers": [
    {
      "bandMemberId": 1,
      "songId": 39,
      "bandMember": {
        "id": 1,
        "name": "James Alan Hetfield",
        "artisticName": "James Hetfield",
        "birthDate": "1963-08-03T03:00:00.000Z",
        "deathDate": null,
        "memberSince": "1982-03-14T03:00:00.000Z",
        "bandDepartureDate": null,
        "instagram": "https://www.instagram.com/papa.het_/"
      }
    }
    // OTHER COMPOSERS
  ]
}
```

#### Get Songs by Name:

- Retorna as músicas que possuirem o nome pesquisado.
- Endpoint: `/song/title/harvester`

```json
[
  {
    "id": 32,
    "albumId": 4,
    "discTrack": "Track 6",
    "title": "Harvester of Sorrow",
    "duration": 346,
    "lyrics": "My life suffocates...", // COMPLETE LYRICS 👍
    "spotifyURL": "https://open.spotify.com/intl-pt/track/6qgYe6noMKsElSoPg9yS91",
    "officialMusicVideo": "https://www.youtube.com/watch?v=biomxj559Lo",
    "album": {
      "id": 4,
      "title": "...And Justice for All",
      "albumCover": "https://i.scdn.co/image/ab67616d0000b2737c05e69390ab7c628a83cee7",
      "spotifyURL": "https://open.spotify.com/intl-pt/album/6jZ1z25PyF4Yd3kHxt9rl1",
      "releaseDate": "1988-09-07T03:00:00.000Z"
    },
    "composers": [
      {
        "bandMemberId": 1,
        "songId": 32,
        "bandMember": {
          "id": 1,
          "name": "James Alan Hetfield",
          "artisticName": "James Hetfield",
          "birthDate": "1963-08-03T03:00:00.000Z",
          "deathDate": null,
          "memberSince": "1982-03-14T03:00:00.000Z",
          "bandDepartureDate": null,
          "instagram": "https://www.instagram.com/papa.het_/"
        }
      }
      // OTHER COMPOSERS
    ]
  }
]
```

#### Get Songs by Album Title:

- Retorna as músicas dos albuns que possuirem o nome pesquisado.
- Sem letras de musicas.
- Endpoint: `/song/album/magnetic`

```json
[
  {
    "id": 10,
    "title": "Death Magnetic",
    "albumCover": "https://i.scdn.co/image/ab67616d0000b273dfe44d577f07e08564ec73ed",
    "spotifyURL": "https://open.spotify.com/intl-pt/album/3bK58rVcWBh3V3vxMLzi0V",
    "releaseDate": "2008-09-12T03:00:00.000Z",
    "tracks": [
      {
        "id": 113,
        "discTrack": "Track 1",
        "title": "That Was Just Your Life"
      }
      // OTHER TRACKS
    ],
    "composers": [
      {
        "bandMemberId": 1,
        "albumId": 10,
        "bandMember": {
          "id": 1,
          "name": "James Alan Hetfield"
        }
      }
      // OTHER COMPOSERS
    ]
  },
  {
    "id": 12,
    "title": "Beyond Magnetic",
    "albumCover": "https://i.scdn.co/image/ab67616d0000b273702cd0315b57c5c25690bc58",
    "spotifyURL": "https://open.spotify.com/intl-pt/album/6umaXKrRVHRgUH7nsxM9eg",
    "releaseDate": "2011-12-13T02:00:00.000Z",
    "tracks": [
      {
        "id": 133,
        "discTrack": "Track 1",
        "title": "Hate Train"
      }
      // OTHER TRACKS
    ],
    "composers": [
      {
        "bandMemberId": 1,
        "albumId": 12,
        "bandMember": {
          "id": 1,
          "name": "James Alan Hetfield"
        }
      }
      // OTHER COMPOSERS
    ]
  }
]
```

#### Get a Random Song:

- Retorna uma música aleatória, apenas uma música por chamada.
- Endpoint: `/song/random`

```json
{
  "id": 64,
  "albumId": 7,
  "discTrack": "Track 3",
  "title": "Devil's Dance",
  "duration": 318,
  "lyrics": "Yeah...", // COMPLETE LYRICS 👍
  "spotifyURL": "https://open.spotify.com/intl-pt/track/3IHyDrQOASm7R0WBamMJO8",
  "officialMusicVideo": "https://www.youtube.com/watch?v=_cYyl2keBjk",
  "album": {
    "id": 7,
    "title": "Reload",
    "albumCover": "https://i.scdn.co/image/ab67616d0000b273a49eff6d64cafc2551553380",
    "spotifyURL": "https://open.spotify.com/intl-pt/album/0Ip2GlQPoAIgdkqCO2YkMa",
    "releaseDate": "1997-11-18T02:00:00.000Z"
  },
  "composers": [
    {
      "bandMemberId": 1,
      "songId": 64,
      "bandMember": {
        "id": 1,
        "name": "James Alan Hetfield",
        "artisticName": "James Hetfield",
        "birthDate": "1963-08-03T03:00:00.000Z",
        "deathDate": null,
        "memberSince": "1982-03-14T03:00:00.000Z",
        "bandDepartureDate": null,
        "instagram": "https://www.instagram.com/papa.het_/"
      }
    }
    // OTHER COMPOSERS
  ]
}
```
