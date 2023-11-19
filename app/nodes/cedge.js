import { BaseEdge , getSmoothStepPath } from 'reactflow';
 
export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  });

 
  return (
    <>
      <BaseEdge id={id} path={edgePath} />
    </>
  );
}