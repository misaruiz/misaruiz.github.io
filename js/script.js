/**
 * Work Experience
 */

const companies = {
    tsia: 'Technology & Services Industry Association (TSIA)', 
    hme: 'HM Electronics, Inc. (HME)'};

const srUXTSIA = new Jobs(
    `Senior <abbr title="User Interface / User Experience" data-bs-toggle="tooltip" data-bs-placement="bottom">UI/UX</abbr> Designer`,
    companies.tsia,
    'Feb 2020',
    'Present',
    'San Diego',
    'CA',
    ['Conducted extensive research on Accessibility and Inclusion Compliance. Presented results to the Product and Marketing teams, alongside action items to start making gradual improvements based on level of effort.', 
    'Created a sophisticated design experience for our audience to access content around “how to navigate your business during a pandemic”. Designed this page to be easy to consume and scalable for the future. This effort created a positive impact on many technology companies who were struggling to stay afloat when the pandemic hit.']
    );

const srWebTSIA = new Jobs(
    'Senior Web Designer',
    companies.tsia,
    'Nov 2018',
    'Feb 2020',
    'San Diego',
    'CA',
    ['Redesigned the conference website to improve user experience. I excelled in technical skillset and collaboration abilities, resulting in a beautiful and functional site. This new site has proven to be a delight to the user and has a great impact.', 
    'Delivered successful landing pages for TSIA company books, charity programs, speaking engagements, major updates to all product pages, and digital ad campaigns.',
    'I played a key role in restoring trust and efficiency between the Marketing and Product Development handshake.']
    );

const graphicTSIA = new Jobs(
    'Graphic Designer',
    companies.tsia,
    'Feb 2017',
    'Nov 2018',
    'San Diego',
    'CA',
    ['Redesigned the main website, was a massive achievement considering my early onboarding, I proved from day one that no challenge was too large. I tackled the project with proactiveness, ownership, and exceptional design skills.', 
    'Redesigned the webinar user interface, marketing emails, social media images, and research report covers. This resulted in a better brand alignment when facing our members and prospects.']
    );

const graphicHME = new Jobs(
    'Graphic Designer',
    companies.hme,
    'Jan 2010',
    'Feb 2017',
    'Poway',
    'CA',
    ['Managed and created Product Brochures, Video Presentations, and a Trade Show Kiosk which were pivotal in the acquisition of SONIC Drive-In business.', 
    'Redesigned product labels for JTECH (HME acquired company). Contributed a fresh and new look to restaurant guest pagers.',
    'Coordinated and provided photography for Vuze Table Location System, incorporated in presentations and brochures to increase McDonald’s business.']
    );



/**
 * Sidebar
 */

const certifications = new Sidebar('Certifications', 'award', [
    ['Full-Stack Javascript', 'Treehouse Techdegree']
]);

const skills = new Sidebar('Skills', 'lightbulb', [
    ['Illustrations & UI', 'Strategy & vision presentations', 'User flows', 'Concept sketches', 'Wireframes & mockups with Adobe XD & Invision', 'Production redlines', 'Style guides, pattern library & design system'],
    ['Prototyping', 'Rapid prototyping using Adobe XD, Invision & Codepen', 'Interactive flow with HTML/CSS/JS', 'Frameworks (Bootstrap)'],
    ['Research', 'Data Analysis (Analytics & Pendo)', 'Task analysis & persona hypothesis', 'A/B Testing & Experiment', 'Cafe & diary study', 'Cognitive walkthrough'],
    ['Collaboration', 'Organizing workshops', 'Facilitations design critique', 'Self-starter', 'Detail-oriented', 'Flexible', 'Communicative']
]);

const recognitions = new Sidebar('Recognition', 'trophy', [
    ['2021 Markers Heart Award', 'For exemplifying empathy and ownership'],
    ['2018 Marketing Superstar', 'For exemplifying empathy and ownership']
]);

const extra = new Sidebar('Extra', 'geo-alt', [
    ['Activities', 'Travel', 'Hiking', 'Camping', 'Border Angels Water Drop Volunteer'],
    ['Art & Music', 'Illustrations', 'Murals', 'T-Shirts', 'Guitar'],
    ['Languages', 'English & Spanish']
]);


/**
 * Contact Info
 */
const myName = 'Misael Ruiz';
const myTitle = 'UX Designer';
const myAvatar = 'assets/misaruiz-avatar.png';
const myWebsite = new ContactInfo('misaruiz.github.io', 'https://misaruiz.github.io/', 'globe2');
const myEmail = new ContactInfo('hello@misaruiz.com', 'mailto:hello@misaruiz.com', 'envelope');
const myPhone = new ContactInfo('619.292.1438', 'tel:619-292-1438', 'telephone');

document.querySelector('title').innerHTML = `${myName} - ${myTitle}`;
document.querySelector('a.navbar-brand').insertAdjacentHTML("beforeend", `<strong>${myName}</strong> - ${myTitle}`);
document.querySelectorAll('img.myAvatar').forEach(img => img.setAttribute('src', myAvatar));

/**
 * Gets current year
 */
 document.getElementById("year").innerHTML = new Date().getFullYear();


 /**
  * Initialize Tooltips
  */
  window.onload = function() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}