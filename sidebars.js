/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  geonode: [
    'gis/geonode/get-started',
    'gis/geonode/geoserver',
  ],

  geoserver: [
    'gis/geoserver/get-started',
  ],


  development: [
    'development/react',
    'development/vue',
    'development/alpine',
    'development/laravel',
    'development/django',
    'development/elasticsearch',
    {
      type: 'category',
      label: 'Editor',
      items: [
        'development/editor/micro',
        'development/editor/phpstorm',
        'development/editor/vscode',
        'development/editor/phpstorm',
        'development/editor/pycharm',
        'development/editor/vim',
      ]
    },
    {
      type: 'category',
      label: 'DevOps',
      items: [
        'development/devops/docker',
        'development/devops/kubernetes',
        'development/devops/github',
        'development/devops/gitlap',
        'development/devops/ansible',
      ]
    }
  ],

  gis: [
    'gis/get-started',
    {
      type: 'category',
      label: 'GIS Server',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Geonode',
          href: '/docs/gis/geonode/get-started',
        },
        {
          type: 'link',
          label: 'Geoserver',
          href: '/docs/gis/geoserver/get-started',
        },
      ]
    },
    {
      type: 'category',
      label: 'GIS Desktop',
      items: [
        'gis/qgis',
        'gis/arcgis',
        'gis/arcgis-pro',
      ]
    },
  ],

  ubuntu: [
    'os/ubuntu/get-started',
    'os/ubuntu/GUI',
    'os/ubuntu/system-information',
    'os/ubuntu/hardware-information',
    'os/ubuntu/file-permissions',
    'os/ubuntu/networking',
    'os/ubuntu/archives',
    'os/ubuntu/search',
    'os/ubuntu/disk-usage',
    'os/ubuntu/ssh',
    'os/ubuntu/ftp-server',
    'os/ubuntu/firewall',
    'os/ubuntu/faq',
  ],

  windows: [
    'os/windows/get-started',
    {
      type: 'category',
      label: 'Virtual Machine',
      collapsed: false,
      items: [
        'os/windows/virtual-machine/multipass',
        'os/windows/virtual-machine/vagrant',
      ]
    },
    'os/windows/powershell',
    'os/windows/chocolatey',
    'os/windows/portainer',
    'os/windows/terminal',
    'os/windows/wsl',
    'os/windows/hyper-v',
  ]
};

module.exports = sidebars;
