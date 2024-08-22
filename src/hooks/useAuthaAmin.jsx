import { useSelector } from 'react-redux';

export const useAuthaAmin = () => {
  const auth = useSelector((state) => state.auth);
console.log(auth?.user.role==='admin')
  if (auth?.accessToken && auth?.user && auth?.user.role==='admin') {
    return true;
  } else {
    return false;
  }

}
