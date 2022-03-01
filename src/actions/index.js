/*Esta action corresponde a ChooseCpuComponent
desde el swiperOnChange enviamos un cpuBrand*/
export function selectCpuBrand(cpuBrand){
  return(
    {type: 'SELECT_CPU_BRAND' , payload: {
      cpuBrand: cpuBrand
    }}
  )
}