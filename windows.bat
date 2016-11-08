@rem add nmake command to cmd
set vstoolsroot=%VS140COMNTOOLS%
setlocal
cd %vstoolsroot%
call vsvars32.bat
endlocal

@rem install composer
php -r "readfile('https://getcomposer.org/installer');" | php

@rem restore packages
php composer.phar install

@rem run nmake
nmake