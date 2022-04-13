/**
 * 菜单配置
 */
const menus = [
  {
    text: "css动画",
    icon: "el-icon-document",
    route: {
      name: "cssAnimation"
    },
    children: [
      {
        text: "旋转的正方体",
        icon: "",
        route: {
          name: "cssRotateCube",
          path: "cssRotateCube"
        }
      },
      {
        text: "翻书效果",
        icon: "",
        route: {
          name: "cssTurnBook",
          path: "cssTurnBook"
        }
      }
    ]
  },
  {
    text: "canvas动画",
    icon: "el-icon-document",
    route: {
      name: "canvasAnimation"
    },
    children: [
      {
        text: "少女心满满的背景墙",
        icon: "",
        route: {
          name: "canvasBg",
          path: "canvasBg"
        }
      },
      {
        text: "时钟",
        icon: "",
        route: {
          name: "canvasClock",
          path: "canvasClock"
        }
      }
    ]
  }
];

export default menus;
