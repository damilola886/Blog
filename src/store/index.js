import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fashion: [
      {
        id: 1,
        title:
          "Jeff Bezos' wealth hits a new high of $172 billion as Amazon stock soars, making him richer than he was before his divorce settlement",
        story:
          "Jeff Bezos' wealth has reached new heights following a 4.4 percent surge in Amazon's stock value.56-year-old Bezos, the founder and CEO of Amazon, is now worth $172 billion according to the Bloomberg Billionaires Index. This means he is richer now than he was prior to settling the most expensive divorce in history last year.",
        image: require("../assets/story.jpeg"),
        fullStory:
          "Jeff Bezos' wealth has reached new heights following a 4.4 percent surge in Amazon's stock value.56-year-old Bezos, the founder and CEO of Amazon, is now worth $172 billion according to the Bloomberg Billionaires Index. This means he is richer now than he was prior to settling the most expensive divorce in history last year.  Bezos ex-wife MacKenzie took 25 percent of his shares, which meant at the time her stake was worth more than $35 billion, according to Forbes.<br> However, Bezos remained the wealthiest person on the planet after the settlement and his wealth has continued to soar amid the coronavirus pandemic.According to Comparisun, Bezos is on track to be the world's first trillionaire by 2026.</br>The business software comparison site used data collected from the last five years of the Forbes Rich List to calculate the yearly wealth growth rate of the world's richest billionaires. Applying this annual growth rate over the coming years, the study concluded that Bezos could become the world's first trillionaire in 2026 or sooner. Bezos' company, Amazon has been doing particularly well in recent months with the increased demand for online shopping due to the Coronavirus pandemic. As a result, the company's share prices has increased.",
      },
      {
        id: 2,
        title: "Hushpuppi and Woodberry extradited to US",
        story:
          "Suspected Nigerian fraudsters, Ramon Igbalode Abbas a.k.a Hushpuppi and Olalekan Jacon Ponle a.k.a Mr Woodberry have been extradited to the United States. This was confirmed in a post shared on the official page of the Dubai Police. FBI's Director, Christopher Wray thanked the Dubai Police....",
        image: require("../assets/story2.jpg"),
        fullStory:
          "Suspected Nigerian fraudsters, Ramon Igbalode Abbas a.k.a Hushpuppi and Olalekan Jacon Ponle a.k.a Mr Woodberry have been extradited to the United States. This was confirmed in a post shared on the official page of the Dubai Police. FBI's Director, Christopher Wray thanked the Dubai Police for their cooperation in extraditing the Nigerian suspects who were accused of committing multiple money-laundering and cyber crimes.The Instagram post read;The Director of the Federatal Bureau of Investigation (FBI), Christopher Wray has praised the exceptional efforts exerted by the United Arab Emirate, represented bu the Dubai Police General HQ, in combating transnational organised cybercrime including the rrecent arrest of Raymod Igbalode Abbas, known as 'Hushpuppi' and Olalekan Jacon Ponle aka 'Woodberry' who were taken down in opetation 'Fox Hunt 2'.'Mr Wray also extended his appreciations to Dubai Police for their cooperation in extraditing the wanted criminals, who committed money-laundering and multiple-cybercrimes, to the United States.",
      },
      {
        id: 3,
        title:
          "Nigerian man narrates how the new boss of a Chinese company he served for years with diligence sacked him without cause",
        story:
          "A Nigerian man who lost his job today took to Twitter to pour out his heart.@MohammedBlack said he has been with the Chinese company for roughly three years and gave his best while there. He added that he was his Chinese boss' favourite.",
        image: require("../assets/story3.png"),
        fullStory:
          "A Nigerian man who lost his job today took to Twitter to pour out his heart.@MohammedBlack said he has been with the Chinese company for roughly three years and gave his best while there. He added that he was his Chinese boss' favourite.A new boss replaced the former after the Covid-19 lockdown was eased and he said the new boss has been sacking people for no reason.He claimed that the new boss walked towards him today and sacked him without explaining why, despite protests and pleas from other staff attesting to his work ethics.He added that after sacking him, the new Chinese boss installed a lady who was working as his subordinate to take over from him",
      },
      {
        id: 4,
        title:
          "Nigerian police denies detaining Seyitan after she accused D'banj of rape",
        story:
          "The Nigerian police has denied detaining Seyitan Babatayo, the lady who accused singer, D'banj, of rape. A police source who spoke to Vanguard, said D’banj reported on three separate occasions at FCID for interrogation and statement,...",
        image: require("../assets/story4.jpeg"),
        fullStory:
          "The Nigerian police has denied detaining Seyitan Babatayo, the lady who accused singer, D'banj, of rape. A police source who spoke to Vanguard, said D’banj reported on three separate occasions at FCID for interrogation and statement, while Seyitan repeatedly refused to show up. Her alleged non-appearance led to the prompt dispatch of officers by the Force CID to Lagos, to invite her for written statement and interrogation on the alleged rape incident. The police source insisted that there might be a mix up by the legal representative of Seyitan over claims of being arrested and detained by Police operatives at Ikeja in Lagos for 24 hours.The security official insisted that the alleged rape victim was only invited to give her written statement and also to be interrogated as it was necessary for her to come forward to give a statement to back up her accusation.",
      },
      {
        id: 5,
        title: "Oyo state government lists guidelines for schools resumption",
        story:
          "The Nigerian police has denied detaining Seyitan Babatayo, the lady who accused singer, D'banj, of rape. A police source who spoke to Vanguard, said D’banj reported on three separate occasions at FCID for interrogation and statement,...",
        image: require("../assets/story5.jpg"),
        fullStory:
          "The Oyo state government has announced some important guidelines which schools are expected to follow to ensure a smooth resumption in the state. The State Commissioner for Education, Science and Technology,  Olasunkanmi Olaleye who made the announcement on Wednesday July 1, said school heads, principals and teachers have undergone training on how to monitor and report any suspected case of Coronavirus. An Emergency Operation Centers (EOCs) has been set up in the State capital and at the zonal levels. Incident Managers have also been appointed for each school in the state, and they are expected to report any emergency directly to the EOCs through special communication lines.Each class will also have Warder whose obligation is to relate with the Incident Managers on his or her observations. Schools in the state must also observe compulsory hand-washing points at its entrances and at the entrance of each classroom. Alcohol-based sanitizers must also be provided for students and teachers. Olusunkanmi said; “Throughout last week, what we have been doing was to train school heads and teachers of public and private schools, preparing them for this task of taking firm control of preventing the spread of Covid-19 into our schools as we resume.“Each school has been mandated to strictly enforce social distancing and observe other protocols against Covid-19 among teachers and students as laid down by NCDC.“Students are to come to school with their facemasks and follow instructions on the guidelines from the management, these are imperative the government cannot lock down forever and education is an aspect of life that should not be allowed to suffer backwardness.“I can boldly tell you that with these measures in place, the children are more safer with us in school than even many homes, imagine situations whereby students are asked to go to private lessons that provided no safety measure, many follow their parents to the market and workplaces where possibility of contracting the virus is high, so they are rather better kept at school than home.The Commissioner also allayed fears of members of the public on risks associated with reopening of schools. This is coming after the state government announced that teachers of public schools in the State are to resume on June 29, while students are to resume on July 6.",
      },
    ],
    showFashion: null,
  },
  mutations: {
    setSelectFashionValue(state, fashion) {
      state.showFashion = fashion;
    },
  },
  actions: {},
  modules: {},
});
