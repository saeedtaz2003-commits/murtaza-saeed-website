export type FunnyBizzSliderCategory = 'Funny' | 'Featured Article' | 'Advertorial';

export type FunnyBizzItem = {
  id: string;
  publishedAt?: string;
  sliderCategory: FunnyBizzSliderCategory;
  category: string;
  title: string;
  titleHtml?: string;
  image: string;
  alt: string;
  copy: string;
  copyHtml?: string;
  domains?: readonly (readonly [string, string])[];
  closing?: string;
  destinationUrl?: string;
  ctaLabel?: string;
  advertiser?: string;
};

export const funnyBizzItems: readonly FunnyBizzItem[] = [
  {
  "id": "technify-it-featured",
  "publishedAt": "2026-10-04",
  "sliderCategory": "Featured Article",
  "category": "Technology",
  "title": "Don’t Invent It. Technify It.",
  "image": "/images/old-wine-new-bottle-technify-it.jpg",
  "alt": "Old merchant says ‘I know my customers’ beside a modern AI robot saying ‘I call it predictive analytics,’ illustrating how old business practices are being turned into modern apps.",
  "copy": "Many supposedly new business ideas are not new at all. Haggling, customer knowledge, barter, buying clubs and personal credit have existed for centuries. What AI and modern apps add is speed, scale and automation. The opportunity may be to identify an old practice that still works — then remove the limitation that stopped it scaling.",
  "destinationUrl": "/dont-invent-it-technify-it",
  "ctaLabel": "Read the full article →"
},
  {
  "id": "paper-to-erp-featured",
  "publishedAt": "2026-10-04",
  "sliderCategory": "Featured Article",
  "category": "Business & Finance",
  "title": "From Paper to ERP: Where Can AI Improve Your Finance Function?",
  "image": "/images/donald-trump-ai-si-finance-function-paper-to-erp.jpg",
  "alt": "Donald Trump mock executive order changing AI to SI, introducing how AI can reduce finance workload, improve controls and provide better management insight from paper records to ERP.",
  "copy": "How can AI help your business? By reducing manual input and errors, checking documents and transactions, reconciling information, highlighting exceptions, analysing margins, cash flow and working capital, and answering management questions more quickly. The opportunity exists for businesses using any kind of accounting system—paper-based records, Excel, basic or legacy software, modern cloud accounting, separate specialist systems or full ERP. Start with the pain point.",
  "destinationUrl": "/from-paper-to-erp-ai-finance-function",
  "ctaLabel": "Read the full article →"
},
  {
  "id": "lexus-motomorphosis",
  "publishedAt": "2026-10-04",
  "sliderCategory": "Funny",
  "category": "Brands & Marketing",
  "title": "How Far Would You Twist Your Product to Stand Out?",
  "image": "/images/lexus-mschf-motomorphosis-twisted-car-marketing.jpg",
  "alt": "Twisted Lexus art car created by MSCHF for the Lexus MOTOMORPHOSIS project, illustrating how brands can use unexpected product design to attract attention.",
  "copy": "Lexus turned an electrified vehicle into something almost unrecognisable, working with Brooklyn art collective MSCHF on its MOTOMORPHOSIS project. The aim was to spark a different conversation around electrification, imagination and transformation. Perhaps the marketing lesson isn't how far you should twist your product — but how far you're prepared to twist convention to get people talking."
},

  {
    id: 'simbisa-customers-spend-less',
    publishedAt: '2026-10-03',
    sliderCategory: 'Funny',
    category: 'Business & Finance',
    title: 'Can Customers Spend Less — and Still Make You More Money?',
    image: '/images/can-customers-spend-less-make-more-money.jpg',
    alt: 'Simbisa Kenya restaurant cartoon asking whether customers can spend less while the business makes more money, with a KES receipt and falling average-spend arrow.',
    copy: 'Yes — through the right mix of pricing, volume, delivery channels and operating leverage. Simbisa Kenya offers a useful real-world example: average spend fell, yet revenue and operating profit still rose. See how the pieces came together in the Simbisa FY2026 results and this Equity Axis analysis.',
    copyHtml: 'Yes — through the right mix of pricing, volume, delivery channels and operating leverage. Simbisa Kenya offers a useful real-world example: average spend fell, yet revenue and operating profit still rose. See how the pieces came together in the <a href="https://ir.simbisabrands.com/simbisa-brands-audited-abridged-financial-results-fye-30-june-2026/" target="_blank" rel="noopener noreferrer">Simbisa FY2026 results</a> and <a href="https://equityaxis.net/post/19508/2026/9/simbisa-turns-kenya-traffic-growth-into-higher-earnings" target="_blank" rel="noopener noreferrer">this Equity Axis analysis</a>.'
  },
  {
    id: 'advertorial-launch-offer',
    sliderCategory: 'Advertorial',
    category: 'Launch Offer',
    title: 'Free Advertorials — Launch Offer',
    image: '/images/murtaza-insights-free-advertorials-launch-offer-1080x1080.png',
    alt: 'Murtaza Insights Free Advertorials Launch Offer highlighting Be Seen, Be Trusted, Be Chosen and its finance and business services.',
    copy: 'To mark the launch of Murtaza Insights, five businesses or organisations will be selected to have an advertorial prepared and published at no writing or publication charge. The offer provides an opportunity to present a business, product or service to a wider audience in a professionally prepared format.',
    copyHtml: 'To mark the launch of <em>Murtaza Insights</em>, five businesses or organisations will be selected to have an advertorial prepared and published at no writing or publication charge. The offer provides an opportunity to present a business, product or service to a wider audience in a professionally prepared format.',
    destinationUrl: '/advertorials',
    ctaLabel: 'View the launch offer →'
  },
  {
    id: 'canada-swing-states-tariffs',
    sliderCategory: 'Funny',
    category: 'Trade & Politics',
    title: 'Canada Plays the Swing States',
    image: '/images/canada-plays-the-swing-states-tariff-cartoon.png',
    alt: 'Cartoon showing Canada targeting politically sensitive U.S. swing states with retaliatory tariffs, highlighting trade strategy and electoral politics before the midterms.',
    copy: 'This cartoon satirises the idea that retaliatory tariffs can be chosen for political as well as economic impact, with U.S. swing states in the spotlight.'
  },
  {
    id: 'kenya-power-profit',
    sliderCategory: 'Funny',
    category: 'Business & Everyday Life',
    title: 'A bright result. A rather dim customer experience.',
    image: '/images/kenya-power-sh25-billion-profit-power-cuts-cartoon.png',
    alt: 'Kenya Power Sh25 billion profit cartoon contrasting strong financial results with power cuts, higher bills and unreliable electricity supply in Kenya.',
    copy: 'Investors are delighted by Kenya Power’s profits. Customers are still waiting for the lights to stay on—and for a bill that doesn’t come as a shock.'
  },
  {
    id: 'domain-name-mistake',
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
    sliderCategory: 'Funny',
    category: 'Markets & Consumers',
    title: 'When waistlines shrink, wardrobes—and market opportunities—may grow',
    image: '/images/ozempic-victorias-secret-shares-meme.webp',
    alt: 'Satirical cartoon linking the Ozempic weight-loss trend with rising expectations for Victoria’s Secret shares.',
    copy: 'Could weight-loss drugs provide an unexpected lift for Victoria’s Secret? Slimmer customers may feel more confident, replace clothing that no longer fits and spend more on fashion. Whether that translates into sustained profits remains uncertain—but Wall Street rarely ignores a promising new consumer trend.'
  },
  {
    id: 'pulse-ring',
    sliderCategory: 'Funny',
    category: 'Technology & Modern Life',
    title: 'When the smartest feature is knowing when to switch off',
    image: '/images/pulse-mindfulness-anti-smart-ring-meme.webp',
    alt: 'Cartoon showing an overwhelmed gadget user being offered the Pulse Mindfulness Ring, which uses gentle vibrations to encourage screen-free pauses rather than tracking health data.',
    copy: 'Technology has become so good at measuring everything that we can spend more time studying dashboards than actually living. The Pulse Ring collects no health data. It simply vibrates occasionally, reminding its wearer to stop checking devices, pause and breathe. At about $199, the irony is expensive—but the message is valuable: not every problem needs more data.'
  },
  {
    id: 'chasing-wifey-hole-in-one',
    sliderCategory: 'Funny',
    category: 'Golf & Marriage',
    title: 'She did it in one. I’m still improving the odds',
    image: '/images/nyali-golf-club-chasing-wifey-hole-in-one.webp',
    alt: 'Goofing Golfer cartoon set at Nyali Golf & Country Club, showing a husband pursuing his first hole-in-one after his wife achieved hers.',
    copy: 'My wife has already achieved golf’s ultimate prize—a hole-in-one. I remain in pursuit, encouraged by the mathematical certainty that every additional round gives me another opportunity. Retirement, fortunately, provides time for extensive fieldwork.'
  },
  {
    id: 'missed-hole-in-one',
    sliderCategory: 'Funny',
    category: 'Golf & Management',
    title: 'I have decided… that counts as a hole-in-one!',
    image: '/images/nyali-golf-club-missed-hole-in-one-meme.webp',
    alt: 'Golf cartoon set at Nyali Golf & Country Club, showing a ball narrowly missing the hole while a crowned lemur humorously declares that it counts as a hole-in-one.',
    copy: 'In golf—as in business—the temptation to redefine the performance indicator after seeing the result can be irresistible. Unfortunately, neither the scorecard nor the auditor is usually persuaded.'
  },
  {
    id: 'quickmart-ipo-featured',
    sliderCategory: 'Featured Article',
    category: 'Business & Finance',
    title: 'Quickmart IPO: A Good Business — But What Is It Worth?',
    image: '/images/quickmart-ipo-share-price-kenya-investment-cartoon.webp',
    alt: 'Quickmart IPO Kenya cartoon showing Quickmart shares on a supermarket shelf with an unknown KSh price as an investor considers buying shares in the NSE listing',
    copy: 'Quickmart may be one of Kenya’s more interesting IPO prospects—but investors are buying shares from the current owners, and the final offer price will determine whether a promising business is also a worthwhile investment.',
    destinationUrl: '/quickmart-ipo-what-price-should-you-pay',
    ctaLabel: 'Read the full article →'
  },
  {
    id: 'mbappe-endorsement-featured',
    sliderCategory: 'Featured Article',
    category: 'Business & Finance',
    title: 'Why Kylian Mbappé Left Nike for On: The Shift to Equity',
    image: '/images/mbappe-nike-to-on-web.jpg',
    alt: 'Editorial cartoon showing Kylian Mbappé leaving Nike and joining On',
    copy: 'Why did Kylian Mbappé leave Nike after nearly 20 years? His move to On combines cash, equity and product influence—and offers wider lessons about turning endorsement into ownership.',
    destinationUrl: '/mbappe-endorsement-to-ownership',
    ctaLabel: 'Read the full article →'
  }
];

export const funnyBizzPermalink = (id: string) => `/the-lighter-side/${id}`;
