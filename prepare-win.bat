if not exist composer.phar (
	@rem install composer
	php -r "readfile('https://getcomposer.org/installer');" | php
)

@rem restore packages
php composer.phar install

@rem run nmake
".win\nmake.exe"