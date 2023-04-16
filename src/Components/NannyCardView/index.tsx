/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */

interface INannyCard {
  name: String;
  experience: String;
  photo: any;
  age: String;
  agent: String;
  image: string;
  firstdistrict: String;
  secondDistrict: String;
}

function NannyCardView({
  name,
  agent,
  photo,
  experience,
  firstdistrict,
  secondDistrict,
  age,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  image,
}: INannyCard) {
  return (
    <div className="m-8">
      <div className="max-w-xs bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="ps">
          <img
            className="w-full h-72 p-8 rounded-t-lg"
            src={photo}
            alt="nanny image"
          />
        </a>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h6> {agent} </h6>
          <p>{experience} </p>
          <p>{age} Years </p>
          <p>
            {firstdistrict} , {secondDistrict}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NannyCardView;
