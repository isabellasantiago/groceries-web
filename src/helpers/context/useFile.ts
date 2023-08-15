import { useContext } from "react";
import { FileContext } from "./filesContext";

export const useFile = () => useContext(FileContext);