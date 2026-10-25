/* What's Real — Oklahoma Legislature roll calls and rosters.
 *
 * Every roll call below was copied from the Oklahoma Legislature's official vote
 * pages (oklegislature.gov, "SUPPORT DOCUMENTS/votes") on October 25, 2026, and
 * each name list was counted against the official tally. Names are exactly as
 * the Legislature prints them: surname, with a parenthetical initial where two
 * members share a surname. "Mr. Speaker" is how the House records the Speaker's
 * vote; `speaker` says who that was.
 *
 * Rosters are the 60th Legislature as of October 2026 (source: Wikipedia member
 * tables, last edited Oct 4–5, 2026; the official sites would not serve). Each
 * member has `aliases`: the surname strings used on vote pages, with `from` when
 * the same surname belonged to someone else in earlier sessions.
 */
window.WR_BILLS = [
  {
    id: "hb2764", num: "HB 2764", year: 2025,
    title: "Income tax cut, 4.75% to 4.5%, with triggers toward zero",
    what: "Two-thirds of the benefit goes to the top 20% of earners; $21 a year at $25,000.",
    url: "https://www.oklegislature.gov/BillInfo.aspx?Bill=HB2764&Session=2500",
    rolls: [
      { chamber: "house", date: "May 20, 2025", motion: "Third reading, passed 74–19", speaker: "Hilbert", source: "https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/House/HB2764_VOTES.HTM",
        yea: ["Adams","Archer","Banning","Bashore","Blair","Boles","Burns","Caldwell (C)","Caldwell (T)","Cantrell","Chapman","Cornwell","Crosswhite Hader","Culver","Dempsey","Dobrinski","Duel","Eaves","Fetgatter","Ford","Gann","George","Gise","Hall","Harris","Hasenbeck","Hays","Hildebrant","Humphrey","Jenkins","Johns","Kane","Kannady","Kelley","Kendrix","Lawson","Lay","Lepak","Luttrell","Manger","May","Maynard","Miller","Moore","Newton","Olsen","Osburn","Pae","Patzkowsky","Pfeiffer","Roberts","Roe","Shaw","Smith","Sneed","Staires","Stark","Steagall","Sterling","Stinson","Strom","Tedford","Townley","Turner","West (J)","West (K)","West (R)","West (T)","Wilk","Williams","Wolfley","Woolley","Worthen","Mr. Speaker"],
        nay: ["Alonso-Sandoval","Bennett","Blancett","Deck","Dollens","Fugate","Hefner","Lowe (D)","McCane","Menz","Munson","Pittman","Pogemiller","Provenzano","Ranson","Rosecrants","Schreiber","Stewart","Waldron"],
        exc: ["Grego","Hill","Kerbs","Marti","Hardin"] },
      { chamber: "senate", date: "May 22, 2025", motion: "Third reading, passed 34–11", source: "https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/Senate/HB2764_VOTES.HTM",
        yea: ["Alvord","Bergstrom","Bullard","Burns","Coleman","Daniels","Deevers","Frix","Gillespie","Gollihare","Green","Grellner","Guthrie","Hall","Hamilton","Haste","Hines","Jett","Kern","Logan","McIntosh","Murdock","Paxton","Pederson","Prieto","Pugh","Reinhardt","Sacchieri","Seifried","Standridge","Stanley","Stewart","Thompson","Weaver"],
        nay: ["Boren","Brooks","Dossett","Goodwin","Hicks","Howard","Jech","Kirt","Mann","Nice","Rader"],
        exc: ["Rosino","Wingard","Woods"] }
    ]
  },
  {
    id: "sb1027", num: "SB 1027", year: 2025,
    title: "Caps on citizen petition signatures by county; Secretary of State may rewrite the summary",
    what: "Passed after voters used petitions for Medicaid expansion and medical marijuana. Before the state Supreme Court.",
    url: "https://www.oklegislature.gov/BillInfo.aspx?Bill=SB1027&Session=2500",
    rolls: [
      { chamber: "house", date: "May 7, 2025", motion: "Third reading, passed 69–23", speaker: "Hilbert", source: "https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/House/SB1027_VOTES.HTM",
        yea: ["Adams","Archer","Bashore","Blair","Boles","Burns","Caldwell (C)","Caldwell (T)","Cantrell","Chapman","Cornwell","Crosswhite Hader","Culver","Dempsey","Dobrinski","Duel","Eaves","Fetgatter","Ford","Gann","George","Gise","Grego","Hall","Hardin","Hays","Hildebrant","Hill","Humphrey","Jenkins","Kane","Kendrix","Kerbs","Lawson","Lay","Lepak","Luttrell","Manger","Marti","May","Maynard","Miller","Moore","Newton","Olsen","Patzkowsky","Pfeiffer","Roberts","Roe","Shaw","Smith","Sneed","Staires","Stark","Steagall","Sterling","Tedford","Townley","Turner","West (J)","West (K)","West (R)","West (T)","Wilk","Williams","Wolfley","Woolley","Worthen","Mr. Speaker"],
        nay: ["Alonso-Sandoval","Bennett","Blancett","Deck","Dollens","Fugate","Harris","Johns","Kannady","Kelley","McCane","Menz","Munson","Pae","Pittman","Pogemiller","Provenzano","Ranson","Rosecrants","Schreiber","Stewart","Strom","Waldron"],
        exc: ["Banning","Hefner","Osburn","Stinson","Hasenbeck","Lowe (D)"] },
      { chamber: "senate", date: "May 21, 2025", motion: "Fourth reading (final passage after House amendments), passed 39–7", source: "https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/Senate/SB1027_VOTES.HTM",
        yea: ["Alvord","Bergstrom","Bullard","Burns","Coleman","Daniels","Deevers","Frix","Gillespie","Gollihare","Green","Grellner","Guthrie","Hall","Hamilton","Haste","Hines","Howard","Jech","Jett","Kern","Logan","McIntosh","Murdock","Paxton","Pederson","Prieto","Pugh","Rader","Reinhardt","Rosino","Sacchieri","Seifried","Standridge","Stanley","Stewart","Thompson","Weaver","Wingard"],
        nay: ["Boren","Dossett","Goodwin","Hicks","Kirt","Mann","Nice"],
        exc: ["Brooks","Woods"] }
    ]
  },
  {
    id: "sjr50", num: "SJR 50", year: 2026,
    title: "Send Medicaid expansion back to the ballot to move it out of the constitution (House version)",
    what: "Would let the Legislature cut the coverage voters wrote into the constitution in 2020. Stalled; not on the 2026 ballot.",
    url: "https://www.oklegislature.gov/BillInfo.aspx?Bill=SJR50&Session=2600",
    rolls: [
      { chamber: "house", date: "May 7, 2026", motion: "Third reading of the House-amended measure, passed 69–18", speaker: "Hilbert", source: "https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/House/SJR50_VOTES.HTM",
        yea: ["Adams","Banning","Blair","Boles","Caldwell (T)","Cantrell","Chapman","Cornwell","Crosswhite Hader","Culver","Dempsey","Dobrinski","Duel","Eaves","Fetgatter","Gann","George","Gise","Grego","Hall","Hardin","Harris","Hasenbeck","Hays","Hildebrant","Hill","Jenkins","Johns","Kane","Kelley","Kendrix","Lawson","Lay","Lepak","Lowe","Luttrell","Manger","Marti","May","Maynard","Miller","Moore","Newton","Norwood","Olsen","Osburn","Pae","Patzkowsky","Pfeiffer","Roberts","Shaw","Smith","Staires","Stark","Steagall","Sterling","Strom","Townley","Travis","West (J)","West (K)","West (R)","West (T)","Wilk","Williams","Wolfley","Woolley","Worthen","Mr. Speaker"],
        nay: ["Alonso-Sandoval","Archer","Blancett","Clinton","Deck","Dollens","Fugate","Hefner","McCane","Menz","Munson","Pogemiller","Provenzano","Ranson","Rosecrants","Schreiber","Stewart","Timmons"],
        exc: ["Bashore","Caldwell (C)","Ford","Humphrey","Kannady","Kerbs","Roe","Sneed","Stinson","Tedford","Turner","Waldron"] }
    ]
  },
  {
    id: "hb4440", num: "HB 4440", year: 2026,
    title: "Legislative referendum to change Medicaid expansion (earlier vehicle)",
    what: "The same idea as SJR 50, passed by both chambers in different forms. The Senate's vote is the only Senate roll call on removing expansion from the constitution.",
    url: "https://www.oklegislature.gov/BillInfo.aspx?Bill=HB4440&Session=2600",
    rolls: [
      { chamber: "house", date: "Mar 25, 2026", motion: "Third reading, passed 77–20", speaker: "Hilbert", source: "https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/House/HB4440_VOTES.HTM",
        yea: ["Adams","Banning","Bashore","Blair","Boles","Caldwell (C)","Caldwell (T)","Cantrell","Chapman","Cornwell","Crosswhite Hader","Culver","Dempsey","Dobrinski","Duel","Eaves","Fetgatter","Ford","Gann","George","Gise","Grego","Hall","Hardin","Harris","Hasenbeck","Hays","Hildebrant","Hill","Humphrey","Jenkins","Johns","Kane","Kannady","Kelley","Kendrix","Kerbs","Lawson","Lay","Lepak","Lowe","Luttrell","Manger","Marti","May","Maynard","Miller","Moore","Newton","Norwood","Olsen","Osburn","Pae","Patzkowsky","Pfeiffer","Roe","Roberts","Shaw","Smith","Staires","Stark","Steagall","Sterling","Stinson","Strom","Townley","Travis","Turner","West (J)","West (K)","West (T)","Wilk","Williams","Wolfley","Woolley","Worthen","Mr. Speaker"],
        nay: ["Alonso-Sandoval","Archer","Blancett","Clinton","Deck","Dollens","Fugate","Hefner","McCane","Menz","Munson","Pogemiller","Provenzano","Ranson","Rosecrants","Schreiber","Stewart","Timmons","Waldron","West (R)"],
        exc: ["Sneed","Tedford"] },
      { chamber: "senate", date: "Apr 14, 2026", motion: "Third reading, passed 30–8", source: "https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/Senate/HB4440_VOTES.HTM",
        yea: ["Alvord","Bergstrom","Bullard","Coleman","Daniels","Frix","Gillespie","Gollihare","Green","Hall","Hamilton","Haste","Hines","Howard","Jech","Kern","Logan","Murdock","Paxton","Pederson","Pugh","Rader","Reinhardt","Rosino","Seifried","Stanley","Stewart","Thompson","Weaver","Woods"],
        nay: ["Boren","Brooks","Dossett","Goodwin","Hicks","Kirt","Mann","Nice"],
        exc: ["Burns","Deevers","Grellner","Guthrie","Jett","McIntosh","Prieto","Sacchieri","Standridge","Wingard"] }
    ]
  },
  {
    id: "hb1934", num: "HB 1934", year: 2023,
    title: "Created the Parental Choice Tax Credit (private-school tuition credit)",
    what: "$5,000 to $7,500 per student; 92% of recipients were already outside public schools.",
    url: "https://www.oklegislature.gov/BillInfo.aspx?Bill=HB1934&Session=2300",
    rolls: [
      { chamber: "house", date: "May 2, 2023", motion: "Fourth reading (final passage on Senate amendments), passed 61–31", speaker: "McCall", source: "https://www.oklegislature.gov/cf/2023-24%20SUPPORT%20DOCUMENTS/votes/House/HB1934_VOTES.HTM",
        yea: ["Hays","Gann","Martinez","Smith","Baker","George","May","Sneed","Banning","Grego","McBride","Staires","Bashore","Hasenbeck","McDugle","Stark","Boatman","Hilbert","Miller","Steagall","Burns","Hill","ODonnell","Stinson","Caldwell (C)","Kane","Olsen","Tedford","Caldwell (T)","Kannady","Osburn","Townley","Cantrell","Kendrix","Pae","Wallace","Conley","Kerbs","Pfeiffer","West (R)","Crosswhite Hader","Lawson","Pittman","West (T)","Davis","Lepak","Randleman","Williams","Duel","Lowe (D)","Roberts","Wolfley","Echols","Luttrell","Roe","Worthen","Fetgatter","Manger","Sims","Mr. Speaker","Ford"],
        nay: ["Alonso-Sandoval","Dollens","Menz","Sterling","Archer","Fugate","Munson","Strom","Bennett","Goodwin","Newton","Swope","Blancett","Hardin","Patzkowsky","Turner","Boles","Hefner","Provenzano","Vancuren","Culver","Humphrey","Ranson","Waldron","Deck","Johns","Rosecrants","West (J)","Dobrinski","Lowe (J)","Schreiber"],
        exc: ["Cornwell","Maynard","Moore","Talley","Dempsey","McEntire","Nichols","West (K)","Marti"] },
      { chamber: "senate", date: "Apr 27, 2023", motion: "Third reading, passed 36–10", source: "https://www.oklegislature.gov/cf/2023-24%20SUPPORT%20DOCUMENTS/votes/Senate/HB1934_VOTES.HTM",
        yea: ["Alvord","Bergstrom","Bullard","Burns","Coleman","Daniels","Dugger","Garvin","Gollihare","Green","Hall","Hamilton","Haste","Howard","Jett","Kidd","McCortney","Montgomery","Murdock","Newhouse","Paxton","Pederson","Pemberton","Prieto","Pugh","Rader","Rogers","Rosino","Seifried","Standridge","Stanley","Stewart","Thompson, (K)","Thompson, (R)","Treat","Weaver"],
        nay: ["Boren","Brooks","Dossett","Floyd","Hicks","Jech","Kirt","Matthews","Stephens","Young"],
        exc: ["Dahm","Woods"] }
    ]
  },
  {
    id: "hb3705", num: "HB 3705", year: 2026,
    title: "Raised the private-school tax credit cap to $275 million",
    what: "Passed the same session the state added $25 million to cover SNAP paperwork Washington stopped paying for.",
    url: "https://www.oklegislature.gov/BillInfo.aspx?Bill=HB3705&Session=2600",
    rolls: [
      { chamber: "house", date: "Apr 9, 2026", motion: "Third reading, passed 70–19", speaker: "Hilbert", source: "https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/House/HB3705_VOTES.HTM",
        yea: ["Adams","Hall","May","Steagall","Banning","Hardin","Miller","Sterling","Bashore","Harris","Moore","Stinson","Caldwell (C)","Hasenbeck","Newton","Tedford","Caldwell (T)","Hays","Norwood","Townley","Cantrell","Hildebrant","Olsen","Travis","Chapman","Hill","Osburn","Turner","Cornwell","Jenkins","Pae","West (J)","Crosswhite Hader","Kane","Patzkowsky","West (K)","Dobrinski","Kannady","Pfeiffer","West (R)","Duel","Kelley","Roberts","West (T)","Eaves","Kendrix","Roe","Wilk","Fetgatter","Lawson","Shaw","Williams","Ford","Lay","Smith","Wolfley","Gann","Lepak","Sneed","Woolley","George","Lowe","Staires","Worthen","Gise","Manger","Stark","Mr. Speaker","Grego","Marti"],
        nay: ["Archer","Dollens","Munson","Schreiber","Blancett","Fugate","Pogemiller","Strom","Clinton","Johns","Provenzano","Timmons","Culver","McCane","Ranson","Waldron","Deck","Menz","Rosecrants"],
        exc: ["Alonso-Sandoval","Dempsey","Humphrey","Luttrell","Blair","Hefner","Kerbs","Stewart","Boles"], cp: ["Maynard"] },
      { chamber: "senate", date: "Apr 27, 2026", motion: "Third reading, passed 39–9", source: "https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/Senate/HB3705_VOTES.HTM",
        yea: ["Alvord","Green","Logan","Sacchieri","Bergstrom","Grellner","McIntosh","Seifried","Bullard","Guthrie","Murdock","Standridge","Burns","Hall","Paxton","Stanley","Coleman","Hamilton","Pederson","Stewart","Daniels","Haste","Prieto","Thompson","Deevers","Hines","Pugh","Weaver","Frix","Howard","Rader","Wingard","Gillespie","Jett","Reinhardt","Woods","Gollihare","Kern","Rosino"],
        nay: ["Boren","Goodwin","Jech","Mann","Brooks","Hicks","Kirt","Nice","Dossett"],
        exc: [] }
    ]
  },
  {
    id: "sb1050", num: "SB 1050", year: 2021,
    title: "Ratepayer-backed bonds for 2021 winter storm fuel costs (the WES line on your utility bill)",
    what: "Let utilities put $3.2 billion on bonds you repay over 28 years instead of absorbing or litigating the costs.",
    url: "https://www.oklegislature.gov/BillInfo.aspx?Bill=SB1050&Session=2100",
    rolls: [
      { chamber: "house", date: "Apr 20, 2021", motion: "Third reading, passed 78–17", speaker: "McCall", source: "https://www.oklegislature.gov/cf/2021-22%20SUPPORT%20DOCUMENTS/votes/House/SB1050_VOTES.HTM",
        yea: ["Baker","Bashore","Bell","Blancett","Boatman","Boles","Brewer","Burns","Bush","Caldwell (C)","Caldwell (T)","Conley","Cornwell","Cruz","Culver","Davis","Dempsey","Dills","Dobrinski","Dollens","Echols","Fetgatter","Ford","Frix","Fugate","Goodwin","Hasenbeck","Hilbert","Hill","Johns","Kannady","Kerbs","Lawson","Lepak","Lowe (D)","Luttrell","Manger","Marti","Martinez","May","McBride","McDugle","McEntire","Miller","Mize","Munson","Newton","Nichols","Nollan","ODonnell","Osburn","Pae","Patzkowsky","Pfeiffer","Phillips","Pittman","Provenzano","Ranson","Roberts (D)","Roberts (E)","Roe","Rosecrants","Russ","Stark","Sterling","Strom","Talley","Vancuren","Virgin","Waldron","Walke","Wallace","West (J)","West (T)","Williams","Wolfley","Worthen","Mr. Speaker"],
        nay: ["Crosswhite Hader","Gann","Grego","Hardin (D)","Hardin (T)","Humphrey","Kendrix","Olsen","Randleman","Roberts (S)","Sims","Smith","Sneed","Steagall","Stearman","West (K)","West (R)"],
        exc: ["Bennett","Lowe (J)","Moore","Stinson","Townley","Turner"] },
      { chamber: "senate", date: "Apr 15, 2021", motion: "Third reading, passed 42–4", source: "https://www.oklegislature.gov/cf/2021-22%20SUPPORT%20DOCUMENTS/votes/Senate/SB1050_VOTES.HTM",
        yea: ["Allen","Bergstrom","Boren","Brooks","Bullard","Burns","Coleman","Daniels","David","Dossett, J.A.","Dossett, J.J.","Dugger","Floyd","Garvin","Hall","Haste","Hicks","Jech","Kidd","Kirt","Leewright","Matthews","McCortney","Montgomery","Newhouse","Paxton","Pederson","Pemberton","Pugh","Quinn","Rader","Rogers","Rosino","Simpson","Standridge","Stanley","Stephens","Taylor","Thompson","Treat","Weaver","Young"],
        nay: ["Dahm","Hamilton","Jett","Merrick"],
        exc: ["Howard","Murdock"] }
    ]
  },
  {
    id: "hb1955", num: "HB 1955", year: 2024,
    title: "Eliminated the state portion of the grocery sales tax",
    what: "A tax cut that reaches every household. Local grocery taxes still apply.",
    url: "https://www.oklegislature.gov/BillInfo.aspx?Bill=HB1955&Session=2400",
    rolls: [
      { chamber: "house", date: "Mar 21, 2023", motion: "Third reading, passed 88–7", speaker: "McCall", source: "https://www.oklegislature.gov/cf/2023-24%20SUPPORT%20DOCUMENTS/votes/House/HB1955_VOTES.HTM",
        yea: ["Hays","Fetgatter","Maynard","Sims","Alonso-Sandoval","Ford","McBride","Smith","Archer","Fugate","McDugle","Sneed","Baker","Gann","McEntire","Staires","Banning","George","Menz","Stark","Bashore","Goodwin","Miller","Steagall","Blancett","Grego","Moore","Sterling","Boatman","Hardin","Munson","Stinson","Boles","Hefner","Newton","Swope","Caldwell (C)","Hilbert","Nichols","Talley","Caldwell (T)","Humphrey","ODonnell","Tedford","Cantrell","Kane","Olsen","Townley","Conley","Kannady","Osburn","Turner","Cornwell","Kendrix","Patzkowsky","Waldron","Culver","Kerbs","Pfeiffer","Wallace","Davis","Lawson","Pittman","West (J)","Deck","Lepak","Provenzano","West (K)","Dempsey","Lowe (D)","Ranson","West (R)","Dobrinski","Luttrell","Roberts","West (T)","Dollens","Manger","Roe","Williams","Duel","Marti","Rosecrants","Wolfley","Echols","May","Schreiber","Mr. Speaker"],
        nay: ["Burns","Hill","Strom","Worthen","Crosswhite Hader","Randleman","Vancuren"],
        exc: ["Bennett","Johns","Martinez","Pae","Hasenbeck","Lowe (J)"] },
      { chamber: "senate", date: "Feb 22, 2024", motion: "Third reading, passed 42–2", source: "https://www.oklegislature.gov/cf/2023-24%20SUPPORT%20DOCUMENTS/votes/Senate/HB1955_VOTES.HTM",
        yea: ["Alvord","Garvin","Murdock","Seifried","Bergstrom","Gollihare","Newhouse","Standridge","Brooks","Green","Paxton","Stanley","Burns","Hall","Pederson","Stephens","Coleman","Hamilton","Pemberton","Stewart","Dahm","Haste","Prieto","Thompson, (K)","Daniels","Howard","Pugh","Treat","Deevers","Jech","Rader","Weaver","Dossett","Jett","Rogers","Woods","Dugger","Kidd","Rosino","Young","Floyd","McCortney"],
        nay: ["Boren","Thompson, (R)"],
        exc: ["Bullard","Hicks","Kirt","Matthews"] }
    ]
  },
  {
    id: "sb201", num: "SB 201", year: 2026,
    title: "$2,000 raise on the minimum teacher salary schedule",
    what: "Raises the floor. Does not guarantee a raise for teachers already paid above it.",
    url: "https://www.oklegislature.gov/BillInfo.aspx?Bill=SB201&Session=2600",
    rolls: [
      { chamber: "house", date: "Apr 28, 2026", motion: "Third reading, passed 92–1", speaker: "Hilbert", source: "https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/House/SB201_VOTES.HTM",
        yea: ["Adams","Fugate","Manger","Smith","Alonso-Sandoval","Gann","Marti","Sneed","Archer","George","May","Staires","Banning","Gise","Maynard","Stark","Bashore","Grego","Menz","Steagall","Blair","Hall","Miller","Sterling","Blancett","Hardin","Moore","Stewart","Caldwell (C)","Harris","Munson","Stinson","Caldwell (T)","Hasenbeck","Newton","Strom","Cantrell","Hays","Norwood","Tedford","Chapman","Hefner","Olsen","Timmons","Clinton","Hildebrant","Osburn","Townley","Cornwell","Jenkins","Pae","Travis","Crosswhite Hader","Johns","Patzkowsky","Turner","Culver","Kane","Pfeiffer","West (J)","Deck","Kannady","Pogemiller","West (K)","Dempsey","Kelley","Provenzano","West (R)","Dobrinski","Kendrix","Ranson","West (T)","Dollens","Lawson","Roberts","Williams","Duel","Lay","Roe","Wolfley","Eaves","Lepak","Rosecrants","Woolley","Fetgatter","Lowe","Schreiber","Worthen","Ford","Luttrell","Shaw","Mr. Speaker"],
        nay: ["McCane"],
        exc: ["Boles","Humphrey","Kerbs","Waldron","Hill"], cp: ["Wilk"] },
      { chamber: "senate", date: "May 4, 2026", motion: "Fourth reading (final passage), passed 47–0", source: "https://www.oklegislature.gov/cf/2025-26%20SUPPORT%20DOCUMENTS/votes/Senate/SB201_VOTES.HTM",
        yea: ["Alvord","Gollihare","Jett","Rader","Bergstrom","Goodwin","Kern","Reinhardt","Boren","Green","Kirt","Rosino","Brooks","Grellner","Logan","Sacchieri","Bullard","Guthrie","Mann","Seifried","Burns","Hall","McIntosh","Standridge","Coleman","Hamilton","Murdock","Stanley","Daniels","Haste","Nice","Stewart","Deevers","Hicks","Paxton","Weaver","Dossett","Hines","Pederson","Wingard","Frix","Howard","Prieto","Woods","Gillespie","Jech","Pugh"],
        nay: [],
        exc: ["Thompson"] }
    ]
  }
];

