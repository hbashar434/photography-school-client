import React from "react";

const PhotoStories = () => {
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl font-my-serif">
            CREATE AND SHARE <br /> YOUR{" "}
              <span className="text-blue-500">PHOTO STORIES</span>.
            </h1>
            <p className="mt-6 text-gray-600 dark:text-gray-400 font-my-serif">
              ClickShot is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full lg:max-w-3xl rounded-lg"
            src="https://i.ibb.co/4WVt8x1/photo-Stories.jpg"
            alt="Story-teller"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoStories;
