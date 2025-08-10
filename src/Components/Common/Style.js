import { getBackgroundCSS, getBoxCSS, getTypoCSS, isValidCSS } from "../../../../bpl-tools-main/utils/getCSS"

const Style = ({ attributes, id }) => {
	const { styles = {} } = attributes;
	const { section, header, title, subTitle, card, img, cardContent } = styles
	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksBetaTeamSection`;
	const sectionSL = `${blockSl} .btms-variation2-section`;
	const containerSL = `${sectionSL} .btms-container `;
	const headerSL = `${containerSL} .btms-header`;
	const titleSL = `${headerSL} .btms-title`;
	const subTitleSL = `${headerSL} .btms-subtitle`;
	const gridSL = `${containerSL} .btms-grid`;
	const cardGroupSL = `${containerSL} .btms-card-group`;
	const cardSL = `${cardGroupSL} .btms-card`
	const cardImgWrapperSL = `${cardSL} .btms-card-img-wrapper`
	const cardImgSL = `${cardImgWrapperSL} .btms-card-img`

	const cardTextSL = `${cardSL} .btms-card-text`
	const cardNameSL = `${cardTextSL} .btms-card-name`
	const cardRoleSL = `${cardTextSL} .btms-card-role`
	const cardBioSL = `${cardTextSL} .btms-card-bio`



	return <style dangerouslySetInnerHTML={{
		__html: `
		   ${getTypoCSS("", title.typo).googleFontLink} 
		   ${getTypoCSS("", subTitle.typo).googleFontLink} 
		   ${getTypoCSS("", cardContent.name.typo).googleFontLink} 
		   ${getTypoCSS("", cardContent.role.typo).googleFontLink} 
		   ${getTypoCSS("", cardContent.bio.typo).googleFontLink} 

           ${getTypoCSS(titleSL, title.typo).styles} 
           ${getTypoCSS(subTitleSL, subTitle.typo).styles} 
           ${getTypoCSS(cardNameSL, cardContent.name.typo).styles} 
           ${getTypoCSS(cardRoleSL, cardContent.role.typo).styles} 
           ${getTypoCSS(cardBioSL, cardContent.bio.typo).styles} 

           ${subTitleSL}{
		    margin:${getBoxCSS(subTitle.margin)};
            color:${subTitle?.color};
		  }

		  ${cardSL} {
		 		 ${isValidCSS('width', card?.width)}
		 		 ${isValidCSS('height', card?.height)}
				  padding:${getBoxCSS(card?.padding)};
				  margin:${getBoxCSS(card?.margin)};

				 }
	      
             ${cardImgSL}{
			   ${isValidCSS('width', img?.width)}
		 	   ${isValidCSS('height', img?.height)}
			   border-radius:${img.radius}px;
			   
			 
			 }
             ${cardTextSL}{
			  text-align:${cardContent.textAlign}
			 
			 }

             ${cardNameSL}{
			   margin:${getBoxCSS(cardContent?.name?.margin)};
			   color:${cardContent?.name?.color}
			 }
             ${cardRoleSL}{
			   margin:${getBoxCSS(cardContent?.role?.margin)};
			   color:${cardContent?.role?.color}
			 }
             ${cardBioSL}{
			   margin:${getBoxCSS(cardContent?.bio?.margin)};
			   color:${cardContent?.bio?.color}
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