export const state = () => ({
  variant: null
});

export const mutations = {
  setVariant(state, variant) {
    console.log('setVariant', variant);
    state.variant = variant;
  }
}
