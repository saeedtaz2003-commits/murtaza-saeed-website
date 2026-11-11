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

const pulseCommentary = `The <strong>Pulse Ring</strong> takes an unusual approach to wearable technology. Priced from <strong>US$229</strong>, it doesn't measure heart rate, sleep or steps. Instead, it vibrates gently to remind its wearer to pause, breathe and refocus.

While competing smart rings offer increasingly sophisticated health tracking, Pulse is selling something different: <strong>freedom from constant measurement</strong>.

The business question is intriguing. Are consumers beginning to value simplicity over additional features? And can a product command a premium precisely because it does less?

Pulse illustrates a clever differentiation strategy: <strong>doing less can sometimes create more value</strong>. In markets crowded with increasingly complex products, simplicity itself can become a compelling selling point — and potentially command a premium.`;

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

const golfScorecardCommentary = `On the golf course, a second stroke cannot turn a missed first attempt into a hole-in-one. Yet in business, a missed sales target can sometimes be presented as a success by highlighting a different, more favourable performance measure.

<strong>The business insight:</strong> There is nothing wrong with reporting additional performance measures. The problem arises when a favourable result is used to distract attention from an unmet target. Management should explain both the original shortfall and any achievements elsewhere, rather than allowing one to obscure the other.

<strong>The question:</strong> Does your management reporting clearly distinguish between meeting agreed targets and achieving other favourable results?`;

const executiveCheckUpCommentary = `An annual report can show higher sales, improved profits and stronger cash flow. All are encouraging. But profits may include valuation gains, cash flow may benefit from working-capital movements, and returns on capital may still be disappointing.

The results of Tesco, Sainsbury's, Kakuzi and Sasini illustrate why headline figures rarely tell the whole story. Our five-dimension Business Improvement Scorecard examines earnings quality, capital productivity, cash generation, competitive strength and future capability, including what published accounts cannot establish.

For owners and CEOs, the real value of an annual review lies in the decisions it changes before the next business plan.

Read the full article.`;

