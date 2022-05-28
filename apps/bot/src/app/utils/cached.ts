type Producer<T> = () => T;

export const cached = <T>(producer: Producer<T>): Producer<T> => {
  let cache: T | undefined;

  return () => {
    if (!cache) cache = producer();
    return cache;
  };
};
