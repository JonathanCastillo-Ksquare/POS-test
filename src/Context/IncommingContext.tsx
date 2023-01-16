import { createContext } from "react";

type IncommingContextType = true | false;

const IncommingContext = createContext<IncommingContextType>(false);