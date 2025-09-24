
import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBorderCSS, getBoxCSS, getTypoCSS, isValidCSS } from "../../../../bpl-tools/utils/getCSS"

const Style = ({ attributes, id }) => {
	const { styles = {}, align, columns } = attributes;
	const { section, header, title, subTitle, card, img, cardContent } = styles

	const { name, role, bio, button } = cardContent


	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksBetaTeamSection`;
	const sectionSL = `${blockSl} .btms-variation2-section`;
	const containerSL = `${sectionSL} .container `;
	const headerSL = `${containerSL} .btms-header`;
	const titleSL = `${headerSL} .btms-title`;
	const subTitleSL = `${headerSL} .btms-subtitle`;
	const gridSL = `${containerSL} .btms-grid`;
	const cardGroupSL = `${containerSL} .btms-card-group`;
	const cardSL = `${cardGroupSL} .btms-card`
	const cardImgWrapperSL = `${cardSL} .img-wrapper`
	const cardImgSL = `${cardImgWrapperSL} .image`

	const cardTextSL = `${cardSL} .btms-card-text`
	const cardNameSL = `${cardTextSL} .btms-card-name`
	const cardRoleSL = `${cardTextSL} .btms-card-role`
	const cardBioSL = `${cardTextSL} .btms-card-bio`
	const socialContainerSL = `${cardTextSL} .btms-card-icons`
	const socialButtonSL = `${socialContainerSL} .btms-card-icon`
	const socialIconSL = `${socialContainerSL} svg`
	const themeTwoBlockSl = `${mainSl} .bBlocksBetaTeamSectionV2`;
	const themeTwoSectionSL = `${themeTwoBlockSl} .btms-team-section`;
	const themeTwoContainerSL = `${themeTwoSectionSL} .container`;
	const themeTwoHeaderSL = `${themeTwoContainerSL} .btms-header`;
	const themeTwoTitleSL = `${themeTwoHeaderSL} .btms-title`;
	const themeTwoSubTitleSL = `${themeTwoHeaderSL} .btms-subtitle`;
	const themeTwoGridSL = `${themeTwoContainerSL} .btms-wrapper`;
	const themeTwoCardSL = `${themeTwoGridSL} .btms-card`;
	const themeTwoCardBodySL = `${themeTwoCardSL} .btms-card-body`;
	const themeTwoNameSL = `${themeTwoCardBodySL} .btms-name`;
	const themeTwoRoleSL = `${themeTwoCardBodySL} .btms-role`;
	const themeTwoBioSL = `${themeTwoCardBodySL} .btms-bio`;
	const themeTwoSocialWrapperSL = `${themeTwoCardBodySL} .btms-social`
	const themeTwoSocialButtonSL = `${themeTwoSocialWrapperSL} .btms-link`
	const themeTwoSocialIconSL = `${themeTwoSocialButtonSL}  svg`



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



		 ${gridSL}{
		  grid-template-columns: repeat(${align ? columns?.desktop : 2}, 1fr);
		  ${tabBreakpoint}{
		  grid-template-columns: repeat(${align ? columns?.tablet : 2}, 1fr);
          }
		  ${mobileBreakpoint}{
		   grid-template-columns: repeat(${align ? columns?.mobile : 2}, 1fr);
		  }	 
		}
		 

           ${subTitleSL}{
		    margin:${getBoxCSS(subTitle.margin?.desktop)};
            color:${subTitle?.color};
		  }
           ${socialButtonSL}{
		        padding:${getBoxCSS(cardContent?.button?.padding.desktop)};
				${getBackgroundCSS(cardContent?.button?.bg)}
				${getBorderCSS(cardContent?.button?.border)}
				border-radius:${cardContent?.button?.radius}%;
		  }
           ${socialIconSL}{
		  	 	fill:${cardContent.button.icon.fill};
				width:${cardContent.button?.icon.size}px;
				height:${cardContent.button?.icon.size}px;
				
		  }


		  ${cardSL} {
				  padding:${getBoxCSS(card?.padding?.desktop)};
				  margin:${getBoxCSS(card?.margin?.desktop)};
             }

	         ${cardImgWrapperSL}{
		        padding:${getBoxCSS(img?.wrapper?.padding?.desktop)};
		 	    margin:${getBoxCSS(img?.wrapper?.margin?.desktop)};
		 	    ${getBorderCSS(img?.wrapper?.border)};	
			    border-radius:${getBoxCSS(img?.wrapper?.radius)};  
			 }	      
             ${cardImgSL}{
			   border-radius:${img?.avatar?.radius}px;	
			   ${isValidCSS('min-height', img?.avatar?.minHeight)}
			 }
             ${cardTextSL}{
			  text-align:${cardContent.textAlign}
			}

             ${cardNameSL}{
			   margin:${getBoxCSS(cardContent?.name?.margin.desktop)};
			   color:${cardContent?.name?.color}
			 }
             ${cardRoleSL}{
			   margin:${getBoxCSS(cardContent?.role?.margin.desktop)};
			   color:${cardContent?.role?.color}
			 }
             ${cardBioSL}{
			   margin:${getBoxCSS(cardContent?.bio?.margin.desktop)};
			   color:${cardContent?.bio?.color};
			 }


         ${sectionSL}{
		   padding:${getBoxCSS(section?.padding?.desktop)};
	       margin:${getBoxCSS(section?.margin?.desktop)};
		   ${getBackgroundCSS(section?.bg)}
		   border-radius:${getBoxCSS(section?.radius)};
		 }

          ${headerSL}{
		   padding:${getBoxCSS(header?.padding?.desktop)};
		   margin:${getBoxCSS(header?.margin?.desktop)};
		   text-align: ${header.textAlign};
		  }


        ${titleSL}{
		    color:${title?.color};
			margin:${getBoxCSS(title?.margin?.desktop)};
		}

         ${tabBreakpoint} {
           ${sectionSL}{
		   padding:${getBoxCSS(section?.padding?.tablet)};
	       margin:${getBoxCSS(section?.margin?.tablet)};
		   }

		 ${headerSL}{
		   padding:${getBoxCSS(header?.padding?.tablet)};
		   margin:${getBoxCSS(header?.margin?.tablet)};
	 	    }
          ${titleSL}{
		    margin:${getBoxCSS(title?.margin?.tablet)};
		  }
			
           ${subTitleSL}{
		    margin:${getBoxCSS(subTitle.margin?.tablet)};
           
		  }
		${cardSL} {
             padding:${getBoxCSS(card?.padding?.tablet)};
              margin:${getBoxCSS(card?.margin?.tablet)};
             }
             ${cardNameSL}{
			   margin:${getBoxCSS(cardContent?.name?.margin.tablet)};
			   color:${cardContent?.name?.color}
			 }
             ${cardRoleSL}{
			   margin:${getBoxCSS(cardContent?.role?.margin.tablet)};
			   color:${cardContent?.role?.color}
			 }
             ${cardBioSL}{
			   margin:${getBoxCSS(cardContent?.bio?.margin.tablet)};
			   color:${cardContent?.bio?.color};
			 }
			   
           ${socialButtonSL}{
		        padding:${getBoxCSS(cardContent?.button?.padding.tablet)};
              }
		   
	 }



        ${mobileBreakpoint}{

        ${sectionSL} {
		padding:${getBoxCSS(section?.padding?.mobile)};
	    margin:${getBoxCSS(section?.margin?.mobile)};
	}

		${headerSL}{
		   padding:${getBoxCSS(header?.padding?.mobile)};
		   margin:${getBoxCSS(header?.margin?.mobile)};
		   }

		${titleSL}{
		    margin:${getBoxCSS(title?.margin?.mobile)};
		  }
			
           ${subTitleSL}{
		    margin:${getBoxCSS(subTitle.margin?.mobile)};
           
		  }

		  ${cardSL} {
            padding:${getBoxCSS(card?.padding?.mobile)};
         	margin:${getBoxCSS(card?.margin?.mobile)};
         }
          ${cardNameSL}{
			   margin:${getBoxCSS(cardContent?.name?.margin.mobile)};
			   color:${cardContent?.name?.color}
			 }
             ${cardRoleSL}{
			   margin:${getBoxCSS(cardContent?.role?.margin.mobile)};
			   color:${cardContent?.role?.color}
			 }
             ${cardBioSL}{
               margin:${getBoxCSS(cardContent?.bio?.margin.mobile)};
			   color:${cardContent?.bio?.color};
			 }

      
          
           ${socialButtonSL}{
		        padding:${getBoxCSS(cardContent?.button?.padding.mobile)};
              }



 }







 	 ${themeTwoGridSL}{
		  grid-template-columns: repeat(${align ? columns?.desktop : 2}, 1fr);
		  ${tabBreakpoint}{
		  grid-template-columns: repeat(${align ? columns?.tablet : 2}, 1fr);
          }
		  ${mobileBreakpoint}{
		   grid-template-columns: repeat(${align ? columns?.mobile : 2}, 1fr);
		  }	 
		}

		${themeTwoSectionSL} {
		padding:${getBoxCSS(section?.padding?.desktop)};
	    margin:${getBoxCSS(section?.margin?.desktop)};
		${getBackgroundCSS(section?.bg)}
		border-radius:${getBoxCSS(section?.radius)}
		
		}


		${themeTwoHeaderSL}{
		 padding:${getBoxCSS(header.padding?.desktop)};
		 margin:${getBoxCSS(header.margin?.desktop)};
		 text-align: ${header.textAlign};
		
		}
		  
		${themeTwoTitleSL}{
	  	color:${title?.color};
	 	margin:${getBoxCSS(title.margin?.desktop)};
		}
		${themeTwoSubTitleSL}{
	  	color:${subTitle?.color};
	 	margin:${getBoxCSS(subTitle.margin?.desktop)};
		}

		${themeTwoCardSL}{
		
		 padding:${getBoxCSS(card?.padding?.desktop)};
		 margin:${getBoxCSS(card?.margin?.desktop)};
		 ${getBorderCSS(card.border)};
		 border-radius:${card.radius}px;

		
		}

		  ${themeTwoCardBodySL}{
		       text-align:${cardContent.textAlign}
            }

		   ${themeTwoNameSL}{
			   margin:${getBoxCSS(name?.margin?.desktop)};
			   color:${name?.color}
			}

         ${themeTwoRoleSL}{
			   margin:${getBoxCSS(role?.margin?.desktop)};
			   color:${role?.color}
			 }

         ${themeTwoBioSL}{
			   margin:${getBoxCSS(bio?.margin?.desktop)};
			   color:${bio?.color}
			 }



			${themeTwoSocialButtonSL}{
                ${getBackgroundCSS(button.bg)}
				${getBorderCSS(button.border)}
				border-radius:${button.radius}px;
		  }

            

		    ${themeTwoSocialIconSL}{
				fill:${cardContent?.button?.icon?.fill};
				width:${cardContent?.button?.icon?.size}px;
				height:${cardContent?.button?.icon?.size}px;
				
		  }


		
	`}} />;
}
export default Style;