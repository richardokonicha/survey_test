// The search and filter components html and tailwind

const Search = () => {

    return (
        <div className='flex'>
            <input type="text"
                className=" mr-8 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
                placeholder="Search here!"
            ></input>
            <div className="flex items-center space-x-3">
                {
                    [1, 2, 3, 4, 5].map((item: number, index: number) => (
                        <div className="bg-accent text-white rounded-full flex justify-center items-center w-8 h-8">
                            {item}
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Search