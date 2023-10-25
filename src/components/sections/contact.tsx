'use client'
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const Contact = () => {

  console.log(`https://${process.env}`)

  return (
    <section className="section flex items-center justify-center" id="contact">
      <div className="container flex flex-col items-center space-y-6">
        <h3 className="text-center text-5xl font-bold mb-6">Contact Me</h3>
        <p className="md:max-w-[50rem] lg:max-w-[50rem] text-center text-xl">
          I am waiting for new challenges, my mail is always open for any
          questions. Just ask anything and I will do my best to reach you with
          answers!
        </p>
        <div>
          <Link href="mailto: mykhailo.toporkov@gmail.com">
            <Button className="font-bold text-lg px-8">
              Send me a message!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
