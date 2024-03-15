import GetScreenType from '../../Helpers/ScreenHelper';
import LoaderPC from './LoaderPC';
import LoaderMobile from './LoaderMobile';

const Loader = () => {
    const isDesktop = GetScreenType().isDesktop;
    const isLaptop = GetScreenType().isLaptop;
  return (
    isDesktop?(<LoaderPC/>):(isLaptop?(<LoaderPC/>):(<LoaderMobile/>))
  );
}

export default Loader;