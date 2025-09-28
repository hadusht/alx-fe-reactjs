function UserProfile() {
  return (
    <div
      className="bg-gray-100 
                 p-4 sm:p-4 md:p-8 
                 max-w-xs sm:max-w-xs md:max-w-sm 
                 mx-auto my-20 
                 rounded-lg shadow-lg text-center 
                 transition-shadow duration-300 ease-in-out 
                 hover:shadow-xl"
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="mx-auto rounded-full object-cover 
                   w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 
                   transition-transform duration-300 ease-in-out 
                   hover:scale-110"
      />
      <h1
        className="my-4 font-semibold text-blue-800 
                   text-lg sm:text-lg md:text-xl 
                   transition-colors duration-300 ease-in-out 
                   hover:text-blue-500"
      >
        John Doe
      </h1>
      <p
        className="text-gray-600 
                   text-sm sm:text-sm md:text-base"
      >
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
