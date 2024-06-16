export default function Projects() {
  return (
    <div className="mt-5">
      <div className="mb-10">
        <div className="rounded-md border-2 overflow-hidden h-40">
          <a href="https://github.com/ksskol/NC_News_FE" target="_blank">
            <img
              className="scale-125 w-full max-w-lg"
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
