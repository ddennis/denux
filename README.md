# Denux.js
An example on how to make a reusable solutions using the new Context API. It uses the basic concepts from Redux like reducers/combineReducers and dispatcher. 

Try an example on codesandbox: https://codesandbox.io/s/xvjx5n5vpw

Basic setup:

    export default class DenuxApp extends Component {

      constructor(props){
        super(props);
        
        this.myStateObj = {
          list:{             
              items:["ONE", "TWO", "THREE"]
            }        
        };

        // name your reducers so they match the part of the state object the handle
        this.appReducers = Denux.combineReducers({
          // the list reducer should be named list
          list:listReducer          
        });
      };


      render(){
        return (
          <div className="App" >            
            <Denux
              // pass the combined reduceres or single reducer
              reducer={this.appReducers}
              // pass in the initial state object
              state={this.myStateObj}
            >
              <SomeComponent/>              
            </Denux>
          </div>
        );
      }
    }

      
      
##### Consume the data :
      
      export const SomeComponent = () => (
            <Denux.Consumer>      
              {
                  (context) =>{
                      return (
                        <div>
                          <h1>Items amount = {context.list.items.length}</h1>
                        </div>
                       )
                  }
              }
        </Denux.Consumer>
      );
      
****      
credits to Cubanpete for the name https://github.com/cubanpete
