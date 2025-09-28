import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import { BplBlockPreview } from '../../../../../bpl-tools/Components';
import { themes } from '../../../utils/themes';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { useState } from 'react';
import { AboutProModal } from "../../../../../bpl-tools/ProControls";
const Settings = ({ attributes, setAttributes, device, clientId, siteUrl, isPremium }) => {
	const [isProModalOpen, setIsProModalOpen] = useState(false);
	const { alignment, theme } = attributes;
	const siteLocation = `${siteUrl}/wp-admin/edit.php?post_type=btms_team_section&page=demo_page#/pricing`;

	return <>
		<InspectorControls>
			<div className='bBlocksInspectorInfo'>
				Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/btms-block' target='_blank' rel='noopener noreferrer'>B Blocks</a>
			</div>

			<TabPanel className='bPlTabPanel wp-block-btms-block-team-section' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
				{
					tab => <>
						{'general' === tab.name && <General device={device} attributes={attributes} setAttributes={setAttributes} setIsProModalOpen={setIsProModalOpen}
							isPremium={isPremium}
						/>}

						{'style' === tab.name && <Style device={device} attributes={attributes} setAttributes={setAttributes}
							isProModalOpen={isProModalOpen} isPremium={isPremium}

						/>}
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


			{/* for blocks */}
			<BplBlockPreview
				blocks={themes()}
				clientId={clientId}
				value={theme}
				isPremium={isPremium}

			/>


		</BlockControls>
		<AboutProModal
			isProModalOpen={isProModalOpen}
			setIsProModalOpen={setIsProModalOpen}
			link={siteLocation}
		>
			<li>
				<strong>
					{__("Themes: ", "btms-block")}
				</strong>

			</li>
			<li>
				<strong>
					{__("Headline: ", "btms-block")}
				</strong>

			</li>
		</AboutProModal>
	</>;
};
// export default Settings;
export default compose(
	withSelect((select) => {
		return {
			siteUrl: select('core').getSite()?.url,
		};
	})
)(Settings);