export const funnyBizzItems: readonly FunnyBizzItem[] = [
  {
    id: 'executive-business-check-up',
    publishedAt: '2026-11-11',
    sliderCategory: 'Featured Article',
    category: 'Business Performance Reviews',
    title: 'What an Annual Report Can Reveal',
    image: '/images/executive-business-check-up-annual-report.jpg',
    alt: 'Microscope examining a glass slide beside an open annual business report with rising performance charts, illustrating a deeper business check-up.',
    copy: executiveCheckUpCommentary,
    archiveSummary: 'An annual report can look healthy while concealing weak capital returns or fragile cash generation. A business improvement scorecard, illustrated by four companies, identifies what owners and CEOs should examine more closely.',
    seoTitle: 'Executive Business Check-Up | Annual Report Analysis | Murtaza Insights',
    metaDescription: 'A stronger annual report does not always mean a stronger business. Examine earnings quality, capital productivity and cash flow through real company examples.',
    illustrationDisclosure: 'Conceptual illustration.',
    destinationUrl: '/your-sales-grew-but-did-your-business-actually-improve/',
    ctaLabel: 'Read the Article'
  },
  {
    id: 'budget-sales-target',
    sliderCategory: 'Featured Article',
    category: 'Business Analysis & Strategy',
    title: 'Should a Sales Target Be Your Budget?',
    image: '/images/budget-sales-target-boardroom.jpg',
    alt: 'Two boardroom scenes: the approved budget projects rising sales and expenses; six months later, sales fall while expenses stay flat.',
    archiveSummary: 'Sales targets and financial budgets serve different purposes. A boardroom illustration shows how a sales shortfall can leave costs committed, with two alternatives for managing spending without giving up growth ambitions.',
    seoTitle: 'Sales Targets and Financial Budgets | Biz Buzz',
    metaDescription: 'What happens when an ambitious sales target drives spending? Explore two budget approaches that keep growth ambitions separate from authority to spend.',
    copy: 'Not always. One option pairs a realistic Base Budget with a separately approved Growth Programme. Another uses two complete financial budgets: Base and Target.\n\nWhen one ambitious budget drives expenditure, a sales shortfall can leave costs committed before the expected revenue arrives. The problem isn’t ambition; it’s treating a sales target as automatic spending authority. Some costs must come early; others can be staged.\n\nMurtaza Insights compares both approaches for boards and senior executives of mid-sized businesses, using an illustrative KSh example to examine profitability, expenditure controls and liquidity.',
    commentaryCopyHtml: 'Not always. One option pairs a realistic Base Budget with a separately approved Growth Programme. Another uses two complete financial budgets: Base and Target.\n\nWhen one ambitious budget drives expenditure, a sales shortfall can leave costs committed before the expected revenue arrives. <strong>The problem isn’t ambition; it’s treating a sales target as automatic spending authority.</strong> Some costs must come early; others can be staged.\n\nMurtaza Insights compares both approaches for boards and senior executives of mid-sized businesses, using an illustrative KSh example to examine profitability, expenditure controls and liquidity.',
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
    archiveSummary: "KRA's move towards pre-populated tax returns promises simpler filing, but inaccurate or incomplete information could create headaches. The difference may depend on how well businesses maintain and reconcile their records.",
    seoTitle: 'KRA Pre-Populated Tax Returns: Blessing or Headache?',
    metaDescription: 'KRA may prepare your tax return. Could that simplify filing or create more work? Explore the benefits, risks and importance of reliable business records.',
    hideCommentaryReferences: true,
    sources: [{ label: 'KRA guidance: returns may be pre-populated; taxpayers may confirm or amend', url: 'https://www.kra.go.ke/finance-act-2026-what-it-means-for-you' }],
    illustrationDisclosure: 'AI-assisted editorial illustration.',
    destinationUrl: '/from-paper-to-erp-ai-finance-function/',
    ctaLabel: 'Read the Article'
  },
  {
    id: 'papss-kenya-nigeria-shortcut',
    publishedAt: '2026-10-30',
    sliderCategory: 'Funny',
    category: 'Business Analysis & Strategy',
    title: 'Why Send Money Around the World to Pay Your Neighbour?',
    commentaryTitle: 'PAPSS: A Shortcut for African Payments',
    image: '/images/papss-kenya-nigeria-shortcut-biz-buzz.jpg',
    alt: 'Biz Buzz illustration by Murtaza Insights showing a Kenyan businessman and Nigerian businesswoman, with a payment route detouring through New York, London, Frankfurt and Singapore. The meme highlights a shorter alternative for African cross-border payments through PAPSS.',
    archiveSummary: 'African businesses have long faced costly international banking detours when paying suppliers across borders. PAPSS offers a more direct alternative, reducing dependence on intermediary banks and dollar or euro conversions.',
    copy: 'African businesses have long faced costly international banking detours when paying suppliers across borders. PAPSS offers a more direct alternative, reducing dependence on intermediary banks and dollar or euro conversions.\n\nThe Pan-African Payment and Settlement System reported 31 reachable African countries and over 440 financial institutions in June 2026, including 190+ participating institutions. Its system targets payment processing within 120 seconds. A practical example: A Kenyan business can use a participating bank to pay a Nigerian supplier through PAPSS, with local-currency settlement avoiding the traditional dollar-routing detour. Actual costs and availability depend on the banks involved.\n\nTrading across Africa? Ask your bank whether PAPSS supports your payment routes.',
    commentaryCopyHtml: `Cross-border supplier payments in Africa often pass through international banks and dollar or euro conversions. <strong>PAPSS offers a more direct route between African currencies</strong>, potentially reducing costs and delays.

Its June 2026 report lists <strong>31 reachable countries and over 440 financial institutions</strong>, including 190+ participants. PAPSS targets processing within 120 seconds, although actual delivery times may vary.

<strong>For example</strong>, a Kenyan business can use participating banks to pay a Nigerian supplier without the traditional dollar detour. Savings depend on fees and exchange rates.

<strong>Trading across Africa?</strong> Ask your bank about PAPSS. <a class="papss-coverage-link" href="https://www.imbankgroup.com/ke/wp-content/uploads/sites/2/2026/09/PAPSS-countries.pdf" target="_blank" rel="noopener noreferrer">Check participating banks and countries</a>.`,
    destinationUrl: 'https://www.imbankgroup.com/ke/wp-content/uploads/sites/2/2026/09/PAPSS-countries.pdf',
    ctaLabel: 'Check participating banks and countries'
  },
  {
    id: 'technify-it-featured',
    archiveSummary: "Old business practices can become modern technology opportunities. AI and apps add speed, scale and automation to familiar routines; the linked article explores how removing old limitations can create practical business possibilities.",
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
    destinationUrl: '/dont-invent-it-technify-it',
    ctaLabel: 'Read the Article'
  },
  {
  "id": "paper-to-erp-featured",
    archiveSummary: "From handwritten records to full ERP systems, businesses face different information bottlenecks. Explore where AI can reduce manual work, strengthen controls and help managers get clearer answers from the systems they already use.",
  "publishedAt": "2026-10-04",
  "sliderCategory": "Featured Article",
  "category": "Business & Finance",
  "title": "From Paper to ERP: Where Can AI Help?",
  commentaryTitle: "AI in Finance: What Works at Each Stage?",
  commentaryCopyHtml: paperCommentary,
  "image": "/images/ai-si-satire-business-technology.jpg",
  "alt": "Satirical AI-generated illustration of an anonymous suited person holding a fictional executive order cancelling AI and adopting SI. The caption asks how it can help your business; the image includes the MI monogram and the disclaimer “Satire. AI-generated image. Not a real order.”",
  copy: paperCommentary.replace(/<[^>]*>/g, ''),
  "destinationUrl": "/from-paper-to-erp-ai-finance-function",
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
    archiveSummary: 'Lexus commissioned art collective MSCHF to transform its electrified vehicles into bizarre sculptures for a New York exhibition. The unusual collaboration raises an intriguing question about creativity, brand differentiation and commercial value.',
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
    archiveSummary: "Can lower customer spending produce a better business result? The answer depends on what else changes. Explore the conditions behind improved business performance in the linked article, without giving away the story here.",
    publishedAt: '2026-10-03',
    sliderCategory: 'Featured Article',
    category: 'Business Performance Reviews',
    title: "Can Customers Spend Less — and Make You More?",
    image: '/images/can-customers-spend-less-make-more-money.jpg',
    alt: 'Simbisa Kenya restaurant cartoon asking whether customers can spend less while the business makes more money, with a KES receipt and falling average-spend arrow.',
    copy: 'It sounds unlikely. But under the right circumstances, it can happen. So what has to change for lower customer spending to produce a better overall result?',
    destinationUrl: '/can-cutting-prices-improve-your-business-performance',
    ctaLabel: 'Read the Article'
  },

  {
    id: 'canada-swing-states-tariffs',
    archiveSummary: "Retaliatory tariffs can carry political as well as economic messages. Canada’s focus on U.S. swing states raises a strategic question: can trade measures influence electoral pressure as well as commercial behaviour?",
    sliderCategory: 'Funny',
    category: 'Trade & Politics',
    title: 'Canada Plays the Swing States',
    commentaryTitle: "Canada's Tariffs: Political Pressure Points",
    commentaryCopyHtml: `Canada's September 2026 retaliatory tariffs targeted US products ranging from dairy to steel. <a href="https://www.cbsnews.com/news/canada-retaliatory-tariffs-michigan-indiana-impact/" target="_blank" rel="noopener noreferrer">Canadian officials</a> said the measures were designed partly to exert political pressure on particular US states — not merely to match the economic impact of American tariffs.

<strong>The business insight:</strong> Effective negotiation is not always about the size of your response. Understanding what matters most to the other side can provide greater leverage. But targeted pressure also carries costs and risks.

<strong>The question:</strong> In your next major supplier or customer negotiation, do you know what the other side values most — and how you could use that knowledge to negotiate more effectively?`,
    image: '/images/canada-plays-the-swing-states-tariff-cartoon.png',
    alt: 'Cartoon showing Canada targeting politically sensitive U.S. swing states with retaliatory tariffs, highlighting trade strategy and electoral politics before the midterms.',
    copy: 'This cartoon satirises the idea that retaliatory tariffs can be chosen for political as well as economic impact, with U.S. swing states in the spotlight.'
  },
  {
    id: 'kenya-power-profit',
    archiveSummary: "Strong profits and unreliable service make an uncomfortable pairing. Kenya Power’s results contrast with customers’ concerns about power cuts and bills, raising a familiar question about how business success is measured.",
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
    archiveSummary: "Weight-loss trends can create unexpected consumer-market opportunities. Could changing waistlines, confidence and wardrobes benefit Victoria’s Secret? A promising market narrative may attract attention, but sustained business profits remain a separate question.",
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
    archiveSummary: 'The Pulse Ring takes a different approach to wearable technology, replacing health tracking with gentle reminders to pause. Can simplicity become a premium selling point in a market increasingly dominated by data and features?',
    sliderCategory: 'Funny',
    category: 'Business Analysis & Strategy',
    title: 'Pulse Ring: Can Less Technology Sell?',
    commentaryTitle: 'Pulse Ring: Can Less Technology Sell?',
    commentaryCopyHtml: pulseCommentary,
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
    archiveSummary: "A personal golfing pursuit at Nyali Golf & Country Club becomes a retirement joke. After his wife’s hole-in-one, the Goofing Golfer keeps playing, hoping more rounds will finally improve his chances.",
    sliderCategory: 'Funny',
    category: 'Golf & Marriage',
    title: "She Did It in One. I’m Still Trying.",
    image: '/images/nyali-golf-club-chasing-wifey-hole-in-one.webp',
    alt: 'Goofing Golfer cartoon set at Nyali Golf & Country Club, showing a husband pursuing his first hole-in-one after his wife achieved hers.',
    copy: 'My wife has already achieved golf’s ultimate prize—a hole-in-one. I remain in pursuit, encouraged by the mathematical certainty that every additional round gives me another opportunity. Retirement, fortunately, provides time for extensive fieldwork.'
  },
  {
    id: 'missed-hole-in-one',
    archiveSummary: "A narrowly missed golf shot invites a convenient change of rules. Golf’s scorecard and business performance indicators share a lesson: redefining success after seeing the result rarely persuades an independent observer.",
    sliderCategory: 'Funny',
    category: 'Golf & Management',
    title: "That Counts as a Hole-in-One!",
    commentaryTitle: 'When the Scorecard Changes',
    image: '/images/nyali-golf-club-missed-hole-in-one-meme.webp',
    alt: 'Golf cartoon set at Nyali Golf & Country Club, showing a ball narrowly missing the hole while a crowned lemur humorously declares that it counts as a hole-in-one.',
    commentaryCopyHtml: golfScorecardCommentary,
    copy: golfScorecardCommentary.replace(/<[^>]*>/g, ''),
  },
  {
    id: 'quickmart-ipo-ksh7-50-is-it-worth-buying',
    commentaryTitle: 'A Good Business. But at What Price?',
    commentaryCopyHtml: `Quickmart’s growth, profitability and major investors make its IPO an attention-grabbing proposition. But a familiar brand and a growing business are only part of an investment decision.

<strong>The price matters as much as the business.</strong> What return might shareholders receive at KSh7.50, and how does that compare with the risks and alternative investments?

My independent assessment examines the valuation, prospective dividend yield, shareholder lock-up arrangements and potential selling pressure. It also considers what the offer could mean for business owners and suppliers.

<strong>Read the full article for the analysis—and my conclusion.</strong>`,
    archiveSummary: "Quickmart’s IPO raises a straightforward question: is KSh7.50 worth paying? Growth and major investors provide context, while the linked independent assessment examines whether the offer price makes sense. The conclusion stays in the article.",
    publishedAt: '2026-10-10',
    sliderCategory: 'Featured Article',
    category: 'Business Analysis & Strategy',
    title: "Quickmart IPO at KSh7.50: Is It Worth Buying?",
    image: '/images/quickmart-ipo-ksh7-50-is-it-worth-buying.png',
    alt: "Quickmart IPO graphic showing a supermarket aisle and a price tag reading ‘KSh7.50 per share—Is it worth buying?’, with the Murtaza Insights monogram.",
    copy: "Quickmart is growing, profitable and attracting major investors. But does that make KSh7.50 an attractive price?\n\nA good company is not automatically a good investment at any price.\n\nRead the article for my assessment.",
    destinationUrl: '/quickmart-ipo-ksh7-50-is-it-worth-buying',
    ctaLabel: 'Read the Article'
  },
  {
    id: 'mbappe-endorsement-featured',
    archiveSummary: 'Kylian Mbappé’s move from Nike to Swiss sportswear brand On includes cash and equity, giving the partnership a different commercial structure. What does it reveal about ownership, incentives and On’s football ambitions?',
    sliderCategory: 'Featured Article',
    category: 'Business Analysis & Strategy',
    title: 'A Win-Win for Mbappé and ON?',
    commentaryTitle: 'A Win-Win for Mbappé and ON?',
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
