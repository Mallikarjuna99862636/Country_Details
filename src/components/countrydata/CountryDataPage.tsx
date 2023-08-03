import React, { useEffect, useState } from 'react'
import './CountryDetails.css';
import { useDispatch, useSelector } from 'react-redux'
import { countryDataRequest, countryRedux, nameDetailsRequest } from '../../redux/countrydata/CountryDataRedux'
import { useNavigate } from 'react-router-dom';

export const CountryDataPage = () => {
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [countryName, setCountryName] = useState<any>('');
    const countries = useSelector((state: any) => state?.country?.data)
    const { isDarkMode } = useSelector((state: any) => state?.country)
    
    const actionDispatch = (dispatch: any) => ({
        countrySetState: (data: any) =>
            dispatch(countryRedux.actions.countrySetState(data)),
    });
    const { countrySetState } = actionDispatch(useDispatch());

    useEffect(() => {
        dispatch(countryDataRequest())
    }, [dispatch])

    if (!countries) {
        return <div className='fetching_data'> Fetching the Data.....</div>
    }

    const handleClick = (usersid: any) => {
        navigate("/country_details", {
            state: {
                id: usersid,
            },
        })
    }

    const filterCondition = (e: any) => {
        setCountryName(e.target.value)
        dispatch(nameDetailsRequest(e.target.value))
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
                    }}
                >
                    <i className="fa fa-moon-o" ></i>
                    Dark
                    Mode
                </button>
            </div>
            <div className={isDarkMode ? "Search_box_container_light" : "Search_box_container_dark"}>
                <div className={isDarkMode ? "Search_box_light" : "Search_box_dark"}>
                    <i className="fa fa-search"></i>
                    <input
                        type="text"
                        name={countryName}
                        placeholder="Search for a country..."
                        className={isDarkMode ? "input_text_light" : "input_text_dark"}
                        onChange={(e: any) => filterCondition(e)}
                    />
                </div>
            </div>
            {/* card */}
            <div className={isDarkMode ? "country_details_card_light" : "country_details_card_dark"} >
                {countries?.map((data: any, index: any) => (
                    <div key={index}
                        className={isDarkMode ? "country_data_box_light" : "country_data_box_dark"}
                        onClick={() => handleClick(index)}>
                        <img
                            src={data?.flags?.png}
                            alt="Avatar"
                            key={index}
                            className="country_flag"
                        />
                        <div className="country_details">
                            <p className='country_name'> {data?.name?.common || "--"} </p>
                            <p className='country_population'>Population: <span>{data?.population || "--"}</span></p>
                            <p className='country_region'>Region: <span>{data?.region || "--"}</span> </p>
                            <p className='country_capital'> Capital: <span>{data?.capital || "--"}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CountryDataPage;