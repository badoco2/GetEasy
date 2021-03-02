import {StyleSheet} from 'react-native'



export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#102027',
        flexDirection: 'column'
     
        
    },
  
    container1:{
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        flexWrap: 'nowrap'
    },
    container2:{
        flex: 2,
        padding: 20,
        flexDirection: 'column',
        flexWrap: 'nowrap'
    },
  

  logo:{
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 100,
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold'
  },

  h1:{
    color: '#fff',
    fontSize: 16
  },
  h2:{
    color: '#fff',
    fontSize: 12,
    marginBottom: 15,
    fontWeight: 'bold' 
  },

  entrar:{
    backgroundColor:'#2196f3',
    padding: 8,
    color:'#fff', 
    marginTop: 5,
    fontWeight: 'bold',
    borderStyle: 'solid',
    borderBottomLeftRadius:10,
    borderBottomRightRadius: 10,
  },
  login:{
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor:'#263238',
    padding: 5,
    color:'#fff',
    marginTop: 5

  },

  formulario:{
    backgroundColor:'#263238',
    padding: 5,
    color:'#fff',
    marginTop: 5
    
  }

  
});