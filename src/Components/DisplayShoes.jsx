const DisplayShoes = ({shoesData}) => {
  return (
    <section className="w-82/100 h-auto absolute right-0 top-[70px] flex flex-wrap z-0">
        {
            shoesData.map(({title,img,prize})=>{
                return( <div className="cursor-pointer w-[280px] h-[280px] m-5 ">
                    <img className="w-100/100 h-85/100 rounded-[7px] filter brightness-90 contrast-110 saturate-125 drop-shadow-lg" src={img} alt="" />
                    <p className="text-[20px] ml-[5px] font-bold">{title}</p>
                    <p className="text-[20px] ml-[5px] font-bold">${prize}</p>
                </div> )
            })
        }
    </section>
  )
}

export default DisplayShoes
