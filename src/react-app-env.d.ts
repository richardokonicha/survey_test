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


// create a new type HTMLElementEvent that has a target of type you pass
// type T must be a HTMLElement (e.g. HTMLTextAreaElement extends HTMLElement)
type HTMLElementEvent<T extends MouseEvent> = Event & {
    target: T;
    // probably you might want to add the currentTarget as well
    // currentTarget: T;
}
