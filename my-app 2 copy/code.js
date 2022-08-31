//title screen functionality
onEvent("titleSplat", "click", function( ) {
	console.log("Title button clicked! Let the music commence...");
	playSound("Splatoon-3-Splatfest-Theme-_-Deep-Cut_-Anarchy-Rainbow---Splatoon-3-(320K).mp3.mp3");
});
onEvent("titleSplat", "mouseout", function (){
  stopSound("Splatoon-3-Splatfest-Theme-_-Deep-Cut_-Anarchy-Rainbow---Splatoon-3-(320K).mp3.mp3");
});
onEvent("exploreButton", "click", function( ) {
	console.log("exploreButton clicked!");
	setScreen("homeScreen");
	playSound("assets/category_app/app_interface_button_2.mp3");
});
onEvent("tutButton", "click", function( ) {
	console.log("Onto the tutorial!");
	setScreen("tutorialScreen");
	playSound("assets/category_app/app_interface_button_2.mp3");
});

//tutorial screen functionality
onEvent("cephaImg", "click", function(){
  playSound("Splatoon-2---Fest-Zest-(Pick-Your-Character_Splatfest-Winning-Theme).mp3");
  console.log("TUTORIAL WOOOOO!");
});
onEvent("cephaImg", "mouseout", function(){
  stopSound("Splatoon-2---Fest-Zest-(Pick-Your-Character_Splatfest-Winning-Theme).mp3");
});
onEvent("tutExpl", "mouseover", function(){
  setProperty("tutExpl", "y",50);
});
onEvent("tutExpl", "click", function(){
  setProperty("tutExpl", "y",200);
});
onEvent("contBut", "click", function( ) {
	console.log("exploreButton clicked!");
	setScreen("homeScreen");
	playSound("assets/category_app/app_interface_button_2.mp3");
});

//home screen introduction functionality
onEvent("proconImg", "mouseover", function( ) {
  console.log("This is an exaggeration on how to move the controller in game");
  setProperty("proconImg", "x",50);
  });
onEvent("proconImg", "mouseout", function( ) {
  setProperty("proconImg", "x",10);
});
onEvent("hubImg","click",function() {
  console.log("This is plaza music!");
  playSound( "assets/final_630d2d2ba36b9400c34aa564_489281.mp3", false);
});
onEvent("hubImg","mouseout",function() {
  stopSound("assets/final_630d2d2ba36b9400c34aa564_489281.mp3");
});

hideElement("shelText");
hideElement("cocoText");
hideElement("jelText");
hideElement("gnarlyText");

onEvent("sheldonPfp", "mouseover", function( ) {
  showElement("shelText");
  console.log("Who is Sheldon?");
});
onEvent("sheldonPfp", "mouseout", function( ) {
  hideElement("shelText");
});
onEvent("cocoPfp", "mouseover", function( ) {
  showElement("cocoText");
  console.log("Who is Mr.Coco?");
});
onEvent("cocoPfp", "mouseout", function( ) {
  hideElement("cocoText");
});
onEvent("jelPfp", "mouseover", function( ) {
  showElement("jelText");
  console.log("Who is Jel La Fleur?");
});
onEvent("jelPfp", "mouseout", function( ) {
  hideElement("jelText");
});
onEvent("gnarlyPfp", "mouseover", function( ) {
  showElement("gnarlyText");
  console.log("Gnarly Eddy?");
});
onEvent("gnarlyPfp", "mouseout", function( ) {
  hideElement("gnarlyText");
});

//modes screen functionality
onEvent("twImg", "click", function( ) {
	console.log("In-game turf war music!");
	playSound("Splattack!-(sfx)---Short-Ver.---Splatoon-3-OST-Extended.mp3", false);
});
onEvent("twImg", "mouseout", function( ){
  stopSound("Splattack!-(sfx)---Short-Ver.---Splatoon-3-OST-Extended.mp3");
});
onEvent("abImg", "click", function(){
  console.log("COMPETITIVE BATTLES!");
  playSound("Splatoon-3---Candy-Coated-Rocks-(Damp-Socks-Feat.-Off-The-Hook)--Full-Version-.mp3");
});
onEvent("abImg", "mouseout", function(){
  stopSound("Splatoon-3---Candy-Coated-Rocks-(Damp-Socks-Feat.-Off-The-Hook)--Full-Version-.mp3");
});
onEvent("srImg", "click", function( ) {
	console.log("In-game Salmon Run music!");
	playSound("assets/Splatoon-3---Salmon-Run_-Next-Wave---Trailer-Music.mp3");
});
onEvent("srImg", "mouseout", function( ){
  stopSound("assets/Splatoon-3---Salmon-Run_-Next-Wave---Trailer-Music.mp3");
});
onEvent("ttfImg", "mouseover", function( ) {
	console.log("Ping time!");
	setProperty("ttfImg","x", 220);
});
onEvent("ttfImg", "click", function( ) {
	console.log("And Pong!");
	setProperty("ttfImg","x", 155);
});
//story screen functionality
onEvent("squidbImg", "click", function (){
  console.log("Enter Octo Canyon");
  playSound("assets/Spicy-Calamari-Inkantation.mp3");
});
onEvent("squidbImg", "mouseout", function (){
  stopSound("assets/Spicy-Calamari-Inkantation.mp3");
});
onEvent("oeImg", "click", function (){
  console.log("Enter the Deep Sea Metro..");
  playSound("Splatoon-2---Nasty-Majesty---Octo-Expansion-(Off-The-Hook).mp3");
});
onEvent("oeImg", "mouseout", function (){
  stopSound("Splatoon-2---Nasty-Majesty---Octo-Expansion-(Off-The-Hook).mp3");
});

