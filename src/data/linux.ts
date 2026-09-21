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

export const linuxCourses = [
  {
    id: 'rh104',
    title: 'Getting Started with Linux Fundamentals 9.1',
    status: 'completed',
    url: 'https://www.redhat.com/en/services/training/getting-started-with-linux-fundamentals',
  },
  {
    id: 'rh124',
    title: 'Red Hat System Administration I 9.3',
    status: 'inProgress',
    // The 9.3 outline is also documented at https://www.redhat.com/ko/engage/bridge-the-gap/automation.
    url: 'https://www.redhat.com/en/services/training/rh124-red-hat-system-administration-i',
  },
  {
    id: 'rh134',
    title: 'Red Hat System Administration II 10.0',
    status: 'inProgress',
    url: 'https://www.redhat.com/en/services/training/rh134-red-hat-system-administration-ii',
  },
] as const;
