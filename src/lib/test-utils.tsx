import "@testing-library/jest-dom";
import { MemoryRouter, type MemoryRouterProps } from "react-router-dom";
import { render, type RenderOptions, type RenderResult } from "@testing-library/react";
import { type JSX, type ReactElement } from "react";
import { Provider } from "react-redux";
import { configureStore, type Store, type AnyAction } from "@reduxjs/toolkit";
import jobTrackerReducer from "@/features/user/jobTrackerSlice";

interface ExtraOptions {
  preloadedState?: any,
  store?: Store,
  storeType?: "unit" | "integration",
}

export const renderWithRouter = (
  ui: ReactElement,
  renderProps?: MemoryRouterProps,
  renderOptions?: RenderOptions
): RenderResult => {
  return render(
    ui,
    {
      wrapper: ({ children }: React.PropsWithChildren) => (
        <MemoryRouter {...renderProps}>
          {children}
        </MemoryRouter>
      ),
      ...renderOptions,
    }
  );
}

export const renderWithProvider = (
  ui: ReactElement,
  {
    preloadedState = {},
    store,
    storeType = "unit",
    ...renderOptions
  }: ExtraOptions & RenderOptions = {},
): RenderResult & { store: any } => {
  let testStore: Store;

  if(store) {
    testStore = store;
  } else if(storeType === "unit") {
    testStore = {
      getState: () => preloadedState,
      subscribe: () => () => {},
      dispatch: jest.fn<AnyAction, [AnyAction]>()
    } as unknown as Store;
  } else {
    testStore = configureStore({
      reducer: {
        jobTracker: jobTrackerReducer
      },
      preloadedState: preloadedState as {
        jobTracker: ReturnType<typeof jobTrackerReducer>;
      },
    });
  }

  const Wrapper = ({ children }: React.PropsWithChildren): JSX.Element => {
    return (
      <Provider store={testStore}>
        {children}
      </Provider>
    );
  }

  return {
    store: testStore,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  };
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";