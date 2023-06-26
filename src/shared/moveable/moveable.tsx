import {
  type DraggableProps,
  type ResizableProps,
  type RotatableProps,
  makeMoveable,
  Rotatable,
  Draggable,
  Resizable,
} from 'react-moveable';

// To use react-moveable lib you have to import only the component created below(tree-shaking)
export const Moveable = makeMoveable<DraggableProps & ResizableProps & RotatableProps>([
  Draggable,
  Resizable,
  Rotatable,
]);
