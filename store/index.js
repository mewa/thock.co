export const state = () => ({
  variant: { cable: { text: "Standard, black" } }
});

export const mutations = {
  setVariant(state, variant) {
    console.log('setVariant', variant);
    state.variant = variant;
  }
}
