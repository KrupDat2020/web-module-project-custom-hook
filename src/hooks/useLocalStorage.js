
const useLocalStorage = (key, initialValue) => {
    const [ name, setName ] = useLocalStorage ('name', 'Mark') => {
        if(localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    };

    const setStoredName = (name) => {
        localStorage.setItem(key, JSON.stringify(name));
        setStoredName(name);
    }

    return [name, setStoredName];
}

export default useLocalStorage;