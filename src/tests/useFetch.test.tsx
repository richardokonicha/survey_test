// Test useFetch custom react data management hook for fetch data and filtering
import { renderHook } from '@testing-library/react-hooks';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { act } from 'react-dom/test-utils';
import useFetch from '../components/useFetch';

const dummy = {
  items: [
    {
      comment: 'Hello World I am just a dummy comment',
      computed_browser: {
        Browser: 'Chrome',
        Version: '32.0',
        Platform: 'Win7',
        FullBrowser: 'Chrome',
      },
      rating: 4,
    },
  ],
};

const server = setupServer(
  rest.get('https://cache.usabilla.com/example/apidemo.json', (req, res, ctx) => res(ctx.json(dummy))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('useFetch is getting healthy data', () => {
  it('Is Fetched Data valid', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch());
    await waitForNextUpdate();
    const expected = dummy.items;
    expect(result.current.data).toMatchObject(expected);
    expect(result.current.ratingFilter).toStrictEqual(['1', '2', '3', '4', '5']);
  });

  it('Is Search Filter function', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch());
    await waitForNextUpdate();
    if (result.current.data === null) {
      return;
    }
    act(() => {
      result.current.setSearchValue('Hello World');
    });
    expect(result.current.data[0].comment).toContain('dummy comment');
  });

  it('Is Rating Filter function', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch());
    await waitForNextUpdate();
    if (result.current.data === null) {
      return;
    }
    act(() => {
      result.current.setRatingFilter(['4']);
    });
    expect(result.current.data[0].comment).toContain('dummy comment');
    act(() => {
      result.current.setRatingFilter(['1', '5']);
    });
    expect(result.current.data).toStrictEqual([]);
  });
});
