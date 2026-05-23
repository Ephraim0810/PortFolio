// All editable content lives here. Update names, links and copy in one place.

export const projects = [
  {
    id: 'study-space',
    tag: 'Design Project 01',
    year: '2023',
    title: 'Study Space — a refurbishment for how students actually work',
    description:
      'First school-based design project. Interviewed peers, sketched, prototyped a partitioning table, and produced a 3D AutoCAD visualisation and full quotation for the space.',
    stack: ['AutoCAD', 'User Research', 'Prototyping'],
    image: 'https://static.wixstatic.com/media/2103ca_95ef4d79b0de4564bd6658abc8768612~mv2.png',
    detailUrl: '/projects/study-space.html',
  },
  {
    id: 'sustainable-bin',
    tag: 'National Design Project',
    year: '2023',
    title: 'Sustainable Recycling Bin — Certificate of Merit',
    description:
      'National Design Project entry with Bank of Singapore & Republic Polytechnic. A bin designed to make recycling the path of least resistance — three rounds of user testing, awarded Certificate of Merit.',
    stack: ['Behavioural Design', 'Sustainability', 'National-level'],
    image: 'https://static.wixstatic.com/media/2103ca_1b0d7421443a4caa8ae082d1c1b4f8a9~mv2.jpeg',
    detailUrl: '/projects/sustainable-bin.html',
  },
  {
    id: 'lemi-lens',
    tag: 'Capstone Project',
    year: '2024',
    glyph: 'Λ',
    title: 'Lemi Lens — a wearable for the visually impaired',
    description:
      'Capstone of the Design Elective, built with SAVH. A wearable that helps people with visual impairments navigate the city and catch buses on time. The project that quietly pulled me from design into AI.',
    stack: ['Accessibility', 'Wearable', 'Field Research'],
    detailUrl: '/projects/lemi-lens.html',
  },
  {
    id: 'image-safe',
    tag: 'Sentinel · Year 1',
    year: '2022',
    glyph: '[\u25a1]',
    glyphSmall: true,
    title: 'Image Safe — passcode-locked photo vault',
    description:
      'First-year Sentinel Programme project, and one of the first interactive things I ever shipped. A tiny in-browser "safe" — type a numeric passcode on an on-screen keypad to lock and unlock a photo, like a hotel-room safe in a webpage.',
    stack: ['JavaScript', 'DOM', 'UI'],
    detailUrl: '/projects/image-safe.html',
    liveUrl: 'https://jsfiddle.net/9zvhtLys/',
  },
  {
    id: 'ciphertext-decoder',
    tag: 'Sentinel · Year 2',
    year: '2023',
    glyph: '01·10·11',
    glyphSmall: true,
    title: 'Ciphertext Frequency Decoder — cryptanalysis tool',
    description:
      'Built during my second year of the Sentinel cybersecurity programme. A tool that breaks substitution ciphers by analysing letter-frequency distributions — a small but satisfying intersection of statistics, code, and pattern recognition. My first taste of the kind of thinking that sits underneath modern AI.',
    stack: ['JavaScript', 'Cryptanalysis', 'Statistics'],
    detailUrl: '/projects/ciphertext-decoder.html',
    liveUrl: 'https://jsfiddle.net/s9ruc3kg/',
  },
]

export const experience = [
  {
    when: '2025 — Now',
    kind: 'edu',
    title: 'Tertiary Studies · Artificial Intelligence',
    org: 'Specialising in **AI & machine learning**',
    body:
      'Currently focused on deep learning fundamentals, computer vision, and applied agents. Building small projects on the side to translate coursework into something real.',
    chip: 'Current',
  },
  {
    when: '2020 — 2024',
    kind: 'edu',
    title: 'GCE \u2018O\u2019 Level · Design Elective Programme',
    org: '**Commonwealth Secondary School** · West Coast, Singapore',
    body:
      'Chose the Design Elective Programme over a traditional \u2018O\u2019 Level subject \u2014, while honing my knowledge of Sciences and Math. Completed two design projects and a capstone, alongside a leadership role in the Robotics CCA and student council, graduating with exemplary results.\n\nL1R5(Nett): 9',
    chip: 'Secondary',
    leaders: [
      {
        title: 'Student Councillor',
        when: '2022 — 2024 · two consecutive terms',
        body: 'Ran school-wide events, represented the student body in staff discussions, and mentored junior councillors through their first term.',
      },
      {
        title: 'CCA Executive Committee',
        when: 'Robotics CCA · Commonwealth Sec',
        body: 'Served on the Robotics CCA Exco — helping organise sessions, mentor juniors, and represent the CCA in school programmes.',
      },
    ],
  },
]

