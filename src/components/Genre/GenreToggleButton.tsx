import {ToggleButton} from "@mui/material";
import {useState} from "react";

interface iGenre {
    name: string
    color?: string
}

const GenreToggleButton = ({name, color}:iGenre) => {
    const [selected, setSelected] = useState(false)
    return (
        <ToggleButton size={"small"} value={name} selected={selected} onChange={() => {
            setSelected(!selected)
        }} sx={{color: '#DDD', borderColor: '#4A4C55'}}>{name}</ToggleButton>
    )
}

export default GenreToggleButton