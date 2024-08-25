import React from "react";
import Heading from "./ui/Heading";
import SectionContainer from "./ui/SectionContainer";
import { HoverEffect } from "./ui/CardHoverEffect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Toolbox = () => {
	return (
		<SectionContainer id='toolbox' className=''>
			<Heading title='Tool' titleSpan='Box' />
			<Tabs defaultValue='Languages & Version Control' className='w-full flex justify-center items-center flex-col'>
				<TabsList className='flex-wrap mx-auto bg-[#00000066] h-full border border-[#ffffff33] rounded-xl'>
					{Object.keys(toolbox).map((key) => (
						<div className='px-1'>
							<TabsTrigger className='hover:bg-[#27272a] rounded-xl pb-1' value={key}>
								{key}
							</TabsTrigger>
						</div>
					))}
				</TabsList>
				{Object.entries(toolbox).map(([key, value]) => (
					<TabsContent value={key} className='w-full'>
						<HoverEffect items={value} />
					</TabsContent>
				))}
			</Tabs>
		</SectionContainer>
	);
};

const toolbox = {
	"Languages & Version Control": [
		{ icon: "/images/logos/python.svg", title: "Python", link: "https://www.python.org/" },
		{ icon: "/images/logos/java.svg", title: "Java", link: "https://www.java.com/" },
		{ icon: "/images/logos/c.svg", title: "C", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
		{ icon: "/images/logos/cpp.svg", title: "C++", link: "https://isocpp.org/" },
		{ icon: "/images/logos/assembly.svg", title: "Assembly", link: "https://en.wikipedia.org/wiki/Assembly_language" },
		{ icon: "/images/logos/javascript.svg", title: "JavaScript", link: "https://www.javascript.com/" },
		{ icon: "/images/logos/typescript.svg", title: "TypeScript", link: "https://www.typescriptlang.org/" },
		{ icon: "/images/logos/git.svg", title: "GIT", link: "https://git-scm.com/" },
		{ icon: "/images/logos/github.svg", title: "GitHub", link: "https://github.com/" },
	],
	"Web Dev & DBs": [
		{ icon: "/images/logos/html.svg", title: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
		{ icon: "/images/logos/css.svg", title: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
		{ icon: "/images/logos/javascript.svg", title: "JavaScript", link: "https://www.javascript.com/" },
		{ icon: "/images/logos/typescript.svg", title: "TypeScript", link: "https://www.typescriptlang.org/" },
		{ icon: "/images/logos/react-js.svg", title: "React.js", link: "https://reactjs.org/" },
		{ icon: "/images/logos/react-native.svg", title: "React Native", link: "https://reactnative.dev/" },
		{ icon: "/images/logos/node-js.svg", title: "Node.js", link: "https://nodejs.org/" },
		{ icon: "/images/logos/express-js.svg", title: "Express.js", link: "https://expressjs.com/" },
		{ icon: "/images/logos/django.svg", title: "Django", link: "https://www.djangoproject.com/" },
		{ icon: "/images/logos/flask.svg", title: "Flask", link: "https://flask.palletsprojects.com/" },
		{ icon: "/images/logos/tailwindcss.svg", title: "Tailwind CSS", link: "https://tailwindcss.com/" },
		{ icon: "/images/logos/capacitor.svg", title: "Capacitor", link: "https://capacitorjs.com/" },
		{ icon: "/images/logos/mongodb.svg", title: "MongoDB", link: "https://www.mongodb.com/" },
		{ icon: "/images/logos/mysql.svg", title: "MySQL", link: "https://www.mysql.com/" },
		{ icon: "/images/logos/postgresql.svg", title: "PostgreSQL", link: "https://www.postgresql.org/" },
		{ icon: "/images/logos/sqlite.svg", title: "SQLite", link: "https://www.sqlite.org/" },
		{ icon: "/images/logos/sql.svg", title: "SQL", link: "https://en.wikipedia.org/wiki/SQL" },
	],
	"ML & AI": [
		{ icon: "/images/logos/scikit-learn.svg", title: "Scikit-learn", link: "https://scikit-learn.org/" },
		{ icon: "/images/logos/tensorflow.svg", title: "TensorFlow", link: "https://www.tensorflow.org/" },
		{ icon: "/images/logos/pytorch.svg", title: "PyTorch", link: "https://pytorch.org/" },
		{ icon: "/images/logos/keras.svg", title: "Keras", link: "https://keras.io/" },
		{ icon: "/images/logos/opencv.svg", title: "OpenCV", link: "https://opencv.org/" },
		{ icon: "/images/logos/yolo.svg", title: "YOLO", link: "https://pjreddie.com/darknet/yolo/" },
	],
	"Cybersecurity & DevOps": [
		{ icon: "/images/logos/wireshark.svg", title: "Wireshark", link: "https://www.wireshark.org/" },
		{ icon: "/images/logos/cisco.svg", title: "Cisco Packet Tracer", link: "https://www.netacad.com/courses/packet-tracer" },
		{ icon: "/images/logos/burpsuite.svg", title: "Burp Suite", link: "https://portswigger.net/burp" },
		{ icon: "/images/logos/metasploit.svg", title: "Metasploit", link: "https://www.metasploit.com/" },
		{ icon: "/images/logos/aws.svg", title: "Amazon Web Services (AWS)", link: "https://aws.amazon.com/" },
		{ icon: "/images/logos/docker.svg", title: "Docker", link: "https://www.docker.com/" },
		{ icon: "/images/logos/ubuntu.svg", title: "Ubuntu", link: "https://ubuntu.com/" },
		{ icon: "/images/logos/kali.svg", title: "Kali", link: "https://www.kali.org/" },
		{ icon: "/images/logos/virtualbox.svg", title: "VirtualBox", link: "https://www.virtualbox.org/" },
		{ icon: "/images/logos/vmware.svg", title: "VMware", link: "https://www.vmware.com/" },
	],
	"Creative Softwares & IDEs": [
		{ icon: "/images/logos/adobeps.svg", title: "Adobe Photoshop", link: "https://www.adobe.com/products/photoshop.html" },
		{ icon: "/images/logos/adobelr.svg", title: "Adobe Lightroom", link: "https://www.adobe.com/products/photoshop-lightroom.html" },
		{ icon: "/images/logos/adobeae.svg", title: "Adobe After Effects", link: "https://www.adobe.com/products/aftereffects.html" },
		{ icon: "/images/logos/adobepp.svg", title: "Adobe Premiere Pro", link: "https://www.adobe.com/products/premiere.html" },
		{ icon: "/images/logos/adobei.svg", title: "Adobe Illustrator", link: "https://www.adobe.com/products/illustrator.html" },
		{ icon: "/images/logos/davinci-resolve.svg", title: "DaVinci Resolve", link: "https://www.blackmagicdesign.com/products/davinciresolve/" },
		{ icon: "/images/logos/figma.svg", title: "Figma", link: "https://www.figma.com/" },
		{ icon: "/images/logos/vscode.svg", title: "Visual Studio Code", link: "https://code.visualstudio.com/" },
		{ icon: "/images/logos/visualstudio.svg", title: "Visual Studio", link: "https://visualstudio.microsoft.com/" },
		{ icon: "/images/logos/pycharm.svg", title: "PyCharm", link: "https://www.jetbrains.com/pycharm/" },
		{ icon: "/images/logos/intellij.svg", title: "IntelliJ IDEA", link: "https://www.jetbrains.com/idea/" },
		{ icon: "/images/logos/webstorm.svg", title: "WebStorm", link: "https://www.jetbrains.com/webstorm/" },
	],
};

export default Toolbox;
