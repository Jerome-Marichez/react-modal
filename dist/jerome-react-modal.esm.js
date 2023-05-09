import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".blocker {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: auto;\r\n\tz-index: 1;\r\n\tpadding: 20px;\r\n\tbox-sizing: border-box;\r\n\ttext-align: center;\r\n}\r\n\r\n.blocker::before {\r\n\tcontent: \"\";\r\n\tdisplay: inline-block;\r\n\theight: 100%;\r\n\tvertical-align: middle;\r\n\tmargin-right: -0.05em;\r\n}\r\n\r\n.modal {\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\tbox-sizing: border-box;\r\n\tpadding: 15px 30px;\r\n\ttext-align: left;\r\n}\r\n\r\n.modal .close-modal-custom,\r\n.modal .close-modal {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: -12.5px;\r\n\tright: -12.5px;\r\n\ttext-indent: -9999px;\r\n}\r\n\r\n.modal .close-modal {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tbackground-size: contain;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center center;\r\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA3hJREFUaAXlm8+K00Acx7MiCIJH/yw+gA9g25O49SL4AO3Bp1jw5NvktC+wF88qevK4BU97EmzxUBCEolK/n5gp3W6TTJPfpNPNF37MNsl85/vN/DaTmU6PknC4K+pniqeKJ3k8UnkvDxXJzzy+q/yaxxeVHxW/FNHjgRSeKt4rFoplzaAuHHDBGR2eS9G54reirsmienDCTRt7xwsp+KAoEmt9nLaGitZxrBbPFNaGfPloGw2t4JVamSt8xYW6Dg1oCYo3Yv+rCGViV160oMkcd8SYKnYV1Nb1aEOjCe6L5ZOiLfF120EjWhuBu3YIZt1NQmujnk5F4MgOpURzLfAwOBSTmzp3fpDxuI/pabxpqOoz2r2HLAb0GMbZKlNV5/Hg9XJypguryA7lPF5KMdTZQzHjqxNPhWhzIuAruOl1eNqKEx1tSh5rfbxdw7mOxCq4qS68ZTjKS1YVvilu559vWvFHhh4rZrdyZ69Vmpgdj8fJbDZLJpNJ0uv1cnr/gjrUhQMuI+ANjyuwftQ0bbL6Erp0mM/ny8Fg4M3LtdRxgMtKl3jwmIHVxYXChFy94/Rmpa/pTbNUhstKV+4Rr8lLQ9KlUvJKLyG8yvQ2s9SBy1Jb7jV5a0yapfF6apaZLjLLcWtd4sNrmJUMHyM+1xibTjH82Zh01TNlhsrOhdKTe00uAzZQmN6+KW+sDa/JD2PSVQ873m29yf+1Q9VDzfEYlHi1G5LKBBWZbtEsHbFwb1oYDwr1ZiF/2bnCSg1OBE/pfr9/bWx26UxJL3ONPISOLKUvQza0LZUxSKyjpdTGa/vDEr25rddbMM0Q3O6Lx3rqFvU+x6UrRKQY7tyrZecmD9FODy8uLizTmilwNj0kraNcAJhOp5aGVwsAGD5VmJBrWWbJSgWT9zrzWepQF47RaGSiKfeGx6Szi3gzmX/HHbihwBser4B9UJYpFBNX4R6vTn3VQnez0SymnrHQMsRYGTr1dSk34ljRqS/EMd2pLQ8YBp3a1PLfcqCpo8gtHkZFHKkTX6fs3MY0blKnth66rKCnU0VRGu37ONrQaA4eZDFtWAu2fXj9zjFkxTBOo8F7t926gTp/83Kyzzcy2kZD6xiqxTYnHLRFm3vHiRSwNSjkz3hoIzo8lCKWUlg/YtGs7tObunDAZfpDLbfEI15zsEIY3U/x/gHHc/G1zltnAgAAAABJRU5ErkJggg==);\r\n}";
styleInject(css_248z);

/**
 *
 * @param isOpen A boolean with state True if Modal is show, false if Modal is not show
 * @param contentBody A content body display inside modal can be string or a JSX.Element
 * @param onClose A callback function enabled at Click of Exit Button ex: "onClose={() => { setModalOpen(false); }}"
 * @param closeButton A optional parameter who allow to display a JSX.Element as a Close Button
 * @param contentHeader A optional paramater who allow to display a JSX.Element as a Header
 * @param contentFooter A optional paramater who allow to display a JSX.Element as a footer
 * @param background A optional parameter to set background propriety behind Modal (ex: "rgba(0, 0, 0, 0.75)")
 * @param modalAlign A optional parameter who allow to display Modal in center top or bottom (check: https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align to see options)
 * @param modalRadius A optional parameter to set radius of Modal Form (ex: "8px")
 * @param modalBackground A optional parameter to set css background propriety (ex: "grey")
 * @param modalShadow A optional parameter to set box-shadow propriety (ex: "0 0 10px #000")
 * @param modalMinWidth A optional parameter to set min-width propriety of modal (ex: "500px")
 * @returns A Modal with his content
 */
function Modal(props) {
  var isOpen = props.isOpen,
    contentBody = props.contentBody,
    onClose = props.onClose; // Minimal Props
  var closeButton = props.closeButton,
    contentFooter = props.contentFooter,
    contentHeader = props.contentHeader; // Custom JSX.Element Props
  var background = props.background,
    modalAlign = props.modalAlign,
    modalRadius = props.modalRadius,
    modalBackground = props.modalBackground,
    modalShadow = props.modalShadow,
    modalMinWidth = props.modalMinWidth; // CSS Custom Propriety 
  return React.createElement("div", {
    "data-testid": "blocker",
    className: "blocker",
    style: {
      display: isOpen ? "inline-block" : "none",
      background: background ? background : "rgba(0, 0, 0, 0.75)"
    }
  }, React.createElement("div", {
    "data-testid": "modal",
    className: "modal",
    style: {
      verticalAlign: modalAlign ? modalAlign : "middle",
      minWidth: modalMinWidth ? modalMinWidth : "",
      background: modalBackground ? modalBackground : "#FFF",
      borderRadius: modalRadius ? modalRadius : "8px",
      boxShadow: modalShadow ? modalShadow : "0 0 10px #000"
    }
  }, contentHeader ? contentHeader : "", contentBody, contentFooter ? contentFooter : "", React.createElement("a", {
    href: "#close-modal",
    onClick: onClose,
    className: closeButton ? "close-modal-custom" : "close-modal"
  }, closeButton ? closeButton : "Close")));
}
var Modal$1 = /*#__PURE__*/React.memo(Modal);

export { Modal$1 as Modal };
//# sourceMappingURL=jerome-react-modal.esm.js.map
