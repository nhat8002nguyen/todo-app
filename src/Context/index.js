import React from "react";

export const filterType = {
    all: "all",
    done: "done",
    active: "active"
};

export const itemContext = React.createContext({
    items: [],
    filter: filterType.all,
    onAddItem: () => [],
    onRemoveItem: () => [],
    onToggleItem: () => [],
    showDoneItems: () => [],
    showActiveItems: () => [],
    chooseFilter: () => {}
});
