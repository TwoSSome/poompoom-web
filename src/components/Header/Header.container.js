import { useLocation } from 'react-router-dom';
import { useNavigatePath } from '../../hooks/useNavigatePath';
import HeaderUI from './Header.presenter';

export default function Header() {
  const location = useLocation();
  const showSearchBar = location.pathname === '/review' || location.pathname === '/review/query-result';

  const navigatePath = useNavigatePath();

  return <HeaderUI showSearchBar={showSearchBar} navigatePath={navigatePath} />;
}
