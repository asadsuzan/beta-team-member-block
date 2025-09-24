import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import TeamSection from './Components/Common/TeamSection';


document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-btms-block-team-section');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<TeamSection attributes={attributes} />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});