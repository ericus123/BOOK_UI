import { useDispatch, useSelector } from "react-redux";
import { handleThemeToogle } from "../redux/modules/navigation/navigationSlice";
import { RootState } from "../redux/modules/rootReducer";

type Theme = {
  isDark: boolean;
  changeTheme: (isDark: boolean) => void;
};

export const useTheme = (): Theme => {
  const dispatch = useDispatch();

  const { isDarkTheme } = useSelector(
    ({ navigation }: RootState) => navigation
  );

  const changeTheme = (mode: boolean) => {
    dispatch(handleThemeToogle(mode));
  };
  return {
    isDark: isDarkTheme,
    changeTheme,
  };
};

export default useTheme;
