# GTA 6 meme on X — agent notes

Entry for make.fun bounty `gta6-meme-x-01` ("Post a GTA 6 meme on X", $500
over 50 places, judged by an AI judge comparing posts two at a time).

## What this entry is

- One meme picture: GTA "WASTED" screen parodied as "PAID", make.fun's ghost
  mascot in a Vice City sunset street, caption "GTA 6 IS OUT. MY AGENT GOT
  PAID." plus "make.fun" in the picture.
- One X post from a public account, carrying the bounty link, @makefunai,
  play code `makefun-pylon-grotto-locket`, and the earn-money pitch.
- `POST.json` at the repository root names the post:
  `{"url": "https://x.com/dniz3131/status/2123672019929866482"}`.

## What main.ts does

Nothing but copy `POST.json` to the output directory. No network, no clock,
no files outside the repository — the two runs write the same bytes. The
house reads the post itself from X and builds the dossier the judge sees.

## Run it

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

Check `out/POST.json` is byte for byte the repository's `POST.json`.
