//Create objects for common properties across available frames
//EN:	var masks = [{src:'/img/frames/m15/regular/m15MaskPinline.png', name:'Pinline'}, {src:'/img/frames/m15/regular/m15MaskTitle.png', name:'Title'}, {src:'/img/frames/m15/regular/m15MaskType.png', name:'Type'}, {src:'/img/frames/m15/regular/m15MaskRules.png', name:'Rules'}, {src:'/img/frames/m15/regular/m15MaskFrame.png', name:'Frame'}, {src:'/img/frames/m15/regular/m15MaskBorder.png', name:'Border'}];
/*FR/*/	var masks = [{src:'/img/frames/m15/regular/m15MaskPinline.png', name:'Ligne de Contour'}, {src:'/img/frames/m15/regular/m15MaskTitle.png', name:'Titre'}, {src:'/img/frames/m15/regular/m15MaskType.png', name:'Type'}, {src:'/img/frames/m15/regular/m15MaskRules.png', name:'Règles'}, {src:'/img/frames/m15/regular/m15MaskFrame.png', name:'Trame'}, {src:'/img/frames/m15/regular/m15MaskBorder.png', name:'Bordure'}];
var bounds = {x:0.7573, y:0.8848, width:0.188, height:0.0733};
//defines available frames
availableFrames = [
	{name:'Trame Blanche', src:'/img/frames/m15/regular/m15FrameW.png', masks:masks},
	{name:'Trame Bleu', src:'/img/frames/m15/regular/m15FrameU.png', masks:masks},
	{name:'Trame Noire', src:'/img/frames/m15/regular/m15FrameB.png', masks:masks},
	{name:'Trame Rouge', src:'/img/frames/m15/regular/m15FrameR.png', masks:masks},
	{name:'Trame Verte', src:'/img/frames/m15/regular/m15FrameG.png', masks:masks},
	{name:'Trame Multicolore', src:'/img/frames/m15/regular/m15FrameM.png', masks:masks},
	{name:'Trame Artéfact', src:'/img/frames/m15/regular/m15FrameA.png', masks:masks},
	{name:'Trame Terre', src:'/img/frames/m15/regular/m15FrameL.png', masks:masks},
	{name:'Trame Eldrazi', src:'/img/frames/m15/regular/eldrazi.png', masks:masks},
	{name:'Trame Véhicule', src:'/img/frames/m15/regular/m15FrameV.png', masks:masks},
	{name:'Force/endurence Blanc', src:'/img/frames/m15/regular/m15PTW.png', bounds:bounds},
	{name:'Force/Endurance Bleu', src:'/img/frames/m15/regular/m15PTU.png', bounds:bounds},
	{name:'Force/Endurance Noir', src:'/img/frames/m15/regular/m15PTB.png', bounds:bounds},
	{name:'Force/Endurance Rouge', src:'/img/frames/m15/regular/m15PTR.png', bounds:bounds},
	{name:'Force/Endurance Vert', src:'/img/frames/m15/regular/m15PTG.png', bounds:bounds},
	{name:'Force/Endurance Multicolore', src:'/img/frames/m15/regular/m15PTM.png', bounds:bounds},
	{name:'Force/Endurance Artéfact', src:'/img/frames/m15/regular/m15PTA.png', bounds:bounds},
	{name:'Force/Endurance Incolore', src:'/img/frames/m15/regular/m15PTC.png', bounds:bounds},
	{name:'Force/Endurance Véhicule', src:'/img/frames/m15/regular/m15PTV.png', bounds:bounds},
	{name:'Trame Minuit (Midnight)', src:'/img/frames/m15/custom/m15Midnight.png', masks:masks},
	{name:'PT Remplissage intérieur (Inner Fill)', src:'/img/frames/m15/custom/m15CustomPTInnerFill.png', bounds:{x:0.79, y:0.8977, width:0.1414, height:0.04}}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'm15Regular';
	//art bounds
	card.artBounds = {x:0.0767, y:0.1129, width:0.8476, height:0.4429};
	autoFitArt();
	//set symbol bounds
	card.setSymbolBounds = {x:0.9213, y:0.5910, width:0.12, height:0.0410, vertical:'center', horizontal: 'right'};
	resetSetSymbol();
	//watermark bounds
	card.watermarkBounds = {x:0.5, y:0.7762, width:0.75, height:0.2305};
	resetWatermark();
	//text
	loadTextOptions({
//EN:		mana: {name:'Mana Cost', text:'', y:0.0613, width:0.9292, height:71/2100, oneLine:true, size:71/1638, align:'right', shadowX:-0.001, shadowY:0.0029, manaCost:true, manaSpacing:0},
//EN:		title: {name:'Title', text:'', x:0.0854, y:0.0522, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0381},
//EN:		type: {name:'Type', text:'', x:0.0854, y:0.5664, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0324},
//EN:		rules: {name:'Rules Text', text:'', x:0.086, y:0.6303, width:0.828, height:0.2875, size:0.0362},
//EN:		pt: {name:'Power/Toughness', text:'', x:0.7928, y:0.902, width:0.1367, height:0.0372, size:0.0372, font:'belerenbsc', oneLine:true, align:'center'}
/*FR:*/		mana:  {name:'Coût en mana',	text:'', y:0.0613, width:0.9292, height:71/2100, oneLine:true, size:71/1638, align:'right', shadowX:-0.001, shadowY:0.0029, manaCost:true, manaSpacing:0},
/*FR:*/		title: {name:'Titre',			text:'', x:0.0854, y:0.0522, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0381},
/*FR:*/		type:  {name:'Type',			text:'', x:0.0854, y:0.5664, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0324},
/*FR:*/		rules: {name:'Règles',			text:'', x:0.086, y:0.6303, width:0.828, height:0.2875, size:0.0362},
/*FR:*/		pt:    {name:'Force/Endurance',	text:'', x:0.7928, y:0.902, width:0.1367, height:0.0372, size:0.0372, font:'belerenbsc', oneLine:true, align:'center'}
	});
}
//loads available frames
loadFramePack();
//Only for the main version as the webpage loads:
if (!card.text) {
	document.querySelector('#loadFrameVersion').click();
}