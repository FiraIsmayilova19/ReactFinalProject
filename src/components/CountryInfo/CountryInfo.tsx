import './CountryInfo.scss'
import { useLocation } from 'react-router-dom'

const CountryInfo = () => {
    const { state } = useLocation();
    const item = state.item;

    return (
        <div className='country-info'>
            <div className='left-part'>

                {/* Names */}
                <div className="info-block">
                    <h3>Names</h3>
                    <p><strong>Common:</strong> {item.name.common}</p>
                    <p><strong>Official:</strong> {item.name.official}</p>
                </div>

                {/* Native Names */}
                {item.name.nativeName && (
                    <div className="info-block">
                        <h3>Native Names</h3>
                        {Object.values(item.name.nativeName).map((native, index) => (
                            <p key={index}><strong>{native.common}:</strong> {native.official}</p>
                        ))}
                    </div>
                )}

                {/* Capital */}
                {item.capital && (
                    <div className="info-block">
                        <h3>Capital</h3>
                        <p>{item.capital[0]}</p>
                    </div>
                )}

                {/* Region & Subregion */}
                <div className="info-block">
                    <h3>Region & Subregion</h3>
                    <p><strong>Region:</strong> {item.region}</p>
                    <p><strong>Subregion:</strong> {item.subregion}</p>
                </div>

                {/* Population */}
                <div className="info-block">
                    <h3>Population</h3>
                    <p>{item.population.toLocaleString()}</p>
                </div>

                {/* Currencies */}
                {item.currencies && (
                    <div className="info-block">
                        <h3>Currencies</h3>
                        {Object.values(item.currencies).map((currency, index) => (
                            <p key={index}><strong>{currency.name}:</strong> {currency.symbol}</p>
                        ))}
                    </div>
                )}
            </div>

            {/* Right Part (Flag & Coat of Arms) */}
            <div className='right-part'>
                {item.flags && <img src={item.flags.svg} alt="Country Flag" />}
                {item.coatOfArms && <img src={item.coatOfArms.svg} alt="Coat of Arms" />}
            </div>
        </div>
    )
}

export default CountryInfo;
