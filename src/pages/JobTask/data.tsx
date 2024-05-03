interface Records {
  id: number;
  discount: string;
  name: string;
  company: string;
  phone: string;
  code: string;
  email: string;
  total: string;
  paid: string;
  due: string;
  address: string;
  date: string;
  role: string;
}

const generateCode = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

const generateAddress = (): string => {
  const street = Math.floor(Math.random() * 1000) + 1;
  const city = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"][
    Math.floor(Math.random() * 5)
  ];
  const state = ["NY", "CA", "IL", "TX", "AZ"][Math.floor(Math.random() * 5)];
  const zip = Math.floor(Math.random() * 90000) + 10000;
  return `${street} Street, ${city}, ${state}, ${zip}`;
};

const generateDate = (): string => {
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  const endDate = new Date();
  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);
  return randomDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

const generateEmail = (name: string): string => {
  return `${name.toLowerCase().replace(/\s/g, "")}@example.com`;
};

const calculateTotal = (): number => {
  const total = Math.floor(Math.random() * 1000) + 1;
  return total;
};

const calculatePaid = (): number => {
  const paid = Math.floor(Math.random() * 500);
  return paid;
};

const calculateDue = (total: number, paid: number): string => {
  const due = total - paid;
  return `${due.toFixed(2)}$`;
};

const roles: string[] = [
  "Manager",
  "Developer",
  "Designer",
  "Analyst",
  "Coordinator",
  "Engineer",
  "Architect",
  "Administrator",
  "Specialist",
  "Consultant",
  "Supervisor",
  "Technician",
  "Planner",
  "Strategist",
  "Researcher",
  "Advisor",
  "Leader",
  "Executive",
  "Officer",
  "Agent",
  "super_admin",
  "Administrator",
  "Pathologist",
  "End User",
  "solvents",
  "developer",
  "Recolector	",
  "Hospital management System",
  "contractor",
];

function generateRandomRole(): string {
  const randomIndex = Math.floor(Math.random() * roles.length);
  return roles[randomIndex];
}

