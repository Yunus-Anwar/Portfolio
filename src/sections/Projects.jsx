import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "framer-motion";
const Projects = () => {
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);
  // const springX = useSpring(x, { damping: 10, stiffness: 50 });
  // const springY = useSpring(y, { damping: 10, stiffness: 50 });
  // const handleMouseMove = (e) => {
  //   x.set(e.clientX + 20);
  //   y.set(e.clientY + 20);
  // };
  const [preview, setPreview] = useState(null);
  return (
    <section
      //onMouseMove={handleMouseMove}
      id="projects"
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
    </section>
  );
};

export default Projects;
