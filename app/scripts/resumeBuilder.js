/*eslint-env jquery*/

// TODO: add source images for 1x and 2x, min images

const pHolder = '%data%';

var headerSel = $('header'),
		contactSel = $('#topContacts');

// --> DEFINING DISPLAY METHOD _____________________________________

// Bio
bio.display = function displayBio() {
	var bannerSel = $('div[role="banner"]');
	// Display Role and Name
	bannerSel.prepend(formatEntry(HTMLheaderRole, this.role));
	bannerSel.prepend(formatEntry(HTMLheaderName, this.name));

	// Display contactInfo
	displayer.call(this.contactInfo, contactInfoFormatter, contactSel);

	// Display Picture and Message
	headerSel.append(formatEntry(HTMLbioPic, this.picture));

	// Display Skills
	if(this.skills.length) {
	$('#skills').append(HTMLskillsStart);
	this.skills.forEach(function formatSkills(skill){
			$('#skills-list').append(formatEntry(HTMLskills, skill));
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

$('#nav-list').children('li').on('click', function toggleActive() {
	$(this).siblings('.active').toggleClass('active');
	$(this).toggleClass('active');
});

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
