const Shimmer = () => {
  const ShimmerCard = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-logo"></div>
      </div>
    );
  };
  return (
    <div className="shimmer-container">
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
