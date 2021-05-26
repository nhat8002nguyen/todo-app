import React, { useState } from "react";
import "./styles.css";
import { itemContext, filterType } from "./context";
import Header from "./components/Header";
import ItemInput from "./components/atoms/ItemInput";
import ItemList from "./components/ItemList";
import ToggleButton from "./components/atoms/ToggleButton";
import Filter from "./components/Filter";
import { v4 } from "uuid";
import { writeItemData, getItems } from "./firebase/database";

const sampleItems = [
    {
        id: v4(),
        name: "todo item 1",
        status: "active"
    },
    {
        id: v4(),
        name: "todo item 2",
        status: "done"
    },
    {
        id: v4(),
        name: "todo item 3",
        status: "active"
    },
    {
        id: v4(),
        name: "todo item 4",
        status: "active"
    }
];

export default function App() {
    const [items, setItems] = useState(sampleItems);
    const [filter, setFilter] = useState(filterType.all);

    console.log(getItems());

    const onAddItem = (name) => {
        // const newItem = { id: v4(), name: name, status: "active" };
        // setItems((prevItems) => {
        //     let newItems = [...prevItems];
        //     newItems.push(newItem);
        //     return newItems;
        // });

        writeItemData({
            id: v4(),
            name: name,
            status: "active"
        });
    };

    const onRemoveItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const onToggleItem = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) => {
                const newStatus =
                    item.id === id
                        ? item.status === "active"
                            ? "done"
                            : "active"
                        : item.status;
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

    const showDoneItems = () => items.filter((item) => item.status === "done");

    const showActiveItems = () =>
        items.filter((item) => item.status === "active");

    return (
        <itemContext.Provider
            value={{
                items,
                filter,
                onAddItem,
                onRemoveItem,
                onToggleItem,
                showDoneItems,
                showActiveItems,
                chooseFilter
            }}
        >
            <div className="App">
                <Header />
                <div className="container">
                    <ItemInput />
                    <ItemList />
                    <ToggleButton />
                    <Filter />
                </div>
            </div>
        </itemContext.Provider>
    );
}
