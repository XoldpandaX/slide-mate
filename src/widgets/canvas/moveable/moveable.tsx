import {
  DraggableProps,
  ResizableProps,
  RotatableProps,
  makeMoveable,
  Rotatable,
  Draggable,
  Resizable,
} from 'react-moveable';

type CustomMoveable = DraggableProps & ResizableProps & RotatableProps;

// To use react-moveable lib you have to import only the component created below(tree-shaking)
const Moveable = makeMoveable<CustomMoveable>([Rotatable, Draggable, Resizable]);

export default Moveable;
