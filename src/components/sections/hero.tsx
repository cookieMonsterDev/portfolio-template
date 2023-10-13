import Link from "next/link";
import React from "react";

export const Hero= () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-shark-700 to-shark-950">
      <Link href="/sign-in">
        <div>test 1</div>
      </Link>
      <div>test 2</div>
    </section>
  );
};