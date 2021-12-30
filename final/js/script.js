function sub_content_control(target)
{
	if(target.lastElementChild.className==='sub_content_inactive')
	{
		target.lastElementChild.className='sub_content_active';
	}
	else if(target.lastElementChild.className==='sub_content_active')
	{
		target.lastElementChild.className='sub_content_inactive';
	}
}

function print_header()
{
	let text="";
	text+='<nav>';
	text+='		<div class="nav-wrapper black">';
	text+='			<a href="index.html" class="brand-logo "><img class="logo" src="image/title.png"></a>';
	text+='				<ul id="nav-mobile" class="right hide-on-med-and-down">';
	text+='					<li><a href="gamemode.html">遊戲模式</a></li>';
	text+='					<li><a href="dimensions.html">世界維度</a></li>';
	text+='					<li><a href="creatures.html">生物群集</a></li>';
	text+='					<li><a href="village.html">村莊</a></li>';
	text+='					<li><a href="survey.html">問卷回饋</a></li>';
	text+='					<li><a href="blog.html">社群討論</a></li>';
	text+='					<li><a href="company_info.html">公司介紹</a></li>';
	text+='				</ul>';
	text+='		</div>';
	text+='	</nav>';
	
	document.body.innerHTML+=text;
	
	
}

function print_footer()
{
	let text="";
	
    text+='    <div class="container ">';
    text+='       <div class="row">';
	text+='			<div class="col l4 offset-l2 s12">';
	text+='				<h5 class="white-text">頁內連結</h5>';
	text+='				<ul>';
	text+='					<li><a class="grey-text text-lighten-3" href="gamemode.html">遊戲模式</a></li>';
	text+='					<li><a class="grey-text text-lighten-3" href="dimensions.html">世界維度</a></li>';
	text+='					<li><a class="grey-text text-lighten-3" href="creatures.html">生物群集</a></li>';
	text+='					<li><a class="grey-text text-lighten-3" href="village.html">村莊</a></li>';
	text+='					<li><a class="grey-text text-lighten-3" href="survey.html">問卷回饋</a></li>';
	text+='					<li><a class="grey-text text-lighten-3" href="blog.html">社群討論</a></li>';
	text+='					<li><a class="grey-text text-lighten-3" href="company_info.html">公司介紹</a></li>';
	text+='				</ul>';
    text+='         </div>';
    text+='         <div class="col l4 offset-l2 s12">';
	text+='				<h5 class="white-text">相關連結</h5>';
	text+='				<ul>';
	text+='					<li><a class="grey-text text-lighten-3" href="https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki">minecraft 中文wiki</a></li>';
	text+='					<li><a class="grey-text text-lighten-3" href="https://files.minecraftforge.net/net/minecraftforge/forge/">minecraft forge</a></li>';
	text+='					<li><a class="grey-text text-lighten-3" href="https://optifine.net/downloads">optifine</a></li>';
	text+='				</ul>';
    text+='         </div>';
	text+='       </div>';
    text+='    </div>';
    text+='    <div class="footer-copyright">';
	text+='			<div class="container">';
	text+='				© 2014 Copyright Text';
	text+='			</div>';
    text+='    </div>';

	document.getElementById('footer').innerHTML+=text;
	
}
//loading_animate
window.onload=function(){
		document.getElementById("warp").className='container warp_on';
		document.getElementById("anime").className='loading_anime_container_off';
}	

