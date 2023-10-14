import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-shark-700 to-shark-950">
      <div className="container">
        <Link href="/sign-in" className="flex-1">
          <div>test 1</div>
        </Link>
        <div className="flex-1">test 2</div>
      </div>
    </section>
  );
};
