import { getBackgroundCSS, getBoxCSS } from "../../../../bpl-tools-main/utils/getCSS"

const Style = ({ attributes, id }) => {
	const { styles = {} } = attributes;
	const { section, header } = styles
	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksBetaTeamSection`;

	console.log(section.bg)
	return <style dangerouslySetInnerHTML={{
		__html: `

		${blockSl} .btms-variation2-section {
		
		width:${section?.width};
		height:${section?.height};
		padding:${getBoxCSS(section.padding)};
	    margin:${getBoxCSS(section.margin)};
		${getBackgroundCSS(section.bg)}

      				.btms-container {

				.btms-header{
					 padding:${getBoxCSS(header.padding)};
					 margin:${getBoxCSS(header.margin)};
					 text-align: ${header.textAlign};
					
					}
	  

				}


		
		}
	








		
	`}} />;
}
export default Style;