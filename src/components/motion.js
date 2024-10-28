export function slideFrom(delay = 0.3) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
      },
    },
  };
}
