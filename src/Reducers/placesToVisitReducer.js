const initialState = {
  places: ["brazil", "congo", "hong kong"],
};

export default function placesToVisitReducer(state = initialState, action) {
  // eslint-disable-next-line
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
