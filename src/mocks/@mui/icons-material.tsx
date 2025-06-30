export default new Proxy(
  {},
  {
    get: (target, prop) => () => (
      <div data-testid={`mock-icon-${String(prop)}`} />
    ),
  },
);
