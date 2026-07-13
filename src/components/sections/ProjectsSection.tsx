"use client";

import { useState } from "react";
import type { ProjectItem } from "@/data/projects";
import { softwareProjects } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectDetailModal } from "@/components/portfolio/ProjectDetailModal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="section-shell relative">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <SectionLabel index="06" label="Software" title="Software engineering portfolio built like technical case studies." />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="open-copy lg:pb-12">
            A focused set of full-stack, AI, payments, automation, and decision-intelligence systems—presented as premium project modules ready for future case-study pages.
          </p>
        </Reveal>
      </div>

      <div className="mt-2 grid gap-5 xl:grid-cols-2">
        {softwareProjects.map((project, index) => (
          <Reveal delay={0.08 * index} key={project.id}>
            <ProjectCard project={project} onViewDetails={setSelectedProject} />
          </Reveal>
        ))}
      </div>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
