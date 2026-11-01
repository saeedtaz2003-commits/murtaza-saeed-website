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
    image: '/images/old-wine-new-bottle-technify-ai-business.jpg',
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
  "image": "/images/donald-trump-ai-si-finance-function-paper-to-erp.jpg",
  "alt": "Donald Trump mock executive order changing AI to SI, introducing how AI can reduce finance workload, improve controls and provide better management insight from paper records to ERP.",
  "copy": "From paper records and Excel to full ERP, AI can reduce manual input, check transactions, reconcile information and highlight exceptions. It can also help managers analyse margins, cash flow and working capital. Start with the business pain point—not the technology.",
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
