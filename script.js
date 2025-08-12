// Fetch GitHub profile and pinned repos, then populate sections
const GITHUB_USER = 'pkamboj2000';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
const PROFILE_API = `${CORS_PROXY}https://api.github.com/users/${GITHUB_USER}`;
const REPOS_API = `${CORS_PROXY}https://api.github.com/users/${GITHUB_USER}/repos`;

async function fetchProfile() {
  try {
    const res = await fetch(PROFILE_API);
    if (!res.ok) throw new Error('Profile fetch failed');
    return res.json();
  } catch (error) {
    console.error('Error fetching profile:', error);
    return {
      name: 'Pranjal Kamboj',
      login: 'pkamboj2000',
      avatar_url: 'https://avatars.githubusercontent.com/u/pkamboj2000',
      bio: '',
      location: 'Arlington Texas',
      html_url: 'https://github.com/pkamboj2000'
    };
  }
}

async function fetchRepos() {
  try {
    const res = await fetch(REPOS_API);
    if (!res.ok) throw new Error('Repos fetch failed');
    const repos = await res.json();
    // Sort by recently updated
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
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [
      {
        repo: 'pkamboj2000.github.io',
        link: 'https://github.com/pkamboj2000/pkamboj2000.github.io',
        description: 'My portfolio website',
        language: 'JavaScript',
        stars: 0,
        forks: 0,
        updated: new Date().toLocaleDateString(),
        homepage: 'https://pkamboj2000.github.io'
      }
    ];
  }
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
  const skills = new Set();
  // Add programming languages
  repos.forEach(repo => {
    if (repo.language) skills.add(repo.language);
  });
  // Add common web technologies based on repo names and descriptions
  repos.forEach(repo => {
    const text = `${repo.repo} ${repo.description || ''}`.toLowerCase();
    if (text.includes('react')) skills.add('React');
    if (text.includes('node')) skills.add('Node.js');
    if (text.includes('javascript')) skills.add('JavaScript');
    if (text.includes('python')) skills.add('Python');
    if (text.includes('html')) skills.add('HTML');
    if (text.includes('css')) skills.add('CSS');
    if (text.includes('database') || text.includes('sql')) skills.add('Database');
  });
  let html = '<h2>Skills</h2><div class="flex flex-wrap gap-2">';
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
  const [profile, repos] = await Promise.all([
    fetchProfile(),
    fetchRepos()
  ]);
  renderAbout(profile);
  renderProjects(repos);
  renderSkills(repos);
  renderContact(profile);
  setupThemeToggle();
}

main();
