export type FunnyBizzSliderCategory = 'Funny' | 'Featured Article' | 'Advertorial';

export type FunnyBizzItem = {
  id: string;
  hidden?: boolean;
  publishedAt?: string;
  sliderCategory: FunnyBizzSliderCategory;
  category: string;
  title: string;
  titleHtml?: string;
  commentaryTitle?: string;
  commentaryCopyHtml?: string;
  image: string;
  alt: string;
  copy: string;
  archiveSummary: string;
  copyHtml?: string;
  domains?: readonly (readonly [string, string])[];
  closing?: string;
  destinationUrl?: string;
  ctaLabel?: string;
  advertiser?: string;
  seoTitle?: string;
  metaDescription?: string;
  sources?: readonly { label: string; url: string }[];
  illustrationDisclosure?: string;
  hideCommentaryReferences?: boolean;
};

const lexusCommentary = `Lexus commissioned Brooklyn-based art collective MSCHF to transform two electrified vehicles into extraordinary sculptures for its September 2026 Motomorphosis exhibition in New York.

<strong>Why?</strong> By displaying the distorted sculptures alongside the original production vehicles, Lexus demonstrated imagination and artistic possibility beyond conventional automotive engineering.

<strong>The business insight:</strong> Not every marketing investment needs to generate immediate sales. Memorable experiences can strengthen brand recall, distinctiveness and long-term consumer preference. In crowded markets, brands that stand out and stay in people's minds gain an advantage when purchasing decisions are eventually made.`;

const technifyCommentary = `The traditional wine merchant knew his customers. Today's AI-powered systems can analyse purchasing patterns across thousands of customers. <strong>The underlying commercial thinking is familiar; what changes is the scale.</strong>

The same principle extends well beyond customer analytics. Negotiation, buying clubs, barter and other long-established business practices are finding new possibilities through software and AI.

For business owners, the opportunity may be hiding in a familiar process that once depended on individual memory, manual coordination or considerable time.

<strong>What becomes commercially possible when technology removes those limitations?</strong>

Our article, <em>Don't Invent It. Technify It.</em>, explores the possibilities.`;

const pulseCommentary = `The maker describes the <strong>Pulse Ring</strong>, priced from <strong>US$229</strong>, as a wearable with no sensors, biometrics or tracking. It uses tactile reminders to prompt a pause.

That positions Pulse against smart rings built around continuous measurement. The offer is simplicity and privacy rather than more data.

<strong>The business lesson:</strong> removing features can sharpen a proposition when the remaining benefit matters to a defined customer. Pulse is testing whether less technology can command a premium in a crowded wearable market.`;

const mbappeCommentary = `Kylian Mbappé’s move from Nike to Swiss sportswear brand On involves more than a new endorsement. According to <a href="https://www.reuters.com/sports/swiss-sportswear-brand-signs-french-footballer-mbapp-nike-2026-09-18/" target="_blank" rel="noopener noreferrer">Reuters</a>, the agreement combines <strong>cash and an equity component</strong>, although its size and conditions have not been disclosed.

<a href="https://press.on-running.com/on-enters-football-alongside-kylian-mbappe" target="_blank" rel="noopener noreferrer">On’s entry into football</a> involves Mbappé contributing to product development, with Thierry Henry as Director of Football. The company's first football boots are planned for 2027.

<strong>For business leaders and managers:</strong> Strategic partnerships should deliver measurable commercial value, not just publicity. Equity can help align long-term interests.

<strong>For athletes and sports personalities:</strong> Equity offers an opportunity to share in the value they help create, beyond endorsement fees — but also brings exposure to business risks.`;

const paperCommentary = `Trump’s fictional “AI cancelled, SI adopted” executive order is satire. The business question is whether AI can improve the finance function—or merely add another system to manage.

<strong>Start with the pain point, not the technology.</strong> Unmatched invoices, missing records and unexplained variances are good places to look first. Some can already be handled by accounting software or conventional automation, so buying AI before checking existing capabilities may simply add cost and complexity.

<strong>From paper to ERP—and everything in between—the right starting point depends on your existing systems.</strong> Which improvements justify new tools, and which need better processes?`;

