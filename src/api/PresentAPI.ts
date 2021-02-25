import firebase from '../firebase'
import {Present} from '../types/Present'

const db_ref = process.env.REACT_APP_DB_REF_PRESENTS
export const PresentDB = firebase.firestore().collection(db_ref as string)

//TODO: Jestでfirebaseのリアルタイムデータベースを操作する関数に対してテスト書く
export function registPresent(present: Present){

}