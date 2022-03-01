//Importar las actions
import { selectCpu } from "../actions/index";

//InitialState contiene las mismas propiedades que el store
const initialState = {
  cpuBrand: false
};

function rootReducer(state = initialState, action) {

   //Verifaceremos segun el type cada una de las actions
   switch(action.type){
      case 'SELECT_CPU_BRAND':{
        console.log('reducer: ' , action.payload.cpuBrand)
        //Cambiamos las propiedades del stado
        return{
          ...state,
          cpuBrand: action.payload.cpuBrand
        }
      }break;
      default: {
         return state;
      }
   }
}

export default rootReducer;