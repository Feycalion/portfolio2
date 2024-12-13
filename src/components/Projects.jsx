import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Holidaze",
      img: "/images/holidaze.jpg",
      description:
        "Holidaze is an accommodation booking application, providing a user-friendly interface for customers to book holidays at various venues and for venue managers to manage venues and bookings, built built using React and Tailwind CSS.",
      liveLink: "https://holidazed.netlify.app/",
      repoLink: "https://github.com/Feycalion/holidaze/",
    },
    {
      title: "Shoplet",
      img: "/images/shoplet.jpg",
      description:
        "Shoplet is a fictional ecommerce website built using React and Tailwind CSS.",
      liveLink: "https://shoplett.netlify.app/",
      repoLink: "https://github.com/Feycalion/shoplet/",
    },
    {
      title: "VintageVault",
      img: "/images/vintagevault.jpg",
      description:
        "VintageVault is a website for an auction site. It allows registered users to view listings, create listings, and make bids on other user's listings with credits.",
      liveLink: "https://vintagevault.netlify.app/",
      repoLink: "https://github.com/Feycalion/semester-project-2/",
    },
    {
      title: "Duchess Delights",
      img: "/images/duchess.jpg",
      description:
        "Duchess Delights is a recipe blog about dessert recipes. Create elevated desserts with easy-to-follow instructions.",
      liveLink: "https://duchessdelights.netlify.app/",
      repoLink: "https://github.com/Feycalion/project-exam-1/",
    },
    {
      title: "Community Science Museum",
      img: "/images/csmm.jpg",
      description:
        "Community Science Museum is a website for the whole family with several events and exhibitions to explore.",
      liveLink: "https://reliable-gumption-3d02b9.netlify.app/",
      repoLink: "https://github.com/Feycalion/Community-Science-Museum/",
    },
    {
      title: "GameHub",
      img: "/images/gamehub.jpg",
      description:
        "GameHub is a website for purchasing and selling games online. Check out the latest titles.",
      liveLink: "https://dashing-sprite-db5a2e.netlify.app/",
      repoLink: "https://github.com/Feycalion/Course-Assignment-GameHub2/",
    },
  ];

  return (
    <section className="bg-[#f5ecec] py-24">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-2xl text-center mb-12">My projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
