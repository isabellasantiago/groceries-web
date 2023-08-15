import * as S from './style';
import brand from '../../../assets/brand.svg';

const Header = () => {

    return(
        <S.HeaderBar>
            <S.Brand>
                <img src={brand} />
            </S.Brand>
        </S.HeaderBar>
    )
}

export default Header