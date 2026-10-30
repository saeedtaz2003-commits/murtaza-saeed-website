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
};

export const funnyBizzItems: readonly FunnyBizzItem[] = [
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
    commentaryCopyHtml: `Why route African payments through international banks and dollar conversions? <strong>PAPSS offers a more direct alternative</strong>, potentially reducing costs and delays.

The Pan-African Payment and Settlement System reported <strong>31 reachable countries and 440+ financial institutions</strong> in June 2026. It targets processing within 120 seconds.

<strong>For example</strong>, Kenyan businesses can use participating banks to pay Nigerian suppliers through PAPSS, without the traditional dollar detour.

<strong>Trading across Africa?</strong> Ask your bank whether PAPSS supports your payment routes.`,
    destinationUrl: 'https://www.imbankgroup.com/ke/wp-content/uploads/sites/2/2026/09/PAPSS-countries.pdf',
    ctaLabel: 'Check participating banks and countries'
  },
  {
  "id": "technify-it-featured",
    archiveSummary: "Old business practices can become modern technology opportunities. AI and apps add speed, scale and automation to familiar routines; the linked article explores how removing old limitations can create practical business possibilities.",
  "publishedAt": "2026-10-04",
  "sliderCategory": "Featured Article",
  "category": "Technology",
  "title": "Don’t Invent It. Technify It.",
  "image": "/images/old-wine-new-bottle-technify-it.jpg",
  "alt": "Old merchant says ‘I know my customers’ beside a modern AI robot saying ‘I call it predictive analytics,’ illustrating how old business practices are being turned into modern apps.",
  "copy": "Many supposedly new business ideas are not new at all. Haggling, customer knowledge, barter, buying clubs and personal credit have existed for centuries. What AI and modern apps add is speed, scale and automation. The opportunity may be to identify an old practice that still works — then remove the limitation that stopped it scaling.",
  "destinationUrl": "/dont-invent-it-technify-it",
  "ctaLabel": "Read the Article"
},
  {
  "id": "paper-to-erp-featured",
    archiveSummary: "From handwritten records to full ERP systems, businesses face different information bottlenecks. Explore where AI can reduce manual work, strengthen controls and help managers get clearer answers from the systems they already use.",
  "publishedAt": "2026-10-04",
  "sliderCategory": "Featured Article",
  "category": "Business & Finance",
  "title": "From Paper to ERP: Where Can AI Help?",
  "image": "/images/donald-trump-ai-si-finance-function-paper-to-erp.jpg",
  "alt": "Donald Trump mock executive order changing AI to SI, introducing how AI can reduce finance workload, improve controls and provide better management insight from paper records to ERP.",
  "copy": "From paper records and Excel to full ERP, AI can reduce manual input, check transactions, reconcile information and highlight exceptions. It can also help managers analyse margins, cash flow and working capital. Start with the business pain point—not the technology.",
  "destinationUrl": "/from-paper-to-erp-ai-finance-function",
  "ctaLabel": "Read the Article"
},
  {
  "id": "lexus-motomorphosis",
  commentaryTitle: 'Lexus × MSCHF: Unconventional Marketing?',
  commentaryCopyHtml: `Lexus commissioned Brooklyn art collective MSCHF to transform two electrified cars into MOTOMORPHOSIS sculptures: one twisted, the other looped into a circle.

The unexpected forms invite attention and associate the brand with imagination and transformation. Such creative collaborations can help a familiar product stand apart in crowded markets.

For business owners, the lesson extends beyond luxury cars. Unconventional marketing can be a deliberate strategy to <strong>build brand awareness</strong>, differentiate a business and remain memorable. Its value need not be measured in immediate sales; strengthening brand recognition and positioning can itself be a <strong>worthwhile long-term investment.</strong>`,
    archiveSummary: "Lexus and MSCHF’s twisted vehicle challenges conventions about product design and brand attention. Their MOTOMORPHOSIS project opens a conversation about electrification, imagination and how far a brand will go to stand out.",
  "publishedAt": "2026-10-04",
  "sliderCategory": "Funny",
  "category": "Brands & Marketing",
  "title": "How Far Would You Twist Your Product?",
  "image": "/images/lexus-mschf-motomorphosis-twisted-car-marketing.jpg",
  "alt": "Twisted Lexus art car created by MSCHF for the Lexus MOTOMORPHOSIS project, illustrating how brands can use unexpected product design to attract attention.",
  "copy": "Lexus and Brooklyn art collective MSCHF turned an electrified vehicle into something almost unrecognisable for MOTOMORPHOSIS. The aim was a fresh conversation about electrification and transformation. The marketing question: how far would you twist convention to get people talking?"
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
    image: '/images/kenya-power-sh25-billion-profit-power-cuts-cartoon.png',
    alt: 'Kenya Power Sh25 billion profit cartoon contrasting strong financial results with power cuts, higher bills and unreliable electricity supply in Kenya.',
    copy: 'Investors are delighted by Kenya Power’s profits. Customers are still waiting for the lights to stay on—and for a bill that doesn’t come as a shock.'
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
    copy: 'Could weight-loss drugs provide an unexpected lift for Victoria’s Secret? Slimmer customers may feel more confident, replace clothing that no longer fits and spend more on fashion. Whether that translates into sustained profits remains uncertain—but Wall Street rarely ignores a promising new consumer trend.'
  },
  {
    id: 'pulse-ring',
    archiveSummary: "An anti-smart ring offers a different response to device overload: a reminder to pause. Buying technology to escape technology has its irony—and raises the question of whether every problem needs more data.",
    sliderCategory: 'Funny',
    category: 'Technology & Modern Life',
    title: "The Smartest Feature? Switching Off.",
    image: '/images/pulse-mindfulness-anti-smart-ring-meme.webp',
    alt: 'Cartoon showing an overwhelmed gadget user being offered the Pulse Mindfulness Ring, which uses gentle vibrations to encourage screen-free pauses rather than tracking health data.',
    copy: 'Technology has become so good at measuring everything that we can spend more time studying dashboards than actually living. The Pulse Ring collects no health data. It simply vibrates occasionally, reminding its wearer to stop checking devices, pause and breathe. At about $199, the irony is expensive—but the message is valuable: not every problem needs more data.'
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
    image: '/images/nyali-golf-club-missed-hole-in-one-meme.webp',
    alt: 'Golf cartoon set at Nyali Golf & Country Club, showing a ball narrowly missing the hole while a crowned lemur humorously declares that it counts as a hole-in-one.',
    copy: 'In golf—as in business—the temptation to redefine the performance indicator after seeing the result can be irresistible. Unfortunately, neither the scorecard nor the auditor is usually persuaded.'
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
    archiveSummary: "Kylian Mbappé’s move from Nike to On raises a wider business question about endorsement and ownership. Cash, equity and product influence offer different ways to participate in the value a commercial relationship creates.",
    sliderCategory: 'Featured Article',
    category: 'Business Analysis & Strategy',
    title: "Mbappé: From Endorsement to Equity",
    image: '/images/mbappe-nike-to-on-web.jpg',
    alt: 'Editorial cartoon showing Kylian Mbappé leaving Nike and joining On',
    copy: 'Why did Kylian Mbappé leave Nike after nearly 20 years? His move to On combines cash, equity and product influence—and offers wider lessons about turning endorsement into ownership.',
    destinationUrl: '/mbappe-endorsement-to-ownership',
    ctaLabel: 'Read the Article'
  }
];

export const funnyBizzPermalink = (id: string) => `/the-lighter-side/${id}`;

// Temporarily withdrawn items retain their complete source above for redesign.
export const publicFunnyBizzItems = funnyBizzItems.filter(item => !item.hidden);
