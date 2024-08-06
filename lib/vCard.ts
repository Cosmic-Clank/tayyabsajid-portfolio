import PersonalInfo from "@/data/PersonalInfo";

export const generateVCard = () => {
	let vCard = `BEGIN:VCARD\nVERSION:${PersonalInfo.version}\n`;

	if (PersonalInfo.formattedName) {
		vCard += `FN:${PersonalInfo.formattedName}\n`;
	}

	if (PersonalInfo.name) {
		vCard += `N:${PersonalInfo.name.lastName};${PersonalInfo.name.firstName};;;${PersonalInfo.name.prefixes};\n`;
	}

	if (PersonalInfo.nickname) {
		vCard += `NICKNAME:${PersonalInfo.nickname}\n`;
	}

	// if (PersonalInfo.photo) {
	// 	vCard += `PHOTO;ENCODING=b;TYPE=JPEG:${personalInfo.photoBase64}\n`;
	// }

	if (PersonalInfo.birthday) {
		vCard += `BDAY:${PersonalInfo.birthday}\n`;
	}

	if (PersonalInfo.gender) {
		vCard += `GENDER:${PersonalInfo.gender}\n`;
	}

	if (PersonalInfo.phone) {
		vCard += `TEL;TYPE=WORK:${PersonalInfo.phone}\n`;
	}

	if (PersonalInfo.email) {
		vCard += `EMAIL;TYPE=WORK:${PersonalInfo.email}\n`;
	}

	if (PersonalInfo.url) {
		if (PersonalInfo.url.portfolio) {
			vCard += `URL:${PersonalInfo.url.portfolio}\n`;
		}
	}

	if (PersonalInfo.jobTitle) {
		vCard += `TITLE:${PersonalInfo.jobTitle}\n`;
	}

	if (PersonalInfo.role) {
		vCard += `ROLE:${PersonalInfo.role}\n`;
	}

	if (PersonalInfo.note) {
		vCard += `NOTE:${PersonalInfo.note}\n`;
	}

	if (PersonalInfo.socialProfiles) {
		for (const [type, url] of Object.entries(PersonalInfo.socialProfiles)) {
			vCard += `X-SOCIALPROFILE;TYPE=${type}:${url}\n`;
		}
	}

	vCard += "END:VCARD\n";
	return vCard;
};
