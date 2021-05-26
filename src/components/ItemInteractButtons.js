import React, { useContext } from "react";
import { itemContext, filterContext } from "../context";
import { filterType, itemStatus } from "../constants";

export default function ItemInteractButtons() {
    const { items, onToggleItem, onRemoveAll, onRemoveDone } = useContext(
        itemContext
    );
    const { filter } = useContext(filterContext);
    console.log(filter);

    const toggleAll = () => {
        if (filter === filterType.all) {
            items.forEach((item) => onToggleItem(item.id));
        } else {
            items
                .filter(
                    (item) =>
                        item.status ===
                        (filter === filterType.active
                            ? itemStatus.ACTIVE
                            : itemStatus.DONE)
                )
                .forEach((item) => onToggleItem(item.id));
        }
    };

    return (
        <div className="itemInteractButton">
            <input
                type="button"
                onClick={() => toggleAll()}
                className="toggleButton"
                value="Toggle All"
            />
            <input
                type="button"
                onClick={() => onRemoveAll()}
                className="toggleButton"
                value="Delete All"
            />
            <input
                type="button"
                onClick={() => onRemoveDone()}
                className="toggleButton"
                value="Delete Done"
            />
        </div>
    );
}