const Data = [
  {
    id: 1,
    discount: "32%",
    name: "Burt",
    company: "Kaggle",
    phone: "+1 (823) 532-2427",
  },
  {
    id: 2,
    discount: "23%",
    name: "Bruno",
    company: "Magmina",
    phone: "+1 (813) 583-2089",
  },
  {
    id: 3,
    discount: "31%",
    name: "Alvarado",
    company: "Translink",
    phone: "+1 (975) 468-3875",
  },
  {
    id: 4,
    discount: "24%",
    name: "Lilia",
    company: "Digitalus",
    phone: "+1 (891) 537-3461",
  },
  {
    id: 5,
    discount: "25%",
    name: "Amanda",
    company: "Bunga",
    phone: "+1 (916) 522-3747",
  },
  {
    id: 6,
    discount: "20%",
    name: "Alexandra",
    company: "Conjurica",
    phone: "+1 (876) 492-3181",
  },
  {
    id: 7,
    discount: "27%",
    name: "Diana",
    company: "Extrdiscountn",
    phone: "+1 (977) 417-3038",
  },
  {
    id: 8,
    discount: "26%",
    name: "Goodman",
    company: "Aquamate",
    phone: "+1 (930) 545-2289",
  },
  {
    id: 9,
    discount: "26%",
    name: "Edith",
    company: "Pyrami",
    phone: "+1 (854) 506-3468",
  },
  {
    id: 10,
    discount: "29%",
    name: "Juana",
    company: "Singavera",
    phone: "+1 (872) 560-2324",
  },
  {
    id: 11,
    discount: "21%",
    name: "Fitzgerald",
    company: "Dancerity",
    phone: "+1 (813) 573-2507",
  },
  {
    id: 12,
    discount: "38%",
    name: "Madden",
    company: "Corpulse",
    phone: "+1 (935) 534-3876",
  },
  {
    id: 13,
    discount: "40%",
    name: "Jewell",
    company: "Frenex",
    phone: "+1 (886) 516-3262",
  },
  {
    id: 14,
    discount: "32%",
    name: "Kerr",
    company: "Artiq",
    phone: "+1 (807) 561-3077",
  },
  {
    id: 15,
    discount: "20%",
    name: "Washington",
    company: "Organica",
    phone: "+1 (948) 458-3517",
  },
  {
    id: 16,
    discount: "20%",
    name: "Audrey",
    company: "Softmicro",
    phone: "+1 (900) 592-3841",
  },
  {
    id: 17,
    discount: "39%",
    name: "Allison",
    company: "Playce",
    phone: "+1 (998) 478-3810",
  },
  {
    id: 18,
    discount: "25%",
    name: "Holder",
    company: "Paragonia",
    phone: "+1 (850) 536-2708",
  },
  {
    id: 19,
    discount: "26%",
    name: "Atkinson",
    company: "Scentric",
    phone: "+1 (850) 467-2761",
  },
  {
    id: 20,
    discount: "35%",
    name: "Delaney",
    company: "Telpod",
    phone: "+1 (934) 468-2218",
  },
  {
    id: 21,
    discount: "20%",
    name: "Myrna",
    company: "Zanity",
    phone: "+1 (953) 565-3836",
  },
  {
    id: 22,
    discount: "30%",
    name: "Erna",
    company: "Techade",
    phone: "+1 (872) 574-3879",
  },
  {
    id: 23,
    discount: "36%",
    name: "Fannie",
    company: "Cubix",
    phone: "+1 (843) 576-2904",
  },
  {
    id: 24,
    discount: "38%",
    name: "Melody",
    company: "Talae",
    phone: "+1 (817) 424-3500",
  },
  {
    id: 25,
    discount: "27%",
    name: "Letitia",
    company: "Enjola",
    phone: "+1 (857) 441-2917",
  },
  {
    id: 26,
    discount: "33%",
    name: "Nina",
    company: "Eventex",
    phone: "+1 (917) 599-2793",
  },
  {
    id: 27,
    discount: "40%",
    name: "Byrd",
    company: "Obones",
    phone: "+1 (846) 422-2064",
  },
  {
    id: 28,
    discount: "34%",
    name: "Chen",
    company: "Dadabase",
    phone: "+1 (956) 474-3409",
  },
  {
    id: 29,
    discount: "25%",
    name: "Alexandria",
    company: "Turnabout",
    phone: "+1 (964) 415-2278",
  },
  {
    id: 30,
    discount: "37%",
    name: "Pdiscount",
    company: "Metroz",
    phone: "+1 (897) 541-2460",
  },
  {
    id: 31,
    discount: "24%",
    name: "Clare",
    company: "Zilch",
    phone: "+1 (832) 591-3814",
  },
  {
    id: 32,
    discount: "38%",
    name: "Lindsey",
    company: "Roughies",
    phone: "+1 (942) 579-2920",
  },
  {
    id: 33,
    discount: "32%",
    name: "Oconnor",
    company: "Kinetica",
    phone: "+1 (899) 599-3206",
  },
  {
    id: 34,
    discount: "35%",
    name: "Maldonado",
    company: "Zentime",
    phone: "+1 (955) 419-2815",
  },
  {
    id: 35,
    discount: "25%",
    name: "Day",
    company: "Eargo",
    phone: "+1 (895) 555-2916",
  },
  {
    id: 36,
    discount: "20%",
    name: "Collier",
    company: "Phuel",
    phone: "+1 (998) 468-2079",
  },
  {
    id: 37,
    discount: "40%",
    name: "Jeannette",
    company: "Entogrok",
    phone: "+1 (904) 567-2078",
  },
  {
    id: 38,
    discount: "33%",
    name: "Wallace",
    company: "Nurali",
    phone: "+1 (877) 566-3957",
  },
  {
    id: 39,
    discount: "39%",
    name: "Mcfadden",
    company: "Cincyr",
    phone: "+1 (949) 405-3992",
  },
  {
    id: 40,
    discount: "21%",
    name: "Chrystal",
    company: "Futurize",
    phone: "+1 (988) 458-3032",
  },
  {
    id: 41,
    discount: "31%",
    name: "Leila",
    company: "Zensure",
    phone: "+1 (902) 447-2419",
  },
  {
    id: 42,
    discount: "24%",
    name: "Madelyn",
    company: "Egypto",
    phone: "+1 (881) 538-3081",
  },
  {
    id: 43,
    discount: "39%",
    name: "Peck",
    company: "Tellifly",
    phone: "+1 (803) 452-3922",
  },
  {
    id: 44,
    discount: "32%",
    name: "Garrett",
    company: "Aquasure",
    phone: "+1 (876) 475-2185",
  },
  {
    id: 45,
    discount: "21%",
    name: "Kramer",
    company: "Terrago",
    phone: "+1 (912) 404-2597",
  },
  {
    id: 46,
    discount: "35%",
    name: "Lane",
    company: "Anivet",
    phone: "+1 (911) 495-3587",
  },
  {
    id: 47,
    discount: "21%",
    name: "Merritt",
    company: "Inear",
    phone: "+1 (856) 519-3838",
  },
  {
    id: 48,
    discount: "25%",
    name: "Margarita",
    company: "Unq",
    phone: "+1 (931) 558-3156",
  },
  {
    id: 49,
    discount: "28%",
    name: "Leigh",
    company: "Marqet",
    phone: "+1 (918) 526-2007",
  },
  {
    id: 50,
    discount: "31%",
    name: "Coleman",
    company: "Insuresys",
    phone: "+1 (827) 449-3786",
  },
  {
    id: 51,
    discount: "31%",
    name: "Alexander",
    company: "Portico",
    phone: "+1 (854) 576-2455",
  },
  {
    id: 52,
    discount: "38%",
    name: "Tanisha",
    company: "Earthwax",
    phone: "+1 (994) 494-3496",
  },
  {
    id: 53,
    discount: "23%",
    name: "Crane",
    company: "Pushcart",
    phone: "+1 (924) 497-3347",
  },
  {
    id: 54,
    discount: "26%",
    name: "Carmella",
    company: "Acusdiscount",
    phone: "+1 (898) 575-2585",
  },
  {
    id: 55,
    discount: "27%",
    name: "Rosalind",
    company: "Isologica",
    phone: "+1 (838) 572-2994",
  },
  {
    id: 56,
    discount: "37%",
    name: "Duran",
    company: "Gazak",
    phone: "+1 (991) 446-3820",
  },
  {
    id: 57,
    discount: "27%",
    name: "Bernard",
    company: "Zoindiscount",
    phone: "+1 (824) 585-2197",
  },
  {
    id: 58,
    discount: "29%",
    name: "Tate",
    company: "Endipine",
    phone: "+1 (896) 448-2084",
  },
  {
    id: 59,
    discount: "39%",
    name: "Pearlie",
    company: "Progenex",
    phone: "+1 (805) 545-2585",
  },
  {
    id: 60,
    discount: "20%",
    name: "Manning",
    company: "Handshake",
    phone: "+1 (917) 405-3406",
  },
];
const records: Records[] = Data?.map((item) => ({
  ...item,
  code: generateCode(),
  email: generateEmail(item.name),
  address: generateAddress(),
  date: generateDate(),
  total: `${calculateTotal().toFixed(2)}$`,
  paid: `${calculatePaid().toFixed(2)}$`,
  due: calculateDue(calculateTotal(), calculatePaid()),
  role: generateRandomRole(),
}));

export { records };
