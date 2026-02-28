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
    { label: "Total Reviews", value: totalReviews, icon: "📊", color: "blue" },
    {
      label: "Average Score",
      value: `${avgScore}/100`,
      icon: "⭐",
      color: "yellow",
    },
    { label: "Bugs Found", value: totalBugs, icon: "🐛", color: "red" },
    {
      label: "Security Issues",
      value: totalSecurity,
      icon: "🔒",
      color: "purple",
    },
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    yellow: "from-yellow-500 to-yellow-600",
    red: "from-red-500 to-red-600",
    purple: "from-purple-500 to-purple-600",
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl">{stat.icon}</span>
            <div
              className={`w-12 h-12 bg-gradient-to-br ${colorClasses[stat.color]} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
              {stat.value}
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
