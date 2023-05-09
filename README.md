

# Modal Component

A customizable and reusable React modal component with several options for displaying content and styling.
The modal has been thoroughly tested manually and with Jest tests, achieving great coverage. Therefore, it is considered stable.

## Installation

You can install the Modal Component package from npm:

```
npm install react-custom-modal
```

## Usage

Import the Modal Component in your React project:

```javascript
import Modal from "react-custom-modal";
```

Add the Modal Component to your component's render method:

```javascript
<Modal isOpen={modalOpen}
       contentBody={<div>This is the modal body</div>}
       onClose={() => { setModalOpen(false); }}
/>
```

## Props

The Modal Component accepts the following props:

| Prop               | Type                      | Default | Description                                                                                                                                |
| ------------------| -------------------------| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `isOpen`           | `boolean`                 | `false` | Determines whether the modal is displayed or hidden.                                                                                      |
| `contentBody`      | `string` or `JSX.Element` | `null`  | The content to be displayed inside the modal. This can be a string or a JSX element.                                                        |
| `onClose`          | `function`                | `null`  | A callback function that is executed when the modal is closed. This function should set `isOpen` to `false`.                               |
| `closeButton`      | `JSX.Element`             | `null`  | An optional JSX element that is displayed as the close button. If not provided, the default "Close" text is displayed.                   |
| `contentHeader`    | `JSX.Element`             | `null`  | An optional JSX element that is displayed as the modal header.                                                                             |
| `contentFooter`    | `JSX.Element`             | `null`  | An optional JSX element that is displayed as the modal footer.                                                                             |
| `background`       | `string`                  | `rgba(0, 0, 0, 0.75)` | An optional parameter to set the background color behind the modal.                                                               |
| `modalAlign`       | `"top"` or `"middle"` or `"bottom"` or `"baseline"` or `"sub"` or `"text-top"` | `"middle"` | An optional parameter to set the vertical alignment of the modal.                                                                     |
| `modalRadius`      | `string`                  | `"8px"` | An optional parameter to set the border radius of the modal.                                                                             |
| `modalBackground`  | `string`                  | `"#FFF"` | An optional parameter to set the CSS background property of the modal.                                                                   |
| `modalShadow`      | `string`                  | `"0 0 10px #000"` | An optional parameter to set the CSS box-shadow property of the modal.                                                            |
| `modalMinWidth`    | `string`                  | `"500px"` | An optional parameter to set the min-width property of the modal.                                                                        |

## Examples

### Basic example

<img src="https://github.com/Jerome-Marichez/react-modal/blob/main/example1.jpg">

```javascript
const [modalOpen, setModalOpen] = useState(true);

<Modal isOpen={modalOpen}
       contentBody={"This is a text"}
       onClose={() => { setModalOpen(false); }}
/>
```

### Customized example

<img src="https://github.com/Jerome-Marichez/react-modal/blob/main/example2.jpg">

```javascript
const [modalOpen, setModalOpen] = useState(true);

  <Modal isOpen={modalOpen}
        contentHeader={<div className="modal-line">Modal Title</div>}
        contentBody={<div className="modal-line">This is a Body</div>}
        contentFooter={<div className="modal-line">This is a footer</div>}
        modalAlign="top"
        backgroundColor="rgba(200, 200, 200, 0.5)"
        modalBackground="grey"
        modalShadow="0 0 15px grey"
        modalMinWidth="190px"
        modalRadius="300px"
        onClose={() => { setModalOpen(false); }}
      />
 ```
