//Styles
import './HeaderComponent.css';
//Assets Imports
import logoAsset from '../../assets/logo.svg';


export function HeaderComponent(){
  return(
    <header>
      <img src={logoAsset} alt="" id='logoHeaderComponent'/>
    </header>
  )
}

export default HeaderComponent;