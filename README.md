# Denux.js
Simple state management without all of Redux. A reusable solutions using the new Context API. 
Denux uses the basic concepts from Redux like reducers and dispatch, it also supports combineReducers.
 

### Try It 
You can try an interactive version here: https://codesandbox.io/s/xvjx5n5vpw
included is also an example on updating state when the operation is async 


### install

      npm i denux --save

### Basic setup:

```javascript

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
			<div className="App">
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

```      

### A simple reducer function, which always takes the state and a action
```javascript

export const listReducer = (state  , action) => {

	//the state is the items array, since we are using combineReduceres     
            
    if (action.type === "ADD") {
        // Copy the current array of items
        const newArr = [...state];
        //Push the new item
        newArr.push(action.item);
        // return the new array which is now the current state
        return  newArr ;
    }

	// else just return state
	return state;

};


```  


### Update the state by dispatching an action:
```javascript

export const SomeOtherComponent = () => (
<Denux.Consumer>
{
    (context) =>{
        return (
            <button onClick={(e ) => {
                e.preventDefault();
                context.dispatch({type:"ADD", item:"FOUR"});
            }}>
                Add Item
            </button>
        )
    }
}
</Denux.Consumer>
);

```


      
### Consume the data somewhere in you application:
```javascript

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

```      



****      
credits to Cubanpete for the name https://github.com/cubanpete
