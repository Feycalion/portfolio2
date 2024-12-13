const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#fbf7f7] py-6 rounded-lg text-center shadow-md transform transition-transform hover:scale-105 flex flex-col justify-between h-[400px">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <img
        src={project.img}
        alt={project.title}
        className="rounded-md w-5/6 mx-auto my-4"
      />
      <p className="text-left w-5/6 mx-auto">{project.description}</p>
      <div>
        <a
          href={project.liveLink}
          className="inline-block bg-[#783c67] text-white py-2 px-4 rounded mt-4 mr-2 hover:bg-[#3f3b71]"
        >
          Live Website
        </a>
        <a
          href={project.repoLink}
          className="inline-block bg-[#783c67] text-white py-2 px-4 rounded mt-4 hover:bg-[#3f3b71]"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
