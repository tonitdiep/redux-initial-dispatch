// let state = {count: 0};
let state;

function changeState(state = { count: 0 }, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}
// changeState(undefined, { type: '@@INIT' })
function render(){
    document.body.textContent = state.count
}

// render()
dispatch({ type: '@@INIT' })
// dispatch({type: 'INCREASE_COUNT'})