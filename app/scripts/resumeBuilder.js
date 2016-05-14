/*jshint esversion: 6 */

var bio = {
			"name": "Carlos Frias",
			"role": "Front-end Developer",
			"contactInfo": {
				"mobile": "+54 9 (02964) 15-510169",
				"email": "carlos.a.frias@gmail.com",
				"github": "friasdesign",
				"location": "Rio Fuego 3490, Rio Grande, Tierra del Fuego, Argentina",
				"twitter": ""
			},
			"picture": "http://placehold.it/300x300",
			"welcome": "Hi! I\"m Carlos Frias, check my resume and contact with me! :D",
			"skills": [
				"UI design",
				"UX design",
				"JavaScript",
				"ReactJS",
				"Jasmine",
				"Karma",
				"AngularJS",
				"HTML5",
				"CSS3",
				"Yeoman",
				"Gulp",
				"Graphic Design",
				"Linux",
				"Spanish",
				"Japanese",
				"English"
			]
		},
		work = {
			"jobs": [
				{
					"employer": "Brightstar Fueguina SA",
					"title": "Production Operator",
					"location": "Rio Grande, Tierra del Fuego, Argentina",
					"dates": ["2012", "2013"],
					"description": "Follow instructions from process engineers and accomplish production goals"
				},
				{
					"employer": "Diario Provincia 23",
					"title": "IT Consultant and Junior Designer",
					"location": "Rio Grande, Tierra del Fuego, Argentina",
					"dates": ["2013", "2015"],
					"description": "Design ads for newspapers, assist in IT (i.e. network troubleshooting, OS installing, PC cleaning)"
				},
				{
					"employer": "Digital Fueguina SA",
					"title": "Maintenance Operator",
					"location": "Rio Grande, Tierra del Fuego, Argentina",
					"dates": ["2015", "2015"],
					"description": "Follow instructions from Maintenance engineers for tasks such as: creating workstations, creating tools for production."
				}
			]
		},
		projects = {
			"projects": [
				{
					"title": "Cine Rio Grande",
					"dates": ["2014", "2015"],
					"description": "A college project with the object of creating a brand new web site for a cinema that integrates requirements for TPS, MIS and DSS",
					"images": ["http://placehold.it/600x450", "http://placehold.it/600x450"]
				}
			],

		},
		education = {
			"schools": [
				{
					"name": "Facultad Regional Rio Grande de la UTN",
					"city": "Rio Grande, Tierra del Fuego, Argentina",
					"degree": "Technical Degree",
					"dates": ["2013", "2015"],
					"major": "Programming"
				}
			],
			"onlineCourses": [
				{
					"title": "Front-end Developer Nanodegree",
					"school": "Udacity",
					"dates": ["2016", "2016"],
					"url": "http://www.udacity.com"
				}
			]
		};

const pHolder = "%data%";
var formattedName = HTMLheaderName.replace(pHolder, bio.name),
		formattedRole = HTMLheaderRole.replace(pHolder, bio.role),
		formattedPic = HTMLbioPic.replace(pHolder, bio.picture),
		formattedWelcome = HTMLwelcomeMsg.replace(pHolder, bio.welcome);

var headerSel = $('#header'),
		contactSel = $('#topContacts');

// --> DEFINING DISPLAY METHOD _____________________________________

// Bio
bio.display = function displayBio() {
	// Display Role and Name
	headerSel.prepend(formatEntry(HTMLheaderRole, this.role));
	headerSel.prepend(formatEntry(HTMLheaderName, this.name));

	// Display contactInfo
	displayer.call(this.contactInfo, contactInfoFormatter, contactSel);

	// Display Picture and Message
	headerSel.append(formatEntry(HTMLbioPic, this.picture));
	headerSel.append(formatEntry(HTMLwelcomeMsg, this.welcome));

	// Display Skills
	if(this.skills.length) {
	headerSel.append(HTMLskillsStart);
	this.skills.forEach(function formatSkills(skill){
			$('#skills').append(formatEntry(HTMLskills, skill));
		});
	}
};

work.display = function displayWork() {
	if(this.jobs.length) {
		this.jobs.forEach(function(job){
			$('#workExperience').append(HTMLworkStart);
			displayer.call(job, workFormatter, $('.work-entry:last'));
		});
	}
};

projects.display = function displayProjects() {
	var selector = {};
	if(this.projects.length) {
		this.projects.forEach(function(project){
			$('#projects').append(HTMLprojectStart);
			selector = $('.project-entry:last');
			displayer.call(project, projectFormatter, selector);
			project.images.forEach(function(image){
				selector.append(formatEntry(projectFormatter.image, image));
			});
		});
	}
};

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

// Header

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);


// if(work.jobs.length) {
// 		displayWork();
// }

// if(projects.projects.length) {
// 		projects.display();
// }

// function displayWork() {
// 	work.jobs.forEach(function(job){
// 	var formattedTitle = HTMLworkEmployer.replace(pHolder, job.employer) + HTMLworkTitle.replace(pHolder, job.title);
// 		$('#workExperience').append(HTMLworkStart);
// 		$('.work-entry:last').append(formattedTitle);
// 		$('.work-entry:last').append(HTMLworkDates.replace(pHolder, job.dates.join(' - ')));
// 		$('.work-entry:last').append(HTMLworkLocation.replace(pHolder, job.location));
// 		$('.work-entry:last').append(HTMLworkDescription.replace(pHolder, job.description));
// 	});
// }

// function inName(name) {
// 	var fullName = name.split(" ");

// 	if(fullName.length <= 1) {
// 		throw new Error('There\'s only one name, provide more information, please!');
// 	}

// 	// Here we Capitalize all names (in case more than ONE)
// 	for(var i=0, max=fullName.length-1; i<max; i+=1) {
// 		fullName[i] = fullName[i].charAt(0).toUpperCase() + fullName[i].slice(1).toLowerCase();
// 	}

// 	// Here we change surname to uppercase
// 	fullName[fullName.length-1] = fullName[fullName.length-1].toUpperCase();

// 	return fullName.join(" ");
// }

function formatEntry(formatter, data) {
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
			
			if(formatter[item].charAt(formatter[item].length-1) == '>') {
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