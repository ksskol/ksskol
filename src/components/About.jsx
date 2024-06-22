import data from '../../data.json';

export default function About() {
  const { name, title, about } = data;

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 laptop:grid-cols-2">
        <div className="col-span-1">
          {about.map(item => (
            <p key={item.id} className="my-4">
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
