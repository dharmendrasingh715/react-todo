import React from "react";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";

const AddTodo = (props) => {
    return (
        <div className="ui secondary padded segment">
            <form className="ui big form" onSubmit={props.addTodoHandler}>
                <div className="inline fields">
                    <div className="thirteen wide field">
                        <Input />
                    </div>
                    <div className="three wide field">
                        <Button btnText="Save" btnSize="big" btnColor="blue" btnType="submit" iconType="save"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddTodo;