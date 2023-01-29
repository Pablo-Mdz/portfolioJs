// Change website animations
const animation = {
    // make it false to switch off fade-up animation
    animate: true,
    // animation playing duration
    duration: 750,
    // if true, animation plays only once when element comes on screen
    once: false,
};
// Change your display name on tha landing display
const header = {
    name: "Pablo Cigoy",
};
const background = {
    // Options: Snow or Particle
    type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
    paragraph:
        // `I consider myself an outgoing, optimistic and adventurous person. I did the web development bootcamp at Ironhack Berlin. The technologies I learned are HTML, CSS, JavaScript, MongoDB, Express, React, Node.js, P5, Handlebars Bootstrap and Tailwind. My hobbies are cooking, travelling and playing Padel, I also like to learn new technologies. I have travelled to 36 countries around the world and have worked in 5 of them. I have more than 10 years of work experience working in kitchens in different environments and performing different functions, doing organisational tasks, teamwork, optimisation and management of tasks, advice and service in private and public events. I am a sociable person, I like to work in a team, I am committed and I am always willing to learn and improve.`
        `I am an outgoing, optimistic, and adventurous person with a passion for web development. I recently graduated from Ironhack Berlin's web development bootcamp, where I gained expertise in technologies such as HTML, CSS, JavaScript, MongoDB, Express, React, Node.js, P5, Handlebars Bootstrap and Tailwind. 
        In my free time, I enjoy cooking, travelling, and playing Padel. I am always looking for new challenges and opportunities to learn and grow. I have had the privilege of travelling to 36 countries and have worked in 5 of them, using my skills in teamwork, organisational tasks, task optimization, management, advice, and service in various environments including private and public events.
         With over 10 years of experience working in kitchens, I am a sociable person who thrives in team environments and is committed to constantly improving.`
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
    {
        name: "HTML5",
        // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
        svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
        faClass: "fab fa-html5",
    },
    {
        name: "CSS3",
        // svg: '',
        faClass: "fab fa-css3",
    },
    {
        name: "Javascript",
        // svg: '',
        faClass: "fab fa-js",
    },
    {
        name: "React",
        // svg: '',
        faClass: "fab fa-react",
    },
    {
        name: "Node",
        // svg: '',
        faClass: "fab fa-node",
    },
    {
        name: "Python",
        // svg: '',
        faClass: "fab fa-python",
    },

    {
        name: "Bootstrap",
        // svg: '',
        faClass: "fab fa-bootstrap",
    },
    {
        name: "Git",
        // svg: '',
        faClass: "fab fa-git",
    },
    {
        name: "Github",
        // svg: '',
        faClass: "fab fa-github",
    },
    {
        name: "MongoDB",
        // svg: '',
        faClass: "fab fa-mdb",
    },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Some Projects";
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project-be-chef",
        name: "Be Chef - Web page",
        skills: ["HTML, JS, React, MongoDB, Express, Tailwind"],
        url: "https://be-chef.netlify.app/",
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project-sabor-latino",
        name: "Sabor Latino - Web page",
        skills: ["HTML, JS, Handlebars, Bootstrap, Express, MongoDB"],
        url: "https://thoughtful-cod-cloak.cyclic.app/",
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project-game",
        name: "Save Oliver - Game",
        skills: ["HTML, CSS, JS, P5 "],
        url: "https://pablo-mdz.github.io/Game-P5-Shooting/",
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project-truco",
        name: "Counter - Truco game ",
        skills: ["HTML, CSS, JS"],
        url: "https://dulcet-pudding-105e47.netlify.app/",
    },
    {
        // Add image in './styles/images.css' in #project5
        id: "project-SD",
        name: "Sourdough Calculator",
        skills: ["HTML, CSS, Python, Tkinter"],
        url: "https://github.com/Pablo-Mdz/MasaMadre/blob/main/MasaMadre.py",
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project-list",
        name: "Contacts list",
        skills: ["HTML, CSS, Python, Tkinter"],
        url: "https://github.com/Pablo-Mdz",
    },
];






// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Some of my Photos";

const images = [
    {
        id: "img1",
        name: "unage1"
    },
    {
        id: "img2",
        name: "unage2"
    },
    {
        id: "img3",
        name: "unage3"
    },
]

const miscellaneous = [
    {
        // Add image in './styles/images.css' in #misc1
        id: "misc1",
        name: "Miscellaneous 1",
        url: "https://github.com/kaustubhai",
    },
    {
        // Add image in './styles/images.css' in #misc2
        id: "misc2",
        name: "Miscellaneous 2",
        url: "https://github.com/kaustubhai",
    },
    {
        // Add image in './styles/images.css' in #misc3
        id: "misc3",
        name: "Miscellaneous 3",
        url: "https://github.com/kaustubhai",
    },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch!";
const contact = {
    pitch:
        "Now, here we are in the best part. If you have any questions or you want to say just hi, feel free to contact me. I will do my best to reply as soon as possible.",
    copyrightName: "Pablo Cigoy",
    contactUrl: "https://pablocigoy.com/",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
    github: "https://github.com/Pablo-Mdz",
    //   facebook: "https://facebook.com",
    // twitter: "https://twitter.com",
    instagram: "https://www.instagram.com/pablo.cigoy/",
    linkedin: "https://www.linkedin.com/in/pablo-cigoy/",
    //   resume: "https://novoresume.com/",
};

const Copyright = "© Copyright"
// Dont change anything here
export {
    animation,
    header,
    background,
    about,
    skillsBar,
    projects,
    miscellaneous,
    contact,
    social,
    section2title,
    section3Title,
    section4Title,
    section5Title,
    images,
    Copyright,
};
