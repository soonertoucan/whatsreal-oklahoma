/* What's Real — the fact ledger.
 *
 * Every number on the site renders from this file. To add or correct a fact,
 * edit this array and redeploy. Rules we hold ourselves to:
 *   - `tier` says what kind of source it is. Prefer "record" (government data,
 *     court filings, roll-call votes). Use "analysis" for independent research
 *     groups, "campaign" for a candidate's own words, and "report" only when a
 *     news organization's reporting is the only public record. Say so.
 *   - `source.url` goes to the source itself, not to a summary of it.
 *   - `checked` is the date a human last verified the entry.
 *   - `response` holds the other side's answer when there is one. Keep it.
 *
 * topic:      cost | health | rural | taxes | schools | money | democracy | world
 * priorities: hospital | prices | farm | taxes | schools | honest | food
 */
window.WR_CHECKED = "October 25, 2026";

window.WR_TIERS = {
  record:   "Government record",
  analysis: "Independent analysis",
  campaign: "Candidate's own words",
  report:   "News report"
};

window.WR_TOPICS = {
  health:    "Hospitals and health coverage",
  cost:      "Gas, groceries and bills",
  rural:     "Farms, ranches and small towns",
  taxes:     "Taxes and the state budget",
  schools:   "Schools and teachers",
  money:     "Money and the presidency",
  democracy: "Elections, courts and the press",
  world:     "War, oil and trade"
};

window.WR_PRIORITIES = {
  hospital: { label: "Keep my hospital open and my coverage affordable", issue: "health" },
  prices:   { label: "Pay less at the pump and the grocery store",       issue: "cost" },
  farm:     { label: "Farms and ranches that can make a living",         issue: "farm" },
  taxes:    { label: "Lower taxes without gutting services",             issue: "taxes" },
  schools:  { label: "Good schools and teachers who stay",               issue: "schools" },
  food:     { label: "Food on the table for kids and seniors",           issue: "food" },
  power:    { label: "Keep my electric and gas bill under control", issue: "power" },
  honest:   { label: "Honest government that answers to voters",         issue: "honest" }
};

