import React from "react";
import Button from "../../elements/Button/Button";

const Filter = (props) => {
    return (
        <div className="todo-filters">
            <Button btnText="See all" dataKey="all-todos" btnColor="blue" iconType="tasks" clickHandler={props.filterHandler} />
            <Button btnText="See active" dataKey="active-todos" btnColor="blue" iconType="square outline" clickHandler={props.filterHandler} />
            <Button btnText="See completed" dataKey="completed-todos" btnColor="blue" iconType="check square outline" clickHandler={props.filterHandler} />
            <Button btnText="See Clear completed" dataKey="clear-todos" btnColor="blue" iconType="close" clickHandler={props.filterHandler} />
        </div>
    )
}

export default Filter;