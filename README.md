# What's Real Oklahoma

A fact-first voter site for Oklahoma's November 3, 2026 election. No framework, no build
step. Open `index.html` in a browser and it works. Every number renders from two data
files, so updating the site means editing data, not markup.

```
index.html            page structure and copy
assets/styles.css     design tokens, light and dark themes, layout
assets/app.js         rendering, priority picker, charts, countdown, voting plan
data/facts.js         THE FACT LEDGER. Every stat, with tier, source, date.
data/candidates.js    races, candidates, positions (vote / statement / none), state questions, H.R. 1 panel
data/record.js        THE RECORD: documented conduct (convictions, audits, rulings, votes), outcome rankings, direct-vote history
data/votes.js         OFFICIAL ROLL CALLS for the state bills behind the record, plus current House/Senate rosters by district
RESEARCH.md           the research behind the site, with sources and caveats
```

## Where it lives

- Live site (Vercel): https://whatsreal-oklahoma.vercel.app
- Mirror (GitHub Pages): https://soonertoucan.github.io/whatsreal-oklahoma/
- Source and data: https://github.com/soonertoucan/whatsreal-oklahoma

To publish a change: edit, commit, `git push`, then `npx vercel deploy --prod --yes` from this folder.
GitHub Pages rebuilds from `main` on its own within a few minutes.

## Deploy elsewhere

Any static host works. Fastest options:

- **Vercel:** `npx vercel` from this folder, accept defaults. Or push to GitHub and import.
- **Netlify:** drag the folder onto app.netlify.com/drop.
- **GitHub Pages:** push to a repo, Settings > Pages > deploy from `main` root.

After deploying, set `SITE_URL` near the top of `assets/app.js` so copied fact snippets
link back to the site, and set `CONTACT` if you want a corrections address shown.

## Updating facts (do this at least weekly until the election)

1. Open `data/facts.js`. Each entry looks like:
   ```js
   { id: "gas", topic: "cost", priorities: ["prices","farm"], tier: "record",
     stat: "$4.28", headline: "...", detail: "...",
     response: "...",            // optional: the other side's answer
     source: { name: "...", date: "...", url: "https://..." } }
   ```
2. `tier` must be one of `record`, `analysis`, `campaign`, `report`. Be honest about it.
   The whole credibility of the site rests on this label being right.
3. `topic` must be a key in `WR_TOPICS`; `priorities` must be keys in `WR_PRIORITIES`.
4. Update `WR_CHECKED` to the date you verified things.
5. Run the check: `node --check data/facts.js && node --check data/candidates.js`.

Candidate positions live in `data/candidates.js`. Use `kind: "vote"` only for a recorded
roll call with a link to the Clerk or the Legislature. Use `kind: "none"` when you looked
and found nothing, rather than leaving the candidate out. Several down-ballot Democrats
(Wade, Byrd, Jacob) and all independents currently have `none` because no verified
platform was found by October 25. If you find one on their campaign sites, add it.

## Election-date logic

`assets/app.js` holds the dates (early voting Oct 28–31, hand-delivered absentee by Nov 2,
polls 7 a.m.–7 p.m. Nov 3) in Oklahoma time, including the switch from CDT to CST on
November 1. After the polls close, the hero switches to a "next election" message. For a
future election, change those constants and the rows in `renderDates()`.

## What the site deliberately does not do

- It keeps evidence and opinion in separate rooms. Every section is sourced record except
  the one headed "Our conclusion," which is labeled as the site's opinion and names the
  candidates it favors. If you change the conclusion, keep the label.
- It does not use a single number without a linked source.
- It does not omit the other side's response when one exists.
- It does not collect anything. The voting plan and the picked priorities are saved in
  the reader's own browser only.

## Claims you must keep true

The footer says the site "is not paid for by any candidate, party or committee." If that
ever changes, change the footer the same day. Oklahoma's Ethics Commission rules on
electioneering communications may apply once you spend money promoting the site; check
`ethics.ok.gov` before buying ads.

## Roll calls (data/votes.js)

Each bill lists its final-passage roll call per chamber with names exactly as the
Legislature prints them (surname, plus an initial in parentheses where two members share
a surname). Every list was counted against the official tally. The rosters map district
to member with `aliases`; `{n, from}` means that surname belonged to someone else before
`from`, so older votes are not misattributed. To add a bill: copy the names from the
official `_VOTES.HTM` page linked on the bill's page at oklegislature.gov, then run the
validator in RESEARCH.md section 9 (tally match, no duplicates, no ambiguous aliases).

## Fixing a fact

Change the entry, bump `WR_CHECKED`, redeploy, and note the correction in `RESEARCH.md`
under "Corrections log." Saying what changed is part of the method.
