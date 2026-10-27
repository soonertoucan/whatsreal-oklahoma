/* What's Real — "In your best interest" survey.
 *
 * 20 questions. Five ask about the reader's life and set weights. Thirteen ask
 * the reader to pick between two real positions on an issue. Two are the state
 * questions on the ballot. The result is alignment, not advice: it reports which
 * candidates' RECORDED votes and PUBLIC statements line up with the answers the
 * reader gave, and says plainly where a candidate has no position on record.
 *
 * Each issue question has an `axis`. Option values are +1 or -1 on that axis
 * (or 0 for "not sure", which never counts). WR_STANCES maps each candidate's
 * name to their value on each axis, with the kind of evidence (vote/statement),
 * one line of why, and a source URL. A candidate with no entry on an axis is
 * "no position on record" and is neither credited nor penalized.
 *
 * Rule for editing: a stance must be traceable to a position already shown in
 * data/candidates.js or to a roll call. No inferred stances.
 */
window.WR_SURVEY = {
  intro: {
    title: "In your best interest",
    lede: "Twenty questions about your life and what you want from government. At the end you get a suggested pick in every race on your ballot: the candidate whose recorded votes and public statements line up with your answers most often, with the evidence under each name.",
    isnt: "The pick in each race is a suggestion based on one thing: how often a candidate's documented position matches the position you chose. It is not a judgment of character or competence, and it is not an order. You may care about things we did not ask. A candidate with little on record will score low on coverage, not on disagreement, and we say which is which. The final call is yours."
  },
  weights: {
    // keys match about-you question ids; values multiply the listed axes
    coverage: { label: "Because someone in your home uses SoonerCare, Medicare or a marketplace plan, health answers counted double.", axes: ["state_medicaid", "fed_medicaid", "fed_health_costs"], mult: 2 },
    rural:    { label: "Because your nearest hospital is over 30 minutes away, Medicaid answers counted double. Rural hospitals depend on it.", axes: ["state_medicaid", "fed_medicaid"], mult: 2 },
    farm:     { label: "Because your income depends on farming or ranching, farm and trade answers counted double.", axes: ["farm_support", "tariffs"], mult: 2 },
    school:   { label: "Because your home has a public school student or employee, school answers counted double.", axes: ["school_choice", "public_school_funding"], mult: 2 },
    snap:     { label: "Because someone in your home gets SNAP, the food-aid answer counted double.", axes: ["snap_protect"], mult: 2 }
  },
  questions: [
    /* ---- About you (set weights, not scored) ---- */
    { id: "coverage", type: "about", text: "Does anyone in your household get health coverage through SoonerCare (Medicaid), Medicare, or a HealthCare.gov marketplace plan?",
      options: [{ t: "Yes", w: "coverage" }, { t: "No" }, { t: "Not sure" }] },
    { id: "rural", type: "about", text: "Is the nearest hospital with an emergency room more than 30 minutes from your home?",
      options: [{ t: "Yes", w: "rural" }, { t: "No" }, { t: "Not sure" }] },
    { id: "farm", type: "about", text: "Does your household's income depend on farming, ranching, or a business that serves farms?",
      options: [{ t: "Yes", w: "farm" }, { t: "No" }] },
    { id: "school", type: "about", text: "Does anyone in your household attend or work in an Oklahoma public school?",
      options: [{ t: "Yes", w: "school" }, { t: "No" }] },
    { id: "snap", type: "about", text: "Does anyone in your household receive SNAP food benefits?",
      options: [{ t: "Yes", w: "snap" }, { t: "No" }, { t: "Prefer not to say" }] },

    /* ---- Issues (scored). Both options are real positions held by someone on the ballot. ---- */
    { id: "q_state_medicaid", type: "issue", axis: "state_medicaid", topic: "Health",
      text: "In 2020, voters put Medicaid expansion into the Oklahoma constitution. This year the Legislature voted to ask you to take it back out.",
      fact: "About 1 million Oklahomans are on SoonerCare, including 237,525 adults covered only because of the 2020 expansion.",
      options: [{ t: "Keep expansion in the constitution, where voters put it.", v: 1 }, { t: "Move it to ordinary law so the Legislature can change it.", v: -1 }, { t: "Not sure", v: 0 }] },
    { id: "q_fed_medicaid", type: "issue", axis: "fed_medicaid", topic: "Health",
      text: "The 2025 federal budget law (H.R. 1) cut Oklahoma's federal Medicaid funding by an estimated $6.7 billion and let the larger ACA premium credits expire.",
      fact: "Oklahoma marketplace premiums rose 20 to 21% for 2026. 63 of 73 rural hospitals are rated at risk of closing.",
      options: [{ t: "Keep federal Medicaid funding and the premium credits at their 2025 levels.", v: 1 }, { t: "Cut federal health spending to reduce the deficit, even if coverage shrinks.", v: -1 }, { t: "Not sure", v: 0 }] },
    { id: "q_state_income_tax", type: "issue", axis: "state_income_tax", topic: "Taxes",
      text: "Oklahoma's income tax rate is 4.5% after this year's cut. The next governor will decide what happens to it.",
      fact: "Two-thirds of the last cut went to the top 20% of earners: about $143 a year for them, $21 for a median household.",
      options: [{ t: "Phase the income tax out, replacing part of it with a broader consumption tax.", v: 1 }, { t: "Keep it, and give relief through targeted credits for lower-income households.", v: -1 }, { t: "Not sure", v: 0 }] },
    { id: "q_fed_tax_cuts", type: "issue", axis: "fed_tax_cuts", topic: "Taxes",
      text: "H.R. 1 made the 2017 federal income tax cuts permanent and added deductions for tips and overtime through 2028.",
      fact: "The Congressional Budget Office estimated the law adds about $3.4 trillion to deficits over ten years.",
      options: [{ t: "Making the tax cuts permanent was worth the added deficit.", v: 1 }, { t: "The cuts should have been narrowed or paid for.", v: -1 }, { t: "Not sure", v: 0 }] },
    { id: "q_school_choice", type: "issue", axis: "school_choice", topic: "Schools",
      text: "The Parental Choice Tax Credit pays private school tuition from state tax dollars. H.R. 1 created a similar federal program.",
      fact: "$252 million claimed in Oklahoma so far. 7.8% went to students who left public schools; $53 million went to households earning over $250,000.",
      options: [{ t: "Keep public money available for private school tuition.", v: 1 }, { t: "End it and keep that money in public schools.", v: -1 }, { t: "Not sure", v: 0 }] },
    { id: "q_public_school_funding", type: "issue", axis: "public_school_funding", topic: "Schools",
      text: "Oklahoma ranks 48th in starting teacher pay and 48th in education overall.",
      fact: "Starting teacher pay is $41,294. The Legislature set a floor with SB 201 in 2025.",
      options: [{ t: "Raise public school funding and teacher pay before cutting taxes further.", v: 1 }, { t: "Hold school funding where it is and prioritize tax cuts.", v: -1 }, { t: "Not sure", v: 0 }] },
    { id: "q_snap_protect", type: "issue", axis: "snap_protect", topic: "Food",
      text: "H.R. 1 shifts SNAP food-benefit costs to states. Oklahoma's share is about $240 million a year starting October 2027, plus $25 million a year in administration now.",
      fact: "The state has not said where that money will come from.",
      options: [{ t: "The federal government should keep paying for SNAP, not shift it to Oklahoma.", v: 1 }, { t: "States should carry more of the cost of SNAP.", v: -1 }, { t: "Not sure", v: 0 }] },
    { id: "q_data_center_pause", type: "issue", axis: "data_center_pause", topic: "Power bills",
      text: "Data centers totaling 6,800 megawatts are planned for Oklahoma. OG&E has asked for a 17.5% residential rate increase, and $3.2 billion in storm bonds are already on bills for 28 years.",
      fact: "The Corporation Commission decides who pays for the grid the data centers need.",
      options: [{ t: "Pause new data centers until the state studies the effect on rates and water.", v: 1 }, { t: "Let them build now; the Legislature can write ratepayer rules as needed.", v: -1 }, { t: "Not sure", v: 0 }] },
    { id: "q_fed_health_costs", type: "issue", axis: "fed_health_costs", topic: "Health",
      text: "Prescription and insurance costs. Some candidates want the federal government to negotiate prices or offer a public plan; others want it to step back.",
      fact: "Insurers have filed for 15 to 22% more on 2027 Oklahoma marketplace premiums.",
      options: [{ t: "The federal government should do more to push health costs down, such as Medicare negotiating drug prices.", v: 1 }, { t: "The federal government should do less and leave prices to the market.", v: -1 }, { t: "Not sure", v: 0 }] },
    { id: "q_tariffs", type: "issue", axis: "tariffs", topic: "Trade",
      text: "Tariffs on imports raise prices on some goods and have triggered retaliation against U.S. farm exports.",
      fact: "Oklahoma soybean exports to China fell 78%. Wheat is near $6 a bushel against $10.50 in 2022.",
      options: [{ t: "Tariffs are worth higher prices and lost exports to protect U.S. industry.", v: 1 }, { t: "Tariffs cost more than they protect; roll them back.", v: -1 }, { t: "Not sure", v: 0 }] },
    { id: "q_farm_support", type: "issue", axis: "farm_support", topic: "Farms",
      text: "Farm supports: H.R. 1 raised crop reference prices and crop insurance support. Some candidates also back property tax relief for agricultural land.",
      fact: "Farm groups supported the H.R. 1 farm provisions.",
      options: [{ t: "Raise farm supports and cut taxes on agricultural land.", v: 1 }, { t: "Farm supports are high enough; spend elsewhere.", v: -1 }, { t: "Not sure", v: 0 }] },
    { id: "q_petition_rights", type: "issue", axis: "petition_rights", topic: "Your vote",
      text: "SB 1027 (2025) caps how many petition signatures can come from any one county, making it harder to put a question on the ballot by petition. Medicaid expansion and medical marijuana both reached the ballot that way.",
      fact: "The Oklahoma Supreme Court heard a challenge in November 2025.",
      options: [{ t: "Keep it as easy as it was to put a question on the ballot by petition.", v: 1 }, { t: "Signature caps are a fair way to make rural counties count.", v: -1 }, { t: "Not sure", v: 0 }] },
    { id: "q_debates", type: "issue", axis: "debates", topic: "Accountability",
      text: "Some candidates on your ballot accepted public debates this year. Some declined every invitation.",
      fact: "In the 5th District, four debate invitations were declined.",
      options: [{ t: "Candidates should accept public debates before the election.", v: 1 }, { t: "Debates do not matter much; the record speaks for itself.", v: -1 }, { t: "Not sure", v: 0 }] },

    /* ---- State questions (reported directly) ---- */
    { id: "sq845", type: "sq", sq: "sq845", topic: "State Question 845",
      text: "State Question 845 changes the Judicial Nominating Commission that screens appellate judges: it removes the rule that no more than a bare majority can be from one party and lifts the limit on lawyers in the at-large seats.",
      fact: "Supporters say it opens the commission to more qualified attorneys. Opponents, including former Attorney General Robert Henry, say it removes the guardrails that keep courts from becoming a partisan prize.",
      options: [{ t: "Keep the current balance rules on the commission.", v: -1, vote: "NO" }, { t: "Change the commission as SQ 845 proposes.", v: 1, vote: "YES" }, { t: "Not sure", v: 0 }] },
    { id: "sq847", type: "sq", sq: "sq847", topic: "State Question 847",
      text: "State Question 847 caps how fast a home's taxable value can rise each year.",
      fact: "The Legislature's own estimate of the cost to schools and counties rose from $42 million to $575 million a year as the measure was debated.",
      options: [{ t: "Cap property valuation growth even if schools and counties lose revenue.", v: 1, vote: "YES" }, { t: "Keep the current valuation rules so school and county funding holds.", v: -1, vote: "NO" }, { t: "Not sure", v: 0 }] }
  ]
};

