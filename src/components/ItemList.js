import React from "react";
import TodoItem from "./elements/TodoItem";
import { itemContext, filterType } from "../context";

export default function ItemList() {
    const { items, filter } = React.useContext(itemContext);
    const [displayedItems, setDisplayedItems] = React.useState(items);

    // chnage list of items when change filter, add and remove item
    React.useEffect(() => {
        let showedItems;
        if (filter === filterType.all) {
            showedItems = items;
        } else if (filter === filterType.done) {
            showedItems = items.filter((item) => item.status === "done");
        } else {
            showedItems = items.filter((item) => item.status === "active");
        }
        setDisplayedItems(showedItems);
    }, [filter, items]);

    return (
        <div className="itemList">
            <ul>
                {displayedItems.map((item) => (
                    <TodoItem key={item.id} {...item} />
                ))}
            </ul>
        </div>
    );
}
