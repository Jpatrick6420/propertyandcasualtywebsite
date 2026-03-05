const newLeads = [
  {
    day: 1,
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. I started reviewing your request for a [Car or Home] insurance quote and I'm calling to get you the final numbers. You can reach me at 801-683-3668 before 5. Talk to you soon!`,
    topic: "",
    voicemail: `Hi [contact], this is [Name] with Mason Crapo Insurance. I’m calling because you recently requested a home and auto insurance quote. I’ve started reviewing your information and I just wanted to connect and make sure that all the discounts are applied. You can call or text me back at [phoneNumber]. Talk soon.`,
    buttons: true,
  },
  {
    day: 2,
    message: `Online quotes are often just rough estimates and can vary based on square footage, roof and and coverage selections. I'm reviewing those details now so the numbers are accurate. I can finish everything up whenever it's convenient for you.`,
    topic: "",
    voicemail: "",
    buttons: false,
  },
  {
    day: 5,
    message: `I still have your quote paused here. I didn’t want you to miss out if the numbers end up being better than expected.`,
    topic: "",
    voicemail: "",
    buttons: false,
  },
  {
    day: 7,
    message: `I’ll go ahead and close this out on my end for now. If you’d ever like a careful review of your coverage or pricing, just reach out.`,
    topic: "",
    voicemail: `Hi [contact], this is Justin with Mason Crapo Insurance. I just wanted to follow up one last time and then I’ll pause outreach so I don’t bug you. If you ever want to revisit your insurance or compare options in the future, feel free to reach out. Take care.`,
    buttons: false,
  },
];

const requoteTexts = [
  {
    day: 1,
    message: `Hey :contact:, this is :user: with Mason Crapo Insurance. We quoted your insurance a while back and couldn't help, but now with our new rates, I'd love to get you a fresh comparison. Are you interested?`,
    voicemail: `Hi [contact], this is [Name] with Mason Crapo Insurance. I’m reaching out because I had your information from a prior quote request and wanted to see if it still makes sense to take a look at your home and auto insurance. You can call or text me back at [phoneNumber] whenever it’s convenient.`,
    topic: "",
    buttons: false,
  },
  {
    day: 2,
    message: `just checking in--- I've been seeing some rates shift lately depending on carriers. So sometimes it's worth taking another look even if things seemed close before. Happy to rerun the numbers if it helps.`,
    voicemail: "",
    topic: "",
    buttons: false,
  },
  {
    day: 5,
    message: `Hey :contact:, I'll stop reaching out after this, but I'm always here if rates change or you want a quick comparison down the road. Happy to help anytime. --:user:`,
    voicemail: "",
    topic: "",
    buttons: false,
  },
];
const requoteNoContact = [
  {
    day: 1,
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. I'm following up because you had requested a home and auto quote from us in the past and we recently had new rates come out. Would you be open to a quick comparison?`,
    voicemail: `Hi :contact:, this is [Name] with Mason Crapo Insurance. I’m reaching out because I had your information from a prior quote request and wanted to see if it still makes sense to take a look at your home and auto insurance. You can call or text me back at [phoneNumber] whenever it’s convenient.`,
    topic: "",
    buttons: false,
  },
  {
    day: 2,
    message: `I just wanted to follow up in case my last message got buried. I can check a few different carriers at once and keep it pretty quick and simple if you're still interested.`,
    voicemail: "",
    topic: "",
    buttons: false,
  },
  {
    day: 5,
    message: `Hey :contact:, I'll stop reaching out after this, but I'm always here if rates change or you want a quick comparison down the road. Happy to help anytime. --:user:`,
    voicemail: "",
    topic: "",
    buttons: false,
  },
];

