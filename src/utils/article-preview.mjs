// Shared preview copy; approved publication bodies are unchanged.
const teasers = {
  'can-cutting-prices-improve-your-business-performance': 'Explore how lower prices can improve business performance when a second change helps you reach and serve more customers economically, using Simbisa as an example.',
  'dont-invent-it-technify-it': 'Many new technology ideas begin with old business practices. Explore how AI and software can remove their limitations and create practical opportunities for your business.',
  'from-paper-to-erp-ai-finance-function': 'From handwritten records to full ERP, examine where AI can reduce manual work, improve controls and help management get more useful answers from existing information.',
  'quickmart-ipo-ksh7-50-is-it-worth-buying': 'Quickmart is growing and profitable. Examine what KSh7.50 buys, how its dividend compares with a Treasury bill, and why future growth matters to the investment.',
  'mbappe-endorsement-to-ownership': 'Mbappé’s move from Nike to On combines cash, equity and product influence. Explore the wider business lessons about turning a celebrity endorsement into ownership.'
};
export const previewExcerpt = post => teasers[post.data.slug] ?? post.data.summary.split(/\s+/).slice(0,25).join(" ");
