import React from "react";
import Layout from "../../components/layout/Layout";
import Button from "./components/button/Button";
import { Link } from "react-router-dom";

const Individualpage = () => {
  return (
    <Layout>
      <section className="py-6 text-blue-900 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-screen-lg lg:px-8">
          <div className="flex flex-col lg:flex-row">
            <div className="relative mx-auto mb-10 flex h-96 overflow-hidden rounded-xl bg-blue-600 shadow sm:mt-20 lg:h-auto lg:max-w-md lg:pt-20">
              <img
                className="absolute top-0 h-full w-full object-cover opacity-10"
                src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                alt=""
              />
              <div className="relative mt-auto w-full">
                <div className="flex flex-col p-6 lg:px-7 lg:py-8">
                  <div className="">
                    <blockquote className="">
                      <p className="text-3xl font-bold text-white sm:text-5xl">
                        "I cannot overstate how much this has helped our
                        startup"
                      </p>
                    </blockquote>
                  </div>

                  <div className="mt-10 flex items-center">
                    <img
                      className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                      src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
                      alt=""
                    />
                    <div className="ml-4 text-white">
                      <p className="text-base font-bold">Jacob Jones</p>
                      <p className="text-blue-90 mt-0.5 text-sm">
                        Youtube Personality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-y-14 lg:pl-20">
              <div className="flex flex-col bg-white">
                <div className="">
                  <blockquote className="">
                    <p className="text-lg leading-relaxed">
                      Title
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="flex flex-col bg-white">
                <div className="">
                  <blockquote className="">
                    <p className="text-lg leading-relaxed">
                      Subtitle..
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="flex flex-col bg-white">
                <div className="">
                  <blockquote className="">
                    <p className="text-lg leading-relaxed">
                      Blog descripion here
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>  

          <Link to="/blog/edit">
           <Button type="Edit" />
           </Link>
          <Button type="Delete"/>
        </div>

      </section>
    </Layout>
  );
};

export default Individualpage;
