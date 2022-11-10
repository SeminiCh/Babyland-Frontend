/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */

interface INannyCard {
  name: String;
  experience: String;
  age: String;
  image: string;
}

function NannyCard({ name, experience, age, image }: INannyCard) {
  return (
    <div className="m-8">
      <div className="max-w-xs bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="ps">
          <img
            className="w-full h-72 p-8 rounded-t-lg"
            src={image}
            alt="nanny image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="ps">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p>{experience} </p>
            <p>{age} </p>
          </a>

          <div className="flex justify-between items-center">
            <a
              href="DetailedNanny"
              className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NannyCard;
