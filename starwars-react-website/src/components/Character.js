import React, {useParams} from "react";

const Character = () => {
    // const [id, setId] = useState();
    const id = useParams();
    // useEffect(() => {
    //     setId();
    // })
    return <div>{`Characer Page: ${id}`}</div>
}

export default Character;