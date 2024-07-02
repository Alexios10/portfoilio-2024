"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
// form validation
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import schema from "@/components/schema";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    description: "(+47) 941 00 267",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sattar_saud@hotmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Oslo, Norway",
  },
];

const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const sendEmail = (data, e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8tiaqax",
        "template_pzb5v45",
        form.current,
        "eps4pw7YWOlJdYiWX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-8 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit(sendEmail)}
              ref={form}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I'm excited to connect and discuss potential opportunities!
                Whether you have a project in mind or just want to chat about
                technology and design, feel free to reach out. I am actively
                seeking job opportunities in the software development filed, and
                I'm eager to bring my skills to new challenges.
              </p>
              {/* input container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  name="name"
                  {...register("name", {
                    required: "Required",
                  })}
                  type="firstname"
                  placeholder="Firstname *"
                />
                <Input type="lastname" placeholder="Lastname" />
                <Input
                  {...register("email", {
                    required: "Required",
                  })}
                  type="email"
                  placeholder="Email address *"
                />

                <Input type="phone" placeholder="Phone number" />
              </div>
              {/* subject */}
              <Input type="subject" placeholder="Subject" className="w-full" />
              {/* textarea */}
              <Textarea
                {...register("message", {
                  required: "Required",
                })}
                className="h-[200px]"
                placeholder="Type your message here *"
                type="message"
              />

              {/* btn */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#24242c]
                    text-accent rounded-md flex items-center justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
