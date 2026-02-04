const newLeads = [
  {
    day: 1,
    message: `Hi :contact:, this is Justin with Mason Crapo Insurance. I started reviewing your request for a [home/auto] insurance quote and I'm calling to get you the final numbers. You can reach me at 801-683-3668 before 5. Talk to you soon!`,
    topic: "",
    voicemail: `Hi [client name], this is [Name] with Mason Crapo Insurance. I’m calling because you recently requested a [home/auto] insurance quote. I’ve started reviewing your information and I just wanted to connect and make sure that all the discounts are applied. You can call or text me back at [phoneNumber]. Talk soon.`,
  },
  {
    day: 2,
    message: `When online quotes are off, it’s usually because of square footage, roof age, or coverage differences from a current policy. That’s what I’m double-checking on yours. Happy to finish this up whenever it makes sense for you.`,
    topic: "",
    voicemail: "",
  },
  {
    day: 5,
    message: `Just a quick note — I still have your quote paused here. I didn’t want you to miss out if the numbers end up being better than expected.`,
    topic: "",
    voicemail: "",
  },
  {
    day: 7,
    message: `I’ll go ahead and close this out on my end for now. If you’d ever like a careful review of your coverage or pricing, just reach out.`,
    topic: "",
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. I just wanted to follow up one last time and then I’ll pause outreach so I don’t bug you. If you ever want to revisit your insurance or compare options in the future, feel free to reach out. Take care.`,
  },
];

const requoteTexts = [
  {
    day: 1,
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. It's been awhile since we last looked at your auto and home insurance. Since our rates have changed, I just wanted to see if it makes sense to get you an updated quote. `,
    voicemail: `
Hi [Name], this is Justin with Mason Crapo Insurance. We had looked at your [home/auto] insurance in the past, and I’m reaching out to see if it makes sense to revisit it now. I just wanted to connect and see if you’d like an updated look. You can call or text me back at [phoneNumber].`,
    topic: "",
  },
  {
    day: 2,
    message: `Hi :contact:, this is Justin with Mason Crapo Insurance. I was getting ready to work on the updated comparison for you and wanted to check that you'd still like me to run it. With how much rates have shifted lately, this one may be worth revisiting.`,
    voicemail: "",
    topic: "",
  },
  {
    day: 5,
    message: `Sometimes re-quotes come out very similar, and sometimes they look different because ages of drivers, vehicles and other factors. Happy to walk through it if you want.`,
    voicemail: "",
    topic: "",
  },
  {
    day: 7,
    message: `I’ll stop reaching out for now so I don’t bug you. If you want to revisit things later, you can call or text me and we can take another look.`,
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. Just following up one last time on the re-quote we discussed previously. I’ll stop reaching out for now, but if you want to take another look at your insurance down the road, feel free to call or text me at [phoneNumber]. Happy to help.`,
    topic: "",
  },
];
const requoteNoContact = [
  {
    day: 1,
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. I had your info from a prior [home/auto] quote request and due to recent rate changes, I wanted to see if reviewing your [home/auto] insurance is still relevant.`,
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. I’m reaching out because I had your information from a prior quote request and wanted to see if it still makes sense to take a look at your [home/auto] insurance. You can call or text me back at [phoneNumber] whenever it’s convenient.`,
    topic: "",
  },
  {
    day: 2,
    message: `With the recent rate changes, it can be helpful to get updated quotes and  sometimes it doesn't— it really just depends on timing. I can get you those figures if you are interested`,
    voicemail: "",
    topic: "",
  },
  {
    day: 5,
    message: `The reason why I reached out is because we've added new carriers since we last received your quote request. I can put together some comparisons if that is helpful to you.`,
    voicemail: "",
    topic: "",
  },
  {
    day: 7,
    message: `I’ll stop reaching out for now so I don’t bug you. If you want to check the insurance market at a later date then reach out and I’ll get you a comparison.`,
    voicemail: `Hi [Name], this is [user] with Mason Crapo Insurance. I just wanted to follow up one last time and then I’ll stop reaching out for now so I don’t bug you. If you want to revisit your insurance down the road, feel free to call or text me at [phoneNumber]. Take care.`,
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
      "Hi :contact:, this is :user: with Mason Crapo Insurance. When we last talked, your home wasn't eligible with a few carriers due to underwriting issues. That may have changed.  Happy to revisit it if you'd like. ",
    voicemail: "",
  },
  {
    day: 1,
    topic: "options",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance. Since we last spoke, I have a couple additional carrier options that werent available at the time. Let me know if you'd like me to re-run things.",
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
      "Hi :Name:, this is :user: with Mason Crapo Insurance. We worked together in the past, and I wanted to check in to see if it makes sense to review your insurance again.",
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. We worked together in the past, and I just wanted to check in and see if
it makes sense to revisit your insurance now.  You can call or text me back at [phoneNumber] whenever it’s convenient.`,
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
don’t bug you. If you ever want to compare options again down the road, feel free to call or text me at [phoneNumber]. Take care.`,
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
