 
import { Link} from 'react-router-dom'
import { ContainerTitle,ContainerHeader, ContainerRouter } from '../../Header/style'
import { ContainerAbout,ContainerDescription, ContainerDetails, ContainerImg, ContainerNameHeroes, TextAbout} from './style'


export const HeaderHeroes = ({person}) =>{

return(
    <>
    <ContainerHeader width={'100%'} >
            <ContainerTitle>
                <h1>MARVEL BOOK</h1>
            </ContainerTitle>
            <ContainerRouter> 
                <Link className='LinkHome' to='/'>HOME</Link>
            </ContainerRouter>
    </ContainerHeader>
        <ContainerAbout>
            <TextAbout>
                <h1>{person.name}</h1>
                <p></p>
            </TextAbout>
        </ContainerAbout>
        <ContainerDescription>
                <ContainerImg >
                    <img src={`${person?.thumbnail?.path}.${person?.thumbnail?.extension} `} alt={person?.name}/>
                </ContainerImg>
                <ContainerDetails>
                    <h1>
                     {`${person.description}`.length== 0 ? 'Este personagem não conta com descrição': `${person.description}`}
                    </h1>
                    <p></p>
                </ContainerDetails>
                <ContainerNameHeroes>
                    <p>
                     {person.name}
                    </p>
                </ContainerNameHeroes>
        </ContainerDescription>
       
        </>
)
}