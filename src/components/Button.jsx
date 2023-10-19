// eslint-disable-next-line react/prop-types
export default function Button({ buttonLable, buttonFunc }) {
  return (
    <div>
      <button
        className="bg-gray-800 rounded text-white w-12 hover:bg-gray-900"
        onClick={buttonFunc}
      >
        <h1 className="ml-1 mr-1 flex justify-center">{buttonLable}</h1>
      </button>
    </div>
  );
}
