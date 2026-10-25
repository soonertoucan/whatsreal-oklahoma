/* What's Real — who is on the Oklahoma ballot, November 3, 2026, and where they stand.
 *
 * Each position carries a `kind`:
 *   "vote"      a recorded vote. The strongest evidence of what someone will do.
 *   "statement" the candidate's own platform, speech or campaign page.
 *   "none"      we looked and found no verified public position. We say so
 *               rather than guess. If you find one, add it with a source.
 *
 * issue keys match WR_PRIORITIES[*].issue:
 *   health | cost | farm | taxes | schools | food | honest
 */
window.WR_RACES = [
  {
    id: "governor",
    office: "Governor of Oklahoma",
    note: "Open seat. Governor Stitt is term-limited. The last poll (Cross Timbers, Oct 7–12) had Mazzei 39%, Munson 36% among likely voters, inside its margin of error with a very small sample.",
    candidates: [
      {
        name: "Mike Mazzei", party: "R",
        bio: "Financial adviser from Tulsa. State senator 2004–2016, chaired the Senate Finance Committee. Secretary of Budget under Governor Stitt.",
        site: "https://mikeforok.com/",
        positions: [
          { issue: "taxes", kind: "statement", text: "Eliminate the state income tax within six years. Cut the rate from 4.5% to 3% immediately, then let voters replace the rest with a 'consumer activity tax.' Abolish property taxes for seniors and veterans.", source: { name: "Campaign FAQ; News 9 tax-plan comparison", url: "https://www.news9.com/oklahoma-elections/oklahoma-mazzei-munson-tax-plans" } },
          { issue: "schools", kind: "statement", text: "Appoint a statewide literacy director and put up to $150 million into phonics-based reading. Keep the Parental Choice Tax Credit for private school tuition. Expand CareerTech to clear a 75,000-student waiting list.", source: { name: "KOSU campaign launch; campaign FAQ", url: "https://www.kosu.org/local-news/2025-04-04/mike-mazzei-launches-bid-for-governor-vows-education-reform-and-tax-cuts" } },
          { issue: "health", kind: "statement", text: "Says he would 'address rural health care and insurance costs.' No detailed plan published. No stated position found on keeping Medicaid expansion in the state constitution.", source: { name: "News 9 priorities interview", url: "https://www.news9.com/oklahoma-elections/mike-mazzei-priorities-governor-oklahoma" } },
          { issue: "cost", kind: "statement", text: "Argues eliminating the income tax is the main way to leave more money in households. Has not published an affordability plan separate from tax policy.", source: { name: "Oklahoma Voice profile", url: "https://oklahomavoice.com/2026/06/03/mazzei-wants-to-bring-financial-skills-to-governors-office/" } },
          { issue: "farm", kind: "statement", text: "Supports lower property taxes on agricultural land. Spoke at the state agriculture forum; no published farm program beyond tax policy.", source: { name: "KFOR agriculture forum coverage", url: "https://kfor.com/news/election-headquarters/gubernatorial-candidates-talk-healthcare-taxes-and-more-at-agriculture-forum/" } },
          { issue: "food", kind: "none", text: "No verified position found on how the state would pay the SNAP cost shift." },
          { issue: "power", kind: "none", text: "No verified position found on data centers, the storm bonds on utility bills, or OG&E's pending 17.5% residential rate request." },
          { issue: "honest", kind: "none", text: "No verified position found on State Question 845 or judicial selection. Served as Governor Stitt's budget secretary in 2019–2020, before the GEER grant audit findings; no finding names him." }
        ]
      },
      {
        name: "Cyndi Munson", party: "D",
        bio: "State representative from Oklahoma City since 2015. House Minority Leader. The first Asian American woman elected to the Oklahoma Legislature.",
        site: "https://www.cyndimunson.com/",
        positions: [
          { issue: "taxes", kind: "statement", text: "Opposes across-the-board income tax cuts, saying they mostly benefit high earners and drain revenue. Supports targeted relief through the Sales Tax Relief Credit and the state Earned Income Tax Credit. Would end the private-school tax credit and review corporate incentives.", source: { name: "News 9 tax-plan comparison", url: "https://www.news9.com/oklahoma-elections/oklahoma-mazzei-munson-tax-plans" } },
          { issue: "schools", kind: "statement", text: "Top priority. More public school funding, higher teacher and support-staff pay, repeal the Parental Choice Tax Credit, expand Oklahoma's Promise scholarships, free school meals.", source: { name: "News 9 education and health care interview", url: "https://www.news9.com/oklahoma-governors-race-2026/cyndi-munson-governor-race-education-healthcare" } },
          { issue: "health", kind: "statement", text: "Keep Medicaid expansion in the state constitution where voters put it. Steer federal Rural Health Transformation money to small hospitals with local administrators deciding how it is spent.", source: { name: "NewsOn6 priorities interview", url: "https://www.newson6.com/oklahoma-politics/cyndi-munson-priorities-governor-oklahoma" } },
          { issue: "cost", kind: "statement", text: "Names groceries, gasoline and utilities as the affordability problem. Would sign a day-one executive order pausing new data center projects, citing their effect on electric rates and water.", source: { name: "News 9 priorities coverage", url: "https://www.news9.com/oklahoma-city-news/munson-outlines-priorities-criticizes-opponent-in-governors-race" } },
          { issue: "farm", kind: "statement", text: "Ties rural hospital survival to keeping rural towns viable. Spoke at the state agriculture forum; no separate published farm program.", source: { name: "KFOR agriculture forum coverage", url: "https://kfor.com/news/election-headquarters/gubernatorial-candidates-talk-healthcare-taxes-and-more-at-agriculture-forum/" } },
          { issue: "food", kind: "statement", text: "Supports free school meals statewide. Has criticized the federal SNAP cost shift as a bill handed to the state.", source: { name: "News 9 education and health care interview", url: "https://www.news9.com/oklahoma-governors-race-2026/cyndi-munson-governor-race-education-healthcare" } },
          { issue: "power", kind: "statement", text: "Would sign a day-one executive order pausing new data center projects, citing their effect on electric rates and water.", source: { name: "News 9 priorities coverage", url: "https://www.news9.com/oklahoma-city-news/munson-outlines-priorities-criticizes-opponent-in-governors-race" } },
          { issue: "honest", kind: "none", text: "No verified position found on State Question 845. As House Minority Leader, voted against SB 1027 (petition signature caps) and against SJR 50 (removing Medicaid expansion from the constitution)." }
        ]
      },
      { name: "Robert Brooks", party: "I", bio: "Independent.", positions: [] },
      { name: "Orlando Bush", party: "I", bio: "Independent.", positions: [] },
      { name: "Jerry Griffin", party: "I", bio: "Independent.", positions: [] }
    ]
  },
  {
    id: "corpcomm",
    office: "Corporation Commission",
    note: "Open seat. Todd Hiett is term-limited. The three-member commission sets the rates OG&E, PSO and ONG can charge you, approved the $3.2 billion in storm bonds on your bill, and will decide who pays for the grid the data centers need.",
    candidates: [
      {
        name: "Brad Boles", party: "R",
        bio: "State representative from Marlow.",
        positions: [
          { issue: "power", kind: "statement", text: "Filed HB 2992, the Data Center Consumer Ratepayer Protection Act, in the House. Says the commission's job is to enforce whatever rules the Legislature enacts rather than set its own data-center policy.", source: { name: "Oklahoma Voice candidate comparison", url: "https://oklahomavoice.com/2026/10/05/corporation-commission-candidates-differ-on-oklahoma-data-center-regulation-utility-rates/" } },
          { issue: "honest", kind: "none", text: "No stated position found on the legislators' Supreme Court challenge to the storm-bond orders." }
        ]
      },
      {
        name: "Rhonda Eastman", party: "D",
        bio: "Democratic nominee.",
        positions: [
          { issue: "power", kind: "statement", text: "Would pause new data center construction until the commission studies the effect on rates and the grid.", source: { name: "Oklahoma Voice candidate comparison", url: "https://oklahomavoice.com/2026/10/05/corporation-commission-candidates-differ-on-oklahoma-data-center-regulation-utility-rates/" } },
          { issue: "honest", kind: "none", text: "No stated position found on the storm-bond challenge." }
        ]
      }
    ]
  },
  {
    id: "senate",
    office: "U.S. Senate",
    note: "Special election to fill the seat Markwayne Mullin left. Appointed Sen. Alan Armstrong is not running. Hern has raised nearly $10 million to Thomas's roughly $60,000.",
    candidates: [
      {
        name: "Kevin Hern", party: "R",
        bio: "U.S. Representative for Tulsa's 1st District since 2019. Former McDonald's franchise owner. Chairs the House Republican Policy Committee.",
        site: "https://hern.house.gov/",
        positions: [
          { issue: "health", kind: "vote", text: "Voted YES on H.R. 1 (July 3, 2025), the law that cuts federal Medicaid funding to Oklahoma by an estimated $6.7 billion and did not extend the ACA premium tax credits.", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } },
          { issue: "food", kind: "vote", text: "Voted YES on H.R. 1, which shifts SNAP benefit and administrative costs to Oklahoma (about $240 million a year in benefits from 2027, plus $25 million a year in administration now).", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } },
          { issue: "taxes", kind: "vote", text: "Voted YES on H.R. 1, which made the 2017 federal income tax cuts permanent and added deductions for tips and overtime through 2028.", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } },
          { issue: "cost", kind: "statement", text: "Says the law's tax provisions put money back in families' pockets. Has supported the administration's tariff policy.", source: { name: "House Republican Policy Committee statement", url: "https://republicanpolicy.house.gov/media/press-releases/house-votes-for-one-big-beautiful-bill-act-codifying-the-trump-agenda" } },
          { issue: "farm", kind: "none", text: "No separate published farm program found. See the H.R. 1 vote for SNAP, which is tied to the farm bill." },
          { issue: "schools", kind: "none", text: "No verified federal education position found beyond support for the national private-school tax credit in H.R. 1." },
          { issue: "honest", kind: "none", text: "No verified position found on emoluments, press access or the DHS voter investigations." }
        ]
      },
      {
        name: "N'Kiyla Jasmine Thomas", party: "D",
        bio: "Military spouse from the Lawton area. Describes herself as a democratic socialist; is not a DSA member and says she does not support defunding the Defense Department.",
        site: "https://www.jasmineforok.com/",
        positions: [
          { issue: "health", kind: "statement", text: "Supports Medicare for All. Lists the nursing shortage and women's health care as first priorities.", source: { name: "Campaign site; NonDoc runoff coverage", url: "https://nondoc.com/2026/08/25/nkiyla-jasmine-thomas-wins-u-s-senate-runoff-becomes-oklahomas-first-democratic-socialist-nominee/" } },
          { issue: "food", kind: "statement", text: "Supports universal childcare and paid parental leave. Opposes the SNAP cost shift.", source: { name: "NBC News primary coverage", url: "https://www.nbcnews.com/politics/2026-election/nkiyla-jasmine-thomas-wins-oklahoma-senate-primary-democrat-rcna593618" } },
          { issue: "farm", kind: "statement", text: "Lists 'supporting our farmers and ranchers with practical policies' and rural infrastructure (roads, bridges, utilities) as campaign planks.", source: { name: "Campaign site", url: "https://www.jasmineforok.com/about" } },
          { issue: "taxes", kind: "none", text: "No detailed federal tax plan published." },
          { issue: "cost", kind: "none", text: "No specific affordability plan published beyond health care and childcare." },
          { issue: "schools", kind: "none", text: "No verified federal education position found." },
          { issue: "honest", kind: "none", text: "No verified position found on emoluments or press access." }
        ]
      },
      { name: "Sevier White", party: "L", bio: "Libertarian.", positions: [] }
    ]
  },
  {
    id: "house",
    office: "U.S. House of Representatives",
    note: "All five Oklahoma seats are on the ballot. Pick your district. Every Republican incumbent voted YES on H.R. 1 (Roll Call 190, July 3, 2025). Only the 5th District has public polling: a Nelson-campaign poll in September had Bice 48%, Nelson 43%.",
    districts: [
      {
        id: "ok1", label: "District 1 (Tulsa)", area: "Tulsa, Broken Arrow, Washington County",
        candidates: [
          { name: "Mark Tedford", party: "R", bio: "State representative. Open seat; Kevin Hern is running for Senate.", positions: [
            { issue: "health", kind: "none", text: "No federal voting record. No verified position found on Medicaid funding or ACA credits." },
            { issue: "food", kind: "none", text: "No verified position found on the SNAP cost shift." },
            { issue: "taxes", kind: "statement", text: "Campaigns on extending the federal tax cuts.", source: { name: "Ballotpedia candidate profile", url: "https://ballotpedia.org/Mark_Tedford" } }
          ] },
          { name: "John Croisant", party: "D", bio: "Tulsa Public Schools board member and teacher.", positions: [
            { issue: "health", kind: "statement", text: "Opposed H.R. 1, citing its Medicaid cuts and their effect on Tulsa hospitals.", source: { name: "Black Wall Street Times", url: "https://theblackwallsttimes.com/2025/07/03/john-croisant-slams-kevin-hern-for-backing-trumps-mega-bill/" } },
            { issue: "schools", kind: "statement", text: "Public school board member; opposes federal private-school vouchers.", source: { name: "Black Wall Street Times", url: "https://theblackwallsttimes.com/2025/07/03/john-croisant-slams-kevin-hern-for-backing-trumps-mega-bill/" } }
          ] }
        ]
      },
      {
        id: "ok2", label: "District 2 (eastern Oklahoma)", area: "Muskogee, McAlester, Durant, Tahlequah",
        candidates: [
          { name: "Josh Brecheen", party: "R", bio: "Incumbent since 2023. House Freedom Caucus.", positions: [
            { issue: "health", kind: "vote", text: "Voted YES on H.R. 1 (Medicaid cuts; no ACA credit extension). The 2nd District has the state's highest share of residents on SoonerCare.", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } },
            { issue: "food", kind: "vote", text: "Voted YES on H.R. 1 (SNAP cost shift to Oklahoma).", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } },
            { issue: "taxes", kind: "vote", text: "Voted YES on H.R. 1 (2017 tax cuts made permanent).", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } }
          ] },
          { name: "Brandon Wade", party: "D", bio: "Democratic nominee.", positions: [
            { issue: "health", kind: "none", text: "No verified published positions found. Check the candidate's own site before voting." }
          ] }
        ]
      },
      {
        id: "ok3", label: "District 3 (western and northern Oklahoma)", area: "Enid, Stillwater, Woodward, the Panhandle",
        candidates: [
          { name: "Frank Lucas", party: "R", bio: "Incumbent since 1994. Former House Agriculture Committee chair.", positions: [
            { issue: "health", kind: "vote", text: "Voted YES on H.R. 1 (Medicaid cuts; no ACA credit extension). The 3rd District holds most of the rural hospitals at immediate risk.", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } },
            { issue: "farm", kind: "vote", text: "Voted YES on H.R. 1, which raised crop reference prices and farm aid while shifting SNAP costs to states. Farm groups backed the farm provisions.", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } },
            { issue: "food", kind: "vote", text: "Voted YES on H.R. 1 (SNAP cost shift to Oklahoma).", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } }
          ] },
          { name: "Suzie Byrd", party: "D", bio: "Newspaper reporter.", positions: [
            { issue: "health", kind: "none", text: "No verified published positions found. Check the candidate's own site before voting." }
          ] }
        ]
      },
      {
        id: "ok4", label: "District 4 (south-central Oklahoma)", area: "Norman, Moore, Lawton, Ada, Ardmore",
        candidates: [
          { name: "Tom Cole", party: "R", bio: "Incumbent since 2003. Chair of the House Appropriations Committee.", positions: [
            { issue: "health", kind: "vote", text: "Voted YES on H.R. 1 (Medicaid cuts; no ACA credit extension).", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } },
            { issue: "food", kind: "vote", text: "Voted YES on H.R. 1 (SNAP cost shift to Oklahoma).", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } },
            { issue: "honest", kind: "statement", text: "As Appropriations chair, controls the spending bills. The GAO found the 256,000 federal job cuts largely bypassed Congress's spending authority.", source: { name: "GAO, via CBPP", url: "https://www.cbpp.org/research/federal-budget/administrations-radical-personnel-cuts-bypassed-congress-and-lacked" } }
          ] },
          { name: "Mitchell Jacob", party: "D", bio: "Democratic nominee.", positions: [
            { issue: "health", kind: "none", text: "No verified published positions found. Check the candidate's own site before voting." }
          ] }
        ]
      },
      {
        id: "ok5", label: "District 5 (Oklahoma City)", area: "Oklahoma City, Edmond, Shawnee, Seminole",
        candidates: [
          { name: "Stephanie Bice", party: "R", bio: "Incumbent since 2021.", positions: [
            { issue: "health", kind: "vote", text: "Voted YES on H.R. 1. The Oklahoma Hospital Association estimates the law costs the state about $7 billion and the 5th District about $3.2 billion in Medicaid funding.", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } },
            { issue: "food", kind: "vote", text: "Voted YES on H.R. 1 (SNAP cost shift to Oklahoma).", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } },
            { issue: "taxes", kind: "vote", text: "Voted YES on H.R. 1 (2017 tax cuts made permanent; tip and overtime deductions through 2028).", source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" } },
            { issue: "schools", kind: "none", text: "Declined four debate invitations on health care, education, affordability and data centers." }
          ] },
          { name: "Jena Nelson", party: "D", bio: "Oklahoma's 2020 Teacher of the Year. Ran for State Superintendent in 2022.", site: "https://jenanelson.com/", positions: [
            { issue: "cost", kind: "statement", text: "Says lowering the cost of living is her first priority. Would cap insulin prices and expand Medicare's power to negotiate drug prices.", source: { name: "The Frontier interview", url: "https://www.readfrontier.org/stories/jena-nelson-on-trump-stephanie-bice-and-her-plan-to-win-oklahomas-5th-district/" } },
            { issue: "health", kind: "statement", text: "Protect Medicare and Medicaid; opposed H.R. 1's Medicaid cuts; improve veterans' health care.", source: { name: "KOSU district preview", url: "https://www.kosu.org/oklahoma-cd5-election-preview-2026" } },
            { issue: "schools", kind: "statement", text: "Restore the federal Department of Education. Opposes the national private-school voucher program created in H.R. 1.", source: { name: "The Frontier interview", url: "https://www.readfrontier.org/stories/jena-nelson-on-trump-stephanie-bice-and-her-plan-to-win-oklahomas-5th-district/" } },
            { issue: "honest", kind: "statement", text: "Challenged her opponent to four public debates. None were accepted.", source: { name: "Campaign press release", url: "https://jenanelson.com/press-release/jena-nelson-challenges-opponent-stephanie-bice-to-debate/" } }
          ] }
        ]
      }
    ]
  }
];

