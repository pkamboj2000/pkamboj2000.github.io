// Fetch GitHub profile and pinned repos, then populate sections
const GITHUB_USER = 'pkamboj2000';

async function fetchProfile() {
  return {
    name: 'Pranjal Kamboj',
    login: 'pkamboj2000',
    avatar_url: 'https://avatars.githubusercontent.com/u/pkamboj2000',
    bio: 'Masters in Computer Science Student',
    location: 'Arlington Texas',
    html_url: 'https://github.com/pkamboj2000'
  };
}

async function fetchRepos() {
  const projects = [
    {
      repo: 'Django-Fundamentals',
      link: 'https://github.com/pkamboj2000/Django-Fundamentals',
      description: 'Django Framework Fundamentals and Basics',
      language: 'Python',
      stars: 0,
      forks: 0,
      updated: '2023-08-11'
    },
    {
      repo: 'E-commerce-Website',
      link: 'https://github.com/pkamboj2000/E-commerce-Website',
      description: 'Full-featured E-commerce website built with Django',
      language: 'Python',
      stars: 0,
      forks: 0,
      updated: '2023-08-11'
    },
    {
      repo: 'python_basics',
      link: 'https://github.com/pkamboj2000/python_basics',
      description: 'Python programming fundamentals and exercises',
      language: 'Python',
      stars: 0,
      forks: 0,
      updated: '2023-08-11'
    },
    {
      repo: 'NodeJS-Tutorial',
      link: 'https://github.com/pkamboj2000/NodeJS-Tutorial',
      description: 'Learning Node.js fundamentals and building applications',
      language: 'JavaScript',
      stars: 0,
      forks: 0,
      updated: '2023-08-11'
    },
    {
      repo: 'React-JS',
      link: 'https://github.com/pkamboj2000/React-JS',
      description: 'React.js projects and learning materials',
      language: 'JavaScript',
      stars: 0,
      forks: 0,
      updated: '2023-08-11'
    },
    {
      repo: 'pkamboj2000.github.io',
      link: 'https://github.com/pkamboj2000/pkamboj2000.github.io',
      description: 'My personal portfolio website',
      language: 'JavaScript',
      stars: 0,
      forks: 0,
      updated: '2023-08-11'
    }
  ];
  return projects;
  // Get all repos and sort by recently updated
  return repos
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .map(repo => ({
      repo: repo.name,
      link: repo.html_url,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updated: new Date(repo.updated_at).toLocaleDateString(),
      homepage: repo.homepage
    }));
}

function renderAbout(profile) {
  document.getElementById('about').innerHTML = `
    <h2>About Me</h2>
    <div class="flex items-center space-x-4">
      <img src="${profile.avatar_url}" alt="Avatar" class="w-24 h-24 rounded-full border-4 border-blue-400" />
      <div>
        <p class="text-lg font-semibold">${profile.name || profile.login}</p>
        <p>Masters in Computer Science at University of Texas at Arlington</p>
        <p>${profile.bio || ''}</p>
        <a href="${profile.html_url}" class="text-blue-500 underline" target="_blank">GitHub Profile</a>
      </div>
    </div>
  `;
}

function renderProjects(repos) {
  let html = '<h2>Projects</h2><div class="grid md:grid-cols-2 gap-6">';
  repos.forEach(repo => {
    html += `
      <div class="project-card">
        <h3 class="text-xl font-bold mb-2">
          <a href="${repo.link}" target="_blank" class="hover:underline">${repo.repo.replace(/-/g, ' ')}</a>
        </h3>
        <p class="mb-2">${repo.description || 'A GitHub repository'}</p>
        <div class="flex flex-wrap items-center mb-2">
          ${(repo.language ? `<span class="skill-badge">${repo.language}</span>` : '')}
        </div>
        <div class="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
          <span class="mr-4">★ ${repo.stars}</span>
          <span class="mr-4">🔄 ${repo.forks}</span>
          <span class="mr-4">📅 ${repo.updated}</span>
          ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="text-green-500 mr-4">Live Demo</a>` : ''}
          <a href="${repo.link}" target="_blank" class="text-blue-500">View Code</a>
        </div>
      </div>
    `;
  });
  html += '</div>';
  document.getElementById('projects').innerHTML = html;
}

function renderSkills(repos) {
  const skills = new Set([
    'Python',
    'Django',
    'JavaScript',
    'React',
    'Node.js',
    'HTML',
    'CSS',
    'Git',
    'SQL',
    'REST API'
  ]);
  let html = '<h2>Skills</h2><div class="flex flex-wrap gap-2">';
  Array.from(skills).sort().forEach(skill => {
    html += `<span class="skill-badge">${skill}</span>`;
  });
  html += '</div>';
  document.getElementById('skills').innerHTML = html;
  Array.from(skills).sort().forEach(skill => {
    html += `<span class="skill-badge">${skill}</span>`;
  });
  html += '</div>';
  document.getElementById('skills').innerHTML = html;
}

function renderContact(profile) {
  document.getElementById('contact').innerHTML = `
    <h2>Contact</h2>
    <ul>
      <li>Email: <a href="mailto:${profile.email || ''}" class="text-blue-500">${profile.email || 'Not public'}</a></li>
      <li>Location: ${profile.location || 'N/A'}</li>
      <li>GitHub: <a href="${profile.html_url}" class="text-blue-500" target="_blank">${profile.login}</a></li>
    </ul>
  `;
}

function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  btn.onclick = () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.body.classList.toggle('dark', !isDark);
  };
}

async function main() {
  try {
    const [profile, repos] = await Promise.all([
      fetchProfile(),
      fetchRepos()
    ]);
    renderAbout(profile);
    renderProjects(repos);
    renderSkills(repos);
    renderContact(profile);
    setupThemeToggle();
  } catch (error) {
    console.error('Error in main:', error);
  }
}

// Start the application
document.addEventListener('DOMContentLoaded', () => {
  main().catch(console.error);
});
  renderAbout(profile);
  renderProjects(repos);
  renderSkills(repos);
  renderContact(profile);
  setupThemeToggle();
}

main();
