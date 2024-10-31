const skrill_wlt_settings = window.wc.wcSettings.getSetting( 'skrill_wlt_data', {} );
const skrill_wlt_label = window.wp.htmlEntities.decodeEntities( skrill_wlt_settings.title ) || window.wp.i18n.__( 'Skrill Wallet', 'wc-skrill' );
const skrill_wlt_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_wlt_settings.description || '' );
};

const skrill_wlt_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_wlt_settings.icon,
      alt: skrill_wlt_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_wlt_Block_Gateway = {
    name: 'skrill_wlt',
    icons: [skrill_wlt_settings.icon],
    label: skrill_wlt_final_label,
    content: Object( window.wp.element.createElement )( skrill_wlt_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_wlt_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_wlt_label,
    supports: {
        features: skrill_wlt_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_wlt_Block_Gateway );