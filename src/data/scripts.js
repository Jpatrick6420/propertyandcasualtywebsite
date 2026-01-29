const newLeads = [
  {
    day: 1,
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. I'm working on your [home/auto] insurance quote and wanted to connect briefly to make sure all the discounts are applied. You can call me anytime. `,
    topic: "",
    voicemail: `Hi [client name], this is [your name] with Mason Crapo Insurance. I’m calling because you recently requested a [home/auto] insurance quote, and I’ve started reviewing your information. I just wanted to connect and make sure that all the discounts are applied. You can call or text me back at [number] at your convenience. Talk soon.`,
  },
  {
    day: 3,
    message: `Quick update -- there are a couple options that can change how this is structured. I want to make sure it's set up right for you. A quick call is generally the easiest way to finalize the quote.`,
    topic: "",
    voicemail: "",
  },
  {
    day: 6,
    message: `If you want to revisit it, what’s easier — a quick call or a short walkthrough by text?`,
    topic: "",
    voicemail: "",
  },
  {
    day: 9,
    message: `I’ll stop reaching out for now so I don’t bug you. If you want to revisit your [home/auto] coverage later, just call or text me anytime.`,
    topic: "",
    voicemail: `“Hi [Name], this is Justin with Mason Crapo Insurance. I just wanted to follow up one last time regarding the [home/auto] quote you had asked about. I don’t want to keep bothering you, so I’ll stop reaching out for now. If you’d like to revisit things or have questions down the road, feel free to call or text me at [number]. I’m always happy to help. Take care.`,
  },
];

const requoteTexts = [
  {
    day: 1,
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. We looked at your [home/auto] insurance a while ago, and I wanted to see if it makes sense to review it again now that we have additional carriers and some rate changes. No urgency --just wanted to reach out.`,
    voicemail: `
Hi [Name], this is Justin with Mason Crapo Insurance. We had looked at your [home/auto] insurance in the past, and I’m reaching out to see if it makes sense to revisit it now. Nothing urgent — just wanted to connect and see if you’d like an updated look. You can call or text me back at [number] whenever it’s convenient.`,
    topic: "",
  },
  {
    day: 3,
    message: `Quick check-in — has anything changed since we last talked, or should I review it again based on the same setup?`,
    voicemail: "",
    topic: "",
  },
  {
    day: 6,
    message: `Sometimes re-quotes come out very similar, and sometimes they look different depending on how coverage is structured. Happy to walk through it if you want.`,
    voicemail: "",
    topic: "",
  },
  {
    day: 9,
    message: `I’ll stop reaching out for now so I don’t bug you. If you want to revisit things later, you can call or text :phone: and I’ll take another look.`,
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. Just following up one last time on the re-quote we discussed previously. I’ll stop reaching out for now, but if you want to take another look at your insurance down the road, feel free to call or text me at [number]. Happy to help.`,
    topic: "",
  },
];
const requoteNoContact = [
  {
    day: 1,
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. I had your info from a prior quote request and wanted to see if reviewing your [home/auto] insurance is still relevant. No urgency — just checking in.`,
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. I’m reaching out because I had your information from a prior quote attempt and wanted to see if it still makes sense to take a look at your [home/auto] insurance. Nothing urgent — you can call or text me back at [number] whenever it’s convenient.`,
    topic: "",
  },
  {
    day: 3,
    message: `Sometimes these older quote requests still make sense to revisit, and sometimes they don’t — it really just depends on timing.`,
    voicemail: "",
    topic: "",
  },
  {
    day: 6,
    message: `If you do want to revisit it, would you prefer a quick call or a brief walkthrough by text?`,
    voicemail: "",
    topic: "",
  },
  {
    day: 9,
    message: `I’ll stop reaching out for now so I don’t bug you. If you want to revisit your insurance later, just text or call :phone: and I’ll get you fresh numbers.`,
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. I just wanted to follow up one last time and then I’ll stop reaching out for now so I don’t bug you. If you want to revisit your insurance down the road, feel free to call or text me at [number]. Take care.
Goal: encourage engagement without pressure, preserve trust, and make future contact feel natural — not awkward.`,
    topic: "",
  },
];

const conditionalRequotes = [
  {
    day: 1,
    topic: "claims",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance, and I'm reaching out because the claim timing we discussed may no longer be affecting your options. No rush --just wanted to know if you'd like me to take another look.",
    voicemail: "",
  },
  {
    day: 1,
    topic: "eligible",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance. When we last talked, your home wasn't eligible with a few carriers due to underwriting issues. That may have changed.  Happy to revisit it if you'd like. --totally up to you.",
    voicemail: "",
  },
  {
    day: 1,
    topic: "options",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance. Since we last spoke, I have a couple additional carrier options that werent available at the time. Let me know if you'd like me to re-run things --no pressure at all.",
    voicemail: "",
  },
  {
    day: 1,
    topic: "structure",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance. After our last conversation, I realized there are a few different ways to structure coverage that might affect the priceing we saw before. Happy to walk through it if you want to revisit things.",
    voicemail: "",
  },
];
const winbackScript = [
  {
    day: 1,

    message:
      "Hi :Name:, this is :user: with Mason Crapo Insurance. We worked together in the past, and I wanted to check in to see if it makes sense to review your insurance again. No rush at all — just wanted to reach out.",
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. We worked together in the past, and I just wanted to check in and see if
it makes sense to revisit your insurance now. Nothing urgent — you can call or text me back at [number] whenever it’s
convenient.`,
    topic: "",
  },
  {
    day: 3,

    message:
      "Sometimes people circle back after a year or two when pricing, coverage, or service needs change. If that’s the case for you, I’m happy to take another look.",
    voicemail: "",
    topic: "",
  },
  {
    day: 6,

    message:
      "If you’d like to revisit things, would you prefer a quick call or for me to text you the basics?",
    voicemail: "",
    topic: "",
  },
  {
    day: 9,

    message:
      "I’ll pause outreach for now so I don’t bug you -- If you ever want to compare options again, just reply 'quote' and I’ll jump back in.",
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. I just wanted to follow up one last time and then I’ll stop reaching out for now so I
don’t bug you. If you ever want to compare options again down the road, feel free to call or text me at [number]. Take care.`,
    topic: "",
  },
];
export {
  conditionalRequotes,
  requoteNoContact,
  requoteTexts,
  newLeads,
  winbackScript,
};
