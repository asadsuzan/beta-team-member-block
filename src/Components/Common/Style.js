import { getBackgroundCSS, getBoxCSS, getTypoCSS, isValidCSS } from "../../../../bpl-tools-main/utils/getCSS"

const Style = ({ attributes, id }) => {
	const { styles = {} } = attributes;
	const { section, header, title, subTitle } = styles
	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksBetaTeamSection`;
	const sectionSL = `${blockSl} .btms-variation2-section`;
	const containerSL = `${sectionSL} .btms-container `;
	const headerSL = `${containerSL} .btms-header`;
	const titleSL = `${headerSL} .btms-title`;
	const subTitleSL = `${headerSL} .btms-subtitle`;

	console.log(section.bg)
	return <style dangerouslySetInnerHTML={{
		__html: `
		   ${getTypoCSS("", title.typo).googleFontLink} 
		   ${getTypoCSS("", subTitle.typo).googleFontLink} 

           ${getTypoCSS(titleSL, title.typo).styles} 
           ${getTypoCSS(subTitleSL, subTitle.typo).styles} 

           ${subTitleSL}{
		    margin:${getBoxCSS(subTitle.margin)};
            color:${subTitle?.color};
		  }
	      

		${blockSl} .btms-variation2-section {
		
		${isValidCSS('width', section?.width)}
		height:${section?.height};
		padding:${getBoxCSS(section.padding)};
	    margin:${getBoxCSS(section.margin)};
		${getBackgroundCSS(section.bg)}


		
        .btms-container {
		.btms-header{
					 padding:${getBoxCSS(header.padding)};
					 margin:${getBoxCSS(header.margin)};
					 text-align: ${header.textAlign};

					 .btms-title{
					    color:${title?.color};
					    margin:${getBoxCSS(title.margin)};
					  }
				
					
					}
	  
                          
				}


		
		}
	








		
	`}} />;
}
export default Style;