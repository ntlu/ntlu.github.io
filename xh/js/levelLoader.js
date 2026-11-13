/**
 * levelLoader.js
 * Tải dữ liệu level từ JSON hoặc fallback nội bộ.
 *
 * MỖI piece trong level JSON cần:
 *  - pieceId:   ID của mảnh (LT1, LT2, MT, ST1, ST2, SQ, PA)
 *  - targetX:   X đích trong SVG viewBox 600×600 của board
 *  - targetY:   Y đích trong SVG viewBox 600×600 của board
 *  - rotation:  Góc đích (degrees)
 */

// Dữ liệu tọa độ thực tế Tangram chuẩn (viewBox 600×600)
// Dùng khi fetch JSON thất bại (file://)
const FALLBACK_LEVELS = {
  "easy/house": {
    id: "house_01", name: "Ngôi nhà",
    difficulty: 1, icon: "🏠",
    outline: "assets/outlines/house.svg",
    pieces: [
      // Mái nhà: 2 tam giác lớn úp vào nhau
      { pieceId: "LT1", targetX: 200, targetY: 100, rotation: 0   },
      { pieceId: "LT2", targetX: 400, targetY: 100, rotation: 180 },
      // Thân nhà: hình vuông + tam giác vừa
      { pieceId: "MT",  targetX: 200, targetY: 300, rotation: 270 },
      { pieceId: "SQ",  targetX: 350, targetY: 350, rotation: 45  },
      // Cửa / chi tiết: 2 tam giác nhỏ + bình hành
      { pieceId: "ST1", targetX: 150, targetY: 450, rotation: 0   },
      { pieceId: "ST2", targetX: 350, targetY: 450, rotation: 180 },
      { pieceId: "PA",  targetX: 250, targetY: 480, rotation: 0   }
    ]
  },
  "easy/boat": {
    id: "boat_01", name: "Con thuyền",
    difficulty: 1, icon: "⛵",
    outline: "assets/outlines/boat.svg",
    pieces: [
      { pieceId: "LT1", targetX: 150, targetY: 200, rotation: 90  },
      { pieceId: "LT2", targetX: 400, targetY: 200, rotation: 270 },
      { pieceId: "MT",  targetX: 300, targetY: 120, rotation: 180 },
      { pieceId: "ST1", targetX: 160, targetY: 380, rotation: 0   },
      { pieceId: "ST2", targetX: 440, targetY: 380, rotation: 0   },
      { pieceId: "SQ",  targetX: 300, targetY: 380, rotation: 0   },
      { pieceId: "PA",  targetX: 300, targetY: 460, rotation: 0   }
    ]
  },
  "easy/cat": {
    id: "cat_01", name: "Chú mèo",
    difficulty: 1, icon: "🐱",
    outline: "assets/outlines/cat.svg",
    pieces: [
      { pieceId: "LT1", targetX: 200, targetY: 160, rotation: 0   },
      { pieceId: "LT2", targetX: 400, targetY: 160, rotation: 0   },
      { pieceId: "MT",  targetX: 300, targetY: 280, rotation: 90  },
      { pieceId: "ST1", targetX: 160, targetY: 380, rotation: 45  },
      { pieceId: "ST2", targetX: 440, targetY: 380, rotation: 315 },
      { pieceId: "SQ",  targetX: 300, targetY: 400, rotation: 0   },
      { pieceId: "PA",  targetX: 300, targetY: 460, rotation: 180 }
    ]
  }
};

export class LevelLoader {
  static getAvailableLevels() {
    return [
      { path: "easy/house", id: "house_01", name: "Ngôi nhà", icon: "🏠" },
      { path: "easy/boat",  id: "boat_01",  name: "Con thuyền", icon: "⛵" },
      { path: "easy/cat",   id: "cat_01",   name: "Chú mèo",  icon: "🐱" }
    ];
  }

  static async loadLevel(path) {
    try {
      const resp = await fetch(`levels/${path}.json`);
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      return await resp.json();
    } catch (e) {
      console.warn(`[LevelLoader] Dùng fallback cho "${path}":`, e.message);
      const data = FALLBACK_LEVELS[path];
      if (!data) throw new Error("Không tìm thấy level: " + path);
      return data;
    }
  }
}
