const ProjectsDisplay = () => {
  return (
    <div className="flex flex-col">
      <Project />
    </div>
  );
};

export default ProjectsDisplay;

const Project = () => {
  return (
    <section>
      <div className="mx-2 my-4 flex flex-col-reverse items-center md:mx-8 md:grid md:max-h-[70vh] md:grid-cols-3">
        <ProjectLeftside />
        <ProjectDisplay />
        <ProjectRightside />
      </div>
    </section>
  );
};

const ProjectDisplay = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <img
          src="/portfolio/Taskie.png"
          alt=""
          className=" h-[50vh] rounded-2xl object-cover md:h-[60vh]"
        />
      </div>
    </section>
  );
};

const ProjectLeftside = () => {
  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="poppins-medium-italic border-gmzBackgroundDark mt-2 hidden max-h-[40vh] overflow-y-auto rounded-2xl border-2 px-4 py-2 xs:flex md:m-4 md:max-h-[48vh] md:p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          incidunt consequuntur eveniet perferendis tempora nihil cupiditate
          similique sint itaque iste porro, non molestias ea quo, impedit
          voluptas et neque! Quasi dolore, aperiam perspiciatis voluptatum
          provident, vitae minus rerum ratione minima recusandae sunt, expedita
          inventore fuga neque consequatur ut veritatis totam repellendus? Ad
          fuga distinctio quibusdam. Repellendus porro reiciendis, optio id,
          debitis doloribus earum eligendi, doloremque dolores amet cupiditate
          est nam! Harum culpa magni iure dolore maiores, repellendus, assumenda
          quos deleniti at tenetur magnam libero ratione minima! Natus explicabo
          mollitia corporis ipsa. Maxime eos, blanditiis ea totam ipsam quaerat
          enim tempora cum iste quisquam aspernatur ut facilis atque nisi
          nostrum ab voluptatem at dolores quia pariatur molestiae. Totam
          laborum exercitationem, tempore voluptas, harum facere dolor unde
          placeat maiores porro illum. Blanditiis deserunt delectus nisi, libero
          vel asperiores iste tenetur enim adipisci. Libero ducimus, iure facere
          qui laudantium veniam doloribus iusto, nisi eligendi dolore expedita
          nam molestiae esse nemo, pariatur voluptate.
        </div>
        <div className="poppins-semibold flex w-full flex-row-reverse items-center justify-center gap-4 py-4 md:flex-row md:justify-around md:text-3xl">
          <span> See Prev. </span>
          <span className="text-3xl md:text-6xl">←</span>
        </div>
      </div>
    </section>
  );
};

const ProjectRightside = () => {
  return (
    <section>
      <div className="poppins-semibold flex w-full flex-row items-center justify-center gap-4 py-4 md:flex-col md:justify-around md:text-center md:text-6xl">
        <span>See What Else We've Got!</span>
        <span>→</span>
      </div>
    </section>
  );
};
