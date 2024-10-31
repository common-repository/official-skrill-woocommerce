const skrill_pgf_settings = window.wc.wcSettings.getSetting( 'skrill_pgf_data', {} );
const skrill_pgf_label = window.wp.htmlEntities.decodeEntities( skrill_pgf_settings.title ) || window.wp.i18n.__( 'Pago Efectivo', 'wc-skrill' );
const skrill_pgf_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_pgf_settings.description || '' );
};

const skrill_pgf_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_pgf_settings.icon,
      alt: skrill_pgf_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_pgf_Block_Gateway = {
    name: 'skrill_pgf',
    icons: [skrill_pgf_settings.icon],
    label: skrill_pgf_final_label,
    content: Object( window.wp.element.createElement )( skrill_pgf_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_pgf_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_pgf_label,
    supports: {
        features: skrill_pgf_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_pgf_Block_Gateway );