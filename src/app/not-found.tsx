const NotFound = () => {
  return (
    <div className="w-screen h-screen grid place-content-center p-4">
      <section className="p-6 lg:p-8 border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 grid gap-2 rounded-md">
        <h2 className="text-center font-bold text-7xl md:text-8xl lg:text-9xl">
          404
        </h2>
        <p className="text-center font-semibold text-2xl lg:text-3xl">
          Not Found
        </p>
        <p className="opacity-60">
          The resource required could not be found on this server!
        </p>
      </section>
    </div>
  );
};

export default NotFound;
