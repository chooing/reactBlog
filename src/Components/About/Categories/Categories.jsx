import CategoryBtn from './CategoryBtn'
import styled from "styled-components"
import SubTitle from "../SubTitle"

const CategoriesStyle = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
`;

export default function Categories({categories}) {
    return (
        <>
            <SubTitle>Categories</SubTitle>
            <CategoriesStyle>
                {
                    categories.map(category => 
                        <CategoryBtn key={category.id}  aLink={category.link} text={category.id} />
                    )
                }
            </CategoriesStyle>
        </>
    )
}
