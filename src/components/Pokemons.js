import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemons } from '../redux/pokemonsSlice'
import Loading from './Loading'
import Paginations from './Paginations'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'
import { display } from '@mui/system'

function Pokemons() {

  const dispatch = useDispatch()
  const allPokemons = useSelector(state => state.characters.allItems)
  const status = useSelector(state => state.characters.status)
  const page = useSelector(state => state.characters.page)

  useEffect(() => {
    dispatch(fetchPokemons(page))
  }, [dispatch, page])



  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [item, setItem] = useState(null);

  const getItem = async (url) => {
    handleOpen();
    const res = await axios.get(url);
    const data = res.data;
    console.log(data)
    console.log(data)
    setItem(data);
  }

  return (
    <>
      {status === "loading"
        ? <Loading />
        :
        <>
          <div className='pokemons'>
            <h1>Pokemons</h1>
            <div className='all'>
              {allPokemons &&
                React.Children.toArray(
                  allPokemons.map(item => (
                    <div onClick={() => getItem(item.url)} className='cart'>
                      <img
                        alt={item?.name}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${item.url.split('/')[item.url.split("/").length - 2]}.png`}
                      />
                      <div>{item.name}</div>
                    </div>

                  )))}
            </div>

            <Paginations />

            <div>

              {item &&
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <div className='box-modal'>
                    <h1 id="modal-modal-title" >
                      {item.forms[0].name}
                    </h1>
                    <img src={item?.sprites?.back_default} alt={item?.forms[0]?.name} />
                    <div className='abilities'>
                      {item.abilities && item.abilities.map(ability => (
                        <div style={{ marginRight: "20px" }} className='item-bg'>{ability.ability.name}</div>
                      ))}
                    </div>
                    <div className='stats'>
                      {item.stats.map(stat => (
                         <span>{stat.stat.name} : {stat.base_stat}</span> 
                        ))}
                    </div>
                  </div>
                </Modal>
              }


            </div>
          </div>
        </>
      }
    </>
  )
}

export default Pokemons