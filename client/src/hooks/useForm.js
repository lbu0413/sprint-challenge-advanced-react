// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage'


export const useForm = (initialValue) => {

    const [values, setValue] = useLocalStorage('form', initialValue)

    const handleChanges = (e) => {
        setValue({ ...values, [e.target.name]: e.target.value });
      };
    
    return [values, handleChanges]
}