import { createContext } from "react";
import { State, StateHandlers } from "../types";

const context = createContext<State & { handlers: StateHandlers } | null>(null);

export default context;
