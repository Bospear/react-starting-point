import { useMediaQuery } from 'react-responsive'

let Screensize = {
    isDesktop:false,
    isLaptop:false,
    isBigScreen:false,
    isTabletOrMobile:false,
    isPortrait:false,
    isRetina:false
}

export default function GetScreenType()
{
    const isDesktop = useMediaQuery({
        query: '(min-width: 1710px)'
      });
      const isLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

    Screensize.isDesktop = isDesktop;
    Screensize.isLaptop = isLaptop;
    Screensize.isBigScreen = isBigScreen;
    Screensize.isTabletOrMobile = isTabletOrMobile;
    Screensize.isPortrait = isPortrait;
    Screensize.isRetina = isRetina;

    return Screensize;
}
