import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {useState} from "react";

interface iFilter {
    name: string
}

const FilterDate = ({name}:iFilter) => {
    const [year, setYear] = useState(`All`)
    const [month, setMonth] = useState(`All`)
    const [day, setDay] = useState(`All`)

    const range = (start:number, end:number):Array<number> => {
        if(start === end) return [start];
        return [start, ...range(start + 1, end)];
    }

    const handleChangeYear = (event: SelectChangeEvent) => {
        setYear(event.target.value);
    }
    const handleChangeMonth = (event: SelectChangeEvent) => {
        setMonth(event.target.value);
    }
    const handleChangeDay = (event: SelectChangeEvent) => {
        setDay(event.target.value);
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
            <Box sx={{display:'flex'}}>
                <FormControl sx={{minWidth: '2.5rem'}} size="small">
                    <InputLabel id={`${name}-year-label`} sx={{color: 'white'}}>{'Year'}</InputLabel>
                    <Select
                        labelId={`${name}-select-year-label`}
                        id={`${name}-year-select`}
                        value={year}
                        label={'Year'}
                        onChange={handleChangeYear}
                        sx={{color: '#FFDD95'}}
                    >
                        <MenuItem value={'All'}>
                            <em>{'All'}</em>
                        </MenuItem>
                        {
                            range(1980, 2023).sort((x,y)=>y-x).map((item, i) => (
                                <MenuItem value={item}><em>{item}</em></MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl sx={{minWidth: '5rem'}} size="small">
                    <InputLabel id={`${name}-month-label`} sx={{color: 'white'}}>{'Month'}</InputLabel>
                    <Select
                        labelId={`${name}-select-month-label`}
                        id={`${name}-month-select`}
                        value={month}
                        label={'Month'}
                        onChange={handleChangeMonth}
                        sx={{color: '#FFDD95'}}
                    >
                        <MenuItem value={'All'}>
                            <em>{'All'}</em>
                        </MenuItem>
                        {
                            [...Array(12)].map((_, i) => (
                                <MenuItem value={i+1}><em>{i+1}</em></MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl sx={{minWidth: '2.5rem'}} size="small">
                    <InputLabel id={`${name}-day-label`} sx={{color: 'white'}}>{'Day'}</InputLabel>
                    <Select
                        labelId={`${name}select-day-label`}
                        id={`${name}-day-select`}
                        value={day}
                        label={'Day'}
                        onChange={handleChangeDay}
                        sx={{color: '#FFDD95'}}
                    >
                        <MenuItem value={'All'}>
                            <em>{'All'}</em>
                        </MenuItem>
                        {
                            [...Array(31)].map((_, i) => (
                                <MenuItem value={i+1}><em>{i+1}</em></MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}
export default FilterDate