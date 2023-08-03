import React, { useEffect, useState } from 'react'
import './CountryDetails.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { countryRedux } from '../../redux/countrydata/CountryDataRedux'

// hello 
const CountryDetails = () => {
    const [country, setcountry] = useState(0);
    const location = useLocation()
    const id = location.state.id

    useEffect(() => {
        setcountry(id)
    }, [id])

    const navigate = useNavigate()
    const countries = useSelector((state: any) => state?.country.data)
    const { isDarkMode } = useSelector((state: any) => state?.country)

    const actionDispatch = (dispatch: any) => ({
        countrySetState: (data: any) =>
            dispatch(countryRedux.actions.countrySetState(data)),
    });
    const { countrySetState } = actionDispatch(useDispatch());

    const handleClickEvent = () => {
        navigate('/')
    }

    const handleCountryChange = (cntry: string) => {
        let id;
        for (let i = 0; i < countries.length; i++) {
            const foundElement = countries?.find((data: any) => data.name.common === cntry)
            id = countries.indexOf(foundElement)
        }
        setcountry(id)
    }
    
    return (
        <>
            <div className={isDarkMode ? "header_container_light" : "header_container_dark"}>
                <p className={isDarkMode ? "country_headline_light" : "country_headline_dark"}>Where is the world?</p>
                <button
                    className={isDarkMode ? "button_container_light" : "button_container_dark"}
                    onClick={() => {
                        countrySetState({
                            key: 'isDarkMode',
                            value: !isDarkMode,
                        });
                    }}                >
                    <i className="fa fa-moon-o" ></i>
                    Dark
                    Mode
                </button>
            </div>
            <div className={isDarkMode ? "back_button_container_light" : "back_button_container_dark"} >
                <button className={isDarkMode ? "back_button_light" : "back_button_dark"} onClick={handleClickEvent} >
                    &#8592;  {" "} Back
                </button>
            </div>
            <div >
                <div className={isDarkMode ? "country_details_details_light" : "country_details_details_dark"} >
                    <img
                        src={countries[country]?.flags?.png || "--"}
                        alt="Avatar"
                        className="img_container"
                    />
                    <div className='country_details_page_1' >
                        <div className="country_details_page">
                            <div className="country_detail_section" >
                                <p className="container_name" >{countries[country]?.name?.common || "--"} </p><br />
                                <p className="container_items" > Native Name : <span className="container_values"> {countries[country]?.name?.nativeName?.ara?.common || "--"} </span> </p>
                                <p className="container_items"> Polulation :  <span className="container_values"> {countries[country]?.population || "--"} </span> </p>
                                <p className="container_items"> Region : <span className="container_values"> {countries[country]?.region || "--"} </span></p>
                                <p className="container_items"> Sub Region : <span className="container_values"> {countries[country]?.subregion || "--"} </span> </p>
                                <p className="container_items"> Capital : <span className="container_values"> {countries[country]?.capital || "--"} </span></p>
                            </div>
                            <div className="country_detail_section_two" >
                                <p className="container_items">Top Level Domain : <span className="container_values"> {countries[country].demonyms?.eng?.f || "--"} </span></p>
                                <p className="container_items">Currencies : <span className="container_values"> {countries[country]?.currencies?.JOD?.name || "--"} </span> </p>
                                <p className="container_items">Language : <span className="container_values"> {countries[country]?.languages?.ara || "--"} </span></p>
                            </div>
                        </div>
                        <div className="border_country" >
                            <div className="country_name_data" > Border Countries :
                                <button className={isDarkMode ? "new_country_button_light" : "new_country_button_dark"} onClick={() => handleCountryChange("France")}> France </button>
                                <button className={isDarkMode ? "new_country_button_light" : "new_country_button_dark"} onClick={() => handleCountryChange("Germany")}> Germany </button>
                                <button className={isDarkMode ? "new_country_button_light" : "new_country_button_dark"} onClick={() => handleCountryChange("Netherlands")}> Netherlands </button>
                            </div>
                        </div>
                        <div className={isDarkMode ? "footer_container_light" : "footer_container_dark"}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryDetails