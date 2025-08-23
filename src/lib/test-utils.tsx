import "@testing-library/jest-dom";
import { MemoryRouter, type MemoryRouterProps } from "react-router-dom";
import { render, type RenderOptions, type RenderResult } from "@testing-library/react";
import { type ReactElement } from "react";
import { Provider } from "react-redux";
import { configureStore, type Store, type AnyAction } from "@reduxjs/toolkit";

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

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";