window.WR_QUESTIONS = [
  {
    id: "sq845", title: "State Question 845", short: "Who picks Oklahoma's judges",
    issue: "honest",
    what: "Changes the Judicial Nominating Commission, the 15-member panel that screens candidates for Oklahoma's appellate courts. Removes the rule that no more than a bare majority can be from one party, removes the limit on lawyers and their relatives in the at-large seats, updates districts, and allows members to serve up to 12 years.",
    yes: "Supporters say it opens the commission to more qualified attorneys and keeps institutional knowledge.",
    no: "Opponents, including former Attorney General Robert Henry, say it removes the guardrails that keep the courts from becoming a partisan prize.",
    source: { name: "FOX23 in-depth explainer; Oklahoma Policy Institute", url: "https://fox23.com/news/in-depth/in-depth-oklahoma-voters-face-2-state-questions-on-property-taxes-and-judicial-selection" }
  },
  {
    id: "sq847", title: "State Question 847", short: "Property tax growth cap",
    issue: "taxes",
    what: "Lowers the yearly cap on how much a property's assessed value can rise: from 3% to 1.75% for homesteads and farmland, from 5% to 4% for everything else, with tiered caps for seniors above the senior-freeze income limit. Takes effect in 2027.",
    yes: "Oklahoma Farm Bureau and the sponsoring senators say it protects homeowners and farmers from assessment spikes.",
    no: "School, county and CareerTech officials say it drains the local revenue that funds them. One estimate: $42 million in year one, $575 million a year by year ten. It caps valuation growth, not your bill, so it does not guarantee lower taxes.",
    source: { name: "NonDoc explainer; Oklahoma Policy Institute", url: "https://nondoc.com/2026/10/09/sq-847-voters-to-consider-lowering-maximum-property-valuation-increases/" }
  }
];

