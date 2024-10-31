const skrill_ewltkr_settings = window.wc.wcSettings.getSetting( 'skrill_ewltkr_data', {} );
const skrill_ewltkr_label = window.wp.htmlEntities.decodeEntities( skrill_ewltkr_settings.title ) || window.wp.i18n.__( 'E-wallet South Korea', 'wc-skrill' );
const skrill_ewltkr_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_ewltkr_settings.description || '' );
};

const skrill_ewltkr_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_ewltkr_settings.icon,
      alt: skrill_ewltkr_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_ewltkr_Block_Gateway = {
    name: 'skrill_ewltkr',
    icons: [skrill_ewltkr_settings.icon],
    label: skrill_ewltkr_final_label,
    content: Object( window.wp.element.createElement )( skrill_ewltkr_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_ewltkr_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_ewltkr_label,
    supports: {
        features: skrill_ewltkr_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_ewltkr_Block_Gateway );