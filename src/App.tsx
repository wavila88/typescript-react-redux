import { ButtonComponent } from "./components/eventsComponents/Button.Component";
import { InputComponent } from "./components/eventsComponents/Input.Component";
import { GreetComponent } from "./components/propsComponents/Greet.Component";
import { HeadingComponent } from "./components/propsComponents/Heading.Component";
import { OscarComponent } from "./components/propsComponents/Oscar.Component";
import { PersonComponent } from "./components/propsComponents/Person.Component";
import { PersonList } from "./components/propsComponents/PersonList.Component";
import { StatusComponent } from "./components/propsComponents/Status.Component";
//import { UserComponent } from "./components/state/User.Component";
import { UserComponent } from "./components/contextComponent/user/User.Component";
import { ContainerComponent } from "./components/styleProps/Container.Component";
import { BoxComponent } from "./components/contextComponent/Box.Component";
import { ThemeContextProvider } from "./components/contextComponent/ThemeContext";
import { UserContextProvider } from "./components/contextComponent/user/UserContext";
import { ListComponent } from "./components/generics/List.Component"; 
import { RandomNumberComponent } from "./components/restricctionsPropsComponent/RandonNumber.Component";
import { ToastComponent } from "./components/literalsComponent/Toast.Component";
import { ButtonCustom } from "./components/htmlComponent/ButtonCustom.Component";
import { TextComponent } from "./components/polymorphic/Text.Component";


function App() {

  //#region Person const

  const personName = {
    first: 'Burce',
    last: 'Wayne'
  };

  const personList = [
    {
      first: 'William',
      last: 'Avila'
    },
    {
      first: 'Jessica',
      last: 'Gomez'
    },
    {
      first: 'Emily',
      last: 'Valeria'
    },
    {
      first: 'Amy',
      last: 'Celeste'
    },
  ];

  //#endregion
 
  return (
    <>
     {/* <ListComponent
      items={['Batman', 'Superman', 'Wonder woman']}
      onClick={(item) => console.log(item)}
     />
     <ListComponent
      items={[1, 2, 3]}
      onClick={(item) => console.log(item)}
     /> */}
 
     {/* <RandomNumberComponent value={10} isZero={true} /> 
     <ToastComponent position="center"/>

     <ButtonCustom variant="primary" onClick={() => console.log('clicked')}>
       <h1>Primary Button</h1>
       </ButtonCustom>*/}
      <TextComponent as='h1' size="lg" htmlFor='someId'>Heading</TextComponent>
      <TextComponent as='p' size="md" type='sdfsd'>Paragrah</TextComponent>
      <TextComponent as='label' size="sm" color="secondary" htmlFor='someId' >
        Label
      </TextComponent>


    </>
  );
}

export default App;
