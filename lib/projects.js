export function getAllProjectIds() {
  return projects.map(project => {
    return {
      params: {
        id: project.id,
      },
    };
  });
}

export function getProjectData(id) {
  return projects.find(p => p.id === id);
}

//link types: android, ios, web, github

export const linkTypes = {
  android: 'android',
  ios: 'ios',
  web: 'web',
  github: 'github',
};

export const projects = [
  {
    id: 'manchmark',
    title: 'Manchmark',
    color: '#212121',
    logo: `/images/manchmark.jpg`,
    links: [
      { type: linkTypes.web, url: 'http://manchmark.yusuf.app/' },
      {
        type: linkTypes.android,
        url: 'https://play.google.com/store/apps/details?id=com.manchmark',
      },
      { type: linkTypes.github, url: 'https://github.com/yusufkinatas/manchmark' },
    ],
  },
  {
    id: 'narmoni',
    title: 'Narmoni',
    color: '#FF675F',
    logo: `/images/narmoni.jpg`,
    links: [
      {
        type: linkTypes.ios,
        url:
          'https://apps.apple.com/tr/app/narmoni-ak%C4%B1ll%C4%B1-al%C4%B1%C5%9Fveri%C5%9F/id1478123052',
      },
      { type: linkTypes.android, url: 'https://play.google.com/store/apps/details?id=com.narmoni' },
    ],
  },
  {
    id: 'metrobi',
    title: 'Metrobi',
    color: '#9186C7',
    logo: `/images/metrobi.jpg`,
    links: [{ type: linkTypes.web, url: 'http://deliver.metrobi.com/' }],
  },
  {
    id: 'metrobi-driver',
    title: 'Metrobi Driver',
    color: '#4BE4AF',
    logo: `/images/metrobi-driver.jpg`,
    links: [
      { type: linkTypes.ios, url: 'https://apps.apple.com/us/app/metrobi-driver/id1480397402' },
      {
        type: linkTypes.android,
        url: 'https://play.google.com/store/apps/details?id=com.metrobidriver.app',
      },
    ],
  },
  {
    id: 'reportly',
    title: 'Reportly',
    color: '#1C1B22',
    logo: `/images/reportly.jpg`,
    links: [
      {
        type: linkTypes.android,
        url: 'https://play.google.com/store/apps/details?id=com.reportly.reportlyapp1',
      },
    ],
  },
  {
    id: 'yenidunya-magazine',
    title: 'Yenidünya Magazine',
    color: '#ffffff',
    logo: `/images/yenidunya-magazine.jpg`,
    links: [
      {
        type: linkTypes.ios,
        url: 'https://apps.apple.com/us/app/yenid%C3%BCnya-dergisi/id1508961572',
      },
      {
        type: linkTypes.android,
        url: 'https://play.google.com/store/apps/details?id=com.yenidunya.dergi',
      },
    ],
  },
  {
    id: 'menu-pratic',
    title: 'Menu Pratic',
    color: '#ffffff',
    logo: `/images/menu-pratic.jpg`,
    links: [
      {
        type: linkTypes.ios,
        url: 'https://apps.apple.com/jo/app/menupratic/id1524029011',
      },
      {
        type: linkTypes.github,
        url: 'https://github.com/yusufkinatas/portfolio',
      },
    ],
  },
  {
    id: 'countime',
    title: 'Countime',
    color: '#ffffff',
    logo: `/images/countime.jpg`,
    links: [
      {
        type: linkTypes.web,
        url: 'http://countime.yusuf.app/',
      },
      {
        type: linkTypes.github,
        url: 'https://github.com/yusufkinatas/countime',
      },
    ],
  },
];
