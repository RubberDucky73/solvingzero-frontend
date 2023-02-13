/* eslint-disable react/jsx-no-useless-fragment */
export function ratesFormat(rate) {
  if (rate) {
    return `${rate * 100}%`;
  }
  return null;
}

export function RenderIf({ value, fallback, children }) {
  if (value) {
    const localValue = typeof value === 'function' ? value() : value;
    console.log('local value', value);
    if (localValue) {
      if (typeof children === 'function') {
        return <>{children(localValue)}</>;
      }
      // eslint-disable-next-line react/jsx-no-useless-fragment, no-unneeded-ternary
      return <>{children ? children : value}</>;
    }
  }
  return <>{typeof fallback === 'function' ? fallback() : fallback}</>;
}
