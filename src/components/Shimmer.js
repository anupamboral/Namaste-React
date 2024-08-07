const Shimmer = () => {
  const ShimmerCard = () => {
    return (
      <div className="shimmer-card border-[1px] border-[solid] border-[black] w-56 h-80 px-6 py-4 [transition:all_0.5s] text-center flex justify-center bg-[rgb(41,_178,_178)]">
        <div className="shimmer-logo w-52  p-2 h-36 border border-cyan-950 bg-cyan-800"></div>
      </div>
    );
  };
  return (
    <div className="shimmer-container flex flex-wrap gap-4 p-4 bg-[rgb(96,_144,_199)]">
      {/* //*simmer restaurant cards(skeleton cards) (displayed while loading data from the api) */}
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default Shimmer;
