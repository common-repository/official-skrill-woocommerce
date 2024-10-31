const skrill_ewltph_settings = window.wc.wcSettings.getSetting( 'skrill_ewltph_data', {} );
const skrill_ewltph_label = window.wp.htmlEntities.decodeEntities( skrill_ewltph_settings.title ) || window.wp.i18n.__( 'E-wallet Philippines', 'wc-skrill' );
const skrill_ewltph_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_ewltph_settings.description || '' );
};

const skrill_ewltph_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_ewltph_settings.icon,
      alt: skrill_ewltph_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_ewltph_Block_Gateway = {
    name: 'skrill_ewltph',
    icons: [skrill_ewltph_settings.icon],
    label: skrill_ewltph_final_label,
    content: Object( window.wp.element.createElement )( skrill_ewltph_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_ewltph_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_ewltph_label,
    supports: {
        features: skrill_ewltph_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_ewltph_Block_Gateway );