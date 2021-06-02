import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (key, useLocalStorage) => {
  const [darkModeEnabled, setdarkModeEnabled] = useLocalStorage((key) => {
    if (darkModeEnabled === true) {
      return [storedValue, setdarkModeEnabled];
    }
  });
};