const conditionalRequotes = [
  {
    day: 1,
    topic: "claims",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance, and I'm reaching out because the claim that we discussed may no longer be affecting your options. I'm happy to take another look if it's helpful for you.",
    voicemail: "",
    buttons: false,
  },
  {
    day: 1,
    topic: "eligible",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance. When we last talked, your home wasn't eligible with a few carriers due to underwriting issues. That may have changed.  Happy to revisit it if you'd like. ",
    voicemail: "",
    buttons: false,
  },
  {
    day: 1,
    topic: "options",
    message:
      "Hi :contact:, this is :user: with Mason Crapo Insurance. Since we last spoke, I have a couple additional carrier options that werent available at the time. Let me know if you'd like me to re-run things.",
    voicemail: "",
    buttons: false,
  },

  {
    day: 1,
    topic: "rates",
    message: `Hi :contact:, this is :user: with Mason Crapo Insurance. Since we last spoke, we've had some rate changes. I'd love to share our updated quote with you. Please give me a call before 5 at 801-683-3668.`,
    voicemail: "",
    buttons: false,
  },
];
const winbackScript = [
  {
    day: 1,

    message: `Hey :contact:, this is :user: with Mason Crapo Insurance. We worked with you in the past and since our rates have changed. Would you want me to get you a current comparison?`,
    voicemail: `Hi [contact], this is [Name] with Mason Crapo Insurance. We worked together in the past, and I just wanted to check in and see if
it makes sense to revisit your insurance now.  You can call or text me back at [phoneNumber] whenever it’s convenient.`,
    topic: "",
    buttons: false,
  },
  {
    day: 3,

    message:
      "We would love to have you back. After adding additional carriers, I’m happy to take another look.",
    voicemail: "",
    topic: "",
    buttons: false,
  },
  {
    day: 7,

    message:
      "Hey :contact:, just reaching out once more and see if you'd like me to put together some current numbers. I'm happy to help whenever it makes sense.  ",
    voicemail: "",
    topic: "",
    buttons: false,
  },
];
const vladNewLeadScripts = [
  {
    day: 1,
    message: `Hi :contact:! This is :user: from Mason Crapo Insurance. I hope you’re having a great day! I received your request for a [Car or Home] quote. What time can we connect today so I can go over your discounts and share the final quote with you?`,
    topic: "",
    voicemail: `Hi [Lead’s Name]! This is [Name] calling you from Mason Crapo Insurance. I just received a notification that you were looking to get a [Car or Home] insurance quote.
I started working on your quote, and would love to connect over the phone to share how much it would cost to insure your [Car or Home] if you worked with us!
Please give me a call back before 5pm so we can go over that. My number is [phoneNumber]. Talk to you soon!`,
    buttons: true,
  },
  {
    day: 2,
    message: `Hi :contact:! This is :user: with Mason Crapo Insurance. I just called you and left a message. I’m curious, how much are you currently being charged for your insurance?`,
    topic: "",
    voicemail: `Hi [Lead’s Name]! This is [Name] calling you from Mason Crapo Insurance. I started your insurance quote for your [Car or Home] that you requested, and it’s coming back at a great rate! Please give me a call back before 5pm so that I can go over that with you. You can call me back at [phoneNumber]. Talk to you soon!`,
    buttons: false,
  },
  {
    day: 3,
    message: `Hi :contact:! I’m sure you have a very busy schedule. When is a good time to connect over the phone so I can go over your quote?`,
    topic: "",
    voicemail: `Hi [Lead’s Name]! This is [Name] calling you from Mason Crapo Insurance. I started your insurance quote for your [Car or Home] that you requested, and it’s coming back at a great rate! Please give me a call back before 5pm so that I can go over that with you. You can call me back at [phoneNumber]. Talk to you soon!`,
    buttons: false,
  },
  {
    day: 4,
    message: `Hi :contact:! This is :user: with Mason Crapo Insurance. I recently called you and left a voicemail. Just so you know, our rates have recently changed, so I wanted to connect with you and share how much your insurance would cost if you worked with our agency. When is a good time to connect so I can go over your insurance proposal that I’ve already started for you?`,
    topic: "",
    voicemail: `Hi [Lead’s Name]! This is [Name] calling you from Mason Crapo Insurance. I started your insurance quote for your [Car or Home] that you requested, and it’s coming back at a great rate! Please give me a call back before 5pm so that I can go over that with you. You can call me back at [phoneNumber]. Talk to you soon!`,
  },
  {
    day: "5-9",
    message: `Is this still :contact: phone number?`,
    topic: "",
    voicemail: `Hi [Lead’s Name]! This is [Name] calling you from Mason Crapo Insurance. I started your insurance quote for your [Car or Home] that you requested, and it’s coming back at a great rate! Please give me a call back before 5pm so that I can go over that with you. You can call me back at [phoneNumber]. Talk to you soon!`,
    buttons: false,
  },
  {
    day: 10,
    message: `Hey :contact:, I'll stop reaching out after this, but I'm always here if rates change or you want a quick comparison down the road. Happy to help anytime. --:user:`,
    topic: "",
    voicemail: `Hi [Lead’s Name]. This is [Name] calling you from Mason Crapo Insurance. This is my last attempt to reach out to you, and help you save money on your [Car or Home] insurance for your [Home Address or Vehicles]. The quote that I have prepared for you will be recycled out of the system at the end of the day. If you’d like to save money on your [Car or Home] insurance, then please give me a call back before 5pm today at this number [phoneNumber].`,
    buttons: true,
  },
];
const vladOldLeads = [
  {
    day: "1-5",
    message: "",
    topic: "",
    voicemail: `Hi [Lead’s Name]! This is [Name] calling you from Mason Crapo Insurance. We gave you a [Car or Home] insurance quote a while back, and since our rates have recently changed I wanted to share how much it would be to insure your [Car or Home] with us. Please give me a call back before 5pm at [phoneNumber]. Talk to you soon!`,
    buttons: true,
  },
  {
    day: 6,
    message: "",
    topic: "",
    voicemail: `Hi [Lead’s Name]. This is [Name] calling you from Mason Crapo Insurance. This is my last attempt to reach out to you, and help you save money on your [Car or Home] insurance for your [Home Address or Vehicles]. The quote that I have prepared for you will be recycled out of the system at the end of the day. If you’d like to save money on your [Car or Home] insurance, then please give me a call back before 5pm today at this number [phoneNumber].`,
    buttons: true,
  },
];
export {
  conditionalRequotes,
  requoteNoContact,
  requoteTexts,
  newLeads,
  winbackScript,
  vladOldLeads,
  vladNewLeadScripts,
};
