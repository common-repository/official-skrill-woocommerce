const skrill_obt_settings = window.wc.wcSettings.getSetting( 'skrill_obt_data', {} );
const skrill_obt_label = window.wp.htmlEntities.decodeEntities( skrill_obt_settings.title ) || window.wp.i18n.__( 'Rapid Transfer', 'wc-skrill' );
const skrill_obt_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_obt_settings.description || '' );
};

const skrill_obt_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_obt_settings.icon,
      alt: skrill_obt_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_obt_Block_Gateway = {
    name: 'skrill_obt',
    icons: [skrill_obt_settings.icon],
    label: skrill_obt_final_label,
    content: Object( window.wp.element.createElement )( skrill_obt_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_obt_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_obt_label,
    supports: {
        features: skrill_obt_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_obt_Block_Gateway );