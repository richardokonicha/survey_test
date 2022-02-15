/// <reference types="react-scripts" />

interface DataProps {
    count: number
    count_nolimit: number
    items: ItemProps[]
    total: number
}

interface ItemProps {
    id: string
    email: string
    comment: string
    rating: string
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
    Version: string
}


// create a new type from MouseEvent html button element that has a target of type you pass
type ClickRatingEvent<T extends Record> = MouseEvent<HTMLButtonElement, MouseEvent> & {
    target: T;
    // probably you might want to add the currentTarget as well
    // currentTarget: T;
}

interface Target {
    value: string
}

interface SearchProps {
    setSearchValue: React.Dispatch<React.SetStateAction<string>>,
    setRatingFilter: React.Dispatch<React.SetStateAction<string[]>>,
    ratingFilter: string[]
}
