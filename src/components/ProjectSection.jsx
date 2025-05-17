import { ExternalLink, Github } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "Skill and Project Matrix Management",
		description:
			"A comprehensive system to manage employee skills and project allocations. Built using ABP.IO, Entity Framework, PostgreSQL, and React with features like role-based access, filtering, and analytics.",
		image: "/projects/skill-matrix.png",
		tag: ["ABP.IO", "PostgreSQL", "React"],
		demoUrl: "#",
		githubUrl: "#",
	},
	{
		id: 2,
		title: "TweetSentiment",
		description:
			"A Twitter sentiment analysis app built with Python, Streamlit, and a pre-trained ML model. It detects sentiments of tweets in real time and marks Indian disaster-related tweets.",
		image: "/projects/tweetsentiment.png",
		tag: ["Python", "Streamlit", "Machine Learning"],
		demoUrl: "#",
		githubUrl: "#",
	},
	{
		id: 3,
		title: "Employee Management System (React+ASP.NET)",
		description:
			"An enterprise-level employee management app built with ABP.IO and React, featuring permission management, filtering, and CRUD operations.",
		image: "/projects/employee.png",
		tag: ["ASP.NET", "React", "PostgreSQL"],
		demoUrl: "#",
		githubUrl: "#",
	},
];

export const ProjectSection = () => {
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Featured{" "}
					<span className="text-primary">Project</span>
				</h2>
				<p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto">
					A selection of full-stack, machine learning, and enterprise-grade
					projects showcasing my skills in React, ASP.NET, ABP.IO, and more.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group bg-card rounded-lg overflow-hidden shadow-xl card-hover flex flex-col"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4 flex flex-col flex-1">
								<h3 className="font-bold text-base md:text-lg mb-2">
									{project.title}
								</h3>
								<p className="text-muted-foreground mb-2">
									{project.description}
								</p>
								<div className="flex gap-3 mt-auto">
									<a
										href={project.demoUrl}
										className="text-primary underline flex items-center gap-1"
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="w-5 h-5" />
									</a>
									<a
										href={project.githubUrl}
										className="text-primary underline flex items-center gap-1"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="w-5 h-5" /> 
									</a>
								</div>
								<div className="flex flex-wrap gap-2 mt-3">
									{project.tag.map((t, i) => (
										<span
											key={i}
											className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs"
										>
											{t}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};