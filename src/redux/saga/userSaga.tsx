import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://jsonplaceholder.typicode.com/users`;

const getApi = () => {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'content-Type' : 'application/json'
        }
    }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchUsers(action: any) {
    try {
        const users = yield call(getApi);
        yield put({type: 'GET_USERS_SUCCESS', users: users})
    }
}

function* userSaga() {
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}