import React from "react";
import TodoItem from "./elements/TodoItem";
import { itemContext, filterContext } from "../context";
import { filterType, itemStatus } from "../constants";

export default function ItemList() {
    const { items } = React.useContext(itemContext);
    const { filter } = React.useContext(filterContext);
    const [displayedItems, setDisplayedItems] = React.useState(items);

    // chnage list of items when change filter, add and remove item
    React.useEffect(() => {
        let showedItems;
        if (filter === filterType.all) {
            showedItems = items;
        } else if (filter === filterType.done) {
            showedItems = items.filter(
                (item) => item.status === itemStatus.DONE
            );
        } else {
            showedItems = items.filter(
                (item) => item.status === itemStatus.ACTIVE
            );
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
