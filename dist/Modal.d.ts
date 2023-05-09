import "./Modal.css";
import React from "react";
export interface ModalProps {
    isOpen: boolean;
    contentBody: string | JSX.Element;
    onClose: () => void;
    closeButton?: JSX.Element;
    contentFooter?: JSX.Element;
    contentHeader?: JSX.Element;
    background?: string;
    modalAlign?: "top" | "middle" | "bottom" | "baseline" | "sub" | "text-top";
    modalRadius?: string;
    modalBackground?: string;
    modalShadow?: string;
    modalMinWidth?: string;
}
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
declare function Modal(props: ModalProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Modal>;
export default _default;