//Community Screen Functionality
hideElement("iplExpl");
hideElement("sendouExpl");
hideElement("inkExpl");

onEvent("iplImg", "mouseover", function( ) {
  showElement("iplExpl");
  console.log("Welcome to IPL Splatoon!");
});
onEvent("iplImg", "mouseout", function( ) {
  hideElement("iplExpl");
});
onEvent("sendouImg", "mouseover", function( ) {
  showElement("sendouExpl");
  console.log("The one and only sendou.ink");
});
onEvent("sendouImg", "mouseout", function( ) {
  hideElement("sendouExpl");
});
onEvent("kademyImg", "mouseover", function( ) {
  showElement("inkExpl");
  console.log("Inkademy by Hitzel!");
});
onEvent("kademyImg", "mouseout", function( ) {
  hideElement("inkExpl");
});

//Foot bar functionalities(Home-screen edition)
onEvent("nsLogo", "click", function( ) {
	console.log("nsLogo clicked!");
	setScreen("homeScreen");
	playSound("assets/category_app/modern_ui_sound.mp3");
});
onEvent("twLogo", "click", function( ) {
	console.log("twLogo clicked!");
	setScreen("modesScreen");
	playSound("assets/category_app/arcade_game_button_tap.mp3");
});
onEvent("scrolLogo", "click", function( ) {
	console.log("scrolLogo clicked!");
	setScreen("storyScreen");
	playSound("assets/category_app/app_slide.mp3");
});
onEvent("dcLogo", "click", function( ) {
	console.log("dcLogo clicked!");
	setScreen("comScreen");
	playSound("assets/category_app/app_interface_click_3.mp3");
});
//Foot bar functionalities(Mode-screen edition)
onEvent("nsLogo2", "click", function( ) {
	console.log("nsLogo2 clicked!");
	setScreen("homeScreen");
	playSound("assets/category_app/modern_ui_sound.mp3");
});
onEvent("twLogo2", "click", function( ) {
	console.log("twLogo2 clicked!");
	setScreen("modesScreen");
	playSound("assets/category_app/arcade_game_button_tap.mp3");
});
onEvent("scrolLogo2", "click", function( ) {
	console.log("scrolLogo2 clicked!");
	setScreen("storyScreen");
	playSound("assets/category_app/app_slide.mp3");
});
onEvent("dcLogo2", "click", function( ) {
	console.log("dcLogo2 clicked!");
	setScreen("comScreen");
	playSound("assets/category_app/app_interface_click_3.mp3");
});
//Foot bar functionalities(Story-screen edition)
onEvent("nsLogo3", "click", function( ) {
	console.log("nsLogo3 clicked!");
	setScreen("homeScreen");
	playSound("assets/category_app/modern_ui_sound.mp3");
});
onEvent("twLogo3", "click", function( ) {
	console.log("twLogo3 clicked!");
	setScreen("modesScreen");
	playSound("assets/category_app/arcade_game_button_tap.mp3");
});
onEvent("scrolLogo3", "click", function( ) {
	console.log("scrolLogo3 clicked!");
	setScreen("storyScreen");
	playSound("assets/category_app/app_slide.mp3");
});
onEvent("dcLogo3", "click", function( ) {
	console.log("dcLogo3 clicked!");
	setScreen("comScreen");
	playSound("assets/category_app/app_interface_click_3.mp3");
});
//Foot bar functionalities(Community-screen edition)
onEvent("nsLogo4", "click", function( ) {
	console.log("nsLogo4 clicked!");
	setScreen("homeScreen");
	playSound("assets/category_app/modern_ui_sound.mp3");
});
onEvent("twLogo4", "click", function( ) {
	console.log("twLogo4 clicked!");
	setScreen("modesScreen");
	playSound("assets/category_app/arcade_game_button_tap.mp3");
});
onEvent("scrolLogo4", "click", function( ) {
	console.log("scrolLogo4 clicked!");
	setScreen("storyScreen");
	playSound("assets/category_app/app_slide.mp3");
});
onEvent("dcLogo4", "click", function( ) {
	console.log("dcLogo4 clicked!");
	setScreen("comScreen");
	playSound("assets/category_app/app_interface_click_3.mp3");
});
