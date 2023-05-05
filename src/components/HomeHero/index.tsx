import { useEffect, useState } from 'react';
import { usePicture } from '../../hooks/usePicture';
import Code from './Code';
import {
  Container,
  DynamicContainer,
  InfoContainer,
  TextContainer
} from './styles';

function HomeHero() {
  const [showImg, setShowImg] = useState(false);
  const picture = usePicture();

  useEffect(() => {
    if (picture.length) {
      setShowImg(true);
    }
  }, [picture]);

  return (
    <Container>
      <img
        className={showImg ? 'picture' : ''}
        src={picture}
        alt="Minha imagem do github"
      />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <DynamicContainer>
            <div className="static">Eu sou</div>
            <ul className="dynamic">
              <li>
                <span>o André 👋</span>
              </li>
              <li>
                <span>Dev Front-End</span>
              </li>
              <li>
                <span>Dev Back-End</span>
              </li>
            </ul>
          </DynamicContainer>
          {/* <h2>Me chamo André</h2> */}
        </TextContainer>
        <InfoContainer>
          <Code
            text="Infos"
            showComments
            size="24rem"
            infos={[
              ['name', '"André"'],
              ['lastName', '"Horman"'],
              ['age', 28],
              ['vocation', '"Dev Full-Stack"']
            ]}
          />
          <Code
            text="Contacts"
            size="30rem"
            infos={[
              ['email', '"andre.horman1994@hotmail.com"'],
              ['linkedin', '"www.linkedin.com/in/andrehorman/"'],
              ['cell', '"(83) 99363-8760"']
            ]}
          />
        </InfoContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
