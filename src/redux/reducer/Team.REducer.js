import Team from "../../Pages/Team"

const intialState = {
    Team : []    
}
export const TeamREducer = (state = intialState , action ) => {
    if(action.type === "ADDTEAM"){
        return {...state , Team : [...state.Team , Team.action.payload]}
        

    }
else {    return state}
}