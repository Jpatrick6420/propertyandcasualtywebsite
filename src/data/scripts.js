const newLeads = [
  {
    day: 1,
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. I started reviewing your request for a home and auto insurance quote and I'm calling to get you the final numbers. You can reach me at 801-683-3668 before 5. Talk to you soon!`,
    topic: "",
    voicemail: `Hi [client name], this is [Name] with Mason Crapo Insurance. I’m calling because you recently requested a home and auto insurance quote. I’ve started reviewing your information and I just wanted to connect and make sure that all the discounts are applied. You can call or text me back at [phoneNumber]. Talk soon.`,
  },
  {
    day: 2,
    message: `Online quotes are often just rough estimates and can vary based on square footage, roof and and coverage selections. I'm reviewing those details now so the numbers are accurate. I can finish everything up whenever it's convenient for you.`,
    topic: "",
    voicemail: "",
  },
  {
    day: 5,
    message: `I still have your quote paused here. I didn’t want you to miss out if the numbers end up being better than expected.`,
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
    message: `Hey :contact:, this is :user: with Mason Crapo Insurance. We quoted your insurance a while back and couldn't help, but now with our new rates, I'd love to get you a fresh comparison. Are you interested?`,
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. I’m reaching out because I had your information from a prior quote request and wanted to see if it still makes sense to take a look at your home and auto insurance. You can call or text me back at [phoneNumber] whenever it’s convenient.`,
    topic: "",
  },
  {
    day: 2,
    message: `just checking in--- I've been seeing some rates shift lately depending on carriers. So sometimes it's worth taking another look even if things seemed close before. Happy to rerun the numbers if it helps.`,
    voicemail: "",
    topic: "",
  },
  {
    day: 5,
    message: `Hey :contact:, I'm working on quotes today and i can include yours as well if you'd still like me to take a look. Otherwise, I'm always here to help when you're ready.`,
    voicemail: "",
    topic: "",
  },
];
const requoteNoContact = [
  {
    day: 1,
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. I reached out a while back after a quote request came through and just wanted to see if you're still open to a comparison`,
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. I’m reaching out because I had your information from a prior quote request and wanted to see if it still makes sense to take a look at your home and auto insurance. You can call or text me back at [phoneNumber] whenever it’s convenient.`,
    topic: "",
  },
  {
    day: 2,
    message: `I just wanted to follow up in case my last message got buried. I can check a few different carriers at once and keep it pretty quick and simple if you're still interested.`,
    voicemail: "",
    topic: "",
  },
  {
    day: 5,
    message: `Hey :contact:, just checking in one more time to see if you wanted a quick comparison. I'm happy to help whenever it makes sense.`,
    voicemail: "",
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
  {
    day: 1,
    topic: "rates",
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. Since we last spoke, we've had some rate changes. I'd love to share our updated quote with you. Please give me a call before 5 at 801-683-3668`,
    voicemail: "",
  },
];
const winbackScript = [
  {
    day: 1,

    message: `Hey :contact:, this is :user: with Mason Crapo Insurance. We worked with you in the past and since our rates have changed. Would you want me to get you a current comparison?`,
    voicemail: `Hi [Name], this is Justin with Mason Crapo Insurance. We worked together in the past, and I just wanted to check in and see if
it makes sense to revisit your insurance now.  You can call or text me back at [phoneNumber] whenever it’s convenient.`,
    topic: "",
  },
  {
    day: 3,

    message:
      "We would love to have you back. After adding additional carriers, I’m happy to take another look.",
    voicemail: "",
    topic: "",
  },
  {
    day: 7,

    message:
      "Hey :contact:, just reaching out once more and see if you'd like me to put together some current numbers. I'm happy to help whenever it makes sense.  ",
    voicemail: "",
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
