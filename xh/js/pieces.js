/**
 * pieces.js
 * Định nghĩa hình học chuẩn của 7 mảnh Tangram.
 *
 * Tất cả mảnh vẽ trên hệ tọa độ LOCAL (origin = center).
 * Kích thước đơn vị = 100px.
 *
 * Tangram chuẩn (tổng = 1 hình vuông 4 đơn vị):
 *  LT1, LT2 : tam giác vuông cân cạnh 2 (hypotenuse = 2√2)
 *  MT        : tam giác vuông cân cạnh 1 (medium)
 *  ST1, ST2  : tam giác vuông cân cạnh 1 (small)
 *  SQ        : hình vuông cạnh 1
 *  PA        : hình bình hành
 */

export const PIECE_DEFS = {
  LT1: {
    label: "Tam giác lớn 1",
    color: "#FFB3BA",
    stroke: "#FF8A94",
    // Tam giác vuông cân, cạnh góc vuông = 200px
    // Đặt origin tại trọng tâm
    points: "-100,-66.7  100,-66.7  0,133.3",
    width: 200, height: 200,
    cx: 0, cy: 0
  },
  LT2: {
    label: "Tam giác lớn 2",
    color: "#FFDFBA",
    stroke: "#FFB870",
    points: "-100,-66.7  100,-66.7  0,133.3",
    width: 200, height: 200,
    cx: 0, cy: 0
  },
  MT: {
    label: "Tam giác vừa",
    color: "#FFF0BA",
    stroke: "#FFD060",
    // Tam giác vuông cân cạnh góc vuông = 141px (= 100√2)
    points: "-70.7,-47.1  70.7,-47.1  0,94.3",
    width: 141, height: 141,
    cx: 0, cy: 0
  },
  ST1: {
    label: "Tam giác nhỏ 1",
    color: "#BAFFC9",
    stroke: "#60D890",
    // Tam giác vuông cân cạnh góc vuông = 100px
    points: "-50,-33.3  50,-33.3  0,66.7",
    width: 100, height: 100,
    cx: 0, cy: 0
  },
  ST2: {
    label: "Tam giác nhỏ 2",
    color: "#BAE1FF",
    stroke: "#60B8FF",
    points: "-50,-33.3  50,-33.3  0,66.7",
    width: 100, height: 100,
    cx: 0, cy: 0
  },
  SQ: {
    label: "Hình vuông",
    color: "#D0BAFF",
    stroke: "#A880FF",
    // Hình vuông xoay 45° cạnh = 100px
    // Vẽ như hình thoi để trực quan hơn:
    points: "0,-70.7  70.7,0  0,70.7  -70.7,0",
    width: 141, height: 141,
    cx: 0, cy: 0
  },
  PA: {
    label: "Hình bình hành",
    color: "#FFBAE1",
    stroke: "#FF80C0",
    // Bình hành: width=200, height=100, nghiêng 45°
    points: "0,-50  100,-50  0,50  -100,50",
    width: 200, height: 100,
    cx: 0, cy: 0
  }
};

/** Màu mảnh đã snap */
export const SNAP_TINT = "rgba(255,255,255,0.3)";
