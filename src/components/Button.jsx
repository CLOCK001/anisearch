// eslint-disable-next-line react/prop-types
export default function Button({ buttonLable, buttonFunc }) {
  return (
    <div>
      <button
        className="bg-sky-700 rounded text-white w-12 hover:bg-sky-800"
        onClick={buttonFunc}
      >
        <h1 className="ml-1 mr-1 flex justify-center">{buttonLable}</h1>
      </button>
    </div>
  );
}
