import React from 'react';
import classes from './Dialogs.module.css';

type DialogsProps = {}

export const Dialogs = (props: DialogsProps) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' '+ classes.active}>
                    Viktor
                </div>
                <div className={classes.dialog}>
                    Bogdan
                </div>
                <div className={classes.dialog}>
                    Sergay
                </div>
                <div className={classes.dialog}>
                    Ilia
                </div>
                <div className={classes.dialog}>
                    Anton
                </div>
                <div className={classes.dialog}>
                    Lera
                </div>
            </div>
            <div className={classes.messages}>
               <div className={classes.message}>Hi</div>
                <div className={classes.message}>How is your it-kamasutra?</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}