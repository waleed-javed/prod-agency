const Footer = () => {
  return (
    <section className="bg-gmzBackgroundDark">
      <div className="flex flex-col justify-between gap-6 p-[3rem_5rem_0rem_2rem] text-white md:flex-row md:gap-16 md:p-[6.813rem_9rem_0rem_9rem]">
        <div className="flex flex-col">
          <div className="w-full flex-col md:w-[70%]">
            <div className="poppins-semibold text-xl md:text-4xl">
              <h1>Ghamiz</h1>
            </div>
            <div className="poppins md:poppins-medium text-[0.875rem] leading-6 opacity-40 md:text-base">
              Ghamiz is an independent web design and development studio focused
              on providing the best web development experience with blazing-fast
              websites.
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-base leading-9 md:text-[1.375rem]">Navigation</h1>
          <ul className="list-none">
            <li>
              <a href="" className="text-white">
                <h3 className="text-base leading-6 opacity-40">Home</h3>
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                <h3 className="text-base leading-6 opacity-40">About</h3>
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                <h3 className="text-base leading-6 opacity-40">Contact Us</h3>
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                <h3 className="text-base leading-6 opacity-40">Projects</h3>
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                <h3 className="text-base leading-6 opacity-40">Case Studies</h3>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-base leading-9 md:text-[1.375rem]">Services</h1>
          <ul className="section-options">
            <li>
              <a href="" className="text-white">
                <h3 className="text-base leading-6 opacity-40">UX UI</h3>
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                <h3 className="text-base leading-6 opacity-40">
                  Creative Design
                </h3>
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                <h3 className="text-base leading-6 opacity-40">
                  Motion Design
                </h3>
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                <h3 className="text-base leading-6 opacity-40">
                  App & Web Development
                </h3>
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                <h3 className="text-base leading-6 opacity-40">
                  Digital Content Marketing
                </h3>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-base leading-9 md:text-[1.375rem]">
            Free Resources
          </h1>
          <ul className="section-options">
            <li>
              <a href="" className="text-white">
                <h3 className="text-base leading-6 opacity-40">Upcoming ...</h3>
              </a>
            </li>
            {/* <!-- <li> <a href="" className="text-white"> <h3 className="text-base leading-6 opacity-40">Carousel Generator</h3></a></li>
            <li> <a href="" className="text-white"> <h3 className="text-base leading-6 opacity-40">Social Post Generator</h3></a></li>
            <li> <a href="" className="text-white"> <h3 className="text-base leading-6 opacity-40">Lead Hunter</h3></a></li>
            <li> <a href="" className="text-white"> <h3 className="text-base leading-6 opacity-40">Thread Generator</h3></a></li> --> */}
          </ul>
        </div>
      </div>
      <Socials />
      {/* <span className="mt-8 w-[70%] justify-center border-b border-dashed border-gray-400 opacity-30"></span> */}
      <CopyRights />
    </section>
  );
};

export default Footer;

const CopyRights = () => {
  return (
    <section>
      {/* <!-- rights --> */}
      <div className="flex flex-col  justify-start gap-7 py-6 pl-8 text-white md:items-center md:justify-center md:gap-14 md:pl-7 md:pt-14">
        <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-[9.25rem]">
          <div className="flex flex-col">
            <span className="text-[0.7rem] leading-3 md:text-base md:leading-6">
              new business
            </span>
            <span className="text-xl leading-8 md:text-[1.738rem] md:leading-10">
              business@ghamiz.co
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[0.7rem] leading-3 md:text-base md:leading-6">
              careers
            </span>
            <span className="text-xl leading-8 md:text-[1.738rem] md:leading-10">
              careers@ghamiz.co
            </span>
          </div>
        </div>
        <div className="text-[0.8rem] leading-4 opacity-30 md:leading-6 md:opacity-50">
          Copyright 2023 © Ghamiz LLC
        </div>
      </div>
    </section>
  );
};

const Socials = () => {
  return (
    <section>
      {/* <!-- Socials --> */}

      <div className="hidden justify-center text-white md:flex md:gap-28 md:pt-[3.5rem]">
        <div className="">
          <a
            href="https://linkedin.com/company/ghamiz"
            className="text-xl leading-9 text-white"
          >
            <h3 className="text-base leading-6 opacity-40">Linkedin</h3>
          </a>
        </div>
        <div className="">
          <a href="https://instagram.com/ghamiz.co/" className="social-items">
            <h3 className="text-base leading-6 opacity-40">Instagram</h3>
          </a>
        </div>
        <div className="">
          <a href="https://behance.net/waleedjavied" className="social-items">
            <h3 className="text-base leading-6 opacity-40">Behance</h3>
          </a>
        </div>
        <div className="">
          <a href="https://dribbble.com/waleedjaved" className="social-items">
            <h3 className="text-base leading-6 opacity-40">Dribbble</h3>
          </a>
        </div>
        {/* <!-- <div className=""> <a href="" className="social-items"> <h3 className="text-base leading-6 opacity-40"></h3></a></div> -->
    <!-- <div className="social-items">Instagram</div>
    <div className="social-items">Behance</div>
    <div className="social-items">Facebook</div>
    <div className="social-items">Dribbble</div> --> */}
      </div>
    </section>
  );
};
