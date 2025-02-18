import FilterDrawer from "../FilterDrawer/FilterDrawer";
import { useState } from 'react';

export default function FilterButton () {
    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(isOpened => !isOpened);
    }

    return (
        <FilterDrawer handleClick={toggle}/>
    );
}