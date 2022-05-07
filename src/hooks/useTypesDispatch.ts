import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/configureStore";

export const useAppDispatch = () => useDispatch<AppDispatch>();
