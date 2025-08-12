document.addEventListener('DOMContentLoaded', function() {
    // Update About section
    document.querySelector('#about').innerHTML = `
        <h2 class="text-2xl font-bold mb-6">About Me</h2>
        <div class="flex flex-col md:flex-row gap-8">
            <div class="flex-shrink-0">
                <img src="https://avatars.githubusercontent.com/pkamboj2000" alt="Profile" 
                    class="w-40 h-40 rounded-full shadow-lg profile-img">
            </div>
            <div class="flex-grow">
                <h3 class="text-2xl font-semibold mb-2">Pranjal Kamboj</h3>
                <p class="text-lg mb-4">Masters in Computer Science at University of Texas at Arlington</p>
                <p class="mb-4">
                    I'm a Machine Learning Engineer and AI enthusiast specializing in Large Language Models (LLMs), 
                    Natural Language Processing, and Computer Vision. My expertise includes developing multi-agent AI systems, 
                    implementing RAG pipelines, and creating sophisticated machine learning models.
                </p>
                <div class="flex flex-wrap gap-4">
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                        </svg>
                        <span>Arlington, Texas</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                        </svg>
                        <span>Graduated: Masters in Computer Science</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // All skills
    const skills = [
        'Python', 'LangChain', 'FastAPI', 'PyTorch',
        'Deep Learning', 'NLP', 'Computer Vision',
        'LLMs', 'RAG', 'MCP', 'CrewAI',
        'Machine Learning', 'AI Development',
        'Transformers', 'API Development'
    ];

    // Update Skills section
    document.getElementById('skills').innerHTML = `
        <h2 class="text-2xl font-bold mb-4">Skills</h2>
        <div class="flex flex-wrap gap-2">
            ${skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
        </div>
    `;

    // Project list with reordered projects
    const projects = [
        {
            name: 'Multi-agent-parallel-workflows-using-CrewAI',
            description: 'This project showcases a multi-agent workflow using CrewAI to create unbiased automotive reviews.',
            tech: 'Python, LangChain, CrewAI, FastAPI',
            link: 'https://github.com/pkamboj2000/Multi-agent-parallel-workflows-using-CrewAI'
        },
        {
            name: 'Fine-tuning-Lora-Qlora',
            description: 'Fine-tunes the LLaMA 2 7B model using QLoRA on the Alpaca dataset.',
            tech: 'Python, PyTorch, Transformers',
            link: 'https://github.com/pkamboj2000/Fine-tuning-Lora-Qlora'
        },
        {
            name: 'Langchain-agents-and-tools',
            description: 'Multi-tool LLM agent system for enhanced information retrieval.',
            tech: 'Python, LangChain, LLMs',
            link: 'https://github.com/pkamboj2000/Langchain-agents-and-tools'
        },
        {
            name: 'RAG-pipeline',
            description: 'LangChain-based RAG pipeline for document processing.',
            tech: 'Python, LangChain, RAG',
            link: 'https://github.com/pkamboj2000/RAG-pipeline'
        },
        {
            name: 'MCP-tools-and-agents',
            description: 'Weather-aware AI agent system using Model Context Protocol.',
            tech: 'Python, MCP, FastAPI',
            link: 'https://github.com/pkamboj2000/MCP-tools-and-agents'
        },
        {
            name: 'Model-context-protocol',
            description: 'An intelligent university information assistant using LangChain MCP Agent.',
            tech: 'Python, LangChain, FastAPI',
            link: 'https://github.com/pkamboj2000/Model-context-protocol'
        },
        {
            name: 'AI-career-planner',
            description: 'Autonomous agent for extracting job-relevant skills using LangChain and OpenAI.',
            tech: 'Python, LangChain, OpenAI',
            link: 'https://github.com/pkamboj2000/AI-career-planner'
        },
        {
            name: 'Autoencoder-Based-Abnormality-Detection',
            description: 'X-Ray abnormality detection using autoencoders on MURA dataset.',
            tech: 'Python, PyTorch, Computer Vision',
            link: 'https://github.com/pkamboj2000/Autoencoder-Based-Abnormality-Detection-in-Bone-X-Ray-images-Using-MURA-Dataset'
        },
        {
            name: 'Air-quality-prediction',
            description: 'LSTM model for air pollution forecasting with multivariate data.',
            tech: 'Python, TensorFlow, LSTM',
            link: 'https://github.com/pkamboj2000/-Air-quality-prediction-using-multivariate-data-with-Long-Short-Term-Memory'
        },
        {
            name: 'Plant-Disease-Detection-using-CNN',
            description: 'CNN-based system for automated plant disease diagnosis.',
            tech: 'Python, CNN, Deep Learning',
            link: 'https://github.com/pkamboj2000/Plant-Disease-Detection-using-CNN'
        },
        {
            name: 'MEDNet-Cataract-Detection',
            description: 'Medical image analysis for cataract detection using MEDNet.',
            tech: 'Python, PyTorch, Computer Vision',
            link: 'https://github.com/pkamboj2000/MEDNet-based-Imbalanced-Cataract-Detection-using-Digital-Eye-Images'
        }
    ];

    // Update Projects section
    document.getElementById('projects').innerHTML = `
        <h2 class="text-2xl font-bold mb-6">Projects</h2>
        <div class="grid grid-cols-1 gap-6">
            ${projects.map(project => `
                <div class="project-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 class="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                        ${project.name}
                    </h3>
                    <p class="mb-4 text-gray-600 dark:text-gray-300">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tech.split(', ').map(tech => 
                            `<span class="skill-badge">${tech}</span>`
                        ).join('')}
                    </div>
                    <div class="flex gap-4">
                        <a href="${project.link}" target="_blank" 
                            class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                            View Project
                        </a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Function to set theme
    const setTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggleBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
    };

    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);

    // Theme toggle event listener
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});
