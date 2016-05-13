var bio = {
			"name": "Carlos Frias",
			"role": "Front-end Developer",
			"contactInfo": {
				"mobile": "+54 9 (02964) 15-510169",
				"eMail": "carlos.a.frias@gmail.com",
				"gitHub": "friasdesign",
				"address": "Rio Fuego 3490, Rio Grande (9420), Tierra del Fuego, Argentina",
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
					"images": ["http://placehold.it/600x450"]
				}
			],

		},
		education = {
			"schools": [
				{
					"name": "Facultad Regional Rio Grande de la UTN",
					"city": "Rio Grande, Tierra del Fuego, Argentina",
					"degree": "Technical Degree",
					"major": "Programming"
				}
			],
			"onlineCourses": [
				{
					"title": "Front-end Developer Nanodegree",
					"school": "Udacity",
					"dates": ["2016", "2016"],
					"URL": "http://www.udacity.com"
				}
			]
		};

var pHolder = "%data%",
		formattedName = HTMLheaderName.replace(pHolder, bio.name),
		formattedRole = HTMLheaderRole.replace(pHolder, bio.role),
		formattedMobile = HTMLmobile.replace(pHolder, bio.contactInfo.mobile),
		formattedEmail = HTMLemail.replace(pHolder, bio.contactInfo.eMail),
		formattedGit = HTMLgithub.replace(pHolder, bio.contactInfo.gitHub),
		formattedAddress = HTMLlocation.replace(pHolder, bio.contactInfo.address),
		formattedPic = HTMLbioPic.replace(pHolder, bio.picture),
		formattedWelcome = HTMLwelcomeMsg.replace(pHolder, bio.welcome);

var headerSel = $('#header'),
		contactSel = $('#topContacts');

// Header
headerSel.prepend(formattedRole);
headerSel.prepend(formattedName);

contactSel.append(formattedMobile);
contactSel.append(formattedEmail);
contactSel.append(formattedGit);
contactSel.append(formattedAddress);

headerSel.append(formattedPic);
headerSel.append(formattedWelcome);

if(bio.skills.length) {
	headerSel.append(HTMLskillsStart);
	bio.skills.forEach(function(skill){
		var formattedSkill = HTMLskills.replace(pHolder, skill);
		$('#skills').append(formattedSkill);
	});
}

if(work.jobs.length) {
	work.jobs.forEach(function(job){
		var formattedTitle = HTMLworkEmployer.replace(pHolder, job.employer) + HTMLworkTitle.replace(pHolder, job.title);
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(formattedTitle);
		$('.work-entry:last').append(HTMLworkDates.replace(pHolder, job.dates.join(' - ')));
		$('.work-entry:last').append(HTMLworkLocation.replace(pHolder, job.location));
		$('.work-entry:last').append(HTMLworkDescription.replace(pHolder, job.description));
	});
}
