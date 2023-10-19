/* eslint-disable react/prop-types */
import Card from "./Card";

export default function Grid({ data }) {
  return (
    <div className="m-2 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data.map((item) => (
        <div key={item.mal_id}>
          <Card
            name={item.title}
            year={item.year}
            image={item.images.jpg.large_image_url}
          />
        </div>
      ))}
    </div>
  );
}
