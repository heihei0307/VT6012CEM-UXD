import {Box} from "@mui/material";
import ListingItem from "./ListingItem";

interface prop {
    qty: number[],
}

const ListingContainer = ({qty}: prop) => {
    const render = qty.map((item, key) => {
        return (
            <ListingItem key={key}/>
        )
    })
    const content = <Box sx={{display: 'flex', flexFlow: 'wrap', gap: '30px'}}>{render}</Box>
    return (
        <>
            {content}
        </>
    )
}

export default ListingContainer