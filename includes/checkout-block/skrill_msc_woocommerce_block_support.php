<?php

use Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType;

require_once 'skrill_checkout_block_common_function.php';

final class Skrill_Msc_Gateway_Blocks extends AbstractPaymentMethodType
{
    private $gateway;

    protected $name = 'skrill_msc'; // payment gateway id

    private $skrill_core;


    public function __construct() {
        $this->skrill_core = new Skrill_Checkout_Block_Common_Service();
    }

    public function initialize()
    {
        $this->settings = get_option("woocommerce_{$this->name}_settings", array());
        $this->settings_acc = get_option("woocommerce_skrill_acc_settings", array());
    }

    public function is_active()
    {
        $country_code = $this->skrill_core->get_wc_customer_property_value('country');
        return (! empty($this->settings[ 'enabled' ]) && 'yes' === $this->settings[ 'enabled' ]) && 
        ($this->skrill_core->is_country_allowed() && 'yes' === $this->settings_acc['show_separately']);
    }

    public function get_payment_method_script_handles()
    {
        wp_register_script(
            'wc-skrill-msc-blocks-integration',
            plugin_dir_url(__DIR__) . '../assets/js/skrill_msc_checkout.js',
            array(
                'wc-blocks-registry',
                'wc-settings',
                'wp-element',
                'wp-html-entities',
            ),
            null, // or time() or filemtime( ... ) to skip caching
            true
        );

        return array( 'wc-skrill-msc-blocks-integration' );
    }

    public function get_payment_method_data()
    {
        return array(
            'title'        => $this->get_setting('title'),
            // almost the same way:
            // 'title'     => isset( $this->settings[ 'title' ] ) ? $this->settings[ 'title' ] : 'Default value';
            'description'  => $this->get_setting('description'),
            'icon'         => plugin_dir_url( __DIR__ ) . '../assets/images/msc.png',
            // if $this->gateway was initialized on line 15
            // 'supports'  => array_filter( $this->gateway->supports, [ $this->gateway, 'supports' ] ),

            // example of getting a public key
            // 'publicKey' => $this->get_publishable_key(),
        );
    }
}
