# The agent builds a game from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/thanhlamvd/makefun-post-x-agent-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt, one game, one short video. My AI agent (Muse) built a tiny
browser game from a single prompt and I watched it happen — this video is
the proof, and the game is in this repo.

## The game: NEON SNAKE

`game.html` — a single-file HTML5 canvas game, no dependencies, no network.

- One prompt that built it: *"Build me a tiny browser game: a neon snake
  that eats glowing orbs — arrow keys to steer, score counter, game over,
  press R to restart. Make it juicy."*
- Steer with arrow keys / WASD. Eat the magenta orbs (+10), catch a gold
  orb every 5th eat (+50). Speed rises as you eat. Walls and your own tail
  end the run. Press **R** to restart, **Shift+D** toggles the autopilot
  demo mode (the game steers itself — used for the video's gameplay shots).
- Open `game.html` in any browser and play. No build step, no server.

## The video

`video.mp4` lives beside this repo in the submission folder (kept out of the
repo so the GitHub push stays small). 31.9 s, 1920×1080, H.264, silent.

How it was made, honestly:

1. **The prompt (0–4 s)** — the real prompt, typed on screen.
2. **The agent working (4–10 s)** — the real first 26 lines of `game.html`,
   typed out in an editor window, with the real check result underneath
   (game running in Chromium, 0 console errors).
3. **The finished game (10–30 s)** — real footage: the game running in
   headless Chromium, recorded by Playwright. The snake is steered by the
   game's own autopilot (Shift+D); every pixel, score and orb is the real
   game — score climbs 0 → 130 in the recorded run. Ends on the game
   running with the call to come build on make.fun.
4. **End card (last 2.5 s + 1.5 s hold)** — make.fun's referral end card
   from the press pack (`makefun-card-16x9-transparent.webm`, used as-is,
   sha256-verified against the manifest), laid over the clip with the
   blur/desaturate ease-in, with my referral code `814bp22d` typed into
   its field.

No footage is faked: nothing in the video shows a game that did not run.

## The entry

- `main.ts` (Node 22, stdlib only) copies `POST.json` to the output dir.
- `POST.json` holds the X post address (the published post on @Lisa_Nguyen1).
- `video.mp4` is posted natively on X from the public account
  [@Lisa_Nguyen1](https://x.com/Lisa_Nguyen1).

Bounty: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
