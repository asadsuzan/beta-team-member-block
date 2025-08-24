import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../bpl-tools-main/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import { BplBlockPreview } from '../../../../../bpl-tools-main/Components';
import { themes } from '../../../utils/themes';
// import BlockPreview from './panel/BlockPreview';
// import { toolTipPresets } from '../../../utils/functions';

const Settings = ({ attributes, setAttributes, device, clientId }) => {
	const { alignment, theme } = attributes;
	console.log(theme);
	return <>
		<InspectorControls>
			<div className='bBlocksInspectorInfo'>
				Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
			</div>

			<TabPanel className='bPlTabPanel wp-block-b-blocks-team-section-beta' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
				{
					tab => <>
						{'general' === tab.name && <General device={device} attributes={attributes} setAttributes={setAttributes} />}

						{'style' === tab.name && <Style device={device} attributes={attributes} setAttributes={setAttributes} />}
					</>
				}
			</TabPanel>
		</InspectorControls>


		<BlockControls>

			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Block Name Alignment')} alignmentControls={[
				{ title: __('Block Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
				{ title: __('Block Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
				{ title: __('Block Name in right', 'textdomain'), align: 'right', icon: 'align-right' }
			]} />

			{/* for image/screenshot */}
			{/* <BlockPreview
				options={toolTipPresets}
				isPremium={false}
				value={theme}
				onChange={val => setAttributes({ theme: val })}
			/> */}

			{/* for blocks */}
			<BplBlockPreview
				blocks={themes()}
				clientId={clientId}
				value={theme}
			/>


		</BlockControls>
	</>;
};
export default Settings;
