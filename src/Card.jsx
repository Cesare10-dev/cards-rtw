const Card = ({ title, description, image, colors }) => {
  return (
    <div className="h-[380px] w-[270px] rounded-lg shadow-xl cursor-pointer hover:-translate-y-8 transition active:rotate-180 duration-500">
      <img src={image} className="h-[310px] w-full object-cover rounded-t-lg" />
      <div
        className="h-[70px] rounded-b-lg p-2"
        style={{ backgroundColor: colors }}
      >
        <h2 className="text-white text-3xl font-bold">{title}</h2>
        <p className="text-sm font-bold">{description}</p>
      </div>
    </div>
  );
};

export default Card;
