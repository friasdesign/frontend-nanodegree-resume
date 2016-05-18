/*eslint-env jquery*/

// TODO: translate into spanish and japanese, add webp images

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
	'picture': {
		'fallback': 'images/picture.jpg',
		'set': 'images/450/picture.jpg 1x, images/900/picture.jpg 2x',
	},
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
			'images': [
				{ 'fallback': 'images/400/project-1-01.jpg',
					'set': 'images/400/project-1-01.jpg 1x, images/800/project-1-01.jpg 2x'
				},
				{ 'fallback': 'images/400/project-1-02.jpg',
					'set': 'images/400/project-1-02.jpg 1x, images/800/project-1-02.jpg 2x'
				}
			]
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

var headerSel = $('header'),
		contactSel = $('#topContacts');

// --> DEFINING DISPLAY METHOD _____________________________________

// Bio
bio.display = function displayBio() {
	var bannerSel = $('div[role="banner"]'),
			formattedPic = '';

	// Display Role and Name
	bannerSel.prepend(formatEntry(HTMLheaderRole, this.role));
	bannerSel.prepend(formatEntry(HTMLheaderName, this.name));

	// Display contactInfo
	displayer.call(this.contactInfo, contactInfoFormatter, contactSel);

	// Display Picture and Message
	formattedPic = formatEntry(HTMLbioPic, this.picture.fallback);
	formattedPic = formatEntry(formattedPic, this.picture.set, '%set%');
	headerSel.append(formattedPic);

	// Display Skills
	if(this.skills.length) {
	$('#skills').append(HTMLskillsStart);
	this.skills.forEach(function formatSkills(skill){
			$('#skills-list').append(formatEntry(HTMLskills, skill));
		});
	}
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
			project.images.forEach(function(image){
				formattedImage = formatEntry(projectFormatter.image, image.fallback);
				formattedImage = formatEntry(formattedImage, image.set, '%set%');
				selector.append(formattedImage);
			});
		});
	}
};

// Education
education.display = function displayEducation() {
	var selector = {};
	if(education.schools.length) {
		this.schools.forEach(function(school){
			console.log('got it');
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

$(function main(){
	bio.display();
	work.display();
	projects.display();
	education.display();
	$('#mapDiv').append(googleMap);
	$('#nav-list').children('li').on('click', function toggleActive() {
		$(this).siblings('.active').toggleClass('active');
		$(this).toggleClass('active');
	});
	initializeMap();
});

function formatEntry(formatter, data, pHolder = '%data%') {
	return formatter.replace(pHolder, data);
}

function displayer(formatter, selector) {
	var last = false;
	for(var item in this) {
		if(formatter.hasOwnProperty(item) && this[item]) {
			var formattedItem = '';

			if(Array.isArray(this[item])) {
				formattedItem = formatEntry(formatter[item], this[item].join(' - '));
			}else {
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
