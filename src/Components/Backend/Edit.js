import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import TeamSection from '../Common/TeamSection';



const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;




  return (
    <>
      <Settings {...{ attributes, setAttributes, device }} />

      <div {...useBlockProps({
        draggable: false
      })}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />

        <TeamSection {...{ attributes }} />
      </div>
    </>
  );
};
// export default Edit; 

export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");
  return {

    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);