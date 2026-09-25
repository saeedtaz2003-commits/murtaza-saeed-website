export const funnyBizzItems = [
  {
    id: 'kenya-power-profit',
    category: 'Business & Everyday Life',
    title: 'A bright result. A rather dim customer experience.',
    image: '/images/kenya-power-sh25-billion-profit-outages-approved.webp',
    alt: 'Kenya Power profits cartoon showing an executive celebrating Sh25 billion while a customer holds a candle during a power outage, highlighting electricity bills and power cuts in Kenya.',
    copy: 'Investors are delighted by Kenya Power’s profits. Customers are still waiting for the lights to stay on—and for a bill that doesn’t come as a shock.'
  },
  {
    id: 'domain-name-mistake',
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
    category: 'Markets & Consumers',
    title: 'When waistlines shrink, wardrobes—and market opportunities—may grow',
    image: '/images/ozempic-victorias-secret-shares-meme.webp',
    alt: 'Satirical cartoon linking the Ozempic weight-loss trend with rising expectations for Victoria’s Secret shares.',
    copy: 'Could weight-loss drugs provide an unexpected lift for Victoria’s Secret? Slimmer customers may feel more confident, replace clothing that no longer fits and spend more on fashion. Whether that translates into sustained profits remains uncertain—but Wall Street rarely ignores a promising new consumer trend.'
  },
  {
    id: 'pulse-ring',
    category: 'Technology & Modern Life',
    title: 'When the smartest feature is knowing when to switch off',
    image: '/images/pulse-mindfulness-anti-smart-ring-meme.webp',
    alt: 'Cartoon showing an overwhelmed gadget user being offered the Pulse Mindfulness Ring, which uses gentle vibrations to encourage screen-free pauses rather than tracking health data.',
    copy: 'Technology has become so good at measuring everything that we can spend more time studying dashboards than actually living. The Pulse Ring collects no health data. It simply vibrates occasionally, reminding its wearer to stop checking devices, pause and breathe. At about $199, the irony is expensive—but the message is valuable: not every problem needs more data.'
  },
  {
    id: 'chasing-wifey-hole-in-one',
    category: 'Golf & Marriage',
    title: 'She did it in one. I’m still improving the odds',
    image: '/images/nyali-golf-club-chasing-wifey-hole-in-one.webp',
    alt: 'Goofing Golfer cartoon set at Nyali Golf & Country Club, showing a husband pursuing his first hole-in-one after his wife achieved hers.',
    copy: 'My wife has already achieved golf’s ultimate prize—a hole-in-one. I remain in pursuit, encouraged by the mathematical certainty that every additional round gives me another opportunity. Retirement, fortunately, provides time for extensive fieldwork.'
  },
  {
    id: 'missed-hole-in-one',
    category: 'Golf & Management',
    title: 'I have decided… that counts as a hole-in-one!',
    image: '/images/nyali-golf-club-missed-hole-in-one-meme.webp',
    alt: 'Golf cartoon set at Nyali Golf & Country Club, showing a ball narrowly missing the hole while a crowned lemur humorously declares that it counts as a hole-in-one.',
    copy: 'In golf—as in business—the temptation to redefine the performance indicator after seeing the result can be irresistible. Unfortunately, neither the scorecard nor the auditor is usually persuaded.'
  }
] as const;

export const featuredFunnyBizzItems = funnyBizzItems.slice(0, 10);

export const funnyBizzPermalink = (id: string) => `/the-lighter-side/${id}`;
