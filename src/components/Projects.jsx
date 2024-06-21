export default function Projects() {
  return (
    <div className=" my-5 mx-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-7 desktop:grid-cols-4 fourK:grid-cols-5">
      <div>
        <div className="rounded-md border-2 overflow-hidden h-40">
          <a href="https://github.com/ksskol/NC_News_FE" target="_blank">
            <img
              className="object-cover h-full w-full"
              src="../../adding/ncNews.png"
              alt="project picture"
            />
          </a>
        </div>
        <h1 className="mt-5 text-md font-medium">Nc News</h1>
        <h2>some more info</h2>
      </div>

      <div>
        <div className="rounded-md border-2 overflow-hidden h-40">
          <a
            href="https://github.com/Always-Serving-Code/Reel-Insight"
            target="_blank"
          >
            <img
              className="object-cover w-full h-96"
              src="../../adding/reelInsight.png"
              alt="project picture"
            />
          </a>
        </div>
        <h1 className="mt-5 text-md font-medium">Reel Insight</h1>
        <h2>some more info</h2>
      </div>
    </div>
  );
}
