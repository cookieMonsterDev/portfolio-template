import Link from "next/link";
import React from "react";

export const HeroComponent = () => {
  return (
    <section className="w-full h-[100vh] flex items-center justify-center bg-red-100">
      <Link href="/sign-in">
        <div>test 1</div>
      </Link>
      <div>test 2</div>
    </section>
  );
};

export default HeroComponent;
