const Loadingpage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4" />
      <p className="text-gray-700 text-lg font-medium animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}

export default Loadingpage