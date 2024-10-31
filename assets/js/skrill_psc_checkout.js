const skrill_psc_settings = window.wc.wcSettings.getSetting( 'skrill_psc_data', {} );
const skrill_psc_label = window.wp.htmlEntities.decodeEntities( skrill_psc_settings.title ) || window.wp.i18n.__( 'Paysafecard', 'wc-skrill' );
const skrill_psc_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_psc_settings.description || '' );
};

const skrill_psc_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_psc_settings.icon,
      alt: skrill_psc_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_psc_Block_Gateway = {
    name: 'skrill_psc',
    icons: [skrill_psc_settings.icon],
    label: skrill_psc_final_label,
    content: Object( window.wp.element.createElement )( skrill_psc_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_psc_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_psc_label,
    supports: {
        features: skrill_psc_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_psc_Block_Gateway );