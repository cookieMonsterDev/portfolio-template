"use client";

const RootError = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <div className="h-[calc(100svh-225px)] mt-6 p-2 border grid place-content-center">
      <h1 className="text-destructive">
        Something went wrong during loading {error.message}!
      </h1>
    </div>
  );
};

export default RootError;
