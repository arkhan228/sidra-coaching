import {
  BookOpenIcon,
  ComputerDesktopIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Subjects', href: '/subjects' },
  { label: 'Free Trial', href: '/contact' },
];

export const features = [
  {
    title: 'Group Coaching',
    description:
      'Affordable, collaborative classes for foundational to advanced levels. Small groups to maximize attention and peer learning.',
    icon: UserGroupIcon,
  },
  {
    title: '1-to-1 Online',
    description:
      'Personalized sessions tailored to each child’s pace and goals. Flexible scheduling for busy families.',
    icon: ComputerDesktopIcon,
  },
  {
    title: 'Hands-On Learning',
    description:
      'Activity-based teaching that builds curiosity, independence, and real understanding — not just busy time.',
    icon: PuzzlePieceIcon,
  },
  {
    title: 'Values + Academics',
    description:
      'Along with English, Mathematics, and Hindi, we nurture social, moral, and family values. We also teach Urdu and the Holy Qur’an.',
    icon: BookOpenIcon,
  },
];

export const programs = [
  {
    method: 'Group Coaching (In-Person)',
    features: [
      'Small groups to attention and peer learning',
      'Structured schedule with weekly goals',
      'Collaborative learning environment',
      'Best for foundation building and routine settings',
    ],
  },
  {
    method: '1-to-1 Online (Personalized)',
    features: [
      'Personalized sessions for each learner’s pace',
      'Flexible time slots',
      'Focus on habit, confidence, and independent learning',
      'Ideal for exam preparations',
    ],
  },
];

export const subjects = [
  { name: 'English', desc: 'Reading, writing, grammar, communication' },
  { name: 'Mathematics', desc: 'Concepts first, Number sense, Algebra' },
  { name: 'Hindi', desc: 'Literacy, comprehension, expression' },
  { name: 'Urdu', desc: 'Script, vocabulary, reading practice' },
  { name: 'The Holy Qur’an', desc: 'Tajweed, memorization, understanding' },
];
