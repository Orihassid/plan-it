import actionTypes from "../actions/constants.js";

const initialState = {
  plans: [],
};

const plansReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_PLANS:
      return {
        ...state,
        plans: [...action.payload],
      };
    case actionTypes.ADD_PLAN:
      return {
        ...state,
        plans: [...state.plans, ...action.payload],
      };
    case actionTypes.DELETE_PLAN: 
      return {
          ...state,
          plans: state.plans.filter(plan => plan.id !== action.payload)
      }
    case actionTypes.ADD_ITEM:
      console.log('add item',action.payload)
      console.log('event',action.eventId)
      return {
        ...state,
        plans: state.plans.map((plan) =>
          plan.id == action.eventId
            ? { ...plan, eventItems: [...plan.eventItems, ...action.payload] }
            : plan
        ),
      };
    case actionTypes.SAVE_ITEM:
      const newPlans = [...state.plans];
      const plan = newPlans.find((plan) => plan.id == action.eventId);
      const idx = plan.eventItems.findIndex(
        (item) => item.id == action.payload[0].id
      );
      plan.eventItems[idx] = action.payload[0];

      return {
        ...state,
        plans: newPlans,
      };

    case actionTypes.DELETE_ITEM:

      return {
        ...state,
        plans: state.plans.map((plan) =>
          plan.id === parseInt(action.eventId)
            ? {
                ...plan,
                eventItems: plan.eventItems.filter(
                  (item) => item.id !== action.payload
                ),
              }
            : plan
        ),
      };
      case actionTypes.FETCH_ALL_PLANS_AND_ITEMS:
      return {
        ...state,
        plans: [...action.payload],
      };

      case actionTypes.ADD_USER:
        return {
          ...state,
          plans: state.plans.map((plan) =>
            plan.eventId === action.payload.eventId
              ? { ...plan, eventUsers: [...plan.eventUsers, ...action.payload] }
              : plan
          ),
        };
    default:
      return state;
  }
};

export default plansReducer;
