const Shimmer = () => {
  const ShimmerCard = () => {
    return (
      <div className="shimmer-card border-[1px] border-[solid] border-[black] w-56 h-80 px-6 py-4 [transition:all_0.5s] text-center flex justify-center bg-[url('/src/imgs/background2.png')] text-yellow-50 rounded-2xl">
        <div className="shimmer-logo w-52  p-2 h-36 border border-cyan-950 bg-cyan-800"></div>
      </div>
    );
  };
  return (
    <div className="shimmer-container flex flex-wrap gap-4 p-4 bg-[url('/src/imgs/background2.png')]">
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
