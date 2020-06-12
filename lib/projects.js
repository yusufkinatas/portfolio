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

export const projects = [
  { id: 'manchmark', title: 'Manchmark', color: '#212121', logo: `/images/manchmark.jpg` },
  { id: 'narmoni', title: 'Narmoni', color: '#FF675F', logo: `/images/narmoni.jpg` },
  { id: 'metrobi', title: 'Metrobi', color: '#9186C7', logo: `/images/metrobi.jpg` },
  {
    id: 'metrobi-driver',
    title: 'Metrobi Driver',
    color: '#4BE4AF',
    logo: `/images/metrobi-driver.jpg`,
  },
  { id: 'reportly', title: 'Reportly', color: '#1C1B22', logo: `/images/reportly.jpg` },
  {
    id: 'yenidunya-magazine',
    title: 'Yenidünya Magazine',
    color: '#ffffff',
    logo: `/images/yenidunya-magazine.jpg`,
  },
  { id: 'portfolio', title: 'Portfolio', color: '#252525', logo: `/images/portfolio.jpg` },
  { id: 'countime', title: 'Countime', color: '#ffffff', logo: `/images/countime.jpg` },
];
