/* What's Real — the Oklahoma record.
 *
 * Documented conduct and decisions by people who hold or seek state power in
 * Oklahoma. The bar for inclusion: a conviction, plea, indictment, audit,
 * court ruling, ethics-commission action, roll-call vote, or an official
 * spending record. Allegations are labeled as allegations. Where someone was
 * cleared, that is printed too. Party is stated because the reader is choosing
 * between parties; it is never the evidence.
 *
 * status: "convicted" | "pleaded" | "charged" | "audited" | "ruled" | "voted" | "cleared" | "pending" | "enacted"
 * priorities use the same keys as facts.js, plus "power".
 */
window.WR_RECORD = [

  /* ---------------- Criminal cases and audits ---------------- */
  {
    id: "swadleys", status: "convicted", tier: "record", priorities: ["honest", "taxes"],
    who: "Brent Swadley and the Oklahoma Tourism Department",
    stat: "$4.7 million",
    headline: "A Stitt-administration contract to run state park restaurants ended in a felony conviction. A jury found Brent Swadley guilty in May 2026 of conspiracy to defraud the state and five counts of false claims over $4.7 million in overbilling.",
    detail: "The no-bid deal was signed by Tourism Director Jerry Winchester, a Stitt appointee, who resigned when it surfaced. Two co-defendants pleaded guilty. Swadley received a six-year suspended sentence, $1.2 million in restitution and a $50,000 fine. The jury had recommended ten years in prison. Attorney General Drummond, a Republican, prosecuted the case and called the sentence an invitation to fraud.",
    why: "This was money from the same budget that funds your school and your county hospital's Medicaid payments.",
    source: { name: "Oklahoma County District Court verdict and sentencing, reported by OKC Fox 25; KGOU on the pleas", date: "May–Oct 2026", url: "https://okcfox.com/news/local/brent-swadley-receives-suspended-sentence-for-foggy-bottom-kitchen-scandal" }
  },
  {
    id: "geer", status: "audited", tier: "record", priorities: ["honest", "schools"],
    who: "Governor Stitt and Superintendent Ryan Walters",
    stat: "$31 million questioned",
    headline: "Federal auditors questioned about $31 million of a $39.9 million pandemic education grant the governor's office ran, and told Oklahoma to return more than $6 million. The state auditor found 39,634 improper purchases, including video game consoles, gas grills and Christmas trees.",
    detail: "Ryan Walters oversaw the program before he was elected superintendent and gave 'blanket approval' for any item the vendor sold. A multi-county grand jury called the administration's handling 'grossly negligent' but found insufficient evidence to charge anyone. The governor sued the vendor instead. A federal judge dismissed that lawsuit in January 2026 after the attorney general withdrew, saying the administration had rejected the available controls.",
    why: "That was money for Oklahoma kids' schooling during the pandemic. The oversight was the state's job.",
    source: { name: "U.S. Dept. of Education Inspector General audit; Oklahoma State Auditor; federal dismissal order, reported by KGOU", date: "Jan 13, 2026", url: "https://www.kgou.org/education/2026-01-13/oklahoma-gov-stitts-lawsuit-against-classwallet-for-allegedly-mismanaging-covid-funds-dismissed" }
  },
  {
    id: "walters", status: "ruled", tier: "record", priorities: ["honest", "schools"],
    who: "Ryan Walters, elected State Superintendent (R), 2023–2025",
    stat: "$3 million",
    headline: "Walters ordered $3 million of state money spent on 55,000 Bibles for classrooms. The Oklahoma Supreme Court blocked the purchase. He resigned September 30, 2025 to run a national anti-union group, after paying more than $23,000 to settle state ethics cases.",
    detail: "During his tenure Oklahoma issued 5,114 emergency teaching certificates in a single year, the most ever, and starting teacher pay ranked 48th. A 2025 incident involving images on his office television was investigated and closed without charges; the sheriff's office determined the content was from a movie. Further ethics complaints were filed and later dismissed.",
    why: "The superintendent's job is teachers and reading scores. The money and the attention went elsewhere.",
    source: { name: "Oklahoma Supreme Court order; Oklahoma Ethics Commission settlements; NonDoc on the resignation", date: "Sep 25, 2025", url: "https://nondoc.com/2025/09/25/ryan-walters-resignation-as-state-superintendent-to-lead-teacher-freedom-alliance/" }
  },
  {
    id: "epic", status: "charged", tier: "record", priorities: ["honest", "schools"],
    who: "Epic Charter Schools founders",
    stat: "$22 million",
    headline: "The founders of Epic, Oklahoma's largest publicly funded virtual charter school, were ordered to stand trial in April 2026 on embezzlement and racketeering charges over $22 million in public money steered to their private company.",
    detail: "The state auditor's 2020 investigation triggered the case. The former chief financial officer took a plea deal to cooperate. The defendants deny wrongdoing and say they followed legal advice. Epic grew fastest in the years the Legislature expanded school choice with little oversight of where the money went.",
    why: "Every dollar that left Epic's classrooms was a dollar the state did not spend in yours.",
    source: { name: "Oklahoma County District Court bind-over order, reported by Oklahoma Voice", date: "Apr 30, 2026", url: "https://oklahomavoice.com/2026/04/30/epic-co-founders-bound-for-trial-in-embezzlement-racketeering-case/" }
  },
  {
    id: "williams", status: "pending", tier: "record", priorities: ["honest"],
    who: "Rep. Danny Williams (R-Seminole)",
    stat: "Censured",
    headline: "The House Rules Committee voted September 24, 2026 to censure Rep. Danny Williams over sexual harassment and misconduct findings and recommended he resign and drop his re-election bid. On October 8 the Ethics Commission opened an investigation into whether he used his office to benefit a for-profit business and two nonprofits.",
    detail: "He has denied wrongdoing. The investigation is open. For balance: in January 2026 former Rep. Ajay Pittman, a Democrat, pleaded guilty to felony forgery over a check submitted to the Ethics Commission and resigned. Misconduct is not one party's property. Power without oversight is the common thread.",
    why: "Seminole County voters are being asked to re-elect him on November 3.",
    source: { name: "Oklahoma Ethics Commission; House Rules Committee, reported by Oklahoma Voice", date: "Oct 8, 2026", url: "https://oklahomavoice.com/2026/10/08/state-lawmaker-under-investigation-for-misusing-office-oklahoma-ethics-commission-says/" }
  },
  {
    id: "hiett", status: "cleared", tier: "record", priorities: ["honest", "power"],
    who: "Todd Hiett, Corporation Commissioner (R)",
    stat: "Stepped down as chair",
    headline: "Corporation Commissioner Todd Hiett, who votes on your electric rates, resigned as chairman in August 2024 after a fellow commissioner publicly described him groping a man at a national conference. He stayed in office.",
    detail: "A law firm hired by the commission cleared him of harassment over a separate 2023 incident and did not examine the 2024 one. The Ethics Commission dismissed conflict-of-interest complaints about his rate votes in May 2025. He is term-limited; his seat is on your ballot.",
    why: "The Corporation Commission approved $3.2 billion in storm bonds you are paying on every month. Who sits there matters.",
    source: { name: "Commission-hired investigation; Oklahoma Ethics Commission dismissal, reported by KOSU", date: "May 6, 2025", url: "https://www.kosu.org/politics/2025-05-06/oklahoma-ethics-commission-dismisses-complaints-against-corporation-commissioner-todd-hiett" }
  },

  /* ---------------- Where the money goes ---------------- */
  {
    id: "pctc", status: "enacted", tier: "record", priorities: ["schools", "taxes"], bills: ["hb1934", "hb3705"],
    who: "The Legislature and Governor Stitt (private school tax credit)",
    stat: "$252 million",
    headline: "Oklahoma will pay $252 million in private-school tax credits for 2026–27. Only 7.8% of the students receiving them came from a public school. $53 million goes to households earning more than $250,000.",
    detail: "The Legislature raised the program's cap to $275 million in May 2026, the same session the state added $25 million to cover SNAP paperwork Washington stopped paying for. Mazzei would keep the credit. Munson would repeal it and move the money to public schools.",
    why: "For most families this pays for a school they were already in, with money that would otherwise go to the one down your road.",
    source: { name: "Oklahoma Tax Commission Parental Choice Tax Credit report, July 2, 2026, summarized by NewsOn6", date: "Jul 2026", url: "https://www.newson6.com/politics/oklahoma-parental-choice-tax-credit-report-private-school-recipients" }
  },
  {
    id: "hb2764", status: "enacted", tier: "analysis", priorities: ["taxes"], bills: ["hb2764"],
    who: "The Legislature and Governor Stitt (HB 2764 income tax cut)",
    stat: "$21 vs. two-thirds",
    headline: "The 2025 income tax cut sends two-thirds of its benefit to the richest 20% of Oklahomans. A family earning the state median of $63,000 saves $143 a year. A family earning $25,000 saves $21.",
    detail: "The Institute on Taxation and Economic Policy ranked it one of the five biggest tax cuts for millionaires enacted by any state in 2025. The law also sets triggers to keep cutting until the income tax is gone. The income tax is the state's largest single revenue source. Mazzei's plan accelerates this: 4.5% to 3% immediately, then zero, replaced by a 'consumer activity tax,' which is a sales tax, and sales taxes take a larger share of a smaller paycheck.",
    why: "$21 a year does not cover one tank of gas. The services it is traded for are the ones rural Oklahoma uses most.",
    source: { name: "Institute on Taxation and Economic Policy analysis, via Oklahoma Policy Institute", date: "2025", url: "https://okpolicy.org/new-report-oklahoma-enacted-one-of-the-five-biggest-tax-cuts-for-millionaires-in-2025/" }
  },
  {
    id: "uri-bonds", status: "voted", tier: "record", priorities: ["power", "honest"], bills: ["sb1050"],
    who: "The Corporation Commission (all three commissioners Republican)",
    stat: "$3.2 billion, 28 years",
    headline: "After the February 2021 winter storm, the Corporation Commission let OG&E, PSO and ONG put more than $3.2 billion in fuel costs on ratepayer-backed bonds. The 'Winter Event Securitization' line has been on your bill since July 2022 and runs about 25 more years.",
    detail: "Republican legislators have asked the Oklahoma Supreme Court to void the orders, arguing the commission never required a licensed audit of the costs. OG&E filed September 30, 2026 for another $395 million rate increase, about 17.5% on a residential bill. It does not include the data centers the governor is recruiting.",
    why: "Look at your utility bill for the WES line. That is the vote.",
    source: { name: "Oklahoma Supreme Court filings by Reps. Gann, West and West; OG&E rate case filing, reported by Oklahoma Energy Today", date: "Oct 2026", url: "https://okenergytoday.com/2026/10/oge-asks-regulators-to-raise-rates-2/" }
  },
  {
    id: "datacenters", status: "pending", tier: "report", priorities: ["power"],
    who: "Governor Stitt and the Legislature (data centers)",
    stat: "6,800 megawatts",
    headline: "OG&E set an all-time demand record of more than 6,800 megawatts in summer 2026 as data centers arrive. The state exempts data centers from sales tax. The Corporation Commission rejected OG&E's first plan to charge every customer extra for new plants, but will let it recover the cost once they run.",
    detail: "A bill to protect ratepayers from data-center costs (HB 2992) and a bill to pause new construction until 2029 (SB 1488) were both filed. Neither has become law. Munson would pause new data centers by executive order on day one. Corporation Commission candidate Eastman would pause them for study; candidate Boles says the commission should enforce whatever the Legislature decides.",
    why: "A one-gigawatt data center uses as much electricity as a city of a million people. Somebody pays for the wires.",
    source: { name: "OG&E Q2 2026 earnings report; The Frontier investigation", date: "2026", url: "https://www.readfrontier.org/stories/oklahomas-data-center-boom-is-about-to-hit-the-grid-and-your-power-bill/" }
  },

  /* ---------------- When voters decide, and what happens next ---------------- */
  {
    id: "sb1027", status: "enacted", tier: "record", priorities: ["honest"], bills: ["sb1027"],
    who: "The Legislature and Governor Stitt (SB 1027)",
    stat: "Signature caps",
    headline: "After Oklahomans used petitions to pass Medicaid expansion and medical marijuana over the Legislature's objections, the Legislature passed SB 1027 in May 2025, capping how many petition signatures can come from any one county and letting the Secretary of State rewrite a petition's summary.",
    detail: "Supporters say it gives rural counties a voice. Opponents say it is designed to make citizen petitions impossible. The Oklahoma Supreme Court heard the challenge in November 2025. As of this page's last check no decision had been published.",
    why: "The petition is the one tool Oklahoma voters have when the Legislature will not act. This narrows it.",
    source: { name: "Senate Bill 1027 (2025); Oklahoma Supreme Court oral argument, reported by NonDoc", date: "Nov 19, 2025", url: "https://nondoc.com/2025/11/19/oklahoma-supreme-court-hears-arguments-on-sb-1027-initiative-petition-requirements/" }
  },
  {
    id: "sjr50", status: "voted", tier: "record", priorities: ["hospital", "honest"], bills: ["sjr50", "hb4440"],
    who: "The Oklahoma House (SJR 50 / HB 4440)",
    stat: "69–18",
    headline: "In 2020 Oklahoma voters wrote Medicaid expansion into the state constitution. In May 2026 the House voted 69 to 18 to ask voters to take it back out and put it in statute, where the Legislature could cut it without asking again.",
    detail: "The measure stalled before adjournment and is not on the 2026 ballot. The 237,525 adults covered by expansion include the working poor in every county. Mazzei has stated no position on it. Munson says it stays in the constitution.",
    why: "If you or someone in your church is on SoonerCare, this vote was about you.",
    source: { name: "Oklahoma House roll call on SJR 50, reported by KGOU", date: "May 8, 2026", url: "https://www.kgou.org/health/2026-05-08/oklahoma-house-swaps-resolution-language-with-proposal-to-change-medicaid-expansion" }
  },
  {
    id: "stisidore", status: "ruled", tier: "record", priorities: ["schools", "honest"],
    who: "Governor Stitt and Ryan Walters (religious charter school)",
    stat: "Unconstitutional",
    headline: "The governor and superintendent backed the nation's first taxpayer-funded religious charter school. The Oklahoma Supreme Court ruled it unconstitutional in June 2024 and the U.S. Supreme Court let that ruling stand in 2025. The governor has vowed to keep fighting.",
    detail: "Attorney General Drummond, a Republican, opposed it in court. The years of litigation were paid for by the state while emergency-certified teachers filled 3,928 classrooms in 2025–26.",
    why: "Whether or not you want a Catholic charter school, the question is what the state's lawyers were not working on.",
    source: { name: "Oklahoma Supreme Court, Drummond v. Oklahoma Statewide Virtual Charter School Board; U.S. Supreme Court 4–4 affirmance", date: "2024–2025", url: "https://www.yahoo.com/news/us-supreme-court-blocks-religious-150708518.html" }
  }
];

