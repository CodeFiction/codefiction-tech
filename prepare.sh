echo "creating js folders..."
mkdir -p vendor/js && mkdir -p vendor/css && mkdir -p vendor/fonts 
echo "copying required stuff..."
cp -a vendor/components/font-awesome/css/. vendor/css && 
cp -a vendor/components/font-awesome/fonts/. vendor/fonts && 
cp -a vendor/components/jquery/jquery.min.js vendor/js/jquery.min.js && 
cp -a vendor/twbs/bootstrap/dist/css/. vendor/css/ && 
cp -a vendor/twbs/bootstrap/dist/js/. vendor/js/ && 
cp -a vendor/twbs/bootstrap/dist/fonts/. vendor/fonts/
echo "removing not required stuff..."
rm -Rf vendor/components && rm -Rf vendor/twbs && rm -Rf .git/
echo "ready to distribute"