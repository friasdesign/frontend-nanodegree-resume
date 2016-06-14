/*jshint multistr: true */
/*eslint-env jquery*/

// TODO: translate into spanish and japanese, add webp images

// --> VARIABLES DECLARATIONS _____________________________________
var bio = {
	'name': 'Carlos Frias',
	'role': 'Front-end Developer',
	'contacts': {
		'mobile': '+54 9 (02964) 15-510169',
		'email': 'carlos.a.frias@gmail.com',
		'github': 'friasdesign',
		'location': 'Rio Grande, Tierra del Fuego, Argentina'
	},
	'biopic': 'images/picture.jpg',
	'biopicSet': 'images/450/picture.jpg 1x, images/900/picture.jpg 2x',
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
			'dates': '2012 - 2013',
			'description': 'Follow instructions from process engineers and ' +
											'accomplish production goals'
		},
		{
			'employer': 'Diario Provincia 23',
			'title': 'IT Consultant and Junior Designer',
			'location': 'Rio Grande, Tierra del Fuego, Argentina',
			'dates': '2012 - 2015',
			'description': 'Design ads for newspapers, assist in IT (i.e. network ' +
											'troubleshooting, OS installing, PC cleaning)'
		},
		{
			'employer': 'Digital Fueguina SA',
			'title': 'Maintenance Operator',
			'location': 'Rio Grande, Tierra del Fuego, Argentina',
			'dates': 'August 2015 - December 2015',
			'description': 'Follow instructions from Maintenance engineers for tasks' +
											' such as: creating workstations, creating tools ' +
											'for production.'
		}
	]
};
var projects = {
	'projects': [
		{
			'title': 'Cine Rio Grande',
			'dates': 'December 2014 - June 2015',
			'description': 'A college project with the object of creating a brand ' +
											'new web site for a cinema that integrates requirements ' +
											'for TPS, MIS and DSS',
			'images': [
				'images/400/project-1-01.jpg',
				'images/400/project-1-02.jpg'
			],
			'imagesSet': [
				'images/400/project-1-01.jpg 1x, images/800/project-1-01.jpg 2x',
				'images/400/project-1-02.jpg 1x, images/800/project-1-02.jpg 2x'
			]
		}
	]
};
var education = {
	'schools': [
		{
			'name': 'Escuela Superior de Musica de la UNT',
			'degree': 'Technical Degree',
			'location': 'San Miguel de Tucuman, Tucuman, Argentina',
			'dates': '2008 - 2011',
			'majors': ['Musical Education - Piano'],
			'url': ''
		},
		{
			'name': 'Facultad Regional Rio Grande de la UTN',
			'degree': 'Technical Degree',
			'location': 'Rio Grande, Tierra del Fuego, Argentina',
			'dates': '2013 - 2015',
			'majors': ['Programming'],
			'url': ''
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-end Developer Nanodegree',
			'school': 'Udacity',
			'date': 'April 2016',
			'url': 'www.udacity.com'
		}
	]
};
// <-- END - DEFINING VARIABLES _____________________________________

// --> DEFINING DISPLAY METHOD _____________________________________

// Bio
bio.display = function displayBio() {
	var bannerSel = $('div[role="banner"]'),
			formattedPic = '',
			headerSel = $('header'),
			contactSel = $('#topContacts');

	// Display Role and Name
	bannerSel.prepend(formatEntry(HTMLheaderRole, this.role));
	bannerSel.prepend(formatEntry(HTMLheaderName, this.name));

	// Display contacts
	displayer.call(this.contacts, contactInfoFormatter, contactSel);

	// Display Picture and Message
	formattedPic = formatEntry(HTMLbioPic, this.biopic);
	formattedPic = formatEntry(formattedPic, this.biopicSet, '%set%');
	headerSel.append(formattedPic);

	// Display Skills
	if(this.skills.length) {
	$('#skills').append(HTMLskillsStart);
	this.skills.forEach(function formatSkills(skill){
			$('#skills-list').append(formatEntry(HTMLskills, skill));
		});
	}
	// Add data to footer
	$('#footerContacts').html($('#topContacts').html());
};

// Work
work.display = function displayWork() {
	if(this.jobs.length) {
		this.jobs.forEach(function(job){
			$('#workExperience').append(HTMLworkStart);
			displayer.call(job, workFormatter, $('.work-entry:last'));
		});
	}
};

// Projects
projects.display = function displayProjects() {
	var selector = {},
			formattedImage = '';
	if(this.projects.length) {
		this.projects.forEach(function(project){
			$('#projects').append(HTMLprojectStart);
			selector = $('.project-entry:last');
			displayer.call(project, projectFormatter, selector);
			project.images.forEach(function(image, i){
				formattedImage = formatEntry(projectFormatter.image, image);
				formattedImage = formatEntry(formattedImage, this.imagesSet[i], '%set%');
				selector.append(formattedImage);
			}, project);
		});
	}
};

// Education
education.display = function displayEducation() {
	var selector = {};
	if(education.schools.length) {
		this.schools.forEach(function(school){
			$('#education').append(HTMLschoolStart);
			selector = $('.education-entry:last');
			displayer.call(school, schoolFormatter, selector);
		});
	}
	if(education.onlineCourses.length) {
		$('#education').append(HTMLonlineClasses);
		this.onlineCourses.forEach(function(course){
			$('#education').append(HTMLschoolStart);
			selector = $('.education-entry:last');
			displayer.call(course, onlineCoursesFormatter, selector);
		});
	}
};

// <-- END - DEFINING DISPLAY METHOD _______________________________

// --> MAIN _____________________________________________________

// Main function executes code once page is loaded
$(function main(){
	// Execute display methods
	bio.display();
	work.display();
	projects.display();
	education.display();

	// Add Map and initialize it
	$('#mapDiv').append(googleMap);
	initializeMap();
});

// <-- END - MAIN __________________________________________________

// --> FUNCTION DECLARATIONS _______________________________________

function formatEntry(formatter, data, pHolder = '%data%') {
	var reg = new RegExp(pHolder, 'g');
	return formatter.replace(reg, data);
}

function displayer(formatter, selector) {
	var last = false;
	for(var item in this) {
		if(formatter.hasOwnProperty(item) && this[item]) {
			var formattedItem = '';

			if(Array.isArray(this[item])) {
				formattedItem = formatEntry(formatter[item], this[item].join(' - '));
			}
			else if(typeof this[item] === 'object') {
				formattedItem = formatEntry(formatter[item], this[item].account);
				formattedItem = formatEntry(formattedItem, this[item].url, '%url%');
			}
			else {
				formattedItem = formatEntry(formatter[item], this[item]);
			}
			if(formatter[item].charAt(formatter[item].length - 1) === '>') {
				if(last) {
					formattedItem = last + formattedItem;
					last = false;
				}
				selector.append(formattedItem);
			}else {
				last = formattedItem;
			}
		}
	}
}

// <-- END - FUNCTION DECLARATIONS ____________________________________