/* What Oklahoma gets. Outcome rankings from independent scorekeepers. */
window.WR_OUTCOMES = [
  { stat: "45th", label: "Overall health, of 50 states", source: { name: "America's Health Rankings 2025", url: "https://www.americashealthrankings.org/explore/annual/measure/Overall/state/OK" } },
  { stat: "44th", label: "Child well-being; 48th in education", source: { name: "Annie E. Casey Foundation, KIDS COUNT 2026", url: "https://okpolicy.org/2026-kids-count/" } },
  { stat: "48th", label: "Starting teacher pay, $41,294", source: { name: "National Education Association, 2026", url: "https://www.nea.org/sites/default/files/2026-04/2024-2025-teacher-salary-benchmark-report-final-new.pdf" } },
  { stat: "46th", label: "Children without health insurance", source: { name: "America's Health Rankings; KIDS COUNT", url: "https://www.americashealthrankings.org/explore/measures/Uninsured_children/OK" } },
  { stat: "29 vs 24.6", label: "Maternal deaths per 100,000 births, Oklahoma vs U.S.", source: { name: "Oklahoma State Dept. of Health Maternal Mortality Review, 2021–23", url: "https://www.kgou.org/health/2025-12-02/oklahoma-maternal-mortality-rate-dips-slightly-remains-above-national-average" } },
  { stat: "48%", label: "Counties that are maternity care deserts; 27% of rural hospitals deliver babies", source: { name: "March of Dimes 2026; KGOU", url: "https://www.kgou.org/health/2026-10-08/a-rural-northwest-oklahoma-hospital-is-bringing-back-maternity-care-can-it-survive-healthcare-cuts" } },
  { stat: "53%", label: "Eligible adults who voted in 2024, last of 50 states", source: { name: "University of Florida Election Lab", url: "https://www.kgou.org/politics-and-government/2024-11-07/oklahoma-voter-turnout-lowest-in-the-nation-drops-from-previous-presidential-elections" } },
  { stat: "$7.25", label: "Minimum wage, unchanged since 2009", source: { name: "Oklahoma State Election Board, SQ 832 result", url: "https://oklahomavoice.com/2026/06/16/voters-reject-effort-to-hike-oklahomas-minimum-wage/" } }
];

/* When Oklahomans voted directly on their own interests. */
window.WR_DIRECT = [
  { year: "2018", q: "SQ 788, medical marijuana", result: "Passed, 57%", then: "The Legislature spent the next five years rewriting it." },
  { year: "2020", q: "SQ 802, Medicaid expansion", result: "Passed, 50.5%", then: "Over the objection of the governor and most statewide officials. In 2026 the House voted 69–18 to send it back to the ballot for removal from the constitution." },
  { year: "2025", q: "SB 1027, signature caps", result: "Passed by the Legislature, not voters", then: "Caps the petitions that produced the two results above." },
  { year: "2026", q: "SQ 832, $15 minimum wage", result: "Failed, 55% to 45%", then: "Oklahoma's minimum wage stays at $7.25. The governor and the State Chamber campaigned against it." }
];
