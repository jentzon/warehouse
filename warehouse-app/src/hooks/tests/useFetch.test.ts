import { renderHook, act } from "@testing-library/react-hooks";
import { productListUrl } from "../../domain/paths";
import { Product } from "../../models/Product";
import useFetch from "../useFetch";

// Mocked fetch response
const fetchResponse = ({
  ok: true,
  json: async () =>
    [{ name: "Test Product", contain_articles: [] }] as Product[],
} as unknown) as Response;

describe("useFetch hook", () => {

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue(fetchResponse);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("makes the request", async () => {
    const { waitForNextUpdate } = renderHook(() =>
      useFetch<Product>(productListUrl)
    );
    await waitForNextUpdate();

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(productListUrl);

  });

  it("returns correct response", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<Product>(productListUrl)
    );
    await waitForNextUpdate();

    const list = result.current.response;
    
    expect(list).toBeDefined();
    expect(list).toHaveLength(1);
    expect(list[0]?.name).toEqual("Test Product");
  });

  it("makes new request when asked to refetch", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<Product>(productListUrl)
    );
    await waitForNextUpdate();

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(productListUrl);

    const reFetch = result.current.reFetch;

    act(() => reFetch());
    await waitForNextUpdate();

    expect(window.fetch).toHaveBeenCalledTimes(2);
  });
});
