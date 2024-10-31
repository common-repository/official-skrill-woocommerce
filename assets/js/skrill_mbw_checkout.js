const skrill_mbw_settings = window.wc.wcSettings.getSetting( 'skrill_mbw_data', {} );
const skrill_mbw_label = window.wp.htmlEntities.decodeEntities( skrill_mbw_settings.title ) || window.wp.i18n.__( 'MBWay', 'wc-skrill' );
const skrill_mbw_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_mbw_settings.description || '' );
};

const skrill_mbw_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_mbw_settings.icon,
      alt: skrill_mbw_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_mbw_Block_Gateway = {
    name: 'skrill_mbw',
    icons: [skrill_mbw_settings.icon],
    label: skrill_mbw_final_label,
    content: Object( window.wp.element.createElement )( skrill_mbw_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_mbw_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_mbw_label,
    supports: {
        features: skrill_mbw_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_mbw_Block_Gateway );