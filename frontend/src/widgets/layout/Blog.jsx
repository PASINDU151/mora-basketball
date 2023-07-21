import React from "react";

const Blog = () => {
  return (
    <>
      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Blogs
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="3x3 Basketball Champs Mora BB"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="img/favicon.jpeg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="We install New Ring"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="img/favicon.jpeg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="5x5 Summer season practices start"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="img/favicon.jpeg
              "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="bg-primary mb-5 inline-block rounded px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-body-color text-base">{CardDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};
