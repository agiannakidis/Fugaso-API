import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'security',
    'idempotency',
    'errors',
    {
      type: 'category',
      label: 'BTM',
      items: [
        'btm/overview',
      ],
    },
    {
      type: 'category',
      label: 'Game Launcher',
      items: [
        'launcher/overview',
      ],
    },
    'test-cases',
  ],
};

export default sidebars;

