// Shared names and course states keep the English and German pages aligned.
export const linuxDistributions = [
  'CachyOS',
  'Arch Linux',
  'Ubuntu',
  'Linux Mint',
  'CentOS',
  'Fedora',
  'RHEL',
];

// A dated snapshot, updated manually as the course progresses.
export const kodeKloud = {
  progress: 28,
  updatedAt: '2026-11-03',
  courseTitle: 'Prep Course - Red Hat Certified System Administrator (RHCSA)',
  courseUrl: 'https://kodekloud.com/courses/red-hat-certified-system-administrator-rhcsa',
  engineerUrl: 'https://engineer.kodekloud.com/',
} as const;

export const linuxCourses = [
  {
    id: 'rh104',
    title: 'Getting Started with Linux Fundamentals 9.1',
    status: 'completed',
    url: 'https://www.redhat.com/en/services/training/getting-started-with-linux-fundamentals',
  },
  {
    id: 'rh134',
    title: 'Red Hat System Administration II 10.0',
    status: 'planned',
    url: 'https://www.redhat.com/en/services/training/rh134-red-hat-system-administration-ii',
  },
] as const;