window.WR_FACTS = [

  /* ===================== Hospitals and health coverage ===================== */
  {
    id: "rural-hospitals", topic: "health", priorities: ["hospital"], tier: "analysis",
    stat: "63 of 73",
    headline: "63 of Oklahoma's 73 rural hospitals are at risk of closing. 18 are at immediate risk.",
    detail: "Rural hospitals run on margins of 2 to 3 percent, according to the Oklahoma State Medical Association. The Oklahoma Hospital Association has warned that more of them will stop delivering babies because they cannot break even on it.",
    source: { name: "Center for Healthcare Quality and Payment Reform, reported by KFOR", date: "2026", url: "https://www.yahoo.com/news/politics/articles/despite-warnings-even-more-ok-231817249.html" }
  },
  {
    id: "soonercare-enroll", topic: "health", priorities: ["hospital", "food"], tier: "record",
    stat: "1,000,000",
    headline: "About one million Oklahomans are covered by SoonerCare, the state's Medicaid program. 237,525 of them are adults covered through the expansion Oklahoma voters approved in 2020.",
    detail: "Roughly 531,000 of the people covered are children. That is about one in four Oklahomans, and in many rural counties it is closer to one in three.",
    source: { name: "Oklahoma Health Care Authority, SoonerCare Fast Facts, April 2026", date: "Apr 2026", url: "https://oklahoma.gov/content/dam/ok/en/okhca/docs/research/data-and-reports/fast-facts/2026/may/Total%20Enrollment04_26.pdf" }
  },
  {
    id: "medicaid-loss", topic: "health", priorities: ["hospital"], tier: "analysis",
    stat: "$6.7 billion",
    headline: "Oklahoma is projected to lose at least $6.7 billion in federal Medicaid funding under the 2025 federal budget law (H.R. 1), plus about $1 billion in payments to physicians.",
    detail: "The deepest SoonerCare cuts land in January 2027. A $50 billion federal rural health fund is not expected to offset the loss, because the money does not go directly to hospitals. All five Oklahoma House members and both senators voted for the law.",
    source: { name: "Oklahoma Hospital Association, reported by News 9", date: "Jul 2026", url: "https://www.news9.com/news-video/medicaid-cuts-could-further-strain-rural-health-care-in-oklahoma" }
  },
  {
    id: "integris", topic: "health", priorities: ["hospital"], tier: "report",
    stat: "$130 million",
    headline: "Integris Health, the state's largest health system, is cutting doctors and clinics to absorb a projected $130 million a year Medicaid loss.",
    detail: "The Oklahoma Hospital Association projects 15,000 to 18,000 lost health care jobs statewide and as many as 300,000 fewer insured Oklahomans as the federal changes phase in.",
    source: { name: "OKC Fox 25", date: "2026", url: "https://okcfox.com/news/local/integris-health-to-cut-doctors-clinics-amid-projected-130m-annual-medicaid-loss" }
  },
  {
    id: "kids-medicaid", topic: "health", priorities: ["hospital", "food"], tier: "report",
    stat: "14,000",
    headline: "About 14,000 Oklahoma children have already lost Medicaid coverage after eligibility changes that took effect in 2025.",
    detail: "The losses began before the largest cuts, which are scheduled for 2027.",
    source: { name: "Tulsa Flyer", date: "Jul 13, 2026", url: "https://tulsaflyer.org/2026/07/13/news/post/medicaid-cuts-rural-health-care-strain/" }
  },
  {
    id: "aca-2026", topic: "health", priorities: ["hospital", "prices"], tier: "record",
    stat: "20 to 21%",
    headline: "Marketplace health premiums in Oklahoma rose 20 to 21 percent on average for 2026 after Congress let the enhanced premium tax credits expire at the end of 2025.",
    detail: "Nearly 50,000 fewer Oklahomans bought a plan, and about 1 in 7 existing enrollees dropped coverage, according to the Oklahoma Insurance Department. The extension was not included in H.R. 1 and no separate extension passed.",
    source: { name: "Oklahoma Insurance Department, reported by KOSU", date: "Feb 19, 2026", url: "https://www.kosu.org/show/stateimpact-oklahoma/2026-02-19/oklahomans-seek-cheaper-ways-to-pay-for-health-care-after-aca-enhanced-premium-tax-credits-expire" }
  },
  {
    id: "aca-2027", topic: "health", priorities: ["hospital", "prices"], tier: "record",
    stat: "+15% to +22%",
    headline: "Oklahoma insurers have filed for another 15 to 22 percent increase on Marketplace plans for 2027. Open enrollment runs only November 1 to December 15 this year.",
    detail: "Rate filings show about +21.5% for individual plans and +16.2% for small-group plans. The Insurance Department's own estimate is nearer 15%. Either way it stacks on top of this year's increase.",
    source: { name: "Oklahoma rate filings, compiled by ACA Signups; Oklahoma Insurance Department", date: "Oct 2026", url: "https://acasignups.net/rate_changes/2027/ok" }
  },

  /* ===================== Gas, groceries and bills ===================== */
  {
    id: "cpi-sept", topic: "cost", priorities: ["prices"], tier: "record",
    stat: "3.7%",
    headline: "Consumer prices rose 3.7% in the year to September 2026, up from 3.4% in August.",
    detail: "Gasoline rose 9.1% in September alone and accounted for more than half of the month's increase. Grocery prices eased 0.1% that month. The October report comes out November 10, a week after the election.",
    source: { name: "U.S. Bureau of Labor Statistics, Consumer Price Index, reported by CNN", date: "Oct 14, 2026", url: "https://www.cnn.com/2026/10/14/economy/us-cpi-inflation-september" }
  },
  {
    id: "gas", topic: "cost", priorities: ["prices", "farm"], tier: "record",
    stat: "$4.28",
    headline: "Regular gas averaged $4.28 a gallon nationally the week of October 19. In January it was $2.78.",
    detail: "That is about $1.50 more per gallon in nine months. Filling a 26-gallon pickup tank costs roughly $39 more than it did in January. The main driver is crude oil, which spiked when the Strait of Hormuz closed after the Iran strikes began in February.",
    source: { name: "U.S. Energy Information Administration, compiled by FactCheck.org", date: "Oct 2026", url: "https://factcheck.org/2026/10/trumps-numbers-october-2026-update" }
  },
  {
    id: "diesel", topic: "cost", priorities: ["prices", "farm"], tier: "record",
    stat: "$6.53",
    headline: "Diesel hit a record $6.53 a gallon the week of September 21, 2026.",
    detail: "Diesel moves every truckload of groceries, feed and fertilizer in Oklahoma and runs every combine. Its price shows up in the price of nearly everything else.",
    source: { name: "U.S. Energy Information Administration, compiled by FactCheck.org", date: "Oct 2026", url: "https://factcheck.org/2026/10/trumps-numbers-october-2026-update" }
  },
  {
    id: "grocery-tax", topic: "cost", priorities: ["prices", "taxes"], tier: "record", bills: ["hb1955"],
    stat: "4.5% to 0%",
    headline: "Oklahoma eliminated the state portion of the grocery sales tax on August 29, 2024. City and county grocery taxes still apply.",
    detail: "The cut costs the state about $418 million a year. Legislators estimated savings of up to $800 a year per family. Oklahoma Policy Institute's check put the savings for a family earning $40,000 closer to $125 a year. Both figures are below what nine months of higher gas prices cost a two-car household.",
    source: { name: "Oklahoma Senate; Oklahoma Policy Institute fact check", date: "Aug 2024", url: "https://okpolicy.org/fact-check-will-oklahoma-families-save-800-a-year-from-eliminating-the-state-portion-of-the-grocery-sales-tax/" }
  },
  {
    id: "econ-approval", topic: "cost", priorities: ["prices"], tier: "analysis",
    stat: "27%",
    headline: "27% of Americans approve of the president's handling of the economy. On inflation it is 23%, and on gasoline prices 73% disapprove.",
    detail: "A poll is an opinion measure, not a price measure. It is here because it shows how far Oklahomans' own experience at the pump is from the national message.",
    source: { name: "SSRS poll, reported by Newsweek", date: "Oct 2026", url: "https://www.newsweek.com/trump-approval-rating-record-low-polls-midterms-12603829" }
  },

  /* ===================== Farms, ranches and small towns ===================== */
  {
    id: "soy", topic: "rural", priorities: ["farm"], tier: "report",
    stat: "78% drop",
    headline: "China's purchases of U.S. soybeans fell 78% in the trade war. Oklahoma farm fuel costs rose more than 50%.",
    detail: "Fertilizer prices were pushed up by tariffs and by the closure of the Strait of Hormuz. Federal aid payments helped, but Oklahoma Watch found margins still deeply negative. Cattle prices, by contrast, are at records.",
    source: { name: "Oklahoma Watch", date: "May 11, 2026", url: "https://oklahomawatch.org/2026/05/11/trade-war-fertilizer-tariffs-strait-of-hormuz-how-global-events-are-crushing-oklahoma-farm-margins/" }
  },
  {
    id: "wheat", topic: "rural", priorities: ["farm"], tier: "report",
    stat: "$6 vs $10.50",
    headline: "An Oklahoma wheat farmer told KGOU he sold at about $6 a bushel and spent about $10.50 to grow it.",
    detail: "USDA's season-average forecast for wheat is $6.30, up from last year. Input costs rose faster. Farmers interviewed did not expect a farm bill to pass the Senate while SNAP faces cuts, because the two have always moved together.",
    source: { name: "KGOU; USDA WASDE", date: "Jul 16, 2026", url: "https://www.kgou.org/politics-and-government/2026-07-16/2026-farm-bill-raises-more-concerns-for-oklahoma-farmers-than-aid" }
  },
  {
    id: "ag-workforce", topic: "rural", priorities: ["farm"], tier: "record",
    stat: "1 in 5",
    headline: "Nearly 1 in 5 Oklahoma-based federal agriculture employees left or lost their jobs in the first half of 2025.",
    detail: "The USDA inspector general found about 18% of the state's federal ag workforce gone, most through the deferred-resignation offer. These are the people who staff county FSA offices, conservation programs and meat inspection.",
    source: { name: "USDA Office of Inspector General, reported by KGOU", date: "Feb 11, 2026", url: "https://www.kgou.org/business-and-economy/2026-02-11/oklahoma-based-federal-ag-workforce-lost-nearly-1-in-5-of-its-employees-last-year" }
  },
  {
    id: "snap-shift", topic: "rural", priorities: ["food", "taxes", "farm"], tier: "record",
    stat: "$240 million a year",
    headline: "Starting October 2027, Oklahoma could owe about $240 million a year for SNAP food benefits that the federal government has paid in full since 1964.",
    detail: "H.R. 1 shifts benefit costs to states based on their payment error rate. Oklahoma's rate of 11.04% puts it in the highest tier. Since October 1, 2026 the state also pays 75% of SNAP administrative costs. The state human services director has put the combined cost near $500 million.",
    source: { name: "Oklahoma Human Services, reported by Hunger Free Oklahoma and Oklahoma Voice", date: "2026", url: "https://oklahomavoice.com/briefs/federal-changes-to-food-stamps-could-cost-oklahoma-nearly-500m-dhs-director/" }
  },

  /* ===================== Taxes and the state budget ===================== */
  {
    id: "fed-share", topic: "taxes", priorities: ["taxes", "hospital", "schools"], tier: "record",
    stat: "32.2%",
    headline: "Federal money supplied 32.2% of all Oklahoma state and local government revenue in 2023, about $17 billion. That is 7 points above the national average.",
    detail: "Oklahoma depends on Washington more than most states do. When federal programs are cut, the state either raises its own taxes, cuts services, or both.",
    source: { name: "U.S. Census Bureau data, compiled by USAFacts", date: "FY 2023", url: "https://usafacts.org/answers/how-much-money-does-the-federal-government-provide-state-and-local-governments/state/oklahoma" }
  },
  {
    id: "income-tax", topic: "taxes", priorities: ["taxes"], tier: "record", bills: ["hb2764"],
    stat: "4.75% to 4.5%",
    headline: "Oklahoma cut its top income tax rate from 4.75% to 4.5% in 2025 and set triggers for further quarter-point cuts whenever revenue benchmarks are met.",
    detail: "State collections for fiscal 2026 came in $142 million above the prior year. The income tax is one of the state's two largest revenue sources. The governor's race is largely a disagreement about how fast to cut it and what replaces it.",
    source: { name: "HB 2764 (2025); Governor's office; Oklahoma Voice", date: "2025–2026", url: "https://oklahomavoice.com/2025/05/20/oklahoma-income-tax-cut-bill-clears-first-hurdle-sets-stage-for-future-reductions/" }
  },
  {
    id: "sq847-cost", topic: "taxes", priorities: ["taxes", "schools", "farm"], tier: "analysis",
    stat: "$42M to $575M",
    headline: "State Question 847 would lower the cap on how fast property valuations can rise. One estimate puts the cost to counties and schools at $42 million in year one, growing to $575 million a year by year ten.",
    detail: "It caps growth in assessed value, not your bill, so it does not guarantee a lower tax bill. Oklahoma Farm Bureau supports it. School and county officials ask how they keep up with inflation if revenue is capped below it.",
    source: { name: "University of Central Oklahoma estimate, reported by NonDoc; Oklahoma Policy Institute", date: "Oct 9, 2026", url: "https://nondoc.com/2026/10/09/sq-847-voters-to-consider-lowering-maximum-property-valuation-increases/" }
  },
  {
    id: "state-snap-admin", topic: "taxes", priorities: ["taxes", "food"], tier: "record",
    stat: "$25 million",
    headline: "Oklahoma's 2026 state budget had to add $25 million just to cover SNAP administrative costs the federal government stopped paying on October 1.",
    detail: "That money comes from the same budget that funds schools, roads and prisons. The benefit cost shift that starts in 2027 is roughly ten times larger.",
    source: { name: "Oklahoma Human Services budget, reported by KOSU", date: "2026", url: "https://www.kosu.org/one-big-beautiful-bill-oklahoma-budget" }
  },

  /* ===================== Schools and teachers ===================== */
  {
    id: "teacher-pay", topic: "schools", priorities: ["schools"], tier: "analysis", bills: ["sb201"],
    stat: "48th",
    headline: "Oklahoma's average starting teacher salary of $41,294 ranks 48th in the nation. Average pay overall is $61,931, which ranks 37th.",
    detail: "A 2026 state law added $2,000 to every step of the minimum salary schedule. It does not guarantee a raise for teachers already paid above the schedule.",
    source: { name: "National Education Association, 2024–25 salary benchmark report", date: "Apr 2026", url: "https://www.nea.org/sites/default/files/2026-04/2024-2025-teacher-salary-benchmark-report-final-new.pdf" }
  },
  {
    id: "school-funding-source", topic: "schools", priorities: ["schools", "taxes"], tier: "record",
    stat: "Property tax",
    headline: "Oklahoma school districts, CareerTech centers and county services are funded in large part by local property tax. State Question 847 would cap how fast that revenue can grow.",
    detail: "The question is on your ballot. Read it as a schools question as much as a tax question.",
    source: { name: "Oklahoma Policy Institute, SQ 847 explainer", date: "Oct 2026", url: "https://okpolicy.org/state-question-847-changing-assessment-caps-for-property-tax/" }
  },

  /* ===================== Money and the presidency ===================== */
  {
    id: "crypto", topic: "money", priorities: ["honest"], tier: "record",
    stat: "$1.4 billion",
    headline: "The president's 2025 public financial disclosure reported more than $1.4 billion in crypto income: about $800 million from World Liberty Financial and $635 million from Trump-branded meme coins.",
    detail: "On October 22, 2026 a shareholder lawsuit filed in federal court alleged that roughly $2 billion in UAE-linked crypto deals violate the Constitution's Foreign Emoluments Clause. A lawsuit is an allegation, not a finding.",
    response: "The White House called the lawsuit frivolous and said there are no conflicts of interest.",
    source: { name: "Office of Government Ethics disclosure and court filing, reported by CNBC", date: "Oct 22, 2026", url: "https://www.cnbc.com/2026/10/22/trump-world-liberty-crypto-lawsuit-uae.html" }
  },
  {
    id: "qatar-jet", topic: "money", priorities: ["honest"], tier: "record",
    stat: "$400 million",
    headline: "The United States accepted a Boeing 747-8 from the government of Qatar valued at roughly $400 million. It now flies as a temporary Air Force One.",
    detail: "The Trump family holds licensing and real estate deals in Qatar, Saudi Arabia and the UAE, listed on the same financial disclosure.",
    response: "The administration says the aircraft was a gift to the U.S. government, not to the president, and that the president follows applicable conflict-of-interest law.",
    source: { name: "Department of Defense acceptance; reported by PBS NewsHour", date: "2026", url: "https://www.pbs.org/newshour/amp/show/trump-business-deals-revive-questions-about-his-family-profiting-off-the-presidency" }
  },
  {
    id: "ads", topic: "money", priorities: ["honest"], tier: "record",
    stat: "Court-ordered stop",
    headline: "A federal judge ordered the administration to stop spending taxpayer money on campaign-style ads promoting the presidency.",
    detail: "The president then directed his MAGA Inc. super PAC to pay for the ads, which drew a separate campaign-finance complaint. Records obtained by the Washington Post also show $333 million in private donations for a White House ballroom, including from federal contractors and a pardon recipient.",
    source: { name: "Federal court order; Washington Post records; summarized by Axios", date: "Oct 17, 2026", url: "https://www.axios.com/2026/10/17/trump-october-midterms-controversy" }
  },
  {
    id: "fed-jobs", topic: "money", priorities: ["honest", "farm"], tier: "record",
    stat: "256,000",
    headline: "The 22 largest federal agencies shed about 256,000 employees in the 13 months ending January 2026, and the cuts largely bypassed Congress.",
    detail: "Oklahoma has large federal workforces at Tinker Air Force Base, Fort Sill, the FAA center in Oklahoma City, the VA and USDA. The Government Accountability Office found little transparency about effects on public services.",
    source: { name: "Government Accountability Office, summarized by CBPP", date: "2026", url: "https://www.cbpp.org/research/federal-budget/administrations-radical-personnel-cuts-bypassed-congress-and-lacked" }
  },

  /* ===================== Elections, courts and the press ===================== */
  {
    id: "turnout", topic: "democracy", priorities: ["honest"], tier: "record",
    stat: "53%",
    headline: "Only 53% of eligible Oklahomans voted in 2024, the lowest turnout of any state.",
    detail: "Among registered voters it was 64%, the lowest since 2012, even though registration hit a record 2.4 million. Nearly half the state let the other half decide.",
    source: { name: "Oklahoma State Election Board; University of Florida Election Lab, reported by KGOU", date: "Nov 7, 2024", url: "https://www.kgou.org/politics-and-government/2024-11-07/oklahoma-voter-turnout-lowest-in-the-nation-drops-from-previous-presidential-elections" }
  },
  {
    id: "networks", topic: "democracy", priorities: ["honest"], tier: "record",
    stat: "5 networks",
    headline: "The Justice Department opened an antitrust investigation into ABC, CBS, CNN, Fox News and NBC after they suspended pool coverage to protest the banning of three news outlets from the White House.",
    detail: "More than 70 journalists lost White House press passes. The three banned outlets have sued. Fox News is among the networks under investigation.",
    source: { name: "Department of Justice action, reported by NPR", date: "Oct 11, 2026", url: "https://www.npr.org/2026/10/11/nx-s1-5997574/the-doj-is-investigating-5-tv-networks-for-suspending-pool-coverage-of-trump" }
  },
  {
    id: "hsi-voters", topic: "democracy", priorities: ["honest"], tier: "record",
    stat: "9 states",
    headline: "Since August, Homeland Security agents have conducted voter-eligibility 'field investigations' in at least nine states. A federal judge ordered the program paused over the risk that citizens would be wrongly swept up.",
    detail: "Judges have also repeatedly dismissed the administration's lawsuits seeking states' voter rolls. Oklahoma's elections are run by county election boards under the State Election Board.",
    source: { name: "Federal court order; reported by Al Jazeera and Axios", date: "Oct 21–23, 2026", url: "https://www.axios.com/2026/10/21/trump-election-interference-lawsuit-democrats" }
  },
  {
    id: "sq845", topic: "democracy", priorities: ["honest"], tier: "record",
    stat: "SQ 845",
    headline: "State Question 845 would change who can sit on the Judicial Nominating Commission, the panel that screens Oklahoma's judges. It would remove the party-balance rule and the limit on attorneys and their relatives, and allow 12-year terms.",
    detail: "Supporters say it lets more qualified attorneys serve. Former Attorney General Robert Henry, a Republican appointee to the federal bench, says it would inject partisanship into the courts.",
    source: { name: "Oklahoma Secretary of State ballot text; FOX23 explainer", date: "Oct 2026", url: "https://fox23.com/news/in-depth/in-depth-oklahoma-voters-face-2-state-questions-on-property-taxes-and-judicial-selection" }
  },

  /* ===================== War, oil and trade ===================== */
  {
    id: "iran-start", topic: "world", priorities: ["prices", "farm"], tier: "record",
    stat: "$72 to $120",
    headline: "Joint U.S.-Israeli strikes on Iran began February 28, 2026 without a vote in Congress. Iran closed the Strait of Hormuz within days and Brent crude went from about $72 a barrel to nearly $120.",
    detail: "The International Energy Agency called it the largest supply disruption in the history of the oil market. A ceasefire began April 7 and collapsed July 8. Oklahoma's oil producers gain from high crude. Oklahoma drivers, farmers and truckers pay for it. Both are true.",
    source: { name: "International Energy Agency; price data via CNBC", date: "Apr 21, 2026", url: "https://www.cnbc.com/2026/04/21/oil-price-iran-war-middle-east.html" }
  },
  {
    id: "iran-approval", topic: "world", priorities: ["prices"], tier: "analysis",
    stat: "65%",
    headline: "65% of Americans disapprove of how the Iran war has been handled.",
    detail: "Verified casualty counts are not consolidated in any one official source. Treat figures you see on social media with caution and look for the Defense Department's own releases.",
    source: { name: "SSRS poll, reported by Newsweek", date: "Oct 2026", url: "https://www.newsweek.com/trump-approval-rating-record-low-polls-midterms-12603829" }
  },
  {
    id: "russia", topic: "world", priorities: ["honest"], tier: "report",
    stat: "Sanctions eased",
    headline: "The administration eased sanctions on Russian diesel and pressured Ukraine to stop striking Russian refineries.",
    detail: "Cheaper Russian diesel on world markets eases prices abroad. It also funds the Russian war effort Oklahoma's Fort Sill soldiers have trained Ukrainians to resist.",
    source: { name: "Axios", date: "Oct 17, 2026", url: "https://www.axios.com/2026/10/17/trump-october-midterms-controversy" }
  }
];
