/// <reference types="react-scripts" />

interface DataProps {
    count: number
    count_nolimit: number
    items: any[]
    total: number
}

interface ItemProps {
    id: string
    email: string
    comment: string
    rating: number
    browser: BrowserProps
    computed_browser: ComputedBrowserProps
}


interface BrowserProps {
    appCodeName: string
    appName: string
    platform: string
    vendor: string
    product: string
}

interface ComputedBrowserProps {
    Browser: string
    Platform: string
    Vendor: string
}



// {
//     data.items.map((item: ItemProps, index: number) => (
//         <tr key={index} className="bg-white border-b">
//             <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">
//                 {item.rating}
//             </td>
//             <td className="py-4 px-6 text-sm  whitespace-nowrap ">
//                 {item.comment}
//             </td>
//             <td className="py-4 px-6 text-sm  whitespace-nowrap ">
//                 <p>
//                     {item.browser["appCodeName"]}
//                 </p>
//             </td>
//             <td className="py-4 px-6 text-sm  whitespace-nowrap ">
//                 {/* {item.device} */}mjk
//             </td>
//             <td className="py-4 px-6 text-sm  whitespace-nowrap ">
//                 {/* {item.platform} */}jkjk
//                 <h1>jkjk</h1>

//             </td>
//         </tr>

//     ))
// }