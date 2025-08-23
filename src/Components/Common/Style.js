
import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools-main/utils/data';
import { getBackgroundCSS, getBorderCSS, getBoxCSS, getTypoCSS, isValidCSS } from "../../../../bpl-tools-main/utils/getCSS"

const Style = ({ attributes, id }) => {
	const { styles = {}, align, columns } = attributes;
	const { section, header, title, subTitle, card, img, cardContent } = styles

	const { name, role, bio, button, badge } = cardContent


	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .tmsTeamWrapper`;
	const sectionSL = `${blockSl} section`;
	const containerSL = `${blockSl} .container `;
	const headerSL = `${containerSL} .header`;
	const titleSL = `${headerSL} .title`;
	const subTitleSL = `${headerSL} .subtitle`;
	const cardBodySl = `${containerSL} .card-body`
	const cardSL = `${containerSL} .btms-card`
	const badgeSl = `${containerSL} .icon-badge`;
	const badgeIconSl = `${badgeSl} span svg`;
	const locationSl = `${containerSL} .team-member-location`;
	const imgWrapperSl = `${containerSL} .img-wrapper`
	const imgSl = `${cardSL} .image`
	const nameSl = `${containerSL} .name`;
	const roleSl = `${containerSL} .role`;
	const bioSl = `${containerSL} .bio`;
	const socialContainerSL = `${containerSL} .socials`
	const linkSl = `${socialContainerSL} .link`
	const iconSl = `${linkSl} .icon svg`
	const themeOneSl = `${blockSl} .bBlocksBetaTeamSection`;
	const themeTwoSl = `${blockSl} .bBlocksBetaTeamSectionV2`;
	const themeThreeSl = `${blockSl} .bBlocksBetaTeamSectionV3`;
	const themeFourSl = `${blockSl} .bBlocksBetaTeamSectionV4`;
	const gridSL = `${containerSL} .grid`;
	const cardGroupSL = `${containerSL} .btms-card-group`;



	const themeTwoBlockSl = `${mainSl} .bBlocksBetaTeamSectionV2`;
	const themeTwoSectionSL = `${themeTwoBlockSl} .btms-team-section`;
	const themeTwoContainerSL = `${themeTwoSectionSL} .container`;
	const themeTwoHeaderSL = `${themeTwoContainerSL} .btms-header`;
	const themeTwoTitleSL = `${themeTwoHeaderSL} .btms-title`;
	const themeTwoSubTitleSL = `${themeTwoHeaderSL} .btms-subtitle`;






	return <style dangerouslySetInnerHTML={{
		__html: `
		   ${getTypoCSS("", title.typo).googleFontLink} 
		   ${getTypoCSS("", subTitle.typo).googleFontLink} 
		   ${getTypoCSS("", cardContent.name.typo).googleFontLink} 
		   ${getTypoCSS("", cardContent.role.typo).googleFontLink} 
		   ${getTypoCSS("", cardContent.bio.typo).googleFontLink} 
		   ${getTypoCSS("", cardContent.location.typo).googleFontLink} 

		   ${getTypoCSS("", title.typo).googleFontLink} 
		   ${getTypoCSS("", subTitle.typo).googleFontLink} 
		   ${getTypoCSS("", name.typo).googleFontLink} 
		   ${getTypoCSS("", role.typo).googleFontLink} 
		   ${getTypoCSS("", bio.typo).googleFontLink} 

           ${getTypoCSS(titleSL, title.typo).styles} 
           ${getTypoCSS(subTitleSL, subTitle.typo).styles} 
           ${getTypoCSS(nameSl, cardContent.name.typo).styles} 
           ${getTypoCSS(roleSl, cardContent.role.typo).styles} 
           ${getTypoCSS(bioSl, cardContent.bio.typo).styles} 
           ${getTypoCSS(locationSl, cardContent.location.typo).styles} 

		   ${getTypoCSS(themeTwoTitleSL, title.typo).styles} 
           ${getTypoCSS(themeTwoSubTitleSL, subTitle.typo).styles} 

 
       



		 ${gridSL}{
		  grid-template-columns: repeat(${columns?.desktop}, 1fr);
		  row-gap: ${columns?.gapX};
		  column-gap: ${columns?.gapY};

		
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
        
		${subTitleSL}{
		    margin:${getBoxCSS(subTitle.margin?.desktop)};
            color:${subTitle?.color};
		  }

        ${linkSl}{
		        padding:${getBoxCSS(cardContent?.button?.padding?.desktop)};
				${getBackgroundCSS(cardContent?.button?.bg)}
				${getBorderCSS(cardContent?.button?.border)}
				border-radius:${cardContent?.button?.radius}%;
				${isValidCSS('width', cardContent?.button?.width)}
				${isValidCSS('height', cardContent?.button?.height)}
		  }
           ${iconSl}{
		  	 	fill:${cardContent?.button?.icon?.fill};
				width:${cardContent.button?.icon?.size}px;
				height:${cardContent.button?.icon?.size}px;
				
		  }


		  ${cardSL} {
				  padding:${getBoxCSS(card?.padding?.desktop)};
				  margin:${getBoxCSS(card?.margin?.desktop)};
				  ${getBorderCSS(card?.border)}
				  border-radius:${getBoxCSS(card?.radius)};

             }

	         ${imgWrapperSl}{
		        padding:${getBoxCSS(img?.wrapper?.padding?.desktop)};
		 	    margin:${getBoxCSS(img?.wrapper?.margin?.desktop)};
		 	    ${getBorderCSS(img?.wrapper?.border)};	
			    border-radius:${getBoxCSS(img?.wrapper?.radius)};  
			 }	      
             ${imgSl}{
			   border-radius:${getBoxCSS(img?.avatar?.radius)};  
			   ${isValidCSS('width', img?.avatar?.width)}
			   ${isValidCSS('height', img?.avatar?.height)}
			 }
             ${cardBodySl}{
			  text-align:${cardContent.textAlign}
			}

             ${nameSl}{
			   margin:${getBoxCSS(cardContent?.name?.margin.desktop)};
			   color:${cardContent?.name?.color};

			 }
             ${roleSl}{
			   margin:${getBoxCSS(cardContent?.role?.margin.desktop)};
			   color:${cardContent?.role?.color}
			 }
             ${bioSl}{
			   margin:${getBoxCSS(cardContent?.bio?.margin.desktop)};
			   color:${cardContent?.bio?.color};
			 }


      ${badgeSl}{
	  ${isValidCSS('width', badge?.width)}
	  ${isValidCSS('height', badge?.height)}
	   ${getBackgroundCSS(badge?.bg)}
	  border-radius:${badge?.radius}%;
    }
   
	  ${badgeIconSl}{
	  width:${badge?.icon?.size}px;
	  height:${badge?.icon?.size}px;
	  fill:${badge?.icon?.fill};
	  }

   ${locationSl}{
   color:${cardContent?.location?.color};
   }


	${themeThreeSl} .btms-card:hover .icon-badge {
	    ${getBackgroundCSS(badge?.hover?.bg)};
	  }
	${themeFourSl} .btms-card:hover .icon-badge {
	    ${getBackgroundCSS(badge?.hover?.bg)};
	  }
	${themeThreeSl} .btms-card:hover .icon-badge span svg {
	    ${getBackgroundCSS(badge?.hover?.bg)};
	  }
	${themeFourSl} .btms-card:hover .icon-badge span svg {
	    ${getBackgroundCSS(badge?.hover?.bg)};
	  }
	${themeThreeSl} .btms-card:hover .icon-badge svg {
	  fill: ${badge?.icon?.hover?.fill};
	  }
	${themeFourSl} .btms-card:hover .icon-badge svg {
	  fill: ${badge?.icon?.hover?.fill};
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
             ${nameSl}{
			   margin:${getBoxCSS(cardContent?.name?.margin.tablet)};
			 }
             ${roleSl}{
			   margin:${getBoxCSS(cardContent?.role?.margin.tablet)};
			   color:${cardContent?.role?.color}
			 }
             ${bioSl}{
			   margin:${getBoxCSS(cardContent?.bio?.margin.tablet)};
			   color:${cardContent?.bio?.color};
			 }
			   
           ${linkSl}{
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
			${getBorderCSS(card.border)};
		    border-radius:${card.radius}px;

         }
          ${nameSl}{
			   margin:${getBoxCSS(cardContent?.name?.margin.mobile)};
			 }
             ${roleSl}{
			   margin:${getBoxCSS(cardContent?.role?.margin.mobile)};
			   color:${cardContent?.role?.color}
			 }
             ${bioSl}{
               margin:${getBoxCSS(cardContent?.bio?.margin.mobile)};
			   color:${cardContent?.bio?.color};
			 }

      
          
           ${linkSl}{
		        padding:${getBoxCSS(cardContent?.button?.padding.mobile)};
              }

 }
		
	
 
   ${tabBreakpoint}{
		   ${gridSL}{
		    grid-template-columns: repeat(${columns?.tablet}, 1fr);
           }
 }
		  ${mobileBreakpoint} {
		  ${gridSL}{
		   grid-template-columns: repeat(${columns?.mobile}, 1fr);
		   }
		}




 `}} />;
}
export default Style;