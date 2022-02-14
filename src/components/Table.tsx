// The Table component html and tailwind 


const Table = ({ data }: { data: DataProps }) => {

    console.log(data.items)

    return (

        <div className="overflow-hidden shadow-md sm:rounded-md min-w-full mt-4">
            <table className=" min-w-full rounded-md">
                <thead className="bg-primary ">
                    <tr>
                        <th scope="col" className="py-4 px-6 text-xs font-medium tracking-wider text-left text-white ">
                            Rating
                        </th>
                        <th scope="col" className="py-4 px-6 text-xs font-medium tracking-wider text-left text-white ">
                            Comment
                        </th>
                        <th scope="col" className="py-4 px-6 text-xs font-medium tracking-wider text-left text-white ">
                            Browser
                        </th>
                        <th scope="col" className="py-4 px-6 text-xs font-medium tracking-wider text-left text-white ">
                            Device
                        </th>
                        <th scope="col" className="py-4 px-6 text-xs font-medium tracking-wider text-left text-white ">
                            Plaform
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.items.map((item: ItemProps, index: number) => (
                            <tr className="bg-white border-b">
                                <td className="py-4 px-6 text-sm font-medium ">
                                    <div className="bg-accent text-white rounded-full flex justify-center items-center w-6 h-6">
                                        {item.rating}
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-sm  whitespace-normal max-w-xl">
                                    <p break-words >
                                        {item.comment}
                                    </p>
                                </td>
                                <td className="py-4 px-6 text-sm  whitespace-nowrap ">
                                    {item.computed_browser.Browser}
                                </td>
                                <td className="py-4 px-6 text-sm  whitespace-nowrap ">
                                    {item.browser.platform}
                                </td>
                                <td className="py-4 px-6 text-sm  whitespace-nowrap ">
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