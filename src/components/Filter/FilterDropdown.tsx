import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {useState} from "react";

interface iFilter {
    name: string
    defaultOption?: string
    option: Array<string>
}

const FilterDropdown = ({name, defaultOption = 'All', option}: iFilter) => {
    const [value, setValue] = useState(`${defaultOption}`)

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    }

    return (
        <Box sx={{
            display: 'flex',
            gap: '.5rem',
            alignItems: 'center',
            border: '1px solid #575A64',
            borderRadius: '6px',
            p: '3px 11px'
        }}>
            <Typography variant="subtitle2" component="span" sx={{color: 'white'}}>
                {name}
            </Typography>
            <FormControl sx={{m: .5, minWidth: 120}} size="small">
                <InputLabel id={`${name}-label`} sx={{color: 'white'}}>{name}</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id={`${name}-select`}
                    value={value}
                    label={defaultOption}
                    onChange={handleChange}
                    sx={{color: '#FFDD95'}}
                >
                    <MenuItem value={defaultOption}>
                        <em>{defaultOption}</em>
                    </MenuItem>
                    {option.map(x => (
                        <MenuItem value={x}>{x}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default FilterDropdown