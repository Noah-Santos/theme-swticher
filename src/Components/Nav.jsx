import Switcher from './Switcher';
import {useContext} from 'react';
import {StyleContext} from '../App'

const Nav = () => {
  let {theme} = useContext(StyleContext);

  return (
    <>
    {/* determines whether or not to load the light or dark mode */}
      {theme==='light' ?
        <div className='navCont'>
          <h1>Title</h1>
          <Switcher></Switcher>
        </div> :
        <div className='navCont darkNav'>
          <h1 className='darkTitle'>Title</h1>
          <Switcher></Switcher>
        </div>
      }
    </>
  )
}

export default Nav;