/* Candidate stances by axis. v: +1 or -1. kind: vote | statement.
 * Every line traces to data/candidates.js or a roll call on this site. */
var RC190 = "https://clerk.house.gov/Votes/2025190";
var HR1_HEALTH = { v: -1, kind: "vote", why: "Voted YES on H.R. 1, which cut federal Medicaid funding to Oklahoma by about $6.7 billion and did not extend the ACA premium credits.", src: RC190 };
var HR1_SNAP   = { v: -1, kind: "vote", why: "Voted YES on H.R. 1, which shifts SNAP benefit and administrative costs to Oklahoma.", src: RC190 };
var HR1_TAX    = { v: 1,  kind: "vote", why: "Voted YES on H.R. 1, which made the 2017 federal tax cuts permanent.", src: RC190 };

window.WR_STANCES = {
  "Mike Mazzei": {
    state_income_tax: { v: 1, kind: "statement", why: "Campaigns on eliminating the state income tax within six years and replacing part of it with a consumer activity tax.", src: "https://www.news9.com/oklahoma-elections/oklahoma-mazzei-munson-tax-plans" },
    school_choice: { v: 1, kind: "statement", why: "Would keep the Parental Choice Tax Credit for private school tuition.", src: "https://www.kosu.org/local-news/2025-04-04/mike-mazzei-launches-bid-for-governor-vows-education-reform-and-tax-cuts" },
    farm_support: { v: 1, kind: "statement", why: "Supports lower property taxes on agricultural land.", src: "https://kfor.com/news/election-headquarters/gubernatorial-candidates-talk-healthcare-taxes-and-more-at-agriculture-forum/" }
  },
  "Cyndi Munson": {
    state_medicaid: { v: 1, kind: "vote", why: "Voted NO on SJR 50, the resolution to take Medicaid expansion out of the constitution, and campaigns on keeping it there.", src: "https://www.newson6.com/oklahoma-politics/cyndi-munson-priorities-governor-oklahoma" },
    state_income_tax: { v: -1, kind: "statement", why: "Opposes across-the-board income tax cuts; backs targeted relief through the Sales Tax Relief Credit and the state Earned Income Tax Credit.", src: "https://www.news9.com/oklahoma-elections/oklahoma-mazzei-munson-tax-plans" },
    school_choice: { v: -1, kind: "statement", why: "Would repeal the Parental Choice Tax Credit.", src: "https://www.news9.com/oklahoma-governors-race-2026/cyndi-munson-governor-race-education-healthcare" },
    public_school_funding: { v: 1, kind: "statement", why: "Names public school funding and teacher pay as her top priority.", src: "https://www.news9.com/oklahoma-governors-race-2026/cyndi-munson-governor-race-education-healthcare" },
    snap_protect: { v: 1, kind: "statement", why: "Has criticized the federal SNAP cost shift as a bill handed to the state.", src: "https://www.news9.com/oklahoma-governors-race-2026/cyndi-munson-governor-race-education-healthcare" },
    data_center_pause: { v: 1, kind: "statement", why: "Would sign a day-one executive order pausing new data center projects.", src: "https://www.news9.com/oklahoma-city-news/munson-outlines-priorities-criticizes-opponent-in-governors-race" },
    petition_rights: { v: 1, kind: "vote", why: "Voted NO on SB 1027, the petition signature caps.", src: "https://www.oklegislature.gov/BillInfo.aspx?Bill=SB1027&Session=2500" }
  },
  "Brad Boles": {
    data_center_pause: { v: -1, kind: "statement", why: "Says the commission should enforce the rules the Legislature writes rather than pause projects itself; filed HB 2992 on ratepayer protection.", src: "https://oklahomavoice.com/2026/10/05/corporation-commission-candidates-differ-on-oklahoma-data-center-regulation-utility-rates/" }
  },
  "Rhonda Eastman": {
    data_center_pause: { v: 1, kind: "statement", why: "Would pause new data center construction until the commission studies the effect on rates and the grid.", src: "https://oklahomavoice.com/2026/10/05/corporation-commission-candidates-differ-on-oklahoma-data-center-regulation-utility-rates/" }
  },
  "Kevin Hern": {
    fed_medicaid: HR1_HEALTH, snap_protect: HR1_SNAP, fed_tax_cuts: HR1_TAX,
    tariffs: { v: 1, kind: "statement", why: "Has supported the administration's tariff policy.", src: "https://republicanpolicy.house.gov/media/press-releases/house-votes-for-one-big-beautiful-bill-act-codifying-the-trump-agenda" }
  },
  "N'Kiyla Jasmine Thomas": {
    fed_health_costs: { v: 1, kind: "statement", why: "Supports Medicare for All.", src: "https://www.jasmineforok.com/" },
    snap_protect: { v: 1, kind: "statement", why: "Opposes the SNAP cost shift.", src: "https://www.nbcnews.com/politics/2026-election/nkiyla-jasmine-thomas-wins-oklahoma-senate-primary-democrat-rcna593618" },
    farm_support: { v: 1, kind: "statement", why: "Lists supporting farmers and ranchers and rural infrastructure as campaign planks.", src: "https://www.jasmineforok.com/about" }
  },
  "Mark Tedford": {
    fed_tax_cuts: { v: 1, kind: "statement", why: "Campaigns on extending the federal tax cuts.", src: "https://ballotpedia.org/Mark_Tedford" }
  },
  "John Croisant": {
    fed_medicaid: { v: 1, kind: "statement", why: "Opposed H.R. 1, citing its Medicaid cuts and their effect on Tulsa hospitals.", src: "https://theblackwallsttimes.com/2025/07/03/john-croisant-slams-kevin-hern-for-backing-trumps-mega-bill/" },
    school_choice: { v: -1, kind: "statement", why: "Public school board member; opposes federal private-school vouchers.", src: "https://theblackwallsttimes.com/2025/07/03/john-croisant-slams-kevin-hern-for-backing-trumps-mega-bill/" },
    public_school_funding: { v: 1, kind: "statement", why: "Tulsa Public Schools board member and teacher; campaigns on public school support.", src: "https://theblackwallsttimes.com/2025/07/03/john-croisant-slams-kevin-hern-for-backing-trumps-mega-bill/" }
  },
  "Josh Brecheen": { fed_medicaid: HR1_HEALTH, snap_protect: HR1_SNAP, fed_tax_cuts: HR1_TAX },
  "Frank Lucas": {
    fed_medicaid: HR1_HEALTH, snap_protect: HR1_SNAP,
    farm_support: { v: 1, kind: "vote", why: "Voted YES on H.R. 1, which raised crop reference prices and crop insurance support.", src: RC190 }
  },
  "Tom Cole": { fed_medicaid: HR1_HEALTH, snap_protect: HR1_SNAP },
  "Stephanie Bice": {
    fed_medicaid: HR1_HEALTH, snap_protect: HR1_SNAP, fed_tax_cuts: HR1_TAX,
    debates: { v: -1, kind: "statement", why: "Declined four debate invitations on health care, education, affordability and data centers.", src: "https://jenanelson.com/press-release/jena-nelson-challenges-opponent-stephanie-bice-to-debate/" }
  },
  "Jena Nelson": {
    fed_medicaid: { v: 1, kind: "statement", why: "Opposed H.R. 1's Medicaid cuts; campaigns on protecting Medicare and Medicaid.", src: "https://www.kosu.org/oklahoma-cd5-election-preview-2026" },
    fed_health_costs: { v: 1, kind: "statement", why: "Would cap insulin prices and expand Medicare's power to negotiate drug prices.", src: "https://www.readfrontier.org/stories/jena-nelson-on-trump-stephanie-bice-and-her-plan-to-win-oklahomas-5th-district/" },
    school_choice: { v: -1, kind: "statement", why: "Opposes the national private-school voucher program created in H.R. 1.", src: "https://www.readfrontier.org/stories/jena-nelson-on-trump-stephanie-bice-and-her-plan-to-win-oklahomas-5th-district/" },
    public_school_funding: { v: 1, kind: "statement", why: "2020 Oklahoma Teacher of the Year; would restore the federal Department of Education.", src: "https://www.readfrontier.org/stories/jena-nelson-on-trump-stephanie-bice-and-her-plan-to-win-oklahomas-5th-district/" },
    debates: { v: 1, kind: "statement", why: "Challenged her opponent to four public debates.", src: "https://jenanelson.com/press-release/jena-nelson-challenges-opponent-stephanie-bice-to-debate/" }
  }
};

/* Short labels for the axes, used in the results. */
window.WR_AXES = {
  state_medicaid: "Medicaid expansion in the constitution",
  fed_medicaid: "Federal Medicaid funding and ACA credits",
  state_income_tax: "State income tax",
  fed_tax_cuts: "Federal tax cuts",
  school_choice: "Public money for private tuition",
  public_school_funding: "Public school funding and teacher pay",
  snap_protect: "Who pays for SNAP",
  data_center_pause: "Data centers and power bills",
  fed_health_costs: "Federal action on health costs",
  tariffs: "Tariffs",
  farm_support: "Farm supports",
  petition_rights: "Petition rights",
  debates: "Public debates"
};
