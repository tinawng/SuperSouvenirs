# Frontend

## Menu Drawer

- Home (new / featured / genres & mood / discover)
- Favorites
- Artistes
- Albums
- Paylist

## 🤔

- use tags for genres and slider from chill to funky for mood
- track notation per album or playlist. global notation is non sens, context is needed.
- global / User playlist


# Backend

## 🤔

- Use table for featured / new albums ?
- Use table for genre & mood listing ?
- Use table for Analitics/Statistics ?

## Models

```bash
├── Artist
│   ├── name: String
│   └── cover: String
├── Album
│   ├── artist_id: Array
│   ├── title: String
│   ├── cover: String
│   ├── release_year: Number
│   ├── label: String
│   ├── genre: Array
│   ├── mood: Number
│   ├── track_list: Array
│   └── track_note: Array
├── Playlist
│   ├── user_id: Id
│   ├── title: String
│   ├── creation_date: String
│   ├── last_update_date: String
│   ├── track_list: Array
│   └── track_notes: Array
└── Track
    ├── title: String
    ├── artist_id: Array
    ├── album_id: Id
    ├── duration: Number
    ├── metadata: Object (only for flac, the first 42bits of the file (& more?))
    └── listening_count: Number (might use sperate Analitics/Statistics model ?)
```