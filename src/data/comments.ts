export const commentsFormUrl = 'https://forms.gle/7bd6s91ezQGqkLHf9';

const commentsPrefillBase = 'https://docs.google.com/forms/d/e/1FAIpQLSdtXh701PJN5uja8t-xK507WiLmo8N6P0NSqX-v_WWiMIROwA/viewform';

export const commentsFormFor = (title: string) =>
  `${commentsPrefillBase}?usp=pp_url&entry.2017494071=${encodeURIComponent(title)}`;
