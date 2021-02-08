import firebase from '../firebase'

const db_ref = process.env.REACT_APP_DB_REF_PRESENTS
export const GiftDB = firebase.firestore().collection(db_ref as string)

//TODO: Jestでfirebaseのリアルタイムデータベースを操作する関数に対してテスト書く