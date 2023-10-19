// eslint-disable-next-line react/prop-types
export default function Card({ name, year, image }) {
  return (
    <div className="m-0 h-full rounded-lg bg-gray-800 text-white">
      <div>
        <img
          className="w-full rounded-t-lg"
          src={image}
          alt={`${name} poster`}
        />
      </div>
      <div className="m-1 flex justify-between">
        <h3>{name}</h3>
        <div>
          <h3>{year}</h3>
        </div>
      </div>
    </div>
  );
}
