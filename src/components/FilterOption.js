import React from 'react';
import { useState ,useEffect} from 'react';
import searchs from '../assets/Search-alt.svg'
import axios from 'axios';



const items=["CDC","NHS","WebSite2","WebMD","WebSite-3","WebSite4"]

const buttons=document.querySelectorAll(".container button");


function FilterOption({setSources}) {

    const [selectedFilters, setSelectedFilters] = useState([]);
    // const [filteredItems, setFilteredItems] = useState(items);

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
          let filters = selectedFilters.filter((el) => el !== selectedCategory);
          setSelectedFilters(filters);
        } else {
          setSelectedFilters([...selectedFilters, selectedCategory]);
        }
        axios.post('/upload_sources',{
          source: [...selectedFilters]
        })
          .then((res)=>{
          console.log(res);
        })
          .catch((err)=>{
          console.log(err);
        })
      };

      useEffect(() => {
        // filterItems();
        setSources(selectedFilters);
      }, [selectedFilters]);

    //   const filterItems = () => {
    //     if (selectedFilters.length > 0) {
    //       let tempItems = selectedFilters.map((selectedCategory) => {
    //         let temp = items.filter((item) => item.category === selectedCategory);
    //         return temp;
    //       });
    //       setFilteredItems(tempItems.flat());
    //     } else {
    //       setFilteredItems([...items]);
    //     }
    //   };
    

  return (
    <div className='bg-sky-200  flex justify-center items-center w-full h-full flex-col px-6 gap-8'>
        <div className="text-black flex items-center flex-col bg-search gap-2 mx-2">
            <div className=' flex border-sky-200 border-b-black border-2'>
                <input type='search' className='font-bold bg-sky-200 placeholder-black text-xl border-transparent focus:outline-0 ' placeholder='Tailor your search '/>
                <img src={searchs} />
            </div>
            <p className='text-sm font-serif '>Choose from the available websites/databases according to your preferences and get medical answers as desired! </p>
        </div>
        
        <div className='grid grid-cols-3 gap-x-2 gap-y-3 container px-10'>
            {items.map((opt,idx)=>(
                // <button className='bg-white text-sm px-3 rounded-full font-semibold  ' key={opt}>{opt}</button>
                <button 
                  onClick={() => handleFilterButtonClick(opt)}
                  className={`px-2  text-sm text-center rounded-full   font-semibold ${
                    selectedFilters?.includes(opt) ? "bg-[#7F79F1] text-white" : "bg-white"
                  }`  }
                  key={`filters-${idx}`}>
                        {opt}
                </button>
            ))}
        </div>
    </div>
  )
}

export default FilterOption

