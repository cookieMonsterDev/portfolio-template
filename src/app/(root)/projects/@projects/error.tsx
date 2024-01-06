"use client";
import React from "react";

const ProjectsError = () => {
  return (
    <div className="w-full h-[calc(100svh-250px)] grid place-content-center border p-2">
      <h1 className="text-destructive">
        Something went wrong during loading projects!
      </h1>
    </div>
  );
};

export default ProjectsError;
