const DisplayShoes = ({ shoesData }) => {
  return (
    <section className="flex flex-wrap z-0 w-[300px] xs:w-[400px] sm:w-[500px] md:w-80/100">
      {shoesData.map(({ title, img, prize }) => {
        return( <div className="cursor-pointer w-[160px] h-[200px] m-5 md:h-[300px] md:w-[280px]">
            <img className="w-100/100 h-85/100 rounded-[7px] filter brightness-90 contrast-110 saturate-125 drop-shadow-lg" src={img} alt="product" />
            <p className="text-[18px] ml-[5px] font-semibold">{title}</p>
            <p className="text-[18px] ml-[5px] font-semibold">${prize}</p>
        </div> )
      })}
    </section>
  );
};

export default DisplayShoes;
