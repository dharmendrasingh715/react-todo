import React from "react";
import Button from "../../elements/Button/Button";

const Filter = (props) => {
    return (
        <div className="todo-filters">
            <Button btnText="See all" btnColor="blue" iconType="tasks" />
            <Button btnText="See active" btnColor="blue" iconType="square outline" />
            <Button btnText="See completed" btnColor="blue" iconType="check square outline" />
            <Button btnText="See Clear completed" btnColor="blue" iconType="close" />
        </div>
    )
}

export default Filter;