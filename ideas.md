# Frontend

## Menu Drawer

- Home (new / featured / genres & mood / discover)
- Favorites
- Artistes
- Albums
- Paylist

## 🤔

- use tags for genres and slider from chill to funky for mood


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
│   ├── release_date: String
│   ├── label: String
│   ├── genre: Array
│   ├── mood: Array
│   └── track_list: Array
├── Playlist
│   ├── user_id: Id
│   ├── title: String
│   ├── creation_date: String
│   ├── last_update_date: String
│   └── track_list: Array
└── Track
    ├── artist_id: Array
    ├── album_id: Id
    ├── title: Id
    ├── duration: Id
    ├── note: Number
    └── listening_count: Number (might use sperate Analitics/Statistics model ?)
```