/* Rosters. aliases: strings, or {n, from} when that surname belonged to a different member before `from`. */
window.WR_HOUSE = [
  [1,"Eddy Dempsey","R",["Dempsey"]],[2,"Jim Olsen","R",["Olsen"]],[3,"Rick West","R",["West (R)"]],[4,"Bob Ed Culver Jr.","R",["Culver"]],[5,"Josh West","R",["West (J)"]],
  [6,"Rusty Cornwell","R",["Cornwell"]],[7,"Steve Bashore","R",["Bashore"]],[8,"Tom Gann","R",["Gann"]],[9,"Mark Lepak","R",["Lepak"]],[10,"Judd Strom","R",["Strom"]],
  [11,"John Kane","R",["Kane"]],[12,"Mark Chapman","R",[{n:"Chapman",from:2025}]],[13,"Neil Hays","R",["Hays"]],[14,"Chris Sneed","R",["Sneed"]],[15,"Tim Turner","R",["Turner"]],
  [16,"Scott Fetgatter","R",["Fetgatter"]],[17,"Jim Grego","R",["Grego"]],[18,"David Smith","R",["Smith"]],[19,"Justin Humphrey","R",["Humphrey"]],[20,"Jonathan Wilk","R",[{n:"Wilk",from:2025}]],
  [21,"Cody Maynard","R",["Maynard"]],[22,"Ryan Eaves","R",[{n:"Eaves",from:2025}]],[23,"Derrick Hildebrant","R",[{n:"Hildebrant",from:2025}]],[24,"Chris Banning","R",["Banning"]],[25,"Ronny Johns","R",["Johns"]],
  [26,"Dell Kerbs","R",["Kerbs"]],[27,"Danny Sterling","R",["Sterling"]],[28,"Danny Williams","R",["Williams"]],[29,"Kyle Hilbert","R",["Hilbert",{n:"Mr. Speaker",from:2025}]],[30,"Mark Lawson","R",["Lawson"]],
  [31,"Collin Duel","R",["Duel"]],[32,"Jim Shaw","R",[{n:"Shaw",from:2025}]],[33,"Molly Jenkins","R",[{n:"Jenkins",from:2025}]],[34,"Trish Ranson","D",["Ranson"]],[35,"Dillon Travis","R",[{n:"Travis",from:2026}]],
  [36,"John George","R",["George"]],[37,"Ken Luttrell","R",["Luttrell"]],[38,"John Pfeiffer","R",["Pfeiffer"]],[39,"Erick Harris","R",[{n:"Harris",from:2025}]],[40,"Chad Caldwell","R",["Caldwell (C)"]],
  [41,"Denise Crosswhite Hader","R",["Crosswhite Hader"]],[42,"Cynthia Roe","R",["Roe"]],[43,"Jay Steagall","R",["Steagall"]],[44,"Jared Deck","D",["Deck"]],[45,"Annie Menz","D",["Menz"]],
  [46,"Jacob Rosecrants","D",["Rosecrants"]],[47,"Brian Hill","R",["Hill"]],[48,"Tammy Townley","R",["Townley"]],[49,"Josh Cantrell","R",["Cantrell"]],[50,"Stacy Jo Adams","R",[{n:"Adams",from:2025}]],
  [51,"Brad Boles","R",["Boles"]],[52,"Gerrid Kendrix","R",["Kendrix"]],[53,"Jason Blair","R",[{n:"Blair",from:2025}]],[54,"Kevin West","R",["West (K)"]],[55,"Nick Archer","R",["Archer"]],
  [56,"Dick Lowe","R",["Lowe (D)",{n:"Lowe",from:2026}]],[57,"Anthony Moore","R",["Moore"]],[58,"Carl Newton","R",["Newton"]],[59,"Mike Dobrinski","R",["Dobrinski"]],[60,"Mike Kelley","R",[{n:"Kelley",from:2025}]],
  [61,"Kenton Patzkowsky","R",["Patzkowsky"]],[62,"Daniel Pae","R",["Pae"]],[63,"Trey Caldwell","R",["Caldwell (T)"]],[64,"Rande Worthen","R",["Worthen"]],[65,"Toni Hasenbeck","R",["Hasenbeck"]],
  [66,"Clay Staires","R",["Staires"]],[67,"Rob Hall","R",[{n:"Hall",from:2025}]],[68,"Mike Lay","R",[{n:"Lay",from:2025}]],[69,"Mark Tedford","R",["Tedford"]],[70,"Suzanne Schreiber","D",["Schreiber"]],
  [71,"Amanda Clinton","D",[{n:"Clinton",from:2026}]],[72,"Michelle McCane","D",[{n:"McCane",from:2025}]],[73,"Ronald Stewart","D",[{n:"Stewart",from:2025}]],[74,"Kevin Wayne Norwood","R",[{n:"Norwood",from:2026}]],[75,"T. J. Marti","R",["Marti"]],
  [76,"Ross Ford","R",["Ford"]],[77,null,null,[]],[78,"Meloyde Blancett","D",["Blancett"]],[79,"Melissa Provenzano","D",["Provenzano"]],[80,"Stan May","R",["May"]],
  [81,"Mike Osburn","R",["Osburn"]],[82,"Nicole Miller","R",["Miller"]],[83,"Eric Roberts","R",["Roberts (E)",{n:"Roberts",from:2023}]],[84,"Tammy West","R",["West (T)"]],[85,"Cyndi Munson","D",["Munson"]],
  [86,"David Hardin","R",["Hardin (D)",{n:"Hardin",from:2023}]],[87,"Ellyn Hefner","D",["Hefner"]],[88,"Ellen Pogemiller","D",[{n:"Pogemiller",from:2025}]],[89,"Arturo Alonso-Sandoval","D",["Alonso-Sandoval"]],[90,"Emily Gise","R",[{n:"Gise",from:2025}]],
  [91,"Chris Kannady","R",["Kannady"]],[92,"Sam Wargin Grimaldo","D",[{n:"Grimaldo",from:2026}]],[93,"Mickey Dollens","D",["Dollens"]],[94,"Andy Fugate","D",["Fugate"]],[95,"Max Wolfley","R",["Wolfley"]],
  [96,"Preston Stinson","R",["Stinson"]],[97,"Aletia Timmons","D",[{n:"Timmons",from:2026}]],[98,"Gabe Woolley","R",[{n:"Woolley",from:2025}]],[99,null,null,[]],[100,"Marilyn Stark","R",["Stark"]],[101,"Robert Manger","R",["Manger"]]
];
window.WR_HOUSE_VACANT = { 77: "Vacant (John Waldron, D, resigned)", 99: "Vacant (Ajay Pittman, D, resigned after a guilty plea)" };

