import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

// Mock canvas-confetti for deterministic headless test execution
vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}));

// Mock framer-motion with cached component references so React does not remount subtrees on re-render
vi.mock('framer-motion', () => {
  const MOTION_PROPS = new Set([
    'initial',
    'animate',
    'exit',
    'transition',
    'whileHover',
    'whileTap',
    'whileInView',
    'layout',
    'layoutId',
    'variants',
    'viewport',
  ]);

  const componentCache = new Map<string, React.ComponentType<Record<string, unknown>>>();

  const getMotionComponent = (tag: string) => {
    const cached = componentCache.get(tag);
    if (cached) return cached;

    const Component = React.forwardRef<HTMLElement, Record<string, unknown>>((props, ref) => {
      const cleanProps: Record<string, unknown> = { ref };
      for (const [key, value] of Object.entries(props)) {
        if (!MOTION_PROPS.has(key)) {
          cleanProps[key] = value;
        }
      }
      return React.createElement(tag, cleanProps, props.children as React.ReactNode);
    });
    Component.displayName = `motion.${tag}`;
    componentCache.set(tag, Component);
    return Component;
  };

  const motionProxy = new Proxy(
    {},
    {
      get: (_target, prop: string) => getMotionComponent(prop),
    }
  );

  const AnimatePresence: React.FC<{ children?: React.ReactNode }> = ({ children }) =>
    React.createElement(React.Fragment, null, children);

  return {
    motion: motionProxy,
    AnimatePresence,
    useScroll: () => ({ scrollYProgress: 0 }),
    useSpring: () => 1,
  };
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = vi.fn().mockReturnValue([]);
  unobserve = vi.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Mock ResizeObserver
class MockResizeObserver implements ResizeObserver {
  disconnect = vi.fn();
  observe = vi.fn();
  unobserve = vi.fn();
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: MockResizeObserver,
});

// Mock Element.prototype.scrollIntoView and window.scrollTo
Element.prototype.scrollIntoView = vi.fn();
window.scrollTo = vi.fn();
