const Temper = ({ tempStr }) => {
	const temperArr = tempStr.split(", "); /* Først bliver der opdelt tempStr string i et array */
	console.log(temperArr);

	/* Et array, som indeholder farver til at bruge sammen med arrayet temperament typer */
	const temperColors = ["#ACD7FF", "#EDA8B3", "#C5E59C", "#F1E689", "#EDC4A8", "#EEC6FA", "#FFDAF5"];

	return (
		<div className="max-w-fit flex gap-2 flex-wrap">
			{/* Mapper igennem arrayet for temperament ud fra index tallet */}
			{temperArr.map((temper, index) => (
				<p
					/* Anvendes en unik nøgle/key til liste elementerne i array'et */
					key={index}
					/* Laver en styling ud fra det valgte index og relevante index nr på farve arrayet*/
					style={{
						backgroundColor: temperColors[index],
					}}
					className="my-1 py-2 px-3.5 rounded-full text-[#6B8B42] text-xs font-light justify-center"
				>
					{/* Viser et enkelt array objekt pr. "tag"/boks og gør første bogstav stort, resten af bogstaverne små */}
					{temper.substring(0, 1).toUpperCase() + temper.substring(1).toLowerCase()}
				</p>
			))}
		</div>
	);
};

export default Temper;

/* return (
		<ul className="flex gap-2 my-2 text-[#6B8B42]">
			<li className="bg-[#ACD7FF] p-2 px-3 rounded-3xl">Confident</li>
			<li className="bg-[#EDA8B3] p-2 px-3 rounded-3xl">Alert</li>
			<li className="bg-[#C5E59C] p-2 px-3 rounded-3xl">Playful</li>
			<li className="bg-[#F1E689] text-[#978C2F] p-2 px-3 rounded-3xl">Loyal</li>
		</ul>
	); */
