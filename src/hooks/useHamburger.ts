import { useDispatch, useSelector } from "react-redux";
import { handleDrawer } from "../redux/modules/navigation/navigationSlice";
import { RootState } from "../redux/modules/rootReducer";

type Props = {
  isOpen: boolean;
  handleDrawer: (state: boolean) => void;
  handleClose: () => void;
};

export const useHamburger = (): Props => {
  const { isDrawerOpen } = useSelector(
    ({ navigation }: RootState) => navigation
  );

  const dispatch = useDispatch();

  const controlDrawer = (state: boolean) => {
    dispatch(handleDrawer(state));
  };

  const handleClose = () => {
    dispatch(handleDrawer(false));
  };

  return {
    isOpen: isDrawerOpen,
    handleDrawer: controlDrawer,
    handleClose,
  };
};
