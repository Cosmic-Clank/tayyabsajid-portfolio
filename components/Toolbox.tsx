import React from "react";
import Heading from "./ui/Heading";
import SectionContainer from "./ui/SectionContainer";
import { HoverEffect } from "./ui/CardHoverEffect";

const Toolbox = () => {
	return (
		<SectionContainer id='toolbox'>
			<Heading title='Tool' titleSpan='Box' />
			<HoverEffect items={toolbox} />
		</SectionContainer>
	);
};

const toolbox = [
	{ icon: "/images/logos/python.svg", title: "Python", link: "https://www.python.org/" },
	{ icon: "/images/logos/java.svg", title: "Java", link: "https://www.java.com/" },
	{ icon: "/images/logos/c.svg", title: "C", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
	{ icon: "/images/logos/cpp.svg", title: "C++", link: "https://isocpp.org/" },
	{ icon: "/images/logos/assembly.svg", title: "Assembly", link: "https://en.wikipedia.org/wiki/Assembly_language" },
	{ icon: "/images/logos/html.svg", title: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
	{ icon: "/images/logos/css.svg", title: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
	{ icon: "/images/logos/javascript.svg", title: "JavaScript", link: "https://www.javascript.com/" },
	{ icon: "/images/logos/typescript.svg", title: "TypeScript", link: "https://www.typescriptlang.org/" },
	{ icon: "/images/logos/node-js.svg", title: "Node.js", link: "https://nodejs.org/" },
	{ icon: "/images/logos/react-js.svg", title: "React.js", link: "https://reactjs.org/" },
	{ icon: "/images/logos/react-native.svg", title: "React Native", link: "https://reactnative.dev/" },
	{ icon: "/images/logos/tailwindcss.svg", title: "Tailwind CSS", link: "https://tailwindcss.com/" },
	{ icon: "/images/logos/mongodb.svg", title: "MongoDB", link: "https://www.mongodb.com/" },
	{ icon: "/images/logos/sql.svg", title: "SQL", link: "https://en.wikipedia.org/wiki/SQL" },
	{ icon: "/images/logos/sqlite.svg", title: "SQLite", link: "https://www.sqlite.org/" },
	{ icon: "/images/logos/mysql.svg", title: "MySQL", link: "https://www.mysql.com/" },
	{ icon: "/images/logos/postgresql.svg", title: "PostgreSQL", link: "https://www.postgresql.org/" },
	{ icon: "/images/logos/express-js.svg", title: "Express.js", link: "https://expressjs.com/" },
	{ icon: "/images/logos/django.svg", title: "Django", link: "https://www.djangoproject.com/" },
	{ icon: "/images/logos/webflow.svg", title: "Webflow", link: "https://webflow.com/" },
	{ icon: "/images/logos/opencv.svg", title: "OpenCV", link: "https://opencv.org/" },
	{ icon: "/images/logos/scikit-learn.svg", title: "Scikit-learn", link: "https://scikit-learn.org/" },
	{ icon: "/images/logos/tensorflow.svg", title: "TensorFlow", link: "https://www.tensorflow.org/" },
	{ icon: "/images/logos/openai.svg", title: "Open AI API", link: "https://www.openai.com/" },
	{ icon: "/images/logos/claudeai.svg", title: "Claude API", link: "https://www.anthropic.com/product" },
	{ icon: "/images/logos/yolo.svg", title: "YOLO", link: "https://pjreddie.com/darknet/yolo/" },
	{ icon: "/images/logos/aws.svg", title: "Amazon Web Services (AWS)", link: "https://aws.amazon.com/" },
	{ icon: "/images/logos/git.svg", title: "GIT", link: "https://git-scm.com/" },
	{ icon: "/images/logos/linux.svg", title: "Linux", link: "https://www.linux.org/" },
	{ icon: "/images/logos/ros.svg", title: "ROS", link: "https://www.ros.org/" },
	{ icon: "/images/logos/wireshark.svg", title: "Wireshark", link: "https://www.wireshark.org/" },
	{ icon: "/images/logos/cisco.svg", title: "Cisco Packet Tracer", link: "https://www.netacad.com/courses/packet-tracer" },
	{ icon: "/images/logos/burpsuite.svg", title: "Burp Suite", link: "https://portswigger.net/burp" },
];

export default Toolbox;
