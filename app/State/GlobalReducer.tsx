// ✅ Stato globale
export type GlobalState = {
  hoveredId: string | null;
  cursor: "default" | "pointer" | "grab";
};

// ✅ Azioni globali
export type GlobalAction =
  | { type: "SET_HOVER"; payload: string }
  | { type: "CLEAR_HOVER" }
  | { type: "SET_CURSOR"; payload: "default" | "pointer" | "grab"};

// ✅ Reducer
export function globalReducer(
  state: GlobalState,
  action: GlobalAction
): GlobalState {
  switch (action.type) {
    case "SET_HOVER":
      return { ...state, hoveredId: action.payload };
    case "CLEAR_HOVER":
      return { ...state, hoveredId: null };
    case "SET_CURSOR":
      return { ...state, cursor: action.payload };
    default:
      return state;
  }
}

// ✅ Stato iniziale
export const initialGlobalState: GlobalState = {
  hoveredId: null,
  cursor: "default",
};
