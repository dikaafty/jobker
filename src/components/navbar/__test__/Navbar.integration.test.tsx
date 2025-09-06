import { renderWithRouter, screen, userEvent } from "@/lib/test-utils";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "@/pages/Homepage";
import { JobTrackerPage } from "@/pages/JobTrackerPage";
import { AboutPage } from "@/pages/AboutPage";
import Navbar from "../Navbar";

describe("Navbar component", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });
});