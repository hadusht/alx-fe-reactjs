export default function UserProfile() {
  return (
    <div
      className="flex flex-col items-center mx-auto 
                    p-4 sm:p-4 md:p-8 
                    max-w-xs sm:max-w-xs md:max-w-sm 
                    bg-white shadow-lg rounded-2xl"
    >
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="User Profile"
        className="rounded-full object-cover 
                   w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36"
      />

      {/* User Info */}
      <h2
        className="mt-4 font-bold 
                     text-lg sm:text-lg md:text-xl text-gray-800"
      >
        John Doe
      </h2>
      <p
        className="mt-2 text-gray-600 
                    text-sm sm:text-sm md:text-base text-center"
      >
        Frontend Developer | Passionate about building responsive UIs with
        Tailwind CSS
      </p>
    </div>
  );
}
