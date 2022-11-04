import { Link } from "react-router-dom"
import { ContainerAbout, ContainerDescription, ContainerDetails, ContainerImg, ContainerNameHeroes, TextAbout } from "../../ComponentsHeroes/HeaderHeroes/style"
import { ContainerHeader, ContainerRouter, ContainerTitle } from "../../Header/style"

export const HeaderComicsId =({Comic})=>{
return(
    <>
<ContainerHeader>
            <ContainerTitle>
                <h1>MARVEL BOOK</h1>
            </ContainerTitle>
            <ContainerRouter> 
                <Link className='LinkHome' to='/'>HOME</Link>
            </ContainerRouter>
    </ContainerHeader>
        <ContainerAbout>
            <TextAbout>
                <h1>{Comic.title}</h1>
                <p></p>
            </TextAbout>
        </ContainerAbout>
        <ContainerDescription>
                <ContainerImg >
                    <img src={`${Comic?.thumbnail?.path}.${Comic?.thumbnail?.extension} `} alt={Comic?.title}/>
                </ContainerImg>
                <ContainerDetails>
                    <h1>
                     {`${Comic.description}`.length== 0 ? 'Este quadrinho não conta com descrição': `${Comic.description}`}
                    </h1>
                    <p></p>
                </ContainerDetails>
                <ContainerNameHeroes>
                    <p>
                     {Comic.title}
                    </p>
                </ContainerNameHeroes>
        </ContainerDescription>
</>
)
}