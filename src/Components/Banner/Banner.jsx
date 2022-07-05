import styled from "styled-components"
import MaxWidth from '../MaxWidth/MaxWidth'

const MainBanner = styled.div`
	position: relative;
	background-size: cover;
	background-position: 50%;
	background-repeat: no-repeat;
	background-image:${({bgUrl})=>bgUrl};
	height: 27em;
	margin-bottom: -7em;

`;

const BannerContents = styled.div`
	width: 28rem;
	padding: 7rem 0 14.5rem;
	text-align: center;
	color: ${({theme}) => theme.grayBackgroundLight};

	&::before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: calc((100% - 1224px) / 2 + 44rem);
		height: 100%;
		background: rgba(40, 48, 63, 0.5);
	}

	& > * {position: relative;}

	@media ${({theme})=>theme.desktopL} {
		&::before {width: 44rem;}
	}

	@media ${({theme})=>theme.mobileL} {
		& {
			width: 100%;
			margin: 0 auto;
		}
		&::before {width: 100%;}
	}
`;
const SubText = styled.p`
	border: 1px solid rgba(249, 249, 249, 0.3);
	border-width: 1px 0;
	padding: 1rem 0 0.8rem;
	font-size: 2rem;
	letter-spacing: 0.2em;
`;
const MainText = styled.p`
	font-weight: bold;
	font-size: 5.4rem;
	margin: 1.6rem 0;
`;
const Description = styled.p`
	font-size: 1.2rem;
	text-align: left;
	word-break: break-all;
	padding: 0 0.8rem;
`;
const Today = styled.p`
	padding-left: 0.8em;
	font-size: 5rem;
	font-weight: bold;
	text-align: left;
	line-height: 1.1;

	& em {
		display: block;
		font-size: 2em;
		margin-bottom: -0.15em;
	}

	@media ${({theme})=>theme.desktopM} {
		&{
			font-size: 3rem;
			padding-left: 0.2em;
		}
		& em {
			display: inline;
			font-size: 1.4em;
		}
	}
	@media ${({theme})=>theme.mobileL} {
		&{
			text-align: center;
			padding-left: 0;
		}
	}
`;

export default function Banner({postIndex, isMain}) {
	let BG_URL='';
	if(postIndex){
		BG_URL = `url(${process.env.PUBLIC_URL}/assets/post-background${postIndex}.jpg)`
	}else{
		BG_URL = `url(${process.env.PUBLIC_URL}/assets/background.jpg)`
	}

    return(
        <MainBanner bgUrl = {BG_URL}>
			<MaxWidth>
				<BannerContents>
					{isMain?
						<>
							<SubText>React Blog</SubText>
							<MainText>My BLOG</MainText>
							<Description>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolor provident beatae deserunt magnam, illo neque. Maiores ipsum commodi dolorum beatae aliquid laboriosam est
							</Description>
						</>
						:<Today>May <em>25</em> Wednesday</Today>
					}
				</BannerContents>
			</MaxWidth>
		</MainBanner>
    )
}