const kraCommentary = `KRA preparing your tax return sounds convenient. But will it make life easier?

<strong>The upside:</strong> Less paperwork, fewer manual errors and potentially faster filing.

<strong>The downside:</strong> KRA's information may not capture every legitimate expense, allowance or adjustment. Differences with your own records could mean more reconciliation work.

For businesses, the real test is whether their records are accurate, complete and readily accessible.

Good systems make verification easier. Fragmented records, disconnected spreadsheets and weak controls can turn convenience into another headache.

<strong>The bigger question:</strong> Are your business systems ready for increasingly automated tax administration?

<a href="/from-paper-to-erp-ai-finance-function/">Explore how AI can improve the way businesses manage information — starting with what they already have.</a>`;

const kenyaPowerCommentary = `Kenya Power reported nearly KSh25 billion in after-tax profit for 2025/26. Yet <a href="https://www.epra.go.ke/statistics-0" target="_blank" rel="noopener noreferrer">EPRA's figures</a> show customers experienced an average of 3.91 power interruptions per month, up from 3.67 the previous year.

<strong>The business insight:</strong> A healthier bottom line does not automatically mean better service. Boards should ask whether financial gains are accompanied by improvements customers can experience — greater reliability, billing accuracy and faster complaint resolution.

<strong>The question for any business:</strong> Does your monthly management pack give customer experience the same attention as profitability?`;

const victoriasSecretCommentary = `<a href="https://www.barrons.com/articles/victorias-secret-stock-glp1-drugs-weight-loss-4cb4b8f1" target="_blank" rel="noopener noreferrer">Wall Street</a> sees a potential opportunity for Victoria's Secret as users of GLP-1 weight-loss drugs replace their wardrobes. But the company's CEO said in June 2026 that these drugs had so far made little difference to sales.

<strong>The business insight:</strong> A plausible growth story can attract investors before the expected sales materialise. Smaller clothing sizes do not necessarily mean greater spending, and replacing a wardrobe may be a one-off purchase rather than sustained demand.

<strong>The bigger question:</strong> When markets anticipate a new growth opportunity, how much is supported by evidence — and how much remains an attractive assumption?`;

const golfScorecardCommentary = `On the golf course, a second stroke cannot turn a missed first attempt into a hole-in-one. In business, however, a missed target can be presented as success by highlighting a different measure.

<strong>The business insight:</strong> Additional measures can add context, but they should not distract from an unmet target. Management should explain the shortfall and any achievements elsewhere.

Good reporting distinguishes between meeting the agreed scorecard and changing it after the result.`;

const executiveCheckUpCommentary = `An annual report can show higher sales, improved profits and stronger cash flow. All are encouraging. But profits may include valuation gains, cash flow may benefit from working-capital movements, and returns on capital may still be disappointing.

The results of Tesco, Sainsbury's, Kakuzi and Sasini illustrate why <strong>headline figures rarely tell the whole story</strong>. Our <strong>five-dimension Business Improvement Scorecard</strong> examines earnings quality, capital productivity, cash generation, competitive strength and future capability, including what published accounts cannot establish.

For owners and CEOs, the real value of an annual review lies in <strong>the decisions it changes</strong> before the next business plan.`;

