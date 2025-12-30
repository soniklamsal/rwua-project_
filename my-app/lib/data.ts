// Modern data models for RWUA website

export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  image: string;
  date: string;
  tags: string[];
}

export interface Vacancy {
  id: string;
  position: string;
  description: string;
  department: string;
  deadline: string;
  location: string;
  tags: string[];
  image?: string;
}

// Success Stories Data
export const successStories: SuccessStory[] = [
  {
    id: '1',
    title: 'सफलताको कथा — दलित समुदायमा परिवर्तन',
    description: 'सर्लाही जिल्ला ईश्वरपुर नगरपालिकामा अवस्थित सृजनशिल महिला सचेतना केन्द्रले मुसहर समुदायको जीवनमा ल्याएको सकारात्मक परिवर्तनको कथा। शिक्षा र चेतनाको माध्यमबाट समुदायिक विकासको यात्रा।',
    category: 'Community Development',
    author: 'RWUA Nepal',
    image: '/images/success1.jpg',
    date: '2024-03-15',
    tags: ['community', 'education', 'empowerment', 'dalit']
  },
  {
    id: '2',
    title: 'महिला सशक्तिकरणको सफल उदाहरण',
    description: 'ग्रामीण क्षेत्रका महिलाहरूलाई आर्थिक रूपमा स्वावलम्बी बनाउने कार्यक्रमको सफल कार्यान्वयन। सीप विकास र उद्यमशीलता मार्फत महिलाहरूको जीवनस्तरमा सुधार।',
    category: 'Women Empowerment',
    author: 'RWUA Nepal',
    image: '/images/success2.jpg',
    date: '2024-02-28',
    tags: ['women', 'entrepreneurship', 'skills', 'economic']
  },
  {
    id: '3',
    title: 'शिक्षा क्षेत्रमा उल्लेखनीय प्रगति',
    description: 'बालबालिकाहरूको शिक्षामा पहुँच बढाउने र गुणस्तरीय शिक्षा प्रदान गर्ने दिशामा गरिएका प्रयासहरूको सफल परिणाम। विद्यालय छाड्ने दरमा उल्लेखनीय कमी।',
    category: 'Education',
    author: 'RWUA Nepal',
    image: '/images/success1.jpg',
    date: '2024-01-20',
    tags: ['education', 'children', 'literacy', 'development']
  },
  {
    id: '4',
    title: 'स्वास्थ्य सेवामा सुधार',
    description: 'ग्रामीण क्षेत्रमा आधारभूत स्वास्थ्य सेवाको पहुँच बढाउने र मातृ तथा शिशु मृत्युदर घटाउने दिशामा गरिएका कार्यहरूको सकारात्मक प्रभाव।',
    category: 'Health',
    author: 'RWUA Nepal',
    image: '/images/success2.jpg',
    date: '2023-12-10',
    tags: ['health', 'maternal', 'rural', 'healthcare']
  }
];

// Vacancies Data
export const vacancies: Vacancy[] = [
  {
    id: '1',
    position: 'Program Manager - Community Development',
    description: 'Lead community development initiatives in rural areas. Responsible for program planning, implementation, and monitoring. Work closely with local communities and stakeholders to ensure sustainable development outcomes.',
    department: 'Programs',
    deadline: '2025-03-15',
    location: 'Haripur, Nepal',
    tags: ['management', 'community', 'development', 'leadership'],
    image: '/images/vacancy1.jpeg'
  },
  {
    id: '2',
    position: 'Finance and Admin Coordinator',
    description: 'Manage financial operations and administrative functions. Oversee budget planning, financial reporting, and ensure compliance with organizational policies and donor requirements.',
    department: 'Finance',
    deadline: '2025-03-28',
    location: 'Head Office, Nepal',
    tags: ['finance', 'administration', 'budgeting', 'compliance'],
    image: '/images/vacancy2.jpeg'
  },
  {
    id: '3',
    position: 'Field Officer - Women Empowerment',
    description: 'Implement women empowerment programs at grassroots level. Facilitate training sessions, support women groups, and coordinate with local government and partner organizations.',
    department: 'Field Operations',
    deadline: '2025-04-10',
    location: 'Multiple Districts',
    tags: ['field work', 'women', 'empowerment', 'training'],
    image: '/images/vacancy3.jpg'
  },
  {
    id: '4',
    position: 'Monitoring & Evaluation Officer',
    description: 'Design and implement M&E frameworks for programs. Conduct regular monitoring visits, prepare evaluation reports, and ensure quality standards are maintained across all activities.',
    department: 'M&E',
    deadline: '2025-04-20',
    location: 'Regional Office',
    tags: ['monitoring', 'evaluation', 'reporting', 'quality'],
    image: '/images/vacancy1.jpeg'
  },
  {
    id: '5',
    position: 'Communications Specialist',
    description: 'Develop and implement communication strategies. Manage social media, create content, and coordinate with media for organizational visibility and advocacy efforts.',
    department: 'Communications',
    deadline: '2025-05-05',
    location: 'Head Office, Nepal',
    tags: ['communications', 'media', 'content', 'advocacy'],
    image: '/images/vacancy2.jpeg'
  },
  {
    id: '6',
    position: 'Project Coordinator - Education',
    description: 'Coordinate education and literacy programs in rural communities. Manage project activities, liaise with schools and educational institutions, and ensure program objectives are met.',
    department: 'Programs',
    deadline: '2025-03-25',
    location: 'Sarlahi District',
    tags: ['education', 'coordination', 'literacy', 'community'],
    image: '/images/vacancy3.jpg'
  }
];

// Filter categories
export const storyCategories = [
  'All',
  'Community Development',
  'Women Empowerment',
  'Education',
  'Health'
];

export const vacancyDepartments = [
  'All',
  'Programs',
  'Finance',
  'Field Operations',
  'M&E',
  'Communications'
];