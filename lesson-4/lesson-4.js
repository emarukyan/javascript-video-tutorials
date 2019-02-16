//////// COMPOSE !!! //////////

const USER = {
    id: 100,
    createdAt: '2019-01-01',
    updatedAt: '2019-01-01',
    is_active: true,
    is_subscriber: true,
    type: 1
}

const removeUnusedFields = (user) => {
    return {
        id: user.id,
        is_active: user.is_active,
        is_subscriber: user.is_subscriber,
        type: user.type
    }
}

const capitalizeFields = (user) => {
    return {
        id: user.id,
        type: user.type,
        isActive: user.is_active,
        isSubscriber: user.is_subscriber
    }
}

const normalizeType = (user) => {
    return {
        ...user,
        type: user.type === 1 ? 'member' : 'admin'
    }
}

const sanitizeUser = (user) => {
    return normalizeType(capitalizeFields(removeUnusedFields(user)))
}

// const compose = (f, g) => (...arg) => f(g(...arg))

// const _sanitizeUser1 = compose(capitalizeFields, removeUnusedFields)
// const _sanitizeUser2 = compose(normalizeType, _sanitizeUser1)

// _sanitizeUser2(USER)

// console.log( sanitizeUser(USER) )

// FROM REDUX LIBRARY
const compose = (...funcs) => {
    if (funcs.length === 0) {
      return arg => arg;
    }
  
    if (funcs.length === 1) {
      return funcs[0];
    }
  
    // return funcs.reduce((acc, hertakan) => {
    //     return (...args) => {
    //         const fRes = hertakan(...args);
    //         return acc(fRes);
    //     }
    // })

    // imperative
    // funcs.reverse();
    // // removeUnusedFields, capitalizeFields, normalizeType
    // const X = [funcs[0]];
    // for (let i = 1; i < funcs.length; i++) {
    //     X[i] = (...args) => funcs[i](X[i - 1](...args));
    // }
    /*
        // 1 iteration:
        X[0] = removeUnusedFields
        // i: 1
        X[1] = (...args) => capitalizeFields(removeUnusedFields(...args))
        // i: 2
        X[2] = (...args) => normalizeType(capitalizeFields(removeUnusedFields(...args)));
    */
    // return X[X.length - 1];

    // recoursive
    const lastFn = funcs[funcs.length - 1];
    const withoutLastFn = funcs.slice(0, funcs.length - 1);
    return (...args) => compose(...withoutLastFn)(lastFn(...args));
}

const _sanitizeUserComposed = compose(normalizeType, capitalizeFields, removeUnusedFields)

// THe Most Adequate Guide to Functional Programming!


