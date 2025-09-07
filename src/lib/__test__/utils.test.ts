import { cn, runObserver, capitalize } from "../utils";

class IntersectionObserverMock {
  callback: IntersectionObserverCallback;
  elements: Set<Element> = new Set();

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    IntersectionObserverMock.instance = this;
  };

  observe = (element: Element) => {
    this.elements.add(element);
  };

  unobserve = (element: Element) => {
    this.elements.delete(element);
  };

  disconnect = () => {
    this.elements.clear();
  };

  triggerIntersect = (isIntersecting: boolean, target: Element) => {
    const entry = [
      {
        isIntersecting,
        target
      } as IntersectionObserverEntry,
    ];
    
    this.callback(entry, this as unknown as IntersectionObserver);
  };

  static instance: IntersectionObserverMock | null = null;
}

(global as any).IntersectionObserver = IntersectionObserverMock;

test("combines class names from arrays/strings and applies Tailwind merge rules", () => {
  expect(cn(["text-sm font-jost font-bold", "text-foreground"]))
  .toBe("text-sm font-jost font-bold text-foreground");
});

test("capitalize string", () => {
  expect(capitalize("my name is antwon")).toBe("My name is antwon");
});

test("adds and removes animation class when element intersects", () => {
  const element = document.createElement("div");
  element.dataset.animate = "fade-in";

  const ref = { current: element };

  const disconnect = runObserver(ref);

  // Access the mock
  const mockObserver = IntersectionObserverMock.instance!;
  expect(mockObserver).toBeDefined();

  // Simulate entering viewport
  mockObserver.triggerIntersect(true, element);
  expect(element.classList.contains("fade-in")).toBe(true);

  // Simulate leaving viewport
  mockObserver.triggerIntersect(false, element);
  expect(element.classList.contains("fade-in")).toBe(false);

  // cleanup
  disconnect();
});