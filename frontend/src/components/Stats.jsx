const Stats = ({ reviews }) => {
  const totalReviews = reviews.length;
  const avgScore =
    reviews.length > 0
      ? Math.round(
          reviews.reduce(
            (sum, r) => sum + (r.aiResponse?.overallScore || 0),
            0,
          ) / reviews.length,
        )
      : 0;

  const totalBugs = reviews.reduce(
    (sum, r) => sum + (r.aiResponse?.bugs?.length || 0),
    0,
  );
  const totalSecurity = reviews.reduce(
    (sum, r) => sum + (r.aiResponse?.securityIssues?.length || 0),
    0,
  );

  const stats = [
    { label: "Total Reviews", value: totalReviews, change: null },
    { label: "Average Score", value: `${avgScore}/100`, change: null },
    { label: "Bugs Found", value: totalBugs, change: null },
    { label: "Security Issues", value: totalSecurity, change: null },
  ];

  const icons = [
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>,
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-sm overflow-hidden rounded-2xl border border-white/10 shadow-xl hover:border-green-500/30 transition-all group">
          <div className="px-5 py-6">
            <div className="flex items-center justify-between mb-3">
              <dt className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                {stat.label}
              </dt>
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                {icons[index]}
              </div>
            </div>
            <dd className="text-3xl font-bold text-white">{stat.value}</dd>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
