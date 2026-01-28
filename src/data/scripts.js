const newLeads = [
  {
    day: 1,
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance. I received your request for a [home/auto] quote and started reviewing your info. No Rush --just let me know if you'd like me to finish it or answer any questions.",
  },
  {
    day: 3,
    message:
      "Quick note- I'm seeing a couple coverage options that might change the price depending on how you want things structured. Happy to explain if you want to take a look.",
  },
  {
    day: 6,
    message:
      "Would you prefer a quick call, or should I text you the highlights?",
  },
  {
    day: 9,
    message:
      "I'll pause outreach for now so I don't bug you. If you want to revisit your insurance later, just reply 'quote' and I'll jump back in.",
  },
];

const requoteTexts = [
  {
    day: 1,
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance. We worked up a [home/auto] quote for you in the past, I wanted to check to see if it makes sense to revist it now. No rush at all -- just let me know.",
  },
  {
    day: 3,
    message:
      "Quick check-in --has anything changed since we last talked or would you like me to compare options again as-is?",
  },
  {
    day: 6,
    message:
      "Sometimes re-quotes come out very similar and sometimes there's a noticeable shift depending on carriers and coverage structure. Happy to walk through it if you want.",
  },
  {
    day: 9,
    message:
      "I'll pause outreach for now so I don't bug you. If you want to revisit your insurance later, just reply 're-quote' and I'll jump back in.",
  },
];
const requoteNoContact = [
  {
    day: 1,
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance. I had your contact info from a prior quote request and I wanted to see if reviewing your [home/auto] insurance is still relevant. No rush -- just let me know.",
  },
  {
    day: 3,
    message:
      "Sometimes these old quote attempts still make sense to revisit, and sometimes they don't.  --it really just depends on timing.",
  },
  {
    day: 6,
    message:
      "If you do want to revisit it, would you prefer a quick call or for me to text you the basics.",
  },
  {
    day: 9,
    message:
      "I'll pause outreach for now so I don't bug you. If you want to revisit your insurance later, just reply 'quote' and I'll jump back in",
  },
];

const conditionalRequotes = [
  {
    day: 1,
    topic: "claims",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance, and I'm reaching out because the claim timing we discussed may no longer be affecting your options. No rush --just wanted to know if you'd like me to take another look.",
  },
  {
    day: 1,
    topic: "eligible",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance. When we last talked, your home wasn't eligible with a few carriers due to underwriting issues. That may have changed.  Happy to revisit it if you'd like. --totally up to you.",
  },
  {
    day: 1,
    topic: "options",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance. Since we last spoke, I have a couple additional carrier options that werent available at the time. Let me know if you'd like me to re-run things --no pressure at all.",
  },
  {
    day: 1,
    topic: "structure",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance. After our last conversation, I realized there are a few different ways to structure coverage that might affect the priceing we saw before. Happy to walk through it if you want to revisit things.",
  },
];
const winbackScript = [
  {
    day: 1,

    message:
      "Hi :Name:, this is :user: with Mason Crapo Insurance. We worked together in the past, and I wanted to check in to see if it makes sense to review your insurance again. No rush at all — just wanted to reach out.",
  },
  {
    day: 3,

    message:
      "Sometimes people circle back after a year or two when pricing, coverage, or service needs change. If that’s the case for you, I’m happy to take another look.",
  },
  {
    day: 6,

    message:
      "If you’d like to revisit things, would you prefer a quick call or for me to text you the basics?",
  },
  {
    day: 9,

    message:
      "I’ll pause outreach for now so I don’t bug you -- If you ever want to compare options again, just reply 'quote' and I’ll jump back in.",
  },
];
export {
  conditionalRequotes,
  requoteNoContact,
  requoteTexts,
  newLeads,
  winbackScript,
};
