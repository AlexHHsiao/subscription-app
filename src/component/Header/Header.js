import React, {createRef, useCallback} from "react";
import AppConfig from "../../common/util/config";

const currencySelection = createRef();

const changeCurrency = () => {
    AppConfig.prevCurrency = AppConfig.currency;
    AppConfig.currency = currencySelection.current.value;
};

const Header = ({getPreview}) => {
    const onChange = useCallback(() => {
        changeCurrency();
        getPreview();
    }, [getPreview]);

    return (
        <nav className="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
            <span className="navbar-brand mb-0 h1">Subscription App</span>

            <form className="form-inline">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text">Currency</label>
                    </div>
                    <select className="custom-select" onChange={onChange}
                            ref={currencySelection}>
                        <option value='USD'>USD</option>
                        <option value='CNY'>CNY</option>
                        <option value='HKD'>HKD</option>
                    </select>
                </div>
            </form>
        </nav>
    );
};

export default Header;
