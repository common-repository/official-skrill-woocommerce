<?php
/**
 * Skrill Paysafecard
 *
 * This gateway is used for Skrill Paysafecard.
 * Copyright (c) Skrill
 *
 * @class   Gateway_Skrill_BLK
 * @extends Skrill_Payment_Gateway
 * @package Skrill/Classes
 * @located at  /includes/gateways
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Gateway_Skrill_BLK
 */
class Gateway_Skrill_MBK extends Skrill_Payment_Gateway {


	/**
	 * Id
	 *
	 * @var string
	 */
	public $id = 'skrill_mbk';

	/**
	 * Payment method logo
	 *
	 * @var string
	 */
	public $payment_method_logo = 'mbk.png';

	/**
	 * Payment method
	 *
	 * @var string
	 */
	public $payment_method = 'MBK';

	/**
	 * Payment brand
	 *
	 * @var string
	 */
	public $payment_brand = 'MBK';

	/**
	 * Allowed countries
	 *
	 * @var array
	 */
	protected $allowed_countries = array( 'ITA' );

	/**
	 * Payment method description
	 *
	 * @var string
	 */
	public $payment_method_description = 'Italy';

	/**
	 * Get payment title.
	 *
	 * @return string
	 */
	public function get_title() {
		return __( 'My Bank', 'wc-skrill' );
	}
}

$obj = new Gateway_Skrill_MBK();
