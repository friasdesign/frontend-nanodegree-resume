var bio = {
	'name': 'Carlos Frias',
	'role': 'Front-end Developer',
	'contactInfo': {
		'mobile': '+54 9 (02964) 15-510169',
		'email': 'carlos.a.frias@gmail.com',
		'github': 'friasdesign',
		'location': 'Rio Fuego 3490, Rio Grande, Tierra del Fuego, Argentina',
		'twitter': ''
	},
	'picture': 'images/picture.jpg',
	'skills': [
		'UI design',
		'UX design',
		'JavaScript',
		'ReactJS',
		'Jasmine',
		'Karma',
		'AngularJS',
		'HTML5',
		'CSS3',
		'Yeoman',
		'Gulp',
		'Graphic Design',
		'Linux',
		'Spanish',
		'Japanese',
		'English'
	]
};
var work = {
	'jobs': [
		{
			'employer': 'Brightstar Fueguina SA',
			'title': 'Production Operator',
			'location': 'Rio Grande, Tierra del Fuego, Argentina',
			'dates': ['2012', '2013'],
			'description': 'Follow instructions from process engineers and accomplish production goals'
		},
		{
			'employer': 'Diario Provincia 23',
			'title': 'IT Consultant and Junior Designer',
			'location': 'Rio Grande, Tierra del Fuego, Argentina',
			'dates': ['2013', '2015'],
			'description': 'Design ads for newspapers, assist in IT (i.e. network troubleshooting, OS installing, PC cleaning)'
		},
		{
			'employer': 'Digital Fueguina SA',
			'title': 'Maintenance Operator',
			'location': 'Rio Grande, Tierra del Fuego, Argentina',
			'dates': ['2015', '2015'],
			'description': 'Follow instructions from Maintenance engineers for tasks such as: creating workstations, creating tools for production.'
		}
	]
};
var projects = {
	'projects': [
		{
			'title': 'Cine Rio Grande',
			'dates': ['2014', '2015'],
			'description': 'A college project with the object of creating a brand new web site for a cinema that integrates requirements for TPS, MIS and DSS',
			'images': ['http://placehold.it/600x450', 'http://placehold.it/600x450']
		}
	]
};
var education = {
	'schools': [
		{
			'name': 'Facultad Regional Rio Grande de la UTN',
			'city': 'Rio Grande, Tierra del Fuego, Argentina',
			'degree': 'Technical Degree',
			'dates': ['2013', '2015'],
			'major': 'Programming'
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-end Developer Nanodegree',
			'school': 'Udacity',
			'dates': ['2016', '2016'],
			'url': 'www.udacity.com'
		}
	]
};

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span>';

var contactInfoFormatter = {
  generic: '<li><span class="contact-label">%contact%</span><span class="contact-data">%data%</span></li>',
  mobile: '<li><span class="contact-label">mobile</span><span class="contact-data">%data%</span></li>',
  email: '<li><span class="contact-label">email</span><span class="contact-data">%data%</span></li>',
  twitter: '<li><span class="contact-label">twitter</span><span class="contact-data">%data%</span></li>',
  github: '<li><span class="contact-label">github</span><span class="contact-data">%data%</span></li>',
  blog: '<li><span class="contact-label">blog</span><span class="contact-data">%data%</span></li>',
  location: '<li><span class="contact-label">location</span><span class="contact-data">%data%</span></li>'
};

var HTMLbioPic = '<p><img src="%data%" class="biopic" alt="Picture of me and monitors behind"></p>';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills-list" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var workFormatter = {
  employer: '<a href="#">%data%',
  title: ' - %data%</a>',
  dates: '<div class="date-text">%data%</div>',
  location: '<div class="location-text">%data%</div>',
  description: '<p><br>%data%</p>'
};

var HTMLprojectStart = '<div class="project-entry"></div>';
var projectFormatter = {
  title: '<a href="#">%data%</a>',
  dates: '<div class="date-text">%data%</div>',
  description: '<p><br>%data%</p>',
  image: '<img src="%data%" alt="project picture">'
};

var HTMLschoolStart = '<div class="education-entry"></div>';
var schoolFormatter = {
  name: '<a href="#">%data%',
  degree: ' -- %data%</a>',
  dates: '<div class="date-text">%data%</div>',
  location: '<div class="location-text">%data%</div>',
  major: '<em><br>Major: %data%</em>'
};

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var onlineCoursesFormatter = {
  title: '<a href="#">%data%',
  school: ' - %data%</a>',
  dates: '<div class="date-text">%data%</div>',
  url: '<br><a href="#">%data%</a>'
};

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';