import ShoesDataFile from './shoesData'

const Navbar = ({shoesData,setShoesData}) => {
  const handleSearchChange = (e) => {
  const filterSearch = shoesData.filter((elem) => {
      return elem.title.includes(e.target.value)
    })
    if(e.target.value){
      setShoesData(filterSearch)
    }
    else{
      setShoesData(ShoesDataFile)
    }
  }
  return (
    <nav className='bg-white w-82/100 h-[70px] right-0 top-0 fixed flex items-center justify-between px-8 border-b-1 z-10'>
      <input type="text" className="bg-gray-100 pl-3 py-1 simple-cursor" placeholder="search items" onChange={handleSearchChange}/>
      <div className="flex gap-5 cursor-pointer mr-20">
        {/* <i>icon-1</i>
        <i>icon-2</i>
        <i>icon-3</i> */}
      </div>
    </nav>
  )
}

export default Navbar