window.WR_SENATE = [
  [1,"Micheal Bergstrom","R",["Bergstrom"]],[2,"Ally Seifried","R",["Seifried"]],[3,"Julie McIntosh","R",[{n:"McIntosh",from:2025}]],[4,"Tom Woods","R",["Woods"]],[5,"George Burns","R",["Burns"]],
  [6,"David Bullard","R",["Bullard"]],[7,"Warren Hamilton","R",["Hamilton"]],[8,"Bryan Logan","R",[{n:"Logan",from:2025}]],[9,"Avery Frix","R",[{n:"Frix",from:2025}]],[10,"Bill Coleman","R",["Coleman"]],
  [11,"Regina Goodwin","D",[{n:"Goodwin",from:2025}]],[12,"Todd Gollihare","R",["Gollihare"]],[13,"Jonathan Wingard","R",[{n:"Wingard",from:2025}]],[14,"Jerry Alvord","R",["Alvord"]],[15,"Lisa Standridge","R",[{n:"Standridge",from:2025}]],
  [16,"Mary Boren","D",["Boren"]],[17,"Shane Jett","R",["Jett"]],[18,"Jack Stewart","R",[{n:"Stewart",from:2023}]],[19,"Roland Pederson","R",["Pederson"]],[20,"Chuck Hall","R",["Hall"]],
  [21,"Randy Grellner","R",[{n:"Grellner",from:2025}]],[22,"Kristen Thompson","R",["Thompson, (K)",{n:"Thompson",from:2025}]],[23,"Lonnie Paxton","R",["Paxton"]],[24,null,null,[]],[25,"Brian Guthrie","R",[{n:"Guthrie",from:2025}]],
  [26,"Darcy Jech","R",["Jech"]],[27,"Casey Murdock","R",["Murdock"]],[28,"Grant Green","R",[{n:"Green",from:2023}]],[29,"Julie Daniels","R",["Daniels"]],[30,"Julia Kirt","D",["Kirt"]],
  [31,"Spencer Kern","R",[{n:"Kern",from:2025}]],[32,"Dusty Deevers","R",["Deevers"]],[33,"Christi Gillespie","R",[{n:"Gillespie",from:2025}]],[34,"Dana Prieto","R",["Prieto"]],[35,"Jo Anna Dossett","D",["Dossett","Dossett, J.A."]],
  [36,"John Haste","R",["Haste"]],[37,"Aaron Reinhardt","R",[{n:"Reinhardt",from:2025}]],[38,"Brent Howard","R",["Howard"]],[39,"David Rader","R",["Rader"]],[40,"Carri Hicks","D",["Hicks"]],
  [41,"Adam Pugh","R",["Pugh"]],[42,"Brenda Stanley","R",["Stanley"]],[43,"Kendal Sacchieri","R",[{n:"Sacchieri",from:2025}]],[44,"Michael Brooks-Jimenez","D",["Brooks"]],[45,"Paul Rosino","R",["Rosino"]],
  [46,"Mark Mann","D",[{n:"Mann",from:2025}]],[47,"Kelly Hines","R",[{n:"Hines",from:2025}]],[48,"Nikki Nice","D",[{n:"Nice",from:2025}]]
];
window.WR_SENATE_VACANT = { 24: "Vacant (Darrell Weaver, R, resigned to become Cleveland County sheriff)" };
/* Senate seats on the November 3, 2026 ballot: even-numbered districts. All 101 House seats are on the ballot. */
window.WR_SENATE_UP = function (d) { return d % 2 === 0; };
