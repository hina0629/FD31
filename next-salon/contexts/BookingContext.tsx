"use client"

import { createContext, useContext, useReducer } from "react"

export const TOTAL_STEPS = 4

// 状態のデータ型
export type BookingState = {
  step: number
  menuId: string | null
  staffId: string | null
  date: string | null
  time: string | null
  notes: string
}

// 初期値
const INITIAL_STATE: BookingState = {
  step: 1,
  menuId: null,
  staffId: null,
  date: null,
  time: null,
  notes: "",
}

// アクションのデータ型
export type BookingAction =
  | { type: "select-menu"; menuId: string }
  | { type: "select-staff"; staffId: string | null }
  | { type: "select-date"; date: string }
  | { type: "select-time"; time: string }
  | { type: "change-notes"; notes: string }
  | { type: "next" }
  | { type: "prev" }

  // 「次へ」を押せるか（条件は、あとで追加する）
export function canGoNext(state: BookingState): boolean {
  return state.step <= TOTAL_STEPS
}

// Renderer関数
function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    // スイッチ文
    // MenuIDを選択して状態に反映する
    case "select-menu":
      return { ...state, menuId: action.menuId }
    // StaffIDを選択して状態に反映する
    case "select-staff":
      return { ...state, staffId: action.staffId }
    // Dateを選択して状態に反映する
    case "select-date":
      return { ...state, date: action.date }
    // Timeを選択して状態に反映する
    case "select-time":
      return { ...state, time: action.time }
    // Notesを変更して状態に反映する
    case "change-notes":
      return { ...state, notes: action.notes }
    case "next":
      if (!canGoNext(state)) return state
      return { ...state, step: Math.min(state.step + 1, TOTAL_STEPS) }
    case "prev":
      return { ...state, step: Math.max(state.step - 1, 1) }
  }
}