/* H.R. 1 in Oklahoma terms. Used in the "what the vote meant" panel. */
window.WR_HR1 = {
  title: "H.R. 1, the 2025 federal budget law",
  passed: "Passed the House 218–214 on July 3, 2025 (Roll Call 190) and the Senate 51–50 on July 1. Signed July 4, 2025.",
  oklahoma_yes: ["Stephanie Bice", "Josh Brecheen", "Tom Cole", "Kevin Hern", "Frank Lucas", "James Lankford (Senate)", "Markwayne Mullin (Senate)"],
  effects: [
    { label: "Medicaid", text: "Oklahoma loses an estimated $6.7 billion in federal Medicaid funding; work-reporting rules and twice-yearly eligibility checks begin 2027.", source: "Oklahoma Hospital Association" },
    { label: "SNAP", text: "Oklahoma pays 75% of administrative costs from October 2026 and about $240 million a year in benefits from October 2027.", source: "Oklahoma Human Services" },
    { label: "Health premiums", text: "Enhanced ACA premium credits were not extended. Oklahoma premiums rose 20 to 21% for 2026 and insurers filed for 15 to 22% more for 2027.", source: "Oklahoma Insurance Department" },
    { label: "Taxes", text: "The 2017 individual income tax cuts became permanent. New deductions for tips, overtime and seniors run through 2028.", source: "Public Law 119-21" },
    { label: "Farms", text: "Crop reference prices and crop insurance support increased. Farm groups backed these provisions.", source: "Public Law 119-21" },
    { label: "Debt", text: "Raised the federal debt limit by $5 trillion. The Congressional Budget Office estimated the law adds roughly $3.4 trillion to deficits over ten years.", source: "Congressional Budget Office" }
  ],
  source: { name: "House Clerk, Roll Call 190", url: "https://clerk.house.gov/Votes/2025190" }
};
