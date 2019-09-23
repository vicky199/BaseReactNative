export const mapStateToProps = (state) => {
    return {
        count: state.counterReducer.count
    }
};

export const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: COUNTER_INCREMENT }),
    decrement: () => dispatch({ type: COUNTER_DECREMENT }),
});


export const COUNTER_INCREMENT = 'counter_increment';
export const COUNTER_DECREMENT = 'counter_decrement';

// export let testContainer = connect(mapStateToProps, mapDispatchToProps)(Test);