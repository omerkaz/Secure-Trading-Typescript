import { TiInfoLargeOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
type Props = {
    header: string;
    children: React.ReactNode;
};
function SuccessCard(props: Props) {
    return (
        <div className="card bg-success text-light" style={{ width: '25rem' }}>
            <TiInfoLargeOutline className="w-100 fs-1" />
            <div className="card-body">
                <h5 className="card-title">{props.header}</h5>
                <p className="card-text">
                    {props.children}
                </p>
                <div className="d-flex justify-content-center">
                    <Link className="card-link text-light" to={'/'}>
                        Ana Sayfaya Dön
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SuccessCard;
