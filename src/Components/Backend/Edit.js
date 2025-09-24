import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import TeamSection from '../Common/TeamSection';
import ClipBoard from '../../shortcode/clipBoard';


const Edit = (props) => {
  const { attributes, setAttributes, clientId, device, postType, postId } = props;




  return (
    <>
      <Settings {...{ attributes, setAttributes, device, clientId }} />

      <div {...useBlockProps({
        draggable: false
      })}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />

        {postType == 'btms_team_section' && (
          <ClipBoard
            shortcode={`[btms_team_section id=${postId}]`}
          />
        )}

        <TeamSection {...{ attributes, setAttributes }} />
      </div>
    </>
  );
};
// export default Edit; 

export default withSelect((select) => {
  const { getDeviceType, getCurrentPostId, getCurrentPostType } = select("core/editor");
  return {

    device: getDeviceType()?.toLowerCase(),
    postType: getCurrentPostType(),
    postId: getCurrentPostId(),
  };
})(Edit);

