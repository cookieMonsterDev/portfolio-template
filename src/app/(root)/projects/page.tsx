"use client";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <main className="container">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        <Button
          onClick={async () => {
            try {
              axios.post("/api/skills", {
                name: "1",
                test: "1234",
              });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          etst
        </Button>
      </div>
    </main>
  );
};

export default ProjectsPage;
