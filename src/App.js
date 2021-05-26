import React, { useState } from "react";
import "./styles.css";
import { itemContext, filterContext } from "./context";
import { filterType, itemStatus } from "./constants";
import Header from "./components/Header";
import ItemInput from "./components/ItemInput";
import ItemList from "./components/ItemList";
import ItemInteractButtons from "./components/ItemInteractButtons";
import Filter from "./components/Filter";
import { v4 } from "uuid";

const sampleItems = [
    {
        id: v4(),
        name: "todo item 1",
        status: "ACTIVE"
    },
    {
        id: v4(),
        name: "todo item 2",
        status: "DONE"
    },
    {
        id: v4(),
        name: "todo item 3",
        status: "ACTIVE"
    },
    {
        id: v4(),
        name: "todo item 4",
        status: "ACTIVE"
    }
];

export default function App() {
    const [items, setItems] = useState(sampleItems);
    const [filter, setFilter] = useState(filterType.all);

    const onAddItem = (name) => {
        const newItem = { id: v4(), name: name, status: itemStatus.ACTIVE };
        setItems((prevItems) => {
            let newItems = [...prevItems];
            newItems.push(newItem);
            return newItems;
        });
    };

    const onRemoveItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const onRemoveAll = () => {
        setItems([]);
    };

    const onRemoveDone = () => {
        setItems((prevItems) => {
            return [...prevItems].filter(
                (item) => item.status === itemStatus.ACTIVE
            );
        });
    };

    const onToggleItem = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) => {
                const newStatus =
                    item.id === id
                        ? item.status === itemStatus.ACTIVE
                            ? itemStatus.DONE
                            : itemStatus.ACTIVE
                        : item.status;
                console.log(newStatus);
                return { ...item, status: newStatus };
            })
        );
    };

    const chooseFilter = (filterName) => {
        setFilter(
            filterName === "All"
                ? filterType.all
                : filterName === "Done"
                ? filterType.done
                : filterType.active
        );
    };

    const showDoneItems = () =>
        items.filter((item) => item.status === itemStatus.DONE);

    const showActiveItems = () =>
        items.filter((item) => item.status === itemStatus.ACTIVE);

    return (
        <itemContext.Provider
            value={{
                items,
                onAddItem,
                onRemoveItem,
                onRemoveAll,
                onRemoveDone,
                onToggleItem,
                showDoneItems,
                showActiveItems
            }}
        >
            <filterContext.Provider value={{ filter, chooseFilter }}>
                <div className="App">
                    <Header />
                    <div className="container">
                        <ItemInput />
                        <ItemList />
                        <ItemInteractButtons />
                        <Filter />
                    </div>
                </div>
            </filterContext.Provider>
        </itemContext.Provider>
    );
}
