<?php

class Skrill_Checkout_Block_Common_Service {

    /**
	 * Allowed countries
	 *
	 * @var array
	 */
	public $allowed_countries = array( 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BIH', 'BWA', 'BVT', 'BRA', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLD', 'GUM', 'GTM', 'GGY', 'HTI', 'HMD', 'VAT', 'GIN', 'GNB', 'GUY', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'KOR', 'KWT', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NPL', 'NLD', 'ANT', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'ESP', 'LKA', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE' );

	/**
	 * Unallowed countries
	 *
	 * @var array
	 */
	public $unallowed_countries = array( 'AFG', 'CUB', 'ERI', 'IRN', 'IRQ', 'JPN', 'KGZ', 'LBY', 'PRK', 'SDN', 'SSD', 'SYR', 'PLW' );

	/**
	 * Excepted countries
	 *
	 * @var array
	 */
	public $excepted_countries = array();


/**
	 * Get wc customer property value
	 *
	 * @param  string $property property of class WC_Customer.
	 * @return mixed
	 */
	public function get_wc_customer_property_value( $property ) {
		global $woocommerce;

		if ( $this->is_version_greater_than( '3.0' ) ) {

			if ( 'country' === $property ) {
				$property = 'billing_country';
			}
			$function = 'get_' . $property;

			if ( is_null( $woocommerce->customer ) ) {
				$wc_customer = new WC_Customer();
				return $wc_customer->$function();
			} else {
				return $woocommerce->customer->$function();
			}
		}
		return $woocommerce->customer->$property;
	}

    /**
	 * Is woocommerce version greater than
	 *
	 * @param  string $version woocommerce version.
	 * @return boolean
	 */
	public static function is_version_greater_than( $version ) {
		if ( class_exists( 'WooCommerce' ) ) {
			global $woocommerce;
			if ( version_compare( $woocommerce->version, $version, '>=' ) ) {
				return true;
			}
		}
		return false;
	}


    /**
	 * Check if payment methods allow the country
	 *
	 * @return bool
	 */
	public function is_country_allowed() {
		$country_code = $this->get_wc_customer_property_value( 'country' );
		$country_code = Skrill_Payment::get_country_iso3_by_iso2( $country_code );

		$unallowed_countries = array_merge( $this->unallowed_countries, $this->excepted_countries );

		if ( in_array( $country_code, $unallowed_countries, true ) ) {
			return false;
		} elseif ( in_array( $country_code, $this->allowed_countries, true ) ) {
			return true;
		}

		return false;
	}
    

}