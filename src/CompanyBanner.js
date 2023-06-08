import background from './Asset/agmo_background.png';
import logo from './Asset/agmo_logo.png';
import './CompanyBanner.css';

function CompanyBanner() {
    return (
        <div className="company-banner">
            <img className="background-image" src={background} />
            <div className="content">
                <div className="inner-content">
                    <img className="logo" src={logo} />
                    <h3 className="description">
                        Making Lives Better with Technology
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default CompanyBanner;
