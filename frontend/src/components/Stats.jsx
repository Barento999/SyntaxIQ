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

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white overflow-hidden rounded-lg border border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              {stat.label}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {stat.value}
            </dd>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
