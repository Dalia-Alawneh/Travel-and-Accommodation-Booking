export default new Proxy(
  {},
  {
    get: (_target, prop) => () => (
      <div data-testid={`mock-icon-${String(prop)}`} />
    ),
  },
);
