import ShoesDataFile from "./shoesData";

const Sidebar = ({ shoesData, setShoesData }) => {

  // ---- ---- ---- CategoryFilters
  const handleAllCategory = () => {
    setShoesData(ShoesDataFile);
  };
  const handleRunCategory = () => {
    const filterRunCategory = ShoesDataFile.filter(
      (elem) => elem.category == "running"
    );
    setShoesData(filterRunCategory);
  };
  const handleFootballCategory = () => {
    const filterFootballCategory = ShoesDataFile.filter(
      (elem) => elem.category == "football"
    );
    setShoesData(filterFootballCategory);
  };

  const handleChapalsCategory = () => {
    const filterChapalsCategory = ShoesDataFile.filter(
      (elem) => elem.category == "chapal"
    );
    setShoesData(filterChapalsCategory);
  };

  // ---- ---- ---- PricingFilters
  const handleAllPrice = () => {
    setShoesData(ShoesDataFile);
  };
  const handleZeroToFifty = () => {
    const filterZeroToFifty = ShoesDataFile.filter(
      (elem) => elem.prize > 0 && elem.prize < 51
    );
    setShoesData(filterZeroToFifty);
  };
  const handleFiftyToHundred = () => {
    const filterFiftyToHundred = ShoesDataFile.filter(
      (elem) => elem.prize > 50 && elem.prize < 101
    );
    setShoesData(filterFiftyToHundred);
  };
  const handleHundredToTwoHundred = () => {
    const filterHundredToTwoHundred = ShoesDataFile.filter(
      (elem) => elem.prize > 100 && elem.prize < 201
    );
    setShoesData(filterHundredToTwoHundred);
  };
  const handleOverTwoHundred = () => {
    const filterOverTwoHundred = ShoesDataFile.filter(
      (elem) => elem.prize > 200
    );
    setShoesData(filterOverTwoHundred);
  };
  
  // ---- ---- ---- ColorFilters

  
  const handleAllColors = () => {
    setShoesData(ShoesDataFile);
  };

  const handleBlackColor = () => {
    const filterBlackColor = ShoesDataFile.filter(
      (elem) => elem.color == 'black'
    );
    setShoesData(filterBlackColor);
  };

  const handleWhiteColor = () => {
    const filterWhiteColor = ShoesDataFile.filter(
      (elem) => elem.color == 'white'
    );
    setShoesData(filterWhiteColor);
  };

  const handleRedColor = () => {
    const filterRedColor = ShoesDataFile.filter(
      (elem) => elem.color == 'red'
    );
    setShoesData(filterRedColor);
  };

  

  return (
    <aside className="h-screen w-[150px]  border-r-1 z-10 sm:w-[170px]">
      {/* category */}
      <div className="">
        <h1 className="">Category</h1>
        <ul className="">
          <li className="">
            <input
              name="categ"
              className=""
              type="radio"
              id="all-categ"
              value="all"
              onClick={handleAllCategory}
            />
            <label htmlFor="all-categ">All</label>
          </li>
          <li>
            <input
              name="categ"
              type="radio"
              id="run"
              value="run"
              onClick={handleRunCategory}
            />
            <label htmlFor="run">Running</label>
          </li>
          <li>
            <input
              name="categ"
              type="radio"
              id="foot"
              value="foot"
              onClick={handleFootballCategory}
            />
            <label htmlFor="foot">Football</label>
          </li>
          <li>
            <input
              name="categ"
              type="radio"
              id="chapal"
              value="foot"
              onClick={handleChapalsCategory}
            />
            <label htmlFor="chapal">Chapal</label>
          </li>
        </ul>
      </div>
      {/* prize */}
      <div>
        <h1>Price</h1>
        <ul className="">
          <li>
            <input
              name="price"
              type="radio"
              id="all"
              onClick={handleAllPrice}
            />
            <label htmlFor="all">All</label>
          </li>
          <li>
            <input
              name="price"
              type="radio"
              id="pr-1"
              onClick={handleZeroToFifty}
            />
            <label htmlFor="pr-1">0-50</label>
          </li>
          <li>
            <input
              name="price"
              type="radio"
              id="pr-2"
              onClick={handleFiftyToHundred}
            />
            <label htmlFor="pr-2">50-100</label>
          </li>
          <li>
            <input
              name="price"
              type="radio"
              id="pr-3"
              onClick={handleHundredToTwoHundred}
            />
            <label htmlFor="pr-3">100-200</label>
          </li>
          <li>
            <input
              name="price"
              id="pr-4"
              type="radio"
              onClick={handleOverTwoHundred}
            />
            <label htmlFor="pr-4">Over 200</label>
          </li>
        </ul>
      </div>
      {/* color */}
      <div>
        <h1 className="">Color</h1>
        <ul className="">
          <li>
            <input name="color" type="radio" id="all-col" onClick={handleAllColors}/>
            <label htmlFor="all-col">All</label>
          </li>
          <li>
            <input name="color" type="radio" id="black" onClick={handleBlackColor}/>
            <label htmlFor="black">Black</label>
          </li>
          <li>
            <input name="color" type="radio" id="white" onClick={handleWhiteColor}/>
            <label htmlFor="white">White</label>
          </li>
          <li>
            <input name="color" type="radio" id="red" onClick={handleRedColor}/>
            <label htmlFor="red">Red</label>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
