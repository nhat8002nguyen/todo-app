import React from "react";
import { filterType } from "../constants";

export const itemContext = React.createContext({
    items: [],
    // filter: filterType.all,
    onAddItem: () => [],
    onRemoveItem: () => [],
    onRemoveAll: () => [],
    onRemoveDone: () => [],
    onToggleItem: () => [],
    showDoneItems: () => [],
    showActiveItems: () => []
    // chooseFilter: () => {}
});

export const filterContext = React.createContext({
    filter: filterType.all,
    chooseFilter: () => {}
});
