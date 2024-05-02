// ASSETS IMPORTS

const About = () => {
  return (
    <section className="bg-brand flex flex-col md:flex-row justify-between items-center md:p-20 p-5">
      <div className="md:w-1/2">
        <h3 className="text-3xl md:text-5xl font-bold font-mon text-yellow my-5">
          About: A Cosmic Dance
        </h3>
        <p className="text-xl font-black text-white underline decoration-brown my-10">Imagine a universe shaped by two opposing forces:</p>
        <ul className=" text-base md:text-2xl list-disc text-white child:my-5">
          <li>
            The <span className="text-yellow font-bold">Goddess of Everything Else</span>, a vibrant rebel championing the
            unexpected and the unpredictable.
          </li>
          <li>
            The <span className="text-yellow font-bold">Goddess of Cancer</span>, a composed architect favoring structure and
            efficiency.
          </li>
        </ul>
        <p className=" text-white text-xl font-thin my-5">
          This website explores their cosmic tug-of-war, diving into the video
          that sparked it all. Uncover how these contrasting forces shaped life,
          from single-celled beginnings to the vast cosmos! Dive in, explore,
          and join the discussion.
        </p>
        <p className="text-brown font-bold my-10">Let's celebrate the unexpected beauty born from chaos!</p>
      </div>
      {/* <div> */}
        <figure className="md:w-1/3 w-full drop-shadow-logo">
          <iframe
            src="https://www.youtube.com/embed/Bbwp4PbWYzw?autoplay=1"
            width={550}
            height={300}
            className="w-full"
          ></iframe>
        </figure>
      {/* </div> */}
      {/* SBININBB250 */}
    </section>
  );
};

export default About;
