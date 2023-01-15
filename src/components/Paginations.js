import React from 'react'
import { changePage } from '../redux/pokemonsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Paginations() {

    const dispatch = useDispatch()
    const pages = useSelector(state => state.characters.pages)
    const page = useSelector(state => state.characters.page)

    const handleChange = (event, value) => {
        dispatch(changePage(value))
    };

    return (
        <>
            <div className='pagination'>
                <Stack spacing={2}>
                    <Pagination
                        variant="outlined"
                        count={Math.ceil(+pages / 20)}
                        page={page}
                        onChange={handleChange}
                    />
                </Stack>
            </div>
        </>
    )
}

export default Paginations