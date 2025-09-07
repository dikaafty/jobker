import { cn, runObserver, capitalize } from "../utils";

test("combines class names from arrays/strings and applies Tailwind merge rules", () => {
  expect(cn(["text-sm font-jost font-bold", "text-foreground"]))
  .toBe("text-sm font-jost font-bold text-foreground");
});

test("capitalize string", () => {
  expect(capitalize("my name is antwon")).toBe("My name is antwon");
});