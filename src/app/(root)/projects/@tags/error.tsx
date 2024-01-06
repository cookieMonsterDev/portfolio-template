"use client";
import React from "react";

const TagsError = () => {
  return (
    <div className="flex border rounded-md my-2 p-2">
      <h1 className="text-destructive">Something went wrong during loading tags!</h1>
    </div>
  );
};

export default TagsError;
