import React from "react";
import {Link} from 'react-router-dom';

const HomeCharacter = ({...props}) => {
    return (
        <>
            <div>
                <Link to={`/character/${props.id}`}>
                    {props.name}
                </Link>
            </div>
        </>
    )
}

export default HomeCharacter;