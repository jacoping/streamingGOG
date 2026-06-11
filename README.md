# streamingGOG

A minimal legacy-compatible HTML video streaming setup.

## Structure

```
index.html          — animated intro page, redirects to videos/play.html after N seconds
settings.js         — shared configuration variables
updatelist.py       — script to regenerate the video playlist
videos/
  play.html         — video player page
  videolist.js      — auto-generated playlist (do not edit manually)
  *.mp4             — your video files (excluded from git)
```

## Adding videos

1. Drop any `.mp4`, `.mov`, `.avi`, `.webm` or `.ogg` files into the `videos/` folder (or any subfolder inside it).
2. Run the update script from the project root:

```
python updatelist.py
```

That's it. The player will pick up the new list on next page load.

## Configuration

Open `settings.js` to adjust:

| Variable | Description | Default |
|---|---|---|
| `REDIRECT_THRESHOLD` | Probability of redirecting to the intro after each video ends. `0` = always redirect, `1` = never redirect. | `0.4` |
| `REDIRECT_SECONDS` | Seconds the intro page plays before returning to the player. | `5` |

## Compatibility

- HTML 4.01 / CSS 2.1
- JavaScript ES3 (no classList, no arrow functions, no let/const)
- Tested on Safari 5.1
