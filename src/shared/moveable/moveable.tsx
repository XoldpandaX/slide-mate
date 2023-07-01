import {
  DraggableProps,
  ResizableProps,
  RotatableProps,
  ScalableProps,
  makeMoveable,
  Rotatable,
  Draggable,
  Resizable,
  Scalable,
} from 'react-moveable';

type CustomMoveable = DraggableProps & ResizableProps & RotatableProps & ScalableProps;

// To use react-moveable lib you have to import only the component created below(tree-shaking)
const Moveable = makeMoveable<CustomMoveable>([Rotatable, Draggable, Resizable, Scalable]);

export default Moveable;
