import React, { useContext } from "react";
import { filterContext } from "../context";
import { filterType } from "../constants";

export default function Filter() {
    const { filter, chooseFilter } = useContext(filterContext);

    return (
        <div className="filterButtons">
            <p>Filter</p>
            <input
                className={
                    filter === filterType.all
                        ? "filterButton filterButtonChose"
                        : "filterButton"
                }
                type="button"
                value="All"
                onClick={(e) => chooseFilter(e.target.value)}
            />
            <input
                className={
                    filter === filterType.done
                        ? "filterButton filterButtonChose"
                        : "filterButton"
                }
                type="button"
                value="Done"
                onClick={(e) => chooseFilter(e.target.value)}
            />
            <input
                className={
                    filter === filterType.active
                        ? "filterButton filterButtonChose"
                        : "filterButton"
                }
                type="button"
                value="Active"
                onClick={(e) => chooseFilter(e.target.value)}
            />
        </div>
    );
}
