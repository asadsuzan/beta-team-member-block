import { getBackgroundCSS, getBorderCSS, getBoxCSS, getTypoCSS, isValidCSS } from "../../../../bpl-tools-main/utils/getCSS"

const Style = ({ attributes, id }) => {
	const { styles = {} } = attributes;
	const { section, header, title, subTitle, card, img, cardContent } = styles

	const { name, role, bio, button } = cardContent


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
	const socialContainerSL = `${cardTextSL} .btms-card-icons`
	const socialButtonSL = `${socialContainerSL} .btms-card-icon`
	const socialIconSL = `${socialContainerSL} svg`
	const themeTwoBlockSl = `${mainSl} .bBlocksBetaTeamSectionV2`;
	const themeTwoSectionSL = `${themeTwoBlockSl} .btms-team-section`;
	const themeTwoContainerSL = `${themeTwoSectionSL} .btms-container`;
	const themeTwoDeaderSL = `${themeTwoContainerSL} .btms-header`;
	const themeTwoTitleSL = `${themeTwoDeaderSL} .btms-title`;
	const themeTwoSubTitleSL = `${themeTwoDeaderSL} .btms-subtitle`;
	const themeTwoGridSL = `${themeTwoContainerSL} .btms-wrapper`;
	const themeTwoCardSL = `${themeTwoGridSL} .btms-card`;
	const themeTwoCardBodySL = `${themeTwoCardSL} .btms-card-body`;
	const themeTwoNameSL = `${themeTwoCardBodySL} .btms-name`;
	const themeTwoRoleSL = `${themeTwoCardBodySL} .btms-role`;
	const themeTwoBioSL = `${themeTwoCardBodySL} .btms-bio`;
	const themeTwoSocialWrapperSL = `${themeTwoCardBodySL} .btms-social`
	const themeTwoSocialButtonSL = `${themeTwoSocialWrapperSL} .btms-link`
	const themeTwoSocialIconSL = `${themeTwoSocialButtonSL} svg`



	return <style dangerouslySetInnerHTML={{
		__html: `
		   ${getTypoCSS("", title.typo).googleFontLink} 
		   ${getTypoCSS("", subTitle.typo).googleFontLink} 
		   ${getTypoCSS("", cardContent.name.typo).googleFontLink} 
		   ${getTypoCSS("", cardContent.role.typo).googleFontLink} 
		   ${getTypoCSS("", cardContent.bio.typo).googleFontLink} 

		 ${getTypoCSS("", title.typo).googleFontLink} 
		 ${getTypoCSS("", subTitle.typo).googleFontLink} 
		 ${getTypoCSS("", name.typo).googleFontLink} 
		 ${getTypoCSS("", role.typo).googleFontLink} 
		 ${getTypoCSS("", bio.typo).googleFontLink} 

           ${getTypoCSS(titleSL, title.typo).styles} 
           ${getTypoCSS(subTitleSL, subTitle.typo).styles} 
           ${getTypoCSS(cardNameSL, cardContent.name.typo).styles} 
           ${getTypoCSS(cardRoleSL, cardContent.role.typo).styles} 
           ${getTypoCSS(cardBioSL, cardContent.bio.typo).styles} 

		    ${getTypoCSS(themeTwoTitleSL, title.typo).styles} 
         ${getTypoCSS(themeTwoSubTitleSL, subTitle.typo).styles} 


		 ${getTypoCSS(themeTwoNameSL, name.typo).styles} 
         ${getTypoCSS(themeTwoRoleSL, role.typo).styles} 
         ${getTypoCSS(themeTwoBioSL, bio.typo).styles} 

           ${subTitleSL}{
		    margin:${getBoxCSS(subTitle.margin)};
            color:${subTitle?.color};
		  }
           ${socialButtonSL}{
		  	 	${isValidCSS('width', cardContent.button?.width)}
		 		${isValidCSS('height', cardContent?.button.height)}
				${getBackgroundCSS(cardContent.button.bg)}
				${getBorderCSS(cardContent.button.border)}
				border-radius:${cardContent.button.radius}%;
		  }
           ${socialIconSL}{
		  	 	fill:${cardContent.button.icon.fill};
				width:${cardContent.button?.icon.size}px;
				height:${cardContent.button?.icon.size}px;
				
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
		padding:${getBoxCSS(section?.padding)};
	    margin:${getBoxCSS(section?.margin)};
		${getBackgroundCSS(section?.bg)}
		border-radius:${getBoxCSS(section?.radius)};
          

		
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
	






		${themeTwoSectionSL} {
		padding:${getBoxCSS(section?.padding)};
	    margin:${getBoxCSS(section?.margin)};
		${getBackgroundCSS(section?.bg)}
		border-radius:${getBoxCSS(section?.radius)}
		
		}


		${themeTwoDeaderSL}{
		 padding:${getBoxCSS(header.padding)};
		 margin:${getBoxCSS(header.margin)};
		 text-align: ${header.textAlign};
		
		}
		  
		${themeTwoTitleSL}{
	  	color:${title?.color};
	 	margin:${getBoxCSS(title.margin)};
		}
		${themeTwoSubTitleSL}{
	  	color:${subTitle?.color};
	 	margin:${getBoxCSS(subTitle.margin)};
		}

		${themeTwoCardSL}{
		 ${isValidCSS('width', card?.width)}
		 ${isValidCSS('height', card?.height)}
		 padding:${getBoxCSS(card?.padding)};
		 margin:${getBoxCSS(card?.margin)};
		 ${getBorderCSS(card.border)};
		 border-radius:${card.radius}px;

		
		}

		  ${themeTwoCardBodySL}{
		       text-align:${cardContent.textAlign}
            }

		   ${themeTwoNameSL}{
			   margin:${getBoxCSS(name?.margin)};
			   color:${name?.color}
			}

         ${themeTwoRoleSL}{
			   margin:${getBoxCSS(role?.margin)};
			   color:${role?.color}
			 }

         ${themeTwoBioSL}{
			   margin:${getBoxCSS(bio?.margin)};
			   color:${bio?.color}
			 }



			${themeTwoSocialButtonSL}{
		  	 	${isValidCSS('width', button?.width)}
		 		${isValidCSS('height', button.height)}
				${getBackgroundCSS(button.bg)}
				${getBorderCSS(button.border)}
				border-radius:${button.radius}%;
		  }

            

		    ${themeTwoSocialIconSL}{
		  	 	fill:${button.icon.fill};
				width:${button?.icon.size}px;
				height:${button?.icon.size}px;
				
		  }


		
	`}} />;
}
export default Style;