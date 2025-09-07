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