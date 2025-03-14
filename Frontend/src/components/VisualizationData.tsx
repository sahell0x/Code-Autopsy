interface VisualizationDataProp {
    visualization:string,
}

function VisualizationData({visualization}:VisualizationDataProp) {
  return (
    <>
      {visualization}
    </>
  )
}

export default VisualizationData;
