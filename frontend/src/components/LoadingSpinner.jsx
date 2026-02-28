const LoadingSpinner = ({ size = "md", text = "Loading..." }) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`animate-spin rounded-full border-b-4 border-blue-600 ${sizeClasses[size]}`}></div>
      {text && <p className="mt-4 text-gray-600 font-medium">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
