import React, {useState} from "react";

type ProfileStatusPropsType = {
    status: string | number | readonly string[] | undefined
}
export const ProfileStatus: React.FC<ProfileStatusPropsType> = (props) => {

    let [editMode, setEditMode] = useState<boolean>(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div>
            {
                editMode
                    ? <div>
                        <input onBlur={deactivateEditMode} type='text' value={props.status} autoFocus/>
                    </div>
                    : <div>
                        <span onDoubleClick={activateEditMode}>{props.status}</span>
                    </div>
            }
        </div>
    )
}