export const funnyBizzItems: readonly FunnyBizzItem[] = [
  {
    id: 'executive-business-check-up',
    publishedAt: '2026-11-11',
    sliderCategory: 'Featured Article',
    category: 'Business Performance Reviews',
    title: 'What an Annual Report Can Reveal',
    image: '/images/executive-business-check-up-annual-report.jpg',
    alt: 'Microscope examining a glass slide beside an open annual business report with rising performance charts, illustrating a deeper business check-up.',
    commentaryCopyHtml: executiveCheckUpCommentary,
    copy: executiveCheckUpCommentary.replace(/<[^>]*>/g, ''),
    archiveSummary: "Rising sales and profits can still hide weak capital returns. My five-dimension scorecard shows owners and CEOs what to examine more closely.",
    seoTitle: 'Executive Business Check-Up | Annual Report Analysis | Murtaza Insights',
    metaDescription: 'A stronger annual report does not always mean a stronger business. Examine earnings quality, capital productivity and cash flow through real company examples.',
    illustrationDisclosure: 'Conceptual illustration.',
    destinationUrl: '/your-sales-grew-but-did-your-business-actually-improve/',
    ctaLabel: 'Read the Article'
  },
  {
    id: 'budget-sales-target',
    publishedAt: '2026-11-08',
    sliderCategory: 'Featured Article',
    category: 'Business Analysis & Strategy',
    title: 'Should a Sales Target Be Your Budget?',
    image: '/images/budget-sales-target-boardroom.jpg',
    alt: 'Two boardroom scenes: the approved budget projects rising sales and expenses; six months later, sales fall while expenses stay flat.',
    archiveSummary: "A sales shortfall can leave costs already committed. I compare two ways to keep growth ambition without treating a target as automatic spending authority.",
    seoTitle: 'Sales Targets and Financial Budgets | Biz Buzz',
    metaDescription: 'What happens when an ambitious sales target drives spending? Explore two budget approaches that keep growth ambitions separate from authority to spend.',
    copy: 'Not always. One option pairs a realistic Base Budget with a separately approved Growth Programme. Another uses two complete financial budgets: Base and Target.\n\nWhen one ambitious budget drives expenditure, a sales shortfall can leave costs committed before the expected revenue arrives. The problem isn’t ambition; it’s treating a sales target as automatic spending authority. Some costs must come early; others can be staged.\n\nMurtaza Insights compares both approaches for boards and senior executives of mid-sized businesses, using an illustrative KSh example to examine profitability, expenditure controls and liquidity.',
    commentaryCopyHtml: "Not always. One option pairs a realistic Base Budget with a separately approved Growth Programme. Another uses two complete budgets: Base and Target.\n\nWhen one ambitious budget drives spending, a sales shortfall can leave costs committed before the revenue arrives. <strong>The problem isn’t ambition; it’s treating a sales target as automatic spending authority.</strong> Some costs must come early; others can be staged.\n\nIn my article I compare both approaches for boards and senior executives of mid-sized businesses, using an illustrative KSh example covering profitability, expenditure controls and liquidity.",
    destinationUrl: '/should-your-budget-be-based-on-your-ambitious-sales-target/',
    ctaLabel: 'Read the Article',
  },

  {
    id: 'kra-prepopulated-tax-return',
    publishedAt: '2026-11-03',
    sliderCategory: 'Funny',
    category: 'Biz Buzz',
    title: "KRA's Pre-Filled Returns: Are You Ready?",
    commentaryTitle: "KRA's Pre-Filled Returns: Are You Ready?",
    commentaryCopyHtml: kraCommentary,
    copy: kraCommentary.replace(/<[^>]*>/g, ''),
    image: '/images/kra-pre-filled-returns-approved-nov2026.jpg',
    alt: 'Editorial illustration contrasting two Kenyan male business professionals and KRA pre-filled tax returns. A relaxed man has a READY status callout; a concerned man checks records beside a MISMATCH callout. Both laptops show their rear lids to the viewer.',
    archiveSummary: "Pre-populated returns promise simpler filing, but mismatches with your own records mean more reconciliation. The difference lies in how well your records are kept.",
    seoTitle: 'KRA Pre-Populated Tax Returns: Blessing or Headache?',
    metaDescription: 'KRA may prepare your tax return. Could that simplify filing or create more work? Explore the benefits, risks and importance of reliable business records.',
    hideCommentaryReferences: true,
    sources: [{ label: 'KRA guidance: returns may be pre-populated; taxpayers may confirm or amend', url: 'https://www.kra.go.ke/finance-act-2026-what-it-means-for-you' }],
    illustrationDisclosure: 'AI-assisted editorial illustration.',
    destinationUrl: '/from-paper-to-erp-ai-finance-function/',
    ctaLabel: 'READ: FROM PAPER TO ERP'
  },
  {
    id: 'papss-kenya-nigeria-shortcut',
    publishedAt: '2026-10-30',
    sliderCategory: 'Funny',
    category: 'Business Analysis & Strategy',
    title: "PAPSS: A Shortcut for African Payments",
    commentaryTitle: 'PAPSS: A Shortcut for African Payments',
    image: '/images/papss-kenya-nigeria-shortcut-biz-buzz.jpg',
    alt: 'Biz Buzz illustration by Murtaza Insights showing a Kenyan businessman and Nigerian businesswoman, with a payment route detouring through New York, London, Frankfurt and Singapore. The meme highlights a shorter alternative for African cross-border payments through PAPSS.',
    archiveSummary: "Why route a Kenyan payment to a Nigerian supplier through New York or London? PAPSS offers a more direct route between African currencies. Ask your bank.",
    copy: 'African businesses have long faced costly international banking detours when paying suppliers across borders. PAPSS offers a more direct alternative, reducing dependence on intermediary banks and dollar or euro conversions.\n\nThe Pan-African Payment and Settlement System reported 31 reachable African countries and over 440 financial institutions in June 2026, including 190+ participating institutions. Its system targets payment processing within 120 seconds. A practical example: A Kenyan business can use a participating bank to pay a Nigerian supplier through PAPSS, with local-currency settlement avoiding the traditional dollar-routing detour. Actual costs and availability depend on the banks involved.\n\nTrading across Africa? Ask your bank whether PAPSS supports your payment routes.',
    commentaryCopyHtml: "Cross-border supplier payments in Africa often pass through international banks and dollar or euro conversions. <strong>PAPSS offers a more direct route between African currencies</strong>, potentially cutting cost and delay.\n\nPAPSS targets processing within 120 seconds, though actual times vary. For example, a Kenyan business can pay a Nigerian supplier through participating banks without the traditional dollar detour. Savings depend on fees and exchange rates.\n\n<strong>Trading across Africa?</strong> Ask your bank about PAPSS. <a class=\"papss-coverage-link\" href=\"https://www.imbankgroup.com/ke/wp-content/uploads/sites/2/2026/09/PAPSS-countries.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Check participating banks and countries</a>.",
    destinationUrl: 'https://www.imbankgroup.com/ke/wp-content/uploads/sites/2/2026/09/PAPSS-countries.pdf',
    ctaLabel: 'Check participating banks and countries'
  },
  {
    id: 'technify-it-featured',
    archiveSummary: "Negotiation, buying clubs and customer knowledge are old practices. AI and software add scale and speed. Which familiar process in your business could be transformed?",
    publishedAt: '2026-10-04',
    sliderCategory: 'Featured Article',
    category: 'Technology',
    title: 'Old Business Ideas, New Technology',
    commentaryTitle: 'Old Business Ideas, New Technology',
    commentaryCopyHtml: technifyCommentary,
    copy: technifyCommentary.replace(/<[^>]*>/g, ''),
    seoTitle: 'Old Wine, New Bottle? How AI Reinvents Business Ideas',
    metaDescription: 'Discover how AI and digital technology can transform familiar business practices, from customer relationships to negotiation and buying clubs.',
    image: '/images/technify-old-wine-new-bottle-approved-nov2026.jpg',
    alt: 'Traditional wine merchant saying he knows his customers beside a futuristic robot describing the same idea as predictive analytics, illustrating old business practices and modern AI.',
    destinationUrl: '/dont-invent-it-technify-it/',
    ctaLabel: 'Read the Article'
  },
  {
  "id": "paper-to-erp-featured",
    archiveSummary: "Start with the pain point, not the technology. I look at where AI helps a finance function, from paper records to ERP, and where better processes are enough.",
  "publishedAt": "2026-10-04",
  "sliderCategory": "Featured Article",
  "category": "Business & Finance",
  "title": "AI in Finance: What Works at Each Stage?",
  commentaryTitle: "AI in Finance: What Works at Each Stage?",
  commentaryCopyHtml: "A fictional “AI cancelled, SI adopted” executive order is satire. The serious question is whether AI will improve your finance function or just add another system to manage.\n\nStart with the pain point, not the technology. Unmatched invoices, missing records and unexplained variances are good places to look. Some can already be solved by your accounting software or conventional automation, so buying AI first may only add cost and complexity.\n\nFrom paper to ERP, the right starting point depends on your existing systems. Which improvements justify new tools, and which simply need better processes?",
  "image": "/images/ai-si-satire-business-technology.jpg",
  "alt": "Satirical AI-generated illustration of an anonymous suited person holding a fictional executive order cancelling AI and adopting SI. The caption asks how it can help your business; the image includes the MI monogram and the disclaimer “Satire. AI-generated image. Not a real order.”",
  copy: paperCommentary.replace(/<[^>]*>/g, ''),
  "destinationUrl": "/from-paper-to-erp-ai-finance-function/",
  "ctaLabel": "Read the Article"
},
  {
    id: 'lexus-motomorphosis',
    commentaryTitle: 'How Lexus Turned Distortion into Publicity',
    title: 'How Lexus Turned Distortion into Publicity',
    seoTitle: 'How Lexus Turned Distortion into Publicity',
    metaDescription: 'Why did Lexus commission MSCHF to distort its vehicles? Explore the Motomorphosis art collaboration and the marketing strategy behind it.',
    commentaryCopyHtml: lexusCommentary,
    copy: lexusCommentary.replace(/<[^>]*>/g, ''),
    archiveSummary: "Lexus had two electrified cars twisted into sculptures for a New York exhibition. Not every marketing investment needs an immediate sale. What did it buy instead?",
    publishedAt: '2026-10-04',
    sliderCategory: 'Funny',
    category: 'Business Analysis & Strategy',
    image: '/images/lexus-mschf-motomorphosis-twisted-car-marketing.jpg?v=20261031',
    alt: "Silver Lexus RX 450h+ transformed into a dramatically twisted sculpture in a gallery, with the headlines 'IT WASN’T AN ACCIDENT' and 'LEXUS PAID SOMEONE TO DO THIS', and the Murtaza Insights monogram.",
    sources: [
      { label: 'Lexus exhibition announcement', url: 'https://pressroom.lexus.com/mschf-turns-two-lexus-electrified-vehicles-into-sculpture-for-motomorphosis/' }
    ],
    illustrationDisclosure: 'AI-assisted editorial illustration based on the Lexus–MSCHF Motomorphosis project.'
  },

  {
    id: 'simbisa-customers-spend-less',
    archiveSummary: "It sounds unlikely, but under the right conditions it can happen. What has to change for lower spending per customer to improve your overall result?",
    publishedAt: '2026-10-04',
    sliderCategory: 'Featured Article',
    category: 'Business Performance Reviews',
    title: "Can Customers Spend Less — and Make You More?",
    image: '/images/can-customers-spend-less-make-more-money.jpg',
    alt: 'Simbisa Kenya restaurant cartoon asking whether customers can spend less while the business makes more money, with a KES receipt and falling average-spend arrow.',
    copy: 'It sounds unlikely. But under the right circumstances, it can happen. So what has to change for lower customer spending to produce a better overall result?',
    commentaryCopyHtml: `Spend Fell 3%. Profit Rose 16%.

At Simbisa Kenya, customers spent <strong>3% less</strong> on average in FY2026. Yet customer volumes rose <strong>14%</strong> and operating profit <strong>16%</strong>.

<strong>The business insight:</strong> A lower sale value can produce more profit, but only if the extra customers add more contribution than the margin given up, and can be served economically.

<strong>The question:</strong> Before cutting a price, do you know how much extra volume you need? On an illustrative 30% margin, a 3% cut needs about <strong>11% more volume</strong>.

<strong>Why did profit grow faster than revenue?</strong> The article shows what to check before you try it.`,
    destinationUrl: '/can-cutting-prices-improve-your-business-performance/',
    ctaLabel: 'Read the Article'
  },

  {
    id: 'canada-swing-states-tariffs',
    publishedAt: '2026-09-26',
    archiveSummary: "Retaliation can carry a political message as well as an economic one. What does the other side value most in your negotiations?",
    sliderCategory: 'Funny',
    category: 'Trade & Politics',
    title: "Canada's Tariffs: Political Pressure Points",
    commentaryTitle: "Canada's Tariffs: Political Pressure Points",
    commentaryCopyHtml: "Canada’s September 2026 retaliatory tariffs targeted US products from dairy to steel. Canada’s industry minister said products were selected to put political pressure on particular states.\n\nThe business insight: effective negotiation is not always about the size of your response. Knowing what matters most to the other side can give greater leverage, though targeted pressure carries costs and risks.\n\nThe question: in your next major supplier or customer negotiation, do you know what the other side values most?",
    image: '/images/canada-plays-the-swing-states-tariff-cartoon.png',
    alt: 'Cartoon showing Canada targeting politically sensitive U.S. states with retaliatory tariffs, highlighting trade strategy and electoral politics.',
    copy: 'This cartoon satirises the idea that retaliatory tariffs can be chosen for political as well as economic impact, with U.S. swing states in the spotlight.'
  },
  {
    id: 'kenya-power-profit',
    publishedAt: '2026-09-25',
    archiveSummary: "Kenya Power reported strong profits while customers experienced more power interruptions. Does your management pack give customer experience the same attention as profit?",
    sliderCategory: 'Funny',
    category: 'Business & Everyday Life',
    title: "Bright Profits. Dim Customer Experience.",
    image: '/images/kenya-power-bright-profits-dim-customer-experience.jpg',
    alt: 'Kenya Power illustration contrasting a lit office building and a FY2025/26 KSh25 billion profit sign with a man working by lantern light; the caption reads “Bright Profits. Dim Customer Experience.”',
    commentaryCopyHtml: kenyaPowerCommentary,
    copy: kenyaPowerCommentary.replace(/<[^>]*>/g, ''),
  },
  {
    id: 'domain-name-mistake',
    publishedAt: '2026-09-25',
    hidden: true,
    archiveSummary: "A website name can tell an unintended story when spaces disappear. Murtaza’s near miss introduces ten unfortunate domain examples and a simple branding lesson: check the lowercase name before registering it.",
    sliderCategory: 'Funny',
    category: 'Websites & Branding',
    title: 'When “Murtaza Insights” Nearly Became “Murtaza in Tights”',
    titleHtml: 'When “<em>Murtaza Insights</em>” Nearly Became “Murtaza in Tights”',
    image: '/images/murtaza-insights-domain-name-mistake.webp',
    alt: 'Cartoon of Murtaza Saeed wearing a business jacket and tie with bright floral tights, surrounded by examples of unfortunately worded domain names.',
    copy: 'I nearly made a spelling error and could have ended up with “Murtaza in Tights” instead of “Murtaza Insights”. Other names have suffered the same problem:',
    copyHtml: 'I nearly made a spelling error and could have ended up with “Murtaza in Tights” instead of “<em>Murtaza Insights</em>”. Other names have suffered the same problem:',
    domains: [
      ['expertsexchange', 'Experts Exchange'],
      ['penisland', 'Pen Island'],
      ['whorepresents', 'Who Represents'],
      ['powergenitalia', 'Powergen Italia'],
      ['molestationnursery', 'Mole Station Nursery'],
      ['choosespain', 'Choose Spain'],
      ['speedofart', 'Speed of Art'],
      ['dicksonweb', 'Dickson Web'],
      ['ipanywhere', 'IP Anywhere'],
      ['childrenswear', 'Children’s Wear']
    ],
    closing: 'The lesson is simple: before registering a domain, write it in lowercase, remove all the spaces and ask someone else to read it aloud. A second pair of eyes could save your website from becoming memorable for entirely the wrong reason. Check your domain choice carefully.'
  },
  {
    id: 'ozempic-victorias-secret',
    publishedAt: '2026-09-25',
    archiveSummary: "Markets saw a growth story for Victoria's Secret in weight-loss drugs, yet its CEO said the impact on sales had been minimal so far. How much of a growth story is evidence, and how much is assumption?",
    sliderCategory: 'Funny',
    category: 'Markets & Consumers',
    title: "Smaller Waistlines. Bigger Opportunities?",
    image: '/images/ozempic-victorias-secret-shares-meme.webp',
    alt: 'Satirical cartoon linking the Ozempic weight-loss trend with rising expectations for Victoria’s Secret shares.',
    commentaryCopyHtml: victoriasSecretCommentary,
    copy: victoriasSecretCommentary.replace(/<[^>]*>/g, ''),
  },
  {
    id: 'pulse-ring',
    publishedAt: '2026-09-25',
    archiveSummary: "A ring that measures nothing and simply reminds you to pause. Can simplicity become a premium selling point in a market built on features?",
    sliderCategory: 'Funny',
    category: 'Business Analysis & Strategy',
    title: 'Pulse Ring: Can Less Technology Sell?',
    commentaryTitle: 'Pulse Ring: Can Less Technology Sell?',
    commentaryCopyHtml: "<strong>The Pulse Ring</strong> takes an unusual approach to wearables. Priced from <strong>US$229</strong>, according to the company, it measures no heart rate, sleep or steps. Instead, it vibrates gently to remind its wearer to pause, breathe and refocus.\n\nCompeting smart rings offer ever more sophisticated tracking; Pulse sells freedom from constant measurement.\n\nThe business question: in crowded markets, can simplicity itself become a selling point, even command a premium? Pulse suggests that doing less can sometimes create more value, though a single product proves little about wider demand.",
    copy: pulseCommentary.replace(/<[^>]*>/g, ''),
    seoTitle: 'Pulse Ring: The Business of Less Technology',
    metaDescription: 'Why would consumers pay $229 for a ring that tracks no health data? Explore the Pulse Ring’s unusual approach to wearable technology and product differentiation.',
    image: '/images/anti-smart-ring-biz-buzz.jpg',
    alt: 'Cartoon of a man covered in smartwatches and fitness trackers while a salesperson presents a minimalist ring, with the headline “OVERWHELMED with WEARABLES?” and caption “Is this new ring THE SOLUTION?”',
    sources: [{ label: 'Product reference: Pulse Mindfulness — Official Website', url: 'https://www.pulsemindfulness.com/' }],
    illustrationDisclosure: 'AI-assisted editorial illustration. Product reference identifies the manufacturer; not an endorsement.'
  },
  {
    id: 'chasing-wifey-hole-in-one',
    publishedAt: '2026-09-25',
    archiveSummary: "After my wife's hole-in-one at Nyali Golf & Country Club, I'm still chasing mine. The mathematics are encouraging, and semi-retirement leaves time for fieldwork.",
    sliderCategory: 'Funny',
    category: 'Golf & Marriage',
    title: "She Did It in One. I’m Still Trying.",
    image: '/images/nyali-golf-club-chasing-wifey-hole-in-one.webp',
    alt: 'Goofing Golfer cartoon set at Nyali Golf & Country Club, showing a husband pursuing his first hole-in-one after his wife achieved hers.',
    copy: "My wife has already achieved golf’s ultimate prize, a hole-in-one. I remain in pursuit, encouraged that every additional round gives me another chance. Semi-retirement, fortunately, leaves time for extensive fieldwork."
  },
  {
    id: 'missed-hole-in-one',
    publishedAt: '2026-09-25',
    archiveSummary: "A narrowly missed shot is declared a hole-in-one. In business, a missed target can be offset by a favourable measure. Does your reporting separate the two?",
    sliderCategory: 'Funny',
    category: 'Golf & Management',
    title: "When the Scorecard Changes",
    commentaryTitle: 'When the Scorecard Changes',
    image: '/images/nyali-golf-club-missed-hole-in-one-meme.webp',
    alt: 'Golf cartoon set at Nyali Golf & Country Club, showing a ball narrowly missing the hole while a crowned lemur humorously declares that it counts as a hole-in-one.',
    commentaryCopyHtml: golfScorecardCommentary,
    copy: golfScorecardCommentary.replace(/<[^>]*>/g, ''),
  },
  {
    id: 'quickmart-ipo-ksh7-50-is-it-worth-buying',
    commentaryTitle: 'A Good Business. But at What Price?',
    commentaryCopyHtml: "Quickmart’s IPO closed 22.7% oversubscribed, with applications for <strong>2.455 billion shares against 2 billion on offer</strong>. Trading began on 12 November at KSh10, above the KSh7.50 offer price.\n\nStrong demand does not settle value. At KSh7.50, what did investors pay for, and what return could they reasonably expect?\n\nMy independent assessment examines the IPO valuation, prospective dividend yield, shareholder lock-up and possible selling pressure, and what the listing means for business owners and suppliers.\n\n<strong>Read the full article, including my conclusion.</strong>",
    archiveSummary: "Quickmart's IPO was oversubscribed by 22.7%, and its shares began trading on 12 November. Strong demand does not settle the valuation question. My assessment of the offer price, dividend yield and lock-up is in the article.",
    publishedAt: '2026-10-10',
    sliderCategory: 'Featured Article',
    category: 'Business Analysis & Strategy',
    title: "A Good Business. But at What Price?",
    image: '/images/quickmart-ipo-ksh7-50-is-it-worth-buying.png',
    alt: "Quickmart IPO graphic showing a supermarket aisle and a price tag reading ‘KSh7.50 per share—Is it worth buying?’, with the Murtaza Insights monogram.",
    copy: "Quickmart is growing, profitable and attracting major investors. But does that make KSh7.50 an attractive price?\n\nA good company is not automatically a good investment at any price.\n\nRead the article for my assessment.",
    destinationUrl: '/quickmart-ipo-ksh7-50-is-it-worth-buying/',
    ctaLabel: 'Read the Article'
  },
  {
    id: 'mbappe-endorsement-featured',
    publishedAt: '2026-09-25',
    archiveSummary: "Mbappé's move from Nike combines cash and equity. What does it show about ownership, incentives and On's football plans?",
    sliderCategory: 'Featured Article',
    category: 'Business Analysis & Strategy',
    title: 'A Win-Win for Mbappé and On?',
    commentaryTitle: 'A Win-Win for Mbappé and On?',
    image: '/images/mbappe-approved-monogram-biz-buzz.jpg',
    alt: 'AI-assisted illustration of Kylian Mbappé seated between a Nike sign with a red cross and an On sign with a green tick. The headline reads “MBAPPÉ LEAVES NIKE FOR ON” and the bottom caption asks “WHAT IS THE REASON?”',
    commentaryCopyHtml: mbappeCommentary,
    copy: mbappeCommentary.replace(/<[^>]*>/g, ''),
    seoTitle: 'Mbappé Leaves Nike for On: The Equity Deal Explained',
    metaDescription: 'Why did Kylian Mbappé leave Nike for On? Explore the cash-and-equity deal, On’s football expansion and what it means for strategic partnerships.',
    illustrationDisclosure: 'AI-assisted editorial illustration.',
    destinationUrl: '/mbappe-endorsement-to-ownership/',
    ctaLabel: 'Read the Article'
  }
];

export const funnyBizzPermalink = (id: string) => `/the-lighter-side/${id}/`;

// Temporarily withdrawn items retain their complete source above for redesign.
export const publicFunnyBizzItems = funnyBizzItems.filter(item => !item.hidden);

// Fragments are not sent to preview crawlers. They receive the clean, established
// permalink and its item-specific metadata; browsers use the fragment to enter
// the selected item in the working slideshow.
export const funnyBizzShareUrl = (id: string) => `${funnyBizzPermalink(id)}#view=slider`;
export const funnyBizzViewerUrl = (id: string) => `/the-lighter-side/?meme=${encodeURIComponent(id)}#funny-slider`;
