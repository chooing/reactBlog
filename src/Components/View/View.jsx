import styled from "styled-components";
import MaxWidth from '../MaxWidth/MaxWidth';
import WrapBox from '../WrapBox/WrapBox';
import Inner from '../WrapBox/InnerWrap';

import Author from '../Author/Author';
import Category from '../Category/Category';
import TitleWrap from './TitleWrap'
import LikeBtn from '../Button/LikeBtn';

import ViewContents from './ViewContents';
import BtnGroup from './BtnGroup';
import BackBtn from '../Button/BackBtn';

const ViewStyle = styled.div`
	& hr {
        border: 1px solid ${({theme})=>theme.borderColor};
        border-width: 1px 0 0 0;
        margin: 3.2rem 0;
    }
	
`

export default function View({postInfo}) {

	return (
	<ViewStyle>
			<MaxWidth>
				<WrapBox whereIn={'view'}>
					<Inner isView>
						<Author 
							profileImg={postInfo.profileImg} 
							author={postInfo.author} 
							created={postInfo.createdDate}
							isView
						/>
						<Category 
							categories={postInfo.categories}
							isView
						/>
						<TitleWrap>
							<h2>{postInfo.title}</h2>
							<LikeBtn/>
						</TitleWrap>
						<hr />
						<ViewContents contents ={postInfo.contents}/>
						<BtnGroup/>
						<BackBtn isView/>
					</Inner>
				</WrapBox>
			</MaxWidth>
		</ViewStyle>
    )
}
