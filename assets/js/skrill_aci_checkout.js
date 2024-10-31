const skrill_aci_settings = window.wc.wcSettings.getSetting( 'skrill_aci_data', {} );
const skrill_aci_label = window.wp.htmlEntities.decodeEntities( skrill_aci_settings.title ) || window.wp.i18n.__( 'Cash/invoice', 'wc-skrill' );
const skrill_aci_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_aci_settings.description || '' );
};

const skrill_aci_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_aci_settings.icon,
      alt: skrill_aci_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_aci_Block_Gateway = {
    name: 'skrill_aci',
    icons: [skrill_aci_settings.icon],
    label: skrill_aci_final_label,
    content: Object( window.wp.element.createElement )( skrill_aci_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_aci_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_aci_label,
    supports: {
        features: skrill_aci_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_aci_Block_Gateway );