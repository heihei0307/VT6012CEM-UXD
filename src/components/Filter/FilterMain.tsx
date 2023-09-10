import {Box, Button, Typography} from "@mui/material";
import FilterDropdown from "./FilterDropdown";
import FilterDate from "./FilterDate";
import GenreToggleButton from "../Genre/GenreToggleButton";
import {Link} from "react-router-dom";

interface iGenre {
    name: string
    color?: string
}

interface iGenres extends Array<iGenre> {
}

const genres: iGenres = [
    {name: 'Action', color: '#D0E6A5'}, {name: 'Adventure', color: '#FFDD95'}, {
        name: 'Cars',
        color: '#FC887B'
    }, {name: 'Comedy', color: '#CCABDA'}, {name: 'Dementia', color: '#ABCCD8'}, {
        name: 'Demons',
        color: '#D8B2AB'
    }, {name: 'Drama', color: '#86E3CE'},
    {name: 'Ecchi', color: '#D0E6A5'}, {name: 'Fantasy', color: '#FFDD95'}, {
        name: 'Game',
        color: '#FC887B'
    }, {name: 'Harem', color: '#CCABDA'}, {name: 'Historical', color: '#ABCCD8'}, {
        name: 'Horror',
        color: '#D8B2AB'
    }, {name: 'Isekai', color: '#86E3CE'},
    {name: 'Josei', color: '#D0E6A5'}, {name: 'Kids', color: '#FFDD95'}, {
        name: 'Magic',
        color: '#FC887B'
    }, {name: 'Martial Arts', color: '#CCABDA'}, {name: 'Mecha', color: '#ABCCD8'}, {
        name: 'Military',
        color: '#D8B2AB'
    }, {name: 'Music', color: '#86E3CE'},
    {name: 'Mystery', color: '#D0E6A5'}, {name: 'Parody', color: '#FFDD95'}, {name: 'Police', color: '#FC887B'},
]

interface iProp {
    link?: string
}

const FilterMain = ({link = '#'}:iProp) => {
    const genreList = genres.map(x => {
        return <GenreToggleButton name={x.name}/>
    })
  return (
      <Box sx={{
          display: 'flex',
          flexFlow: 'column',
          gap: '1rem',
          background: '#343434',
          padding: '16px',
          borderRadius: '16px'
      }}>
          <Typography variant="subtitle2" component="span" sx={{color: 'white'}}>
              Filter
          </Typography>
          <Box sx={{display: 'flex', gap: '1rem', flexFlow: 'wrap'}}>
              <FilterDropdown name={'Type'} option={['Movie', 'TV', 'OVA', 'ONA', 'Special', 'Music']}/>
              <FilterDropdown name={'Status'} option={['Not Yet Aired', 'Releasing', 'Completed']}/>
              <FilterDropdown name={'Rated'}
                              option={['G - All Ages', 'PG - Children', 'PG 13 - Teens 13 and Older', 'R - 17+,Violence & Profanity', 'R+ - Profanity & Mild Nudity', 'Rx - Hentai']}/>
              <FilterDropdown name={'Score'} option={['Anime', 'TV']}/>
              <FilterDropdown name={'Season'} option={['Fall', 'Summer', 'Spring', 'Winter']}/>
              <FilterDropdown name={'Language'} option={['Sub & Dub', 'Sub', 'Dub']}/>
              <FilterDate name={'Start Date'}/>
              <FilterDate name={'End Date'}/>
              <FilterDropdown name={'Sort'} defaultOption={'Default'}
                              option={['Recently updated', 'Recently added', 'Release date']}/>
          </Box>
          <Typography variant="subtitle2" component="span" sx={{color: 'white'}}>
              Genre
          </Typography>
          <Box sx={{display: 'flex', gap: '1rem', flexFlow: 'wrap'}}>
              {genreList}
          </Box>
          <Box>
              <Link to={link}>
                  <Button variant={"contained"} sx={{color: '#111111', background: '#FFDD95'}}>Filter</Button>
              </Link>
          </Box>
      </Box>
  )
}

export default FilterMain