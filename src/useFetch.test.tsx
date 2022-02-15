// Test fetching data from an API 
import { renderHook } from "@testing-library/react-hooks";
import { setupServer } from "msw/node";
import { rest } from "msw";
import useFetch from "./components/useFetch";


const dummy = {
    "items": [
        {
            "comment": "Hello World I am just a dummy comment",
            "computed_browser": {
                "Browser": "Chrome",
                "Version": "32.0",
                "Platform": "Win7",
                "FullBrowser": "Chrome"
            },
            "rating": 4,
        }
    ],
}

const server = setupServer(rest.get("https://cache.usabilla.com/example/apidemo.json", (req, res, ctx) => {
    return res(ctx.json(dummy))
}))

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe(
    "useFetch is getting healthy data", () => {
        it("Run useFetch", async () => {
            const { result, waitForNextUpdate } = renderHook(() => useFetch());
            await waitForNextUpdate()
            let expected = dummy.items
            expect(result.current.data).toMatchObject(expected)
            expect(result.current.ratingFilter).toStrictEqual(["1", "2", "3", "4", "5"])
        });
    }
)
