// Fetch GitHub profile and pinned repos, then populate sections
const GITHUB_USER = 'pkamboj2000';
const API_BASE = 'https://gh-pinned-repos.egoist.dev/?username=';
const PROFILE_API = `https://api.github.com/users/${GITHUB_USER}`;

async function fetchProfile() {
  const res = await fetch(PROFILE_API);
  return res.json();
}

async function fetchPinnedRepos() {
  const res = await fetch(`${API_BASE}${GITHUB_USER}`);
  return res.json();
}

function renderAbout(profile) {
  document.getElementById('about').innerHTML = `
    <h2>About Me</h2>
    <div class="flex items-center space-x-4">
      <img src="${profile.avatar_url}" alt="Avatar" class="w-24 h-24 rounded-full border-4 border-blue-400" />
      <div>
        <p class="text-lg font-semibold">${profile.name || profile.login}</p>
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
          <a href="${repo.link}" target="_blank" class="hover:underline">${repo.repo}</a>
        </h3>
        <p class="mb-2">${repo.description || ''}</p>
        <div class="flex flex-wrap items-center mb-2">
          ${(repo.language ? `<span class="skill-badge">${repo.language}</span>` : '')}
        </div>
        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span class="mr-4">★ ${repo.stars}</span>
          <a href="${repo.link}" target="_blank" class="text-blue-500 ml-auto">View Repo</a>
        </div>
      </div>
    `;
  });
  html += '</div>';
  document.getElementById('projects').innerHTML = html;
}

function renderSkills(repos) {
  const skills = new Set();
  repos.forEach(repo => {
    if (repo.language) skills.add(repo.language);
  });
  let html = '<h2>Skills</h2><div>';
  skills.forEach(skill => {
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
    fetchPinnedRepos()
  ]);
  renderAbout(profile);
  renderProjects(repos);
  renderSkills(repos);
  renderContact(profile);
  setupThemeToggle();
}

main();
