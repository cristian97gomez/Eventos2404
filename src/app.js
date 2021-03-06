import * as React from 'react';
import {
  Alert,
  color,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import HomeView from './HomeView'
import departamentos from './departamentos'
import FbLogin from './Login/FbLogin'
import CrearPerfil from './CrearPerfil'
import Iniciar from './Login/Iniciar';
import postApi from './Login/postApi'
import google from './components/google'
import depas from './EventosDepa'
import DetalleEvento from './DetalleEvento'
import Comprar from './ComprarBoleto'
import pagos from './pagos'
import recibo from './recibo'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Salir"
        onPress={() =>BackHandler.exitApp()}
        
      />
      <DrawerItem
        label=" "
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function Root() {
  return ( 
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Iniciar" component={Iniciar} options={{drawerLabel : ( )  => null}} />
      <Drawer.Screen name="Eventos" component={HomeView} />
      <Drawer.Screen name="Departamentos" component={departamentos} />
      
      
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Login" component={FbLogin} options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
            height:0,

          },
        }}/> 

      <Stack.Screen name="Nav" component={Root} options={{
          title: '',
          headerStyle: {
            height:10,
            backgroundColor:'#134379',
            margin:0

          },
        }}/>

      <Stack.Screen name="pagos" component={pagos} options={{
          title: '',
          headerStyle: {
            height:10,
            backgroundColor:'#134379',
            margin:0

          },
        }}/>

      <Stack.Screen name="recibo" component={recibo} options={{
          title: '',
          headerStyle: {
            height:10,
            backgroundColor:'#134379',
            margin:0

          },
        }}/>


        

      <Stack.Screen name="Comprar" component={Comprar} options={{
          title: '',
          headerStyle: {
            height:10,
            backgroundColor:'#134379',
            margin:0

          },
        }}/>





        <Stack.Screen name="Detalle" component={DetalleEvento} options={{
          title: '',
          headerStyle: {
            height:10,
            backgroundColor:'#134379',
            margin:0

          },
        }}/>



      <Stack.Screen name="depas" component={depas} options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
            height:10,

          },
        }}/> 

     

      <Drawer.Screen name="CrearPerfil" component={CrearPerfil} options={{
          title: '',
          headerStyle: {
          height:10,

          },
        }}/>

       
      <Drawer.Screen name="postApi" component={postApi} options={{
          title: '',
          headerStyle: {
          height:0,

          },
        }}/>
        
      <Drawer.Screen name="google" component={google} options={{
          title: '',
          headerStyle: {
          height:10,

          },
        }}/>
      
    </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;