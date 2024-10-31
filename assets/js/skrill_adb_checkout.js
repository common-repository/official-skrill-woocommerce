const skrill_adb_settings = window.wc.wcSettings.getSetting( 'skrill_adb_data', {} );
const skrill_adb_label = window.wp.htmlEntities.decodeEntities( skrill_adb_settings.title ) || window.wp.i18n.__( 'Direct Bank Transfer', 'wc-skrill' );
const skrill_adb_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_adb_settings.description || '' );
};

const skrill_adb_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_adb_settings.icon,
      alt: skrill_adb_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_adb_Block_Gateway = {
    name: 'skrill_adb',
    icons: [skrill_adb_settings.icon],
    label: skrill_adb_final_label,
    content: Object( window.wp.element.createElement )( skrill_adb_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_adb_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_adb_label,
    supports: {
        features: skrill_adb_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_adb_Block_Gateway );