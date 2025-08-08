const Style = ({ attributes, id }) => {
	const { theme } = attributes;
	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksBetaTeamSection`;

	console.log(theme, blockSl)
	return <style dangerouslySetInnerHTML={{
		__html: `
		
	

	`}} />;
}
export default Style;