export const extras = [
  {
    icon: '◆',
    title: 'FIRST LEGO League 2023',
    role: 'Robotics CCA · Innovation Project · finalist',
    body:
      'My last FLL before stepping down from the CCA. Our team made it to the national finals among 60 finalist teams in Singapore — the best ending I could\u2019ve asked for.',
    footLeft: 'COMPETITION',
    footRight: 'FLL 2023',
  },
  {
    icon: '◆',
    title: 'FIRST LEGO League 2022',
    role: 'Robotics CCA · Innovation Project',
    body:
      'Second season as main researcher on the innovation project, assisting teammates on the programming side. The season that taught me how to resolve team conflict and actually work as a team.',
    footLeft: 'COMPETITION',
    footRight: 'FLL 2022',
  },
  {
    icon: '◆',
    title: 'FIRST LEGO League 2021',
    role: 'Robotics CCA · Innovation Project',
    body:
      'My first FLL ever. Key contributor to the research segment, and self-taught EV3 programming on Mindstorms to support our main programmer — our bot completed 4 missions on the day. Picked up 3D modelling, animation, and product innovation along the way.',
    footLeft: 'COMPETITION',
    footRight: 'FLL 2021',
  },
  {
    icon: '◇',
    title: 'Sentinel Programme · MINDEF',
    role: 'Pioneer batch · 2022 — 2023 · 2 years',
    body:
      'My first real exposure to cybersecurity. Pioneer batch of MINDEF\u2019s Sentinel Programme — two years of HTML, JavaScript, Node.js, SQL and C++ alongside hands-on cryptography, web-vulnerability work, SQL injection, network forensics and HTTP protocols. Attended multiple MINDEF events and Sentinel hackathons.',
    footLeft: 'CYBERSECURITY',
    footRight: 'MINDEF',
  },
  {
    icon: '⌘',
    title: 'Cisco · Cybersecurity',
    role: 'Self-taught certification · 2024',
    body:
      'Self-paced module on online risk, threat awareness, and basic defensive practice. First time I really thought about systems from an attacker\u2019s perspective.',
    footLeft: 'CERTIFICATION',
    footRight: 'Cisco',
  },
  {
    icon: '∆',
    title: 'Cisco · Data Science',
    role: 'Self-taught certification · 2024',
    body:
      'Foundations of data manipulation, spreadsheets, pivot tables, and pulling signal out of small datasets \u2014 the quiet on-ramp into the AI work I do now.',
    footLeft: 'CERTIFICATION',
    footRight: 'Cisco',
  },
  {
    icon: '∿',
    title: 'Cisco · Endpoint Security',
    role: 'Self-taught · In progress',
    body:
      'Currently working through Cisco\u2019s Endpoint Security module. Going deeper on host-level defence \u2014 the layer most people forget about until something goes wrong.',
    footLeft: 'CERTIFICATION',
    footRight: 'Ongoing',
  },
  {
    icon: '◊',
    title: 'Design Elective · Studio',
    role: '2020 — 2024 · Commonwealth Sec',
    body:
      'The four-year programme that hosted all three case-study projects above. Sketching, model-making, and learning to defend a decision in front of a critique panel.',
    footLeft: 'PROGRAMME',
    footRight: '4 years',
  },
]

export const techMarquee = [
  'PyTorch',
  'TensorFlow',
  'JAX',
  'Transformers',
  'LangChain',
  'CUDA',
  'FastAPI',
  'Next.js',
  'TypeScript',
  'Rust',
]

export const contact = {
  email: 'ephraimtoji@gmail.com',
  github: { handle: 'github.com/Ephraim0810', url: 'https://github.com/Ephraim0810' },
  phone: { display: '+65 8950 2186', tel: '+6589502186' },
  linkedinUrl: '#',
  cvUrl: '#',
}
