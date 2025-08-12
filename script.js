document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme from localStorage or system preference
    const initializeTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    // Call initialize theme on load
    initializeTheme();

    // Update About section
    document.querySelector('#about').innerHTML = `
        <h2 class="text-2xl font-bold mb-4 dark:text-white">About Me</h2>
        <div class="flex flex-col gap-4">
            <img src="https://avatars.githubusercontent.com/pkamboj2000" alt="Profile" class="w-32 h-32 rounded-full">
            <div class="dark:text-white">
                <h3 class="text-xl font-semibold">Pranjal Kamboj</h3>
                <p class="text-lg mb-2">Masters in Computer Science at University of Texas at Arlington</p>
                <p class="mb-2">Location: Arlington, Texas</p>
                <div class="contact-info mb-3">
                    <p class="mb-1"><i class="fas fa-envelope"></i> Email: <a href="mailto:pxk7885@mavs.uta.eu" class="text-blue-500 hover:underline">pxk7885@mavs.uta.eu</a></p>
                    <p class="mb-1"><i class="fas fa-envelope"></i> Alt Email: <a href="mailto:pranjalkamboj00000@gmail.com" class="text-blue-500 hover:underline">pranjalkamboj00000@gmail.com</a></p>
                    <p class="mb-1"><i class="fas fa-phone"></i> Phone: <a href="tel:+16823920510" class="text-blue-500 hover:underline">+1 (682) 392-0510</a></p>
                </div>
                <a href="https://github.com/pkamboj2000" class="text-blue-500 hover:underline" target="_blank">GitHub Profile</a>
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
        <h2 class="text-2xl font-bold mb-4 dark:text-white">Skills</h2>
        <div class="flex flex-wrap gap-2">
            ${skills.map(skill => `<span class="skill-badge dark:bg-gray-700 dark:text-white">${skill}</span>`).join('')}
        </div>
    `;

    // Project list
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
            name: 'Langchain-agents-and-tools',
            description: 'Multi-tool LLM agent system for enhanced information retrieval.',
            tech: 'Python, LangChain, LLMs',
            link: 'https://github.com/pkamboj2000/Langchain-agents-and-tools'
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
        <h2 class="text-2xl font-bold mb-4 dark:text-white">Projects</h2>
        <div class="grid grid-cols-1 gap-6">
            ${projects.map(project => `
                <div class="project-card p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
                    <h3 class="text-xl font-bold mb-2">
                        <a href="${project.link}" target="_blank" class="hover:underline dark:text-white">${project.name}</a>
                    </h3>
                    <p class="mb-4 dark:text-gray-300">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.tech.split(', ').map(tech => 
                            `<span class="skill-badge dark:bg-gray-700 dark:text-white">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', function() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggleBtn.textContent = isDark ? '🌙' : '☀️';
    });

    // Set initial toggle button text
    themeToggleBtn.textContent = document.documentElement.classList.contains('dark') ? '🌙' : '☀️';
});
