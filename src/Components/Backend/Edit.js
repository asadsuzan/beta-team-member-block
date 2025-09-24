import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import TeamSection from '../Common/TeamSection';
import ClipBoard from '../../shortcode/clipBoard';
import { usePremiumInEditor } from '../../../../bpl-tools/hooks';

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device, postType, postId } = props;

  const { isPremium, isLoading } = usePremiumInEditor("btmsUtils", "btmsPremiumChecker");

  console.log({ isPremium, isLoading });

  return (
    <>
      <Settings {...{ attributes, setAttributes, device, clientId, isPremium }} />

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

