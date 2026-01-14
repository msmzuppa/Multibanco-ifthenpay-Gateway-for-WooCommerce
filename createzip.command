#! /bin/bash

cd /Users/marcoalmeida/Documents/Websites/_local/wordpress-testing/app/public/wp-content/plugins/

rm multibanco-ifthen-software-gateway-for-woocommerce.zip

# Read .distignore and convert to zip exclusions
echo "Reading exclusions from .distignore..."
EXCLUSIONS=""
while IFS= read -r line || [ -n "$line" ]; do
    # Trim whitespace
    line=$(echo "$line" | xargs)
    # Skip empty lines and comments (lines starting with #)
    if [[ -z "$line" || "$line" == \#* ]]; then
        continue
    fi
    # Add multibanco-ifthen-software-gateway-for-woocommerce/ prefix and wildcard for directories
    EXCLUSIONS="$EXCLUSIONS -x \"multibanco-ifthen-software-gateway-for-woocommerce/$line\" -x \"multibanco-ifthen-software-gateway-for-woocommerce/$line/*\""
done < "multibanco-ifthen-software-gateway-for-woocommerce/.distignore"

echo "Using exclusions from .distignore"
eval zip -r "multibanco-ifthen-software-gateway-for-woocommerce.zip" "multibanco-ifthen-software-gateway-for-woocommerce" $EXCLUSIONS