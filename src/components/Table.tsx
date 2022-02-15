// The Table component html and tailwind 

const Table = ({ data }: { data: ItemProps[] }) => {
    return (
        <div className="antialiased shadow-table sm:rounded-md min-w-full mt-6 overflow-x-scroll sm:max-h-[26rem] max-h-[36rem] cursor-pointer font-halyard font-light hover:shadow-lg" >
            <table className=" min-w-full rounded-md collapse overflow-hidden sm:table table" >
                <thead className="bg-primary sticky top-0 ">
                    <tr className="">
                        <th scope="col" className=" py-4 px-8 text-xs font-bold tracking-wider text-left text-white font-halyard ">
                            Rating
                        </th>
                        <th scope="col" className="py-6 px-8 text-xs font-bold tracking-wider text-left text-white ">
                            Comment
                        </th>
                        <th scope="col" className="sm:table-cell hidden py-4 px-8 text-xs font-bold tracking-wider text-left text-white ">
                            Browser
                        </th>
                        <th scope="col" className="sm:table-cell hidden py-4 px-8 text-xs font-bold tracking-wider text-left text-white ">
                            Device
                        </th>
                        <th scope="col" className="sm:table-cell hidden py-4 px-8 text-xs sm:px-4 font-bold tracking-wider text-left text-white  ">
                            Plaform
                        </th>
                    </tr>
                </thead >

                <tbody className="overflow-scroll max-h-screen">
                    {
                        data.map((item: ItemProps, index: number) => (
                            <tr className="bg-white border-b hover:bg-slate-50 " key={item.id}>
                                <td className="py-3 px-8 text-sm font-medium">
                                    <div className="bg-accent  text-center text-white rounded-full flex justify-center items-center w-6 h-6">
                                        {item.rating}
                                    </div>
                                </td>
                                <td className="py-3 px-8  whitespace-normal sm:max-w-lg text-primary ">
                                    <p className="antialiased text-xs font-thin capitalize hover:overflow-scroll hover:whitespace-normal line-clamp-2">
                                        {item.comment}
                                    </p>
                                </td>
                                <td className="sm:table-cell hidden antialiased text-xs py-3 px-8  whitespace-nowrap  text-center text-primary">
                                    <h6> {item.computed_browser.Browser}</h6>
                                    <h6> {item.computed_browser.Version}</h6>
                                </td>
                                <td className="sm:table-cell hidden antialiased text-xs py-3 px-8  whitespace-nowrap  text-center text-primary">
                                    {item.browser.platform}
                                </td>
                                <td className="sm:table-cell hidden antialiased text-xs py-3 px-8 whitespace-nowrap  text-center text-primary">
                                    {item.computed_browser.Platform}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table