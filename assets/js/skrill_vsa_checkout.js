const skrill_vsa_settings = window.wc.wcSettings.getSetting( 'skrill_vsa_data', {} );
const skrill_vsa_label = window.wp.htmlEntities.decodeEntities( skrill_vsa_settings.title ) || window.wp.i18n.__( 'Visa', 'wc-skrill' );
const skrill_vsa_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_vsa_settings.description || '' );
};

const skrill_vsa_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_vsa_settings.icon,
      alt: skrill_vsa_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_vsa_Block_Gateway = {
    name: 'skrill_vsa',
    icons: [skrill_vsa_settings.icon],
    label: skrill_vsa_final_label,
    content: Object( window.wp.element.createElement )( skrill_vsa_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_vsa_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_vsa_label,
    supports: {
        features: skrill_vsa_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_vsa_Block_Gateway );