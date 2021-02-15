
//import { ContentPropsType } from './types'
//import { getDataThunkCreator } from './redux/weather-reducer'

import styles from './Content.module.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsSearch } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { WiDayCloudy, WiCloud, WiCloudy, WiDayThunderstorm, WiDaySunny, WiHail, WiDayRainMix, WiSnow, WiTornado, WiFog} from "react-icons/wi";
import { SetDataType, UseFormType } from './types'
import { weatherAPI } from './API/api'




const Content: React.FC = () => {



    const [toggle, setToggle] = useState<boolean>(false)



    const [state, setData] = useState<SetDataType>({
        name: '',
        mainTemp: null,
        describtion: '',
        iconId: 0
    })



    const {register, handleSubmit} = useForm<UseFormType>()



    const getData = (data: UseFormType) => {
        
        weatherAPI.getWeather(data.city)
            .then(
                response => {
                    console.log(response);
                    
                    setToggle(true)
                    setData(
                            {
                                ...state, 
                                name: response.data.name, 
                                mainTemp: Math.round(response.data.main.temp) - 273, 
                                describtion: response.data.weather[0].describtion,
                                iconId: response.data.weather[0].id
                            } )
                })

    }



    const setIcon = ( iconId: number ) => {
        switch(true) {
            case iconId === 0: {
                return null
            }
            case iconId > 199 && iconId < 233: {
                return <div><WiDayThunderstorm /></div>
            }
            case iconId > 299 && iconId < 322: {
                return <div><WiHail/></div>
            } 
            case (iconId > 499 && iconId < 505) || (iconId > 519 && iconId < 532) : {
                return <div><WiDayRainMix/></div>
            }
            case (iconId === 511) || (iconId > 599 && iconId < 623): {
                return <div><WiSnow /></div>
            }
            case (iconId > 700 && iconId < 772): {
                return <div><WiFog/></div>
            }
            case (iconId === 781): {
                return <div><WiTornado/></div>
            }
            case (iconId === 800): {
                return <div><WiDaySunny /></div>
            }
            case (iconId === 801): {
                return <div><WiDayCloudy /></div>
            }
            case (iconId === 802): {
                return <div><WiCloud /></div>
            }
            case (iconId === 803): {
                return <div><WiCloudy /></div>
            }
    
        }
    }


    
    


    


    return (
        
        
        <div className = {styles.mainWrapper}>

            <form onSubmit = {handleSubmit(getData)} className = {styles.form}>
                <input className = {styles.input} ref = {register} type="text" name = 'city'/>
                <button id ='mySubmit' className = {styles.button} value = '' ><IconContext.Provider value = {{color: 'gray'}}><BsSearch /></IconContext.Provider></button>
            </form>

            <div className = {styles.mainContent}>
            {  
                toggle   ?
                    (
                        <div className = {styles.icon}><IconContext.Provider value = {{size: '175px'}}>{setIcon(state.iconId)}</IconContext.Provider></div>
                    ): (
                        null
                    )
                
            }
            
            {  
                toggle ? 
                    ( 
                        <div className = {styles.weatherElements}>
                            <div className = {styles.name}>{state.name}</div>
                            <div className = {styles.mainTemp}>{state.mainTemp}°C</div>
                            <div className = {styles.description}>{state.describtion}</div>
                        </div>
                    ): (
                        null
                    )
            }
            </div>
        </div>
    )


}




export default Content







