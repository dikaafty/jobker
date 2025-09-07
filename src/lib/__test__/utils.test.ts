import { cn } from "../utils";

test("combines class names from arrays/strings and applies Tailwind merge rules", () => {
  expect(cn(["text-sm font-jost font-bold", "text-foreground"]))
  .toBe("text-sm font-jost font-bold text-foreground");
});