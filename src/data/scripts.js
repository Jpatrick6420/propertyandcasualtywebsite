const newLeads = [
  {
    day: 1,
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. I just recieved your request for a [home / auto] quote. I was reviewing your information and I was calling to finalize the price with you. You can reach me at [number]. I hope you have a great day.`,
    topic: "",
    voicemail: `Hi [client name], this is [your name] with Mason Crapo Insurance. I’m calling because you recently requested a [home/auto] insurance quote. I’ve started reviewing your information and I just wanted to connect and make sure that all the discounts are applied. You can call or text me back at 801-683-3668 at your convenience. Talk soon.`,
  },
  {
    day: 2,
    message: `When you have a minute, I'm happy to help with the [home/auto] quote you requested or answer any questions.`,
    topic: "",
    voicemail: "",
  },
  {
    day: 6,
    message: `Happy to help whenever it makes sense?`,
    topic: "",
    voicemail: "",
  },
  {
    day: 9,
    message: `I’ll stop reaching out for now so I don’t bug you. If you want to revisit your [home/auto] coverage later, just call or text me anytime.`,
    topic: "",
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. I just wanted to follow up one last time and then I’ll pause outreach so I don’t bug you. If you ever want to revisit your insurance or compare options in the future, feel free to reach out. Take care.`,
  },
];

const requoteTexts = [
  {
    day: 1,
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. It's been awhile since we last looked at your auto and home insurance. Since our rates have changed, I just wanted to see if it makes sense to get you an updated quote. `,
    voicemail: `
Hi [Name], this is Justin with Mason Crapo Insurance. We had looked at your [home/auto] insurance in the past, and I’m reaching out to see if it makes sense to revisit it now. Nothing urgent — just wanted to connect and see if you’d like an updated look. You can call or text me back at 801-683-3668 whenever it’s convenient.`,
    topic: "",
  },
  {
    day: 3,
    message: `No urgency here — just wanted to see if it makes sense to revisit your insurance since we've added new carriers. I just wanted to let you know that I'm here to help`,
    voicemail: "",
    topic: "",
  },
  {
    day: 6,
    message: `Sometimes re-quotes come out very similar, and sometimes they look different because ages of drivers, vehicles and other factors. Happy to walk through it if you want.`,
    voicemail: "",
    topic: "",
  },
  {
    day: 9,
    message: `I’ll stop reaching out for now so I don’t bug you. If you want to revisit things later, you can call or text me and we can take another look.`,
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. Just following up one last time on the re-quote we discussed previously. I’ll stop reaching out for now, but if you want to take another look at your insurance down the road, feel free to call or text me at [number]. Happy to help.`,
    topic: "",
  },
];
const requoteNoContact = [
  {
    day: 1,
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. I had your info from a prior quote request and wanted to see if reviewing your [home/auto] insurance is still relevant. No urgency — just checking in.`,
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. I’m reaching out because I had your information from a prior quote request and wanted to see if it still makes sense to take a look at your [home/auto] insurance. Nothing urgent — you can call or text me back at 801-683-3668 whenever it’s convenient.`,
    topic: "",
  },
  {
    day: 3,
    message: `With rate changes in the insurnace industry, it can be helpful to get updated rates and  sometimes it doesn't— it really just depends on timing.`,
    voicemail: "",
    topic: "",
  },
  {
    day: 6,
    message: `The reason why I reached out is because we've added new carriers since we last recieved your quote request. I can put together some comparisons if that is helpful to you.`,
    voicemail: "",
    topic: "",
  },
  {
    day: 9,
    message: `I’ll stop reaching out for now so I don’t bug you. If you want to check the insurance market at a later date then reach out and I’ll get you a comparison.`,
    voicemail: `Hi [Name], this is [user] with Mason Crapo Insurance. I just wanted to follow up one last time and then I’ll stop reaching out for now so I don’t bug you. If you want to revisit your insurance down the road, feel free to call or text me at [number]. Take care.`,
    topic: "",
  },
];

const conditionalRequotes = [
  {
    day: 1,
    topic: "claims",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance, and I'm reaching out because the claim that we discussed may no longer be affecting your options. No rush --just wanted to know if you'd like me to take another look.",
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
it makes sense to revisit your insurance now. Nothing urgent — you can call or text me back at 801-683-3668 whenever it’s
convenient.`,
    topic: "",
  },
  {
    day: 3,

    message:
      "We would love to have you back. After our latest rate changes, I’m happy to take another look.",
    voicemail: "",
    topic: "",
  },
  {
    day: 6,

    message:
      "Since you last been with us, we've added a lot of new options! There has never been a better time to see what your options are. I'm always happy to help you compare. ",
    voicemail: "",
    topic: "",
  },
  {
    day: 9,

    message:
      "I’ll pause outreach for now so I don’t bug you -- I just wanted to let you know that I'm always here to help you compare options when the time is right. ",
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. I just wanted to follow up one last time and then I’ll stop reaching out for now so I
don’t bug you. If you ever want to compare options again down the road, feel free to call or text me at 801-683-3668. Take care.`,
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
