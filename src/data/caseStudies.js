import KikuyuImage from '../assets/images/photos/image6.png'
import UsaidImage from '../assets/images/photos/image5.png'

export const caseStudies = [
  {
    slug: 'kiambu-kikuyu-farmer-group',
    title: 'How a farmer group in Kiambu started farming with clarity.',
    cardTitle: 'Record keeping training at Kikuyu',
    description:
      'See how we moved Kikuyu farmers from guesswork to accurate record keeping.',
    partner: 'KOPIA',
    location: 'Kikuyu, Kiambu',
    image: KikuyuImage,
    imageAlt: 'A farmer training group gathered during an i-kuku record keeping session',
    intro: [
      'In Kikuyu, a dedicated community farmer group managed a flock of 50 broiler chickens. The group divided operational responsibilities by generation to leverage everyone\'s strengths.',
      'The elder women handled daily care: feeding, biosecurity, and keeping the coop clean. The younger women managed the business side: procurement, inventory, and the daily ledger.',
      'By every measure, these were committed, capable farmers. What they were missing was not effort. It was a clear picture of what was actually happening on their farm.',
    ],
    sections: [
      {
        eyebrow: 'The challenge',
        title: 'One notebook was carrying the whole farm.',
        body: [
          'The entire group shared one notebook. Daily records such as feeds, health observations, and sales were logged when remembered, and read almost never.',
          'Decisions were made on memory and instinct. Losses arrived without warning because there was no system to see them coming. The farmers were not failing because they did not care. They were farming blind.',
        ],
      },
      {
        eyebrow: 'What we did',
        title: 'We turned records into decision-making tools.',
        body: [
          'Working with KOPIA, we trained group members on structured record-keeping, showing farmers how meaningful records become the foundation of every good decision.',
          'We ran hands-on walkthroughs of what good records actually make possible, including a real financial simulation from the day a batch is bought to the day it is sold.',
          'Together, we calculated every cost, every variable, and every margin along the way. We helped the group see the difference between setup costs and running costs, and why that distinction determines whether a batch is profitable or not.',
          'Every farmer left with a structured record-keeping toolkit designed for real daily use: feed consumption, vaccine schedules, sales, and the numbers that tell the full story.',
        ],
      },
      {
        eyebrow: 'What changed',
        title: 'The shift happened in the notebooks and in the thinking.',
        body: [
          'The farmers stopped only writing down numbers and started reading them. For the first time, they could see whether a batch was running at a profit or quietly eating into their margins.',
          'Instead of reacting to problems after they happened, they had the data to spot them early before they grew into losses.',
        ],
      },
    ],
    cta:
      'Working with a farmer group like this one? Let\'s talk.',
  },
  {
    slug: 'usaid-tumikia-mtoto-digital-poultry-management',
    title: 'Laying the foundation for digital poultry management with USAID.',
    cardTitle: 'Digital poultry management with USAID',
    description:
      'See how i-kuku helped backyard poultry farmers understand records, sustainability, and digital farm management.',
    partner: 'USAID Tumikia Mtoto',
    location: 'Household poultry farmers',
    image: UsaidImage,
    imageAlt: 'A poultry training facilitator speaking with farmers during a community session',
    intro: [
      'Through the USAID-backed Tumikia Mtoto initiative, i-kuku worked with parents managing backyard poultry flocks to sustain household income and put food on the table.',
      'Some were commercial operations, most were not, but they were investments. And like any investment, they deserved to be managed well.',
    ],
    sections: [
      {
        eyebrow: 'The challenge',
        title: 'Most households were managing poultry by memory.',
        body: [
          'During our deep-dive conversations with the parents, a clear pattern emerged: most households were managing their poultry entirely by memory or through unstructured written methods.',
          'There was no way to know, at the end of a cycle, whether the birds had made money or quietly cost more than they returned. Feed was bought when supplies felt low. Health issues were noticed when it was often too late.',
          'Because nothing was tracked, not much could be learned from the previous cycle.',
        ],
      },
      {
        eyebrow: 'The intervention',
        title: 'We shifted mindsets toward sustainable farming.',
        body: [
          'Before we introduced any tool, we listened. i-kuku ran deep conversations with the parents to understand what their days actually looked like: the constraints, the habits, and the fears around changing the way they had always done things.',
          'We focused on making data feel useful, not burdensome. A simple daily record became an early-warning system for catching health issues before they spread, and financial leaks before they drained the whole flock.',
          'We taught sustainable farm practice, including biosecurity, feed management, and basic flock care grounded in what is realistic for a household environment.',
          'We also demystified digital tools. Mobile-first farm management was introduced as a concept, not an app demo, but a conversation about what it would feel like to have something handle calculations and track farm data so farmers did not have to.',
        ],
      },
      {
        eyebrow: 'The outcomes',
        title: 'The community became ready and digitally aware.',
        body: [
          'By the end of the program, farmers who had walked in skeptical of digital tools were asking when they could start using them.',
          'The fear of complicated software had been replaced with a clear picture of what a simple, well-designed tool could do for their farm. The community was ready, technically aware, mindset-shifted, and asking the right questions.',
          'That readiness is the hardest thing to build. i-kuku built it.',
        ],
      },
    ],
    cta:
      'Ready to run a program like this with individual farmers in your network?',
  },